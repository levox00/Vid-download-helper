var tl = Object.create;
var Zr = Object.defineProperty;
var rl = Object.getOwnPropertyDescriptor;
var nl = Object.getOwnPropertyNames;
var ol = Object.getPrototypeOf,
  il = Object.prototype.hasOwnProperty;
var al = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
  pe = (e, r) => {
    for (var o in r) Zr(e, o, { get: r[o], enumerable: !0 });
  },
  sl = (e, r, o, i) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let t of nl(r))
        !il.call(e, t) &&
          t !== o &&
          Zr(e, t, {
            get: () => r[t],
            enumerable: !(i = rl(r, t)) || i.enumerable,
          });
    return e;
  };
var It = (e, r, o) => (
  (o = e != null ? tl(ol(e)) : {}),
  sl(
    r || !e || !e.__esModule
      ? Zr(o, "default", { value: e, enumerable: !0 })
      : o,
    e,
  )
);
var Me = al((Rr, La) => {
  (function (e, r) {
    if (typeof define == "function" && define.amd)
      define("webextension-polyfill", ["module"], r);
    else if (typeof Rr < "u") r(La);
    else {
      var o = { exports: {} };
      (r(o), (e.browser = o.exports));
    }
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Rr,
    function (e) {
      "use strict";
      if (
        !(
          globalThis.chrome &&
          globalThis.chrome.runtime &&
          globalThis.chrome.runtime.id
        )
      )
        throw new Error(
          "This script should only be loaded in a browser extension.",
        );
      if (
        globalThis.browser &&
        globalThis.browser.runtime &&
        globalThis.browser.runtime.id
      )
        e.exports = globalThis.browser;
      else {
        let r = "The message port closed before a response was received.",
          o = (i) => {
            let t = {
              alarms: {
                clear: { minArgs: 0, maxArgs: 1 },
                clearAll: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
              },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 },
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: {
                remove: { minArgs: 1, maxArgs: 1 },
                removeAll: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              cookies: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 1, maxArgs: 1 },
                getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
              devtools: {
                inspectedWindow: {
                  eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                },
                panels: {
                  create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                  elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                },
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              extension: {
                isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
              },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
              },
              i18n: {
                detectLanguage: { minArgs: 1, maxArgs: 1 },
                getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
              },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getSelf: { minArgs: 0, maxArgs: 0 },
                setEnabled: { minArgs: 2, maxArgs: 2 },
                uninstallSelf: { minArgs: 0, maxArgs: 1 },
              },
              notifications: {
                clear: { minArgs: 1, maxArgs: 1 },
                create: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              permissions: {
                contains: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                request: { minArgs: 1, maxArgs: 1 },
              },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 },
              },
              sessions: {
                getDevices: { minArgs: 0, maxArgs: 1 },
                getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                restore: { minArgs: 0, maxArgs: 1 },
              },
              storage: {
                local: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                managed: {
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                },
                sync: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 },
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: {
                getAllFrames: { minArgs: 1, maxArgs: 1 },
                getFrame: { minArgs: 1, maxArgs: 1 },
              },
              webRequest: {
                handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
              },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
            };
            if (Object.keys(t).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill",
              );
            class n extends WeakMap {
              constructor($, D = void 0) {
                (super(D), (this.createItem = $));
              }
              get($) {
                return (
                  this.has($) || this.set($, this.createItem($)),
                  super.get($)
                );
              }
            }
            let a = (w) =>
                w && typeof w == "object" && typeof w.then == "function",
              s =
                (w, $) =>
                (...D) => {
                  i.runtime.lastError
                    ? w.reject(new Error(i.runtime.lastError.message))
                    : $.singleCallbackArg ||
                        (D.length <= 1 && $.singleCallbackArg !== !1)
                      ? w.resolve(D[0])
                      : w.resolve(D);
                },
              l = (w) => (w == 1 ? "argument" : "arguments"),
              u = (w, $) =>
                function (O, ...R) {
                  if (R.length < $.minArgs)
                    throw new Error(
                      `Expected at least ${$.minArgs} ${l($.minArgs)} for ${w}(), got ${R.length}`,
                    );
                  if (R.length > $.maxArgs)
                    throw new Error(
                      `Expected at most ${$.maxArgs} ${l($.maxArgs)} for ${w}(), got ${R.length}`,
                    );
                  return new Promise((F, K) => {
                    if ($.fallbackToNoCallback)
                      try {
                        O[w](...R, s({ resolve: F, reject: K }, $));
                      } catch (A) {
                        (console.warn(
                          `${w} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          A,
                        ),
                          O[w](...R),
                          ($.fallbackToNoCallback = !1),
                          ($.noCallback = !0),
                          F());
                      }
                    else
                      $.noCallback
                        ? (O[w](...R), F())
                        : O[w](...R, s({ resolve: F, reject: K }, $));
                  });
                },
              m = (w, $, D) =>
                new Proxy($, {
                  apply(O, R, F) {
                    return D.call(R, w, ...F);
                  },
                }),
              p = Function.call.bind(Object.prototype.hasOwnProperty),
              g = (w, $ = {}, D = {}) => {
                let O = Object.create(null),
                  R = {
                    has(K, A) {
                      return A in w || A in O;
                    },
                    get(K, A, Y) {
                      if (A in O) return O[A];
                      if (!(A in w)) return;
                      let C = w[A];
                      if (typeof C == "function")
                        if (typeof $[A] == "function") C = m(w, w[A], $[A]);
                        else if (p(D, A)) {
                          let $e = u(A, D[A]);
                          C = m(w, w[A], $e);
                        } else C = C.bind(w);
                      else if (
                        typeof C == "object" &&
                        C !== null &&
                        (p($, A) || p(D, A))
                      )
                        C = g(C, $[A], D[A]);
                      else if (p(D, "*")) C = g(C, $[A], D["*"]);
                      else
                        return (
                          Object.defineProperty(O, A, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return w[A];
                            },
                            set($e) {
                              w[A] = $e;
                            },
                          }),
                          C
                        );
                      return ((O[A] = C), C);
                    },
                    set(K, A, Y, C) {
                      return (A in O ? (O[A] = Y) : (w[A] = Y), !0);
                    },
                    defineProperty(K, A, Y) {
                      return Reflect.defineProperty(O, A, Y);
                    },
                    deleteProperty(K, A) {
                      return Reflect.deleteProperty(O, A);
                    },
                  },
                  F = Object.create(w);
                return new Proxy(F, R);
              },
              d = (w) => ({
                addListener($, D, ...O) {
                  $.addListener(w.get(D), ...O);
                },
                hasListener($, D) {
                  return $.hasListener(w.get(D));
                },
                removeListener($, D) {
                  $.removeListener(w.get(D));
                },
              }),
              v = new n((w) =>
                typeof w != "function"
                  ? w
                  : function (D) {
                      let O = g(
                        D,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } },
                      );
                      w(O);
                    },
              ),
              x = new n((w) =>
                typeof w != "function"
                  ? w
                  : function (D, O, R) {
                      let F = !1,
                        K,
                        A = new Promise((Re) => {
                          K = function (Q) {
                            ((F = !0), Re(Q));
                          };
                        }),
                        Y;
                      try {
                        Y = w(D, O, K);
                      } catch (Re) {
                        Y = Promise.reject(Re);
                      }
                      let C = Y !== !0 && a(Y);
                      if (Y !== !0 && !C && !F) return !1;
                      let $e = (Re) => {
                        Re.then(
                          (Q) => {
                            R(Q);
                          },
                          (Q) => {
                            let Ur;
                            (Q &&
                            (Q instanceof Error || typeof Q.message == "string")
                              ? (Ur = Q.message)
                              : (Ur = "An unexpected error occurred"),
                              R({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: Ur,
                              }));
                          },
                        ).catch((Q) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            Q,
                          );
                        });
                      };
                      return ($e(C ? Y : A), !0);
                    },
              ),
              P = ({ reject: w, resolve: $ }, D) => {
                i.runtime.lastError
                  ? i.runtime.lastError.message === r
                    ? $()
                    : w(new Error(i.runtime.lastError.message))
                  : D && D.__mozWebExtensionPolyfillReject__
                    ? w(new Error(D.message))
                    : $(D);
              },
              j = (w, $, D, ...O) => {
                if (O.length < $.minArgs)
                  throw new Error(
                    `Expected at least ${$.minArgs} ${l($.minArgs)} for ${w}(), got ${O.length}`,
                  );
                if (O.length > $.maxArgs)
                  throw new Error(
                    `Expected at most ${$.maxArgs} ${l($.maxArgs)} for ${w}(), got ${O.length}`,
                  );
                return new Promise((R, F) => {
                  let K = P.bind(null, { resolve: R, reject: F });
                  (O.push(K), D.sendMessage(...O));
                });
              },
              I = {
                devtools: { network: { onRequestFinished: d(v) } },
                runtime: {
                  onMessage: d(x),
                  onMessageExternal: d(x),
                  sendMessage: j.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: j.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              S = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (t.privacy = {
                network: { "*": S },
                services: { "*": S },
                websites: { "*": S },
              }),
              g(i, I, t)
            );
          };
        e.exports = o(chrome);
      }
    },
  );
});
var Er = It(Me(), 1);
function ce(e) {
  var r = String(e);
  if (r === "[object Object]")
    try {
      r = JSON.stringify(e);
    } catch {}
  return r;
}
var ul = (function () {
    function e() {}
    return (
      (e.prototype.isSome = function () {
        return !1;
      }),
      (e.prototype.isNone = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.unwrapOr = function (r) {
        return r;
      }),
      (e.prototype.expect = function (r) {
        throw new Error("".concat(r));
      }),
      (e.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
      }),
      (e.prototype.map = function (r) {
        return this;
      }),
      (e.prototype.mapOr = function (r, o) {
        return r;
      }),
      (e.prototype.mapOrElse = function (r, o) {
        return r();
      }),
      (e.prototype.or = function (r) {
        return r;
      }),
      (e.prototype.orElse = function (r) {
        return r();
      }),
      (e.prototype.andThen = function (r) {
        return this;
      }),
      (e.prototype.toResult = function (r) {
        return L(r);
      }),
      (e.prototype.toString = function () {
        return "None";
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ce(X);
      }),
      e
    );
  })(),
  X = new ul();
Object.freeze(X);
var ll = (function () {
    function e(r) {
      if (!(this instanceof e)) return new e(r);
      this.value = r;
    }
    return (
      (e.prototype.isSome = function () {
        return !0;
      }),
      (e.prototype.isNone = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (e.prototype.expect = function (r) {
        return this.value;
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.map = function (r) {
        return J(r(this.value));
      }),
      (e.prototype.mapOr = function (r, o) {
        return o(this.value);
      }),
      (e.prototype.mapOrElse = function (r, o) {
        return o(this.value);
      }),
      (e.prototype.or = function (r) {
        return this;
      }),
      (e.prototype.orElse = function (r) {
        return this;
      }),
      (e.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (e.prototype.toResult = function (r) {
        return H(this.value);
      }),
      (e.prototype.toAsyncOption = function () {
        return new Ce(this);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Some(".concat(ce(this.value), ")");
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })(),
  J = ll,
  Mr;
(function (e) {
  function r() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var a = [], s = 0, l = t; s < l.length; s++) {
      var u = l[s];
      if (u.isSome()) a.push(u.value);
      else return u;
    }
    return J(a);
  }
  e.all = r;
  function o() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var a = 0, s = t; a < s.length; a++) {
      var l = s[a];
      if (l.isSome()) return l;
    }
    return X;
  }
  e.any = o;
  function i(t) {
    return t instanceof J || t === X;
  }
  e.isOption = i;
})(Mr || (Mr = {}));
var ke = function (e, r, o) {
    if (o || arguments.length === 2)
      for (var i = 0, t = r.length, n; i < t; i++)
        (n || !(i in r)) &&
          (n || (n = Array.prototype.slice.call(r, 0, i)), (n[i] = r[i]));
    return e.concat(n || Array.prototype.slice.call(r));
  },
  cl = (function () {
    function e(r) {
      if (!(this instanceof e)) return new e(r);
      this.error = r;
      var o = new Error().stack
        .split(
          `
`,
        )
        .slice(2);
      (o && o.length > 0 && o[0].includes("ErrImpl") && o.shift(),
        (this._stack = o.join(`
`)));
    }
    return (
      (e.prototype.isOk = function () {
        return !1;
      }),
      (e.prototype.isErr = function () {
        return !0;
      }),
      (e.prototype[Symbol.iterator] = function () {
        return {
          next: function () {
            return { done: !0, value: void 0 };
          },
        };
      }),
      (e.prototype.else = function (r) {
        return r;
      }),
      (e.prototype.unwrapOr = function (r) {
        return r;
      }),
      (e.prototype.expect = function (r) {
        throw new Error(
          ""
            .concat(r, " - Error: ")
            .concat(
              ce(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.expectErr = function (r) {
        return this.error;
      }),
      (e.prototype.unwrap = function () {
        throw new Error(
          "Tried to unwrap Error: "
            .concat(
              ce(this.error),
              `
`,
            )
            .concat(this._stack),
          { cause: this.error },
        );
      }),
      (e.prototype.unwrapErr = function () {
        return this.error;
      }),
      (e.prototype.map = function (r) {
        return this;
      }),
      (e.prototype.andThen = function (r) {
        return this;
      }),
      (e.prototype.mapErr = function (r) {
        return new L(r(this.error));
      }),
      (e.prototype.mapOr = function (r, o) {
        return r;
      }),
      (e.prototype.mapOrElse = function (r, o) {
        return r(this.error);
      }),
      (e.prototype.or = function (r) {
        return r;
      }),
      (e.prototype.orElse = function (r) {
        return r(this.error);
      }),
      (e.prototype.toOption = function () {
        return X;
      }),
      (e.prototype.toString = function () {
        return "Err(".concat(ce(this.error), ")");
      }),
      Object.defineProperty(e.prototype, "stack", {
        get: function () {
          return ""
            .concat(
              this,
              `
`,
            )
            .concat(this._stack);
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.toAsyncResult = function () {
        return new Le(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var L = cl,
  dl = (function () {
    function e(r) {
      if (!(this instanceof e)) return new e(r);
      this.value = r;
    }
    return (
      (e.prototype.isOk = function () {
        return !0;
      }),
      (e.prototype.isErr = function () {
        return !1;
      }),
      (e.prototype[Symbol.iterator] = function () {
        var r = Object(this.value);
        return Symbol.iterator in r
          ? r[Symbol.iterator]()
          : {
              next: function () {
                return { done: !0, value: void 0 };
              },
            };
      }),
      (e.prototype.else = function (r) {
        return this.value;
      }),
      (e.prototype.unwrapOr = function (r) {
        return this.value;
      }),
      (e.prototype.expect = function (r) {
        return this.value;
      }),
      (e.prototype.expectErr = function (r) {
        throw new Error(r);
      }),
      (e.prototype.unwrap = function () {
        return this.value;
      }),
      (e.prototype.unwrapErr = function () {
        throw new Error("Tried to unwrap Ok: ".concat(ce(this.value)), {
          cause: this.value,
        });
      }),
      (e.prototype.map = function (r) {
        return new H(r(this.value));
      }),
      (e.prototype.andThen = function (r) {
        return r(this.value);
      }),
      (e.prototype.mapErr = function (r) {
        return this;
      }),
      (e.prototype.mapOr = function (r, o) {
        return o(this.value);
      }),
      (e.prototype.mapOrElse = function (r, o) {
        return o(this.value);
      }),
      (e.prototype.or = function (r) {
        return this;
      }),
      (e.prototype.orElse = function (r) {
        return this;
      }),
      (e.prototype.toOption = function () {
        return J(this.value);
      }),
      (e.prototype.safeUnwrap = function () {
        return this.value;
      }),
      (e.prototype.toString = function () {
        return "Ok(".concat(ce(this.value), ")");
      }),
      (e.prototype.toAsyncResult = function () {
        return new Le(this);
      }),
      (e.EMPTY = new e(void 0)),
      e
    );
  })();
var H = dl,
  Cr;
(function (e) {
  function r(s) {
    for (var l = [], u = 1; u < arguments.length; u++) l[u - 1] = arguments[u];
    for (
      var m = s === void 0 ? [] : Array.isArray(s) ? s : ke([s], l, !0),
        p = [],
        g = 0,
        d = m;
      g < d.length;
      g++
    ) {
      var v = d[g];
      if (v.isOk()) p.push(v.value);
      else return v;
    }
    return new H(p);
  }
  e.all = r;
  function o(s) {
    for (var l = [], u = 1; u < arguments.length; u++) l[u - 1] = arguments[u];
    for (
      var m = s === void 0 ? [] : Array.isArray(s) ? s : ke([s], l, !0),
        p = [],
        g = 0,
        d = m;
      g < d.length;
      g++
    ) {
      var v = d[g];
      if (v.isOk()) return v;
      p.push(v.error);
    }
    return new L(p);
  }
  e.any = o;
  function i(s) {
    try {
      return new H(s());
    } catch (l) {
      return new L(l);
    }
  }
  e.wrap = i;
  function t(s) {
    try {
      return s()
        .then(function (l) {
          return new H(l);
        })
        .catch(function (l) {
          return new L(l);
        });
    } catch (l) {
      return Promise.resolve(new L(l));
    }
  }
  e.wrapAsync = t;
  function n(s) {
    return s.reduce(
      function (l, u) {
        var m = l[0],
          p = l[1];
        return u.isOk()
          ? [ke(ke([], m, !0), [u.value], !1), p]
          : [m, ke(ke([], p, !0), [u.error], !1)];
      },
      [[], []],
    );
  }
  e.partition = n;
  function a(s) {
    return s instanceof L || s instanceof H;
  }
  e.isResult = a;
})(Cr || (Cr = {}));
var Dt = function (e, r, o, i) {
    function t(n) {
      return n instanceof o
        ? n
        : new o(function (a) {
            a(n);
          });
    }
    return new (o || (o = Promise))(function (n, a) {
      function s(m) {
        try {
          u(i.next(m));
        } catch (p) {
          a(p);
        }
      }
      function l(m) {
        try {
          u(i.throw(m));
        } catch (p) {
          a(p);
        }
      }
      function u(m) {
        m.done ? n(m.value) : t(m.value).then(s, l);
      }
      u((i = i.apply(e, r || [])).next());
    });
  },
  At = function (e, r) {
    var o = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      },
      i,
      t,
      n,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(u) {
      return function (m) {
        return l([u, m]);
      };
    }
    function l(u) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), u[0] && (o = 0)), o; )
        try {
          if (
            ((i = 1),
            t &&
              (n =
                u[0] & 2
                  ? t.return
                  : u[0]
                    ? t.throw || ((n = t.return) && n.call(t), 0)
                    : t.next) &&
              !(n = n.call(t, u[1])).done)
          )
            return n;
          switch (((t = 0), n && (u = [u[0] & 2, n.value]), u[0])) {
            case 0:
            case 1:
              n = u;
              break;
            case 4:
              return (o.label++, { value: u[1], done: !1 });
            case 5:
              (o.label++, (t = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = o.ops.pop()), o.trys.pop());
              continue;
            default:
              if (
                ((n = o.trys),
                !(n = n.length > 0 && n[n.length - 1]) &&
                  (u[0] === 6 || u[0] === 2))
              ) {
                o = 0;
                continue;
              }
              if (u[0] === 3 && (!n || (u[1] > n[0] && u[1] < n[3]))) {
                o.label = u[1];
                break;
              }
              if (u[0] === 6 && o.label < n[1]) {
                ((o.label = n[1]), (n = u));
                break;
              }
              if (n && o.label < n[2]) {
                ((o.label = n[2]), o.ops.push(u));
                break;
              }
              (n[2] && o.ops.pop(), o.trys.pop());
              continue;
          }
          u = r.call(e, o);
        } catch (m) {
          ((u = [6, m]), (t = 0));
        } finally {
          i = n = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Le = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Dt(o, void 0, void 0, function () {
            var t;
            return At(this, function (n) {
              return i.isErr()
                ? [2, i]
                : ((t = r(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Dt(o, void 0, void 0, function () {
            var t;
            return At(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isErr() ? [2, i] : ((t = H), [4, r(i.value)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.mapErr = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Dt(o, void 0, void 0, function () {
            var t;
            return At(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isOk() ? [2, i] : ((t = L), [4, r(i.error)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (e.prototype.orElse = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Dt(o, void 0, void 0, function () {
            var t;
            return At(this, function (n) {
              return i.isOk()
                ? [2, i]
                : ((t = r(i.error)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toOption = function () {
        return new Ce(
          this.promise.then(function (r) {
            return r.toOption();
          }),
        );
      }),
      (e.prototype.thenInternal = function (r) {
        return new e(this.promise.then(r));
      }),
      e
    );
  })();
var Lr = function (e, r, o, i) {
    function t(n) {
      return n instanceof o
        ? n
        : new o(function (a) {
            a(n);
          });
    }
    return new (o || (o = Promise))(function (n, a) {
      function s(m) {
        try {
          u(i.next(m));
        } catch (p) {
          a(p);
        }
      }
      function l(m) {
        try {
          u(i.throw(m));
        } catch (p) {
          a(p);
        }
      }
      function u(m) {
        m.done ? n(m.value) : t(m.value).then(s, l);
      }
      u((i = i.apply(e, r || [])).next());
    });
  },
  Vr = function (e, r) {
    var o = {
        label: 0,
        sent: function () {
          if (n[0] & 1) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      },
      i,
      t,
      n,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(u) {
      return function (m) {
        return l([u, m]);
      };
    }
    function l(u) {
      if (i) throw new TypeError("Generator is already executing.");
      for (; a && ((a = 0), u[0] && (o = 0)), o; )
        try {
          if (
            ((i = 1),
            t &&
              (n =
                u[0] & 2
                  ? t.return
                  : u[0]
                    ? t.throw || ((n = t.return) && n.call(t), 0)
                    : t.next) &&
              !(n = n.call(t, u[1])).done)
          )
            return n;
          switch (((t = 0), n && (u = [u[0] & 2, n.value]), u[0])) {
            case 0:
            case 1:
              n = u;
              break;
            case 4:
              return (o.label++, { value: u[1], done: !1 });
            case 5:
              (o.label++, (t = u[1]), (u = [0]));
              continue;
            case 7:
              ((u = o.ops.pop()), o.trys.pop());
              continue;
            default:
              if (
                ((n = o.trys),
                !(n = n.length > 0 && n[n.length - 1]) &&
                  (u[0] === 6 || u[0] === 2))
              ) {
                o = 0;
                continue;
              }
              if (u[0] === 3 && (!n || (u[1] > n[0] && u[1] < n[3]))) {
                o.label = u[1];
                break;
              }
              if (u[0] === 6 && o.label < n[1]) {
                ((o.label = n[1]), (n = u));
                break;
              }
              if (n && o.label < n[2]) {
                ((o.label = n[2]), o.ops.push(u));
                break;
              }
              (n[2] && o.ops.pop(), o.trys.pop());
              continue;
          }
          u = r.call(e, o);
        } catch (m) {
          ((u = [6, m]), (t = 0));
        } finally {
          i = n = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Ce = (function () {
    function e(r) {
      this.promise = Promise.resolve(r);
    }
    return (
      (e.prototype.andThen = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Lr(o, void 0, void 0, function () {
            var t;
            return Vr(this, function (n) {
              return i.isNone()
                ? [2, i]
                : ((t = r(i.value)), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.map = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Lr(o, void 0, void 0, function () {
            var t;
            return Vr(this, function (n) {
              switch (n.label) {
                case 0:
                  return i.isNone() ? [2, i] : ((t = J), [4, r(i.value)]);
                case 1:
                  return [2, t.apply(void 0, [n.sent()])];
              }
            });
          });
        });
      }),
      (e.prototype.or = function (r) {
        return this.orElse(function () {
          return r;
        });
      }),
      (e.prototype.orElse = function (r) {
        var o = this;
        return this.thenInternal(function (i) {
          return Lr(o, void 0, void 0, function () {
            var t;
            return Vr(this, function (n) {
              return i.isSome()
                ? [2, i]
                : ((t = r()), [2, t instanceof e ? t.promise : t]);
            });
          });
        });
      }),
      (e.prototype.toResult = function (r) {
        return new Le(
          this.promise.then(function (o) {
            return o.toResult(r);
          }),
        );
      }),
      (e.prototype.thenInternal = function (r) {
        return new e(this.promise.then(r));
      }),
      e
    );
  })();
var ze = {
    ar: {
      addon: {
        appDesc:
          "\u062A\u062D\u0645\u064A\u0644 \u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0645\u0646 \u0627\u0644\u0648\u064A\u0628.",
        restore_purchase_button:
          "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621",
        get_premium_button:
          "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0645\u0645\u064A\u0632\u0629",
        back: "\u0631\u062C\u0648\u0639",
        waiting_for_media:
          "\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0648\u0633\u0627\u0626\u0637\u2026",
        nomedia_title:
          "\u0644\u0627 \u062A\u0631\u0649 \u0627\u0644\u0648\u0633\u0627\u0626\u0637 \u0627\u0644\u062A\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647\u0627\u061F",
        nomedia_description:
          "\u0627\u0628\u062F\u0623 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 (\u0648\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0625\u0646 \u0648\u062C\u062F\u062A) \u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0648\u0633\u0627\u0626\u0637. \u0623\u0648 \u0623\u0628\u0644\u063A \u0639\u0646 \u0648\u0633\u0627\u0626\u0637 \u0645\u0641\u0642\u0648\u062F\u0629.",
        nomedia_reload_button:
          "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0643\u0634\u0641",
        nomedia_reload_button_tooltip:
          "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629 (\u0645\u0633\u062D \u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637)",
        show_nomedia_button:
          "\u0644\u0627 \u064A\u0648\u062C\u062F \u0641\u064A\u062F\u064A\u0648\u061F",
        show_nomedia_button_tooltip:
          "\u0627\u0636\u063A\u0637 \u0647\u0646\u0627 \u0625\u0630\u0627 \u0644\u0645 \u062A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0641\u064A\u062F\u064A\u0648",
        setting_button_tooltip:
          "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        history_button_tooltip:
          "\u0639\u0631\u0636 \u0633\u062C\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        show_all_history_button: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",
        complete_title: "\u0645\u0643\u062A\u0645\u0644",
        hide_complete_button: "\u0625\u062E\u0641\u0627\u0621",
        translate_button_tooltip:
          "\u0633\u0627\u0639\u062F \u0641\u064A \u062A\u0631\u062C\u0645\u0629 VDH",
        open_source_tab_button_tooltip:
          "\u0641\u062A\u062D \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u0645\u0635\u062F\u0631",
        retry_download_button_tooltip:
          "\u0625\u0639\u0627\u062F\u0629 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        delete_file_button_tooltip:
          "\u062D\u0630\u0641 \u0627\u0644\u0645\u0644\u0641",
        download_directory_button_tooltip:
          "\u0639\u0631\u0636 \u0645\u062C\u0644\u062F \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        clear_downloaded_tooltip:
          "\u0645\u0633\u062D \u0627\u0644\u062A\u062D\u0645\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629",
        show_in_popup_button_tooltip:
          "\u0639\u0631\u0636 \u0641\u064A \u0646\u0627\u0641\u0630\u0629 \u0645\u0646\u0628\u062B\u0642\u0629",
        show_in_sidebar_button_tooltip:
          "\u0639\u0631\u0636 \u0641\u064A \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u062C\u0627\u0646\u0628\u064A",
        video_not_playing_button_tooltip:
          "\u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0644\u0627 \u064A\u0639\u0645\u0644\u061F",
        play: "\u062A\u0634\u063A\u064A\u0644",
        warn_drm_tooltip:
          "\u062A\u0645 \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 DRM",
        version_title: "\u0627\u0644\u0625\u0635\u062F\u0627\u0631",
        account_title: "\u0627\u0644\u062D\u0633\u0627\u0628",
        one_hundred_downloads_title:
          "\u0644\u0642\u062F \u0642\u0645\u062A \u0628\u062A\u062D\u0645\u064A\u0644 100 \u0641\u064A\u062F\u064A\u0648!",
        leave_review_description:
          "\u0646\u0623\u0645\u0644 \u0623\u0646 \u062A\u0633\u062A\u0645\u062A\u0639 \u0628\u0640 Video DownloadHelper :) \u0647\u0644 \u062A\u0645\u0627\u0646\u0639 \u0641\u064A \u0643\u062A\u0627\u0628\u0629 \u0645\u0631\u0627\u062C\u0639\u0629 \u0644\u0637\u064A\u0641\u0629 \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u061F",
        leave_review_button:
          "\u0627\u062A\u0631\u0643 \u0645\u0631\u0627\u062C\u0639\u0629",
        account_status: "\u0627\u0644\u062D\u0627\u0644\u0629",
        account_status_premium: "\u0645\u0645\u064A\u0632 ($1)",
        free_account: "\u062E\u0637\u0629 \u0645\u062C\u0627\u0646\u064A\u0629",
        copy_to_clipboard:
          "\u0646\u0633\u062E \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0641\u0638\u0629",
        my_account_button: "\u062D\u0633\u0627\u0628\u064A",
        download_title:
          "\u0627\u0644\u062A\u062D\u0645\u064A\u0644\u0627\u062A",
        show_notification:
          "\u0625\u0638\u0647\u0627\u0631 \u0625\u0634\u0639\u0627\u0631 \u0639\u0646\u062F \u0627\u0643\u062A\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        max_parallel_downloads:
          "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u062A\u062D\u0645\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u062A\u0632\u0627\u0645\u0646\u0629",
        saveas_detected_warning:
          "\u062A\u0645 \u0627\u0643\u062A\u0634\u0627\u0641 \u0623\u0646 \u0645\u062A\u0635\u0641\u062D\u0643 \u064A\u0639\u0631\u0636 \u0646\u0627\u0641\u0630\u0629 '\u062D\u0641\u0638 \u0628\u0627\u0633\u0645' \u0628\u0639\u062F \u0627\u0643\u062A\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644. \u0646\u0648\u0635\u064A \u0628\u062A\u0639\u0637\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u062E\u064A\u0627\u0631 \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u0635\u0641\u062D.",
        change_saveas_setting:
          "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0625\u0639\u062F\u0627\u062F",
        private_browsing_title:
          "\u0627\u0644\u062A\u0635\u0641\u062D \u0627\u0644\u062E\u0627\u0635",
        private_browsing_warning:
          "Video DownloadHelper \u063A\u064A\u0631 \u0645\u0641\u0639\u0651\u0644 \u0641\u064A \u0646\u0648\u0627\u0641\u0630 \u0627\u0644\u062A\u0635\u0641\u062D \u0627\u0644\u062E\u0627\u0635/\u0627\u0644\u0645\u062A\u062E\u0641\u064A. \u062A\u062D\u062A\u0627\u062C \u0644\u062A\u0641\u0639\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u062E\u064A\u0627\u0631 \u064A\u062F\u0648\u064A\u064B\u0627 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A).",
        private_browsing_notifications:
          "\u0639\u0631\u0636 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0641\u064A \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062E\u0627\u0635",
        private_browsing_button:
          "\u062A\u063A\u064A\u064A\u0631 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0635\u0641\u062D \u0627\u0644\u062E\u0627\u0635",
        throttle_youtube:
          "\u0625\u0628\u0637\u0627\u0621 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0645\u0646 \u064A\u0648\u062A\u064A\u0648\u0628 (\u0623\u0628\u0637\u0623 \u0648\u0644\u0643\u0646 \u0623\u0642\u0644 \u0639\u0631\u0636\u0629 \u0644\u0644\u062D\u0638\u0631)",
        prefer_original_audio:
          "\u062A\u0641\u0636\u064A\u0644 \u0627\u0644\u0635\u0648\u062A \u0627\u0644\u0623\u0635\u0644\u064A",
        settings_history_title: "\u0627\u0644\u0633\u062C\u0644",
        transient_history_description:
          "\u0639\u0631\u0636 \u0627\u0644\u062A\u062D\u0645\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629 \u0641\u064A \u0627\u0644\u0644\u0648\u062D\u0629",
        history_limit:
          "\u0646\u0633\u064A\u0627\u0646 \u0633\u062C\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0628\u0639\u062F X \u064A\u0648\u0645",
        appearance_title: "\u0627\u0644\u0645\u0638\u0647\u0631",
        theme_title: "\u0627\u0644\u0633\u0645\u0629",
        theme_light: "\u0641\u0627\u062A\u062D",
        theme_dark: "\u062F\u0627\u0643\u0646",
        theme_system: "\u0627\u0644\u0646\u0638\u0627\u0645",
        popup_size_title:
          "\u062D\u062C\u0645 \u0627\u0644\u0646\u0627\u0641\u0630\u0629",
        popup_size_small: "\u0635\u063A\u064A\u0631",
        popup_size_medium: "\u0645\u062A\u0648\u0633\u0637",
        popup_size_big: "\u0643\u0628\u064A\u0631",
        panel_position_title:
          "\u0645\u0648\u0636\u0639 \u0627\u0644\u0644\u0648\u062D\u0629",
        use_popup:
          "\u0639\u0631\u0636 \u0641\u064A \u0646\u0627\u0641\u0630\u0629 \u0645\u0646\u0628\u062B\u0642\u0629",
        use_sidebar:
          "\u0639\u0631\u0636 \u0641\u064A \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u062C\u0627\u0646\u0628\u064A",
        behavior_title: "\u0627\u0644\u0633\u0644\u0648\u0643",
        controls_title:
          "\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u062D\u0643\u0645",
        show_in_context_menu:
          "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0642\u0631 \u0628\u0627\u0644\u0632\u0631 \u0627\u0644\u0623\u064A\u0645\u0646",
        restart_addon:
          "\u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",
        reset_settings:
          "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        prefer_mkv:
          "\u062A\u062D\u0645\u064A\u0644 \u0628\u0635\u064A\u063A\u0629 MKV \u0625\u0646 \u0623\u0645\u0643\u0646",
        preview_mode_title:
          "\u0645\u0639\u0627\u064A\u0646\u0629 \u0644\u0648\u0633\u0627\u0626\u0637",
        preview_mode_none: "\u0645\u0639\u0637\u0644",
        preview_mode_video:
          "\u0645\u0639\u0627\u064A\u0646\u0629 \u0641\u064A\u062F\u064A\u0648 \u0642\u0635\u064A\u0631\u0629",
        preview_mode_image: "\u0635\u0648\u0631\u0629",
        history_title:
          "\u0633\u062C\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        history_warning:
          "\u0646\u062D\u0646 \u0644\u0627 \u0646\u0633\u062C\u0644 \u0633\u062C\u0644 \u062A\u062D\u0645\u064A\u0644\u0627\u062A\u0643. \u0647\u0644 \u062A\u0631\u063A\u0628 \u0641\u064A \u0623\u0646 \u064A\u062D\u062A\u0641\u0638 Video DownloadHelper \u0628\u0633\u062C\u0644 \u062A\u062D\u0645\u064A\u0644\u0627\u062A\u0643\u061F",
        history_warning_2:
          "\u0644\u0627 \u062A\u0642\u0644\u0642\u060C \u0643\u0644 \u0634\u064A\u0621 \u064A\u0628\u0642\u0649 \u0639\u0644\u0649 \u062C\u0647\u0627\u0632\u0643. \u0646\u062D\u0646 \u0646\u062D\u062A\u0631\u0645 \u062E\u0635\u0648\u0635\u064A\u062A\u0643.",
        enable_history:
          "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0633\u062C\u0644",
        clear_history: "\u0645\u0633\u062D \u0627\u0644\u0633\u062C\u0644",
        disable_history:
          "\u0639\u062F\u0645 \u062D\u0641\u0638 \u0627\u0644\u0633\u062C\u0644",
        no_downloads_yet:
          "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u062D\u0645\u064A\u0644\u0627\u062A \u0628\u0639\u062F.",
        download_failed:
          "\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        download_failed_description:
          "\u0644\u0644\u0623\u0633\u0641\u060C \u0644\u0645 \u0646\u062A\u0645\u0643\u0646 \u0645\u0646 \u062A\u062D\u0645\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0648\u0633\u064A\u0637. \u0646\u062D\u0646 \u0646\u062D\u0627\u0648\u0644 \u062F\u0639\u0645 \u0623\u0643\u0628\u0631 \u0639\u062F\u062F \u0645\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060C \u0644\u0630\u0627 \u0633\u064A\u0643\u0648\u0646 \u0645\u0646 \u0627\u0644\u0645\u0641\u064A\u062F \u0627\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u062E\u0637\u0623 (\u0628\u0634\u0643\u0644 \u0645\u062C\u0647\u0648\u0644).",
        download_interrupted:
          "\u062A\u0645 \u0642\u0637\u0639 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        download_interrupted_description:
          "\u062A\u0645 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u062C\u0632\u0626\u064A\u064B\u0627 \u0628\u0633\u0628\u0628 \u0645\u0634\u0627\u0643\u0644 \u0641\u064A \u0627\u0644\u0634\u0628\u0643\u0629. \u0642\u062F \u064A\u0643\u0648\u0646 \u0623\u0642\u0635\u0631 \u0645\u0646 \u0627\u0644\u0645\u062A\u0648\u0642\u0639. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 (\u0628\u0634\u0643\u0644 \u0645\u062C\u0647\u0648\u0644).",
        download_with_drm_failed_description:
          "\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627. \u0648\u0646\u0639\u062A\u0642\u062F \u0623\u0646 \u0647\u0630\u0627 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 DRM. \u0646\u062D\u0646 \u0644\u0627 \u0646\u062F\u0639\u0645 \u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0644\u0645\u062D\u0645\u064A\u0629 \u0628\u0640 DRM.",
        no_youtube:
          "\u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0645\u0646 \u064A\u0648\u062A\u064A\u0648\u0628 \u063A\u064A\u0631 \u0645\u0633\u0645\u0648\u062D",
        no_youtube_description:
          "\u0644\u0633\u0648\u0621 \u0627\u0644\u062D\u0638\u060C \u0645\u062A\u062C\u0631 Chrome Web Store \u0644\u0627 \u064A\u0633\u0645\u062D \u0628\u0625\u0636\u0627\u0641\u0627\u062A \u0644\u062A\u062D\u0645\u064A\u0644 \u0645\u0642\u0627\u0637\u0639 YouTube\u060C \u0644\u0630\u0644\u0643 \u0644\u0645 \u0646\u062A\u0645\u0643\u0646 \u0645\u0646 \u062A\u0636\u0645\u064A\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u064A\u0632\u0629 \u0641\u064A \u0646\u0633\u062E\u0629 Chrome.",
        no_youtube_description_2:
          "\u064A\u0631\u062C\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 Firefox \u0623\u0648 Microsoft Edge.",
        premium_required:
          "\u064A\u062A\u0637\u0644\u0628 \u062D\u0633\u0627\u0628 \u0645\u0645\u064A\u0632",
        premium_yt_required_description:
          "\u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0645\u064A\u0632\u060C \u064A\u0645\u0643\u0646 \u062A\u062D\u0645\u064A\u0644 \u0641\u064A\u062F\u064A\u0648 YouTube \u0648\u0627\u062D\u062F \u0641\u0642\u0637 \u0643\u0644 \u0633\u0627\u0639\u062A\u064A\u0646.",
        premium_hls_required_description:
          "\u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0645\u064A\u0632\u060C \u064A\u0645\u0643\u0646 \u062A\u062D\u0645\u064A\u0644 \u0641\u064A\u062F\u064A\u0648 HLS \u0623\u0648 MPD \u0648\u0627\u062D\u062F \u0641\u0642\u0637 \u0643\u0644 \u0633\u0627\u0639\u062A\u064A\u0646.",
        youtube_too_many_downloads:
          "\u064A\u0628\u062F\u0648 \u0623\u0646 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0645\u0646 \u064A\u0648\u062A\u064A\u0648\u0628 \u0645\u062D\u0638\u0648\u0631 \u0645\u0624\u0642\u062A\u064B\u0627",
        youtube_too_many_downloads_description:
          "\u0623\u062D\u064A\u0627\u0646\u064B\u0627 \u064A\u0641\u0631\u0636 YouTube \u0642\u064A\u0648\u062F\u064B\u0627 \u0639\u0644\u0649 \u0639\u062F\u062F \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629. \u0644\u0644\u0623\u0633\u0641 \u0644\u0627 \u064A\u0645\u0643\u0646\u0646\u0627 \u0641\u0639\u0644 \u0634\u064A\u0621. \u062D\u0627\u0648\u0644 \u0644\u0627\u062D\u0642\u064B\u0627.",
        stop: "\u0625\u064A\u0642\u0627\u0641",
        cancel: "\u0625\u0644\u063A\u0627\u0621",
        copy_url: "\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637",
        always_copy_url:
          "\u062F\u0627\u0626\u0645\u064B\u0627 \u0627\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637",
        download_button: "\u062A\u062D\u0645\u064A\u0644",
        download_as_button_and_menu:
          "\u062A\u062D\u0645\u064A\u0644 \u0643\u0640\u2026",
        rename_short:
          "\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629",
        always_download_as_menu:
          "\u062F\u0627\u0626\u0645\u064B\u0627 \u062A\u062D\u0645\u064A\u0644 \u0643\u0640\u2026",
        download_audio_button: "\u0635\u0648\u062A",
        download_audio_and_video_menu:
          "\u062A\u062D\u0645\u064A\u0644 \u0635\u0648\u062A \u0648\u0641\u064A\u062F\u064A\u0648",
        download_audio_only_menu:
          "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0648\u062A \u0641\u0642\u0637",
        audio_only_for_this_website:
          "\u062F\u0627\u0626\u0645\u064B\u0627 \u0635\u0648\u062A \u0641\u0642\u0637 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639",
        details: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
        report: "\u0625\u0628\u0644\u0627\u063A",
        reporting:
          "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0628\u0644\u0627\u063A\u2026",
      },
      web: {
        back: "\u0631\u062C\u0648\u0639",
        header_help: "\u0645\u0633\u0627\u0639\u062F\u0629",
        activate_title: "\u0627\u0644\u062A\u0641\u0639\u064A\u0644",
        activate_pending:
          "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631\u2026",
        activate_success: "\u062A\u0645 \u0628\u0646\u062C\u0627\u062D",
        activate_error: "\u062E\u0637\u0623",
        activate_no_addon_found:
          "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0625\u0636\u0627\u0641\u0629. \u0647\u0644 \u0647\u064A \u0645\u062B\u0628\u062A\u0629\u061F",
        activate_no_method_found:
          "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0637\u0631\u064A\u0642\u0629.",
        activate_help_me: "\u0633\u0627\u0639\u062F\u0646\u064A.",
        issue_title:
          "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621",
        issue_submit: "\u0625\u0631\u0633\u0627\u0644",
        issue_thank_you: "\u0634\u0643\u0631\u064B\u0627 \u0644\u0643",
        issue_enter_email:
          "\u0644\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0634\u0631\u0627\u0621\u060C \u0623\u062F\u062E\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0630\u064A \u0627\u0633\u062A\u062E\u062F\u0645\u062A\u0647 \u0644\u0634\u0631\u0627\u0621 \u0627\u0644\u062A\u0631\u062E\u064A\u0635:",
        issue_email_sent:
          "\u0644\u0642\u062F \u0623\u0631\u0633\u0644\u0646\u0627 \u0625\u0644\u064A\u0643 \u0628\u0631\u064A\u062F\u064B\u0627 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u064B\u0627 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0631\u0627\u0628\u0637 \u0644\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C.",
        issue_or_digit:
          "\u0623\u0648 \u064A\u0645\u0643\u0646\u0643 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0645\u0643\u0648\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0630\u064A \u0623\u0631\u0633\u0644\u0646\u0627\u0647 \u0625\u0644\u064A\u0643:",
        issue_just_digit:
          "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0645\u0643\u0648\u0646 \u0645\u0646 6 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0630\u064A \u0623\u0631\u0633\u0644\u0646\u0627\u0647 \u0625\u0644\u064A\u0643:",
        issue_i_have_a_code:
          "(\u0627\u0646\u0642\u0631 \u0647\u0646\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0644\u062F\u064A\u0643 \u0631\u0645\u0632 \u0628\u0627\u0644\u0641\u0639\u0644)",
        issue_i_have_a_key:
          "(\u0627\u0646\u0642\u0631 \u0647\u0646\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0644\u062F\u064A\u0643 \u0645\u0641\u062A\u0627\u062D \u062A\u0631\u062E\u064A\u0635)",
        issue_key:
          "\u0623\u062F\u062E\u0644 \u0645\u0641\u062A\u0627\u062D \u062A\u0631\u062E\u064A\u0635 Video DownloadHelper:",
        landing_text1:
          "\u062D\u0645\u0651\u0644 \u0623\u064A \u0641\u064A\u062F\u064A\u0648 \u0645\u0646 \u0623\u064A \u0645\u0648\u0642\u0639\u060C \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629!",
        landing_text2:
          "\u0623\u0643\u062B\u0631 \u0645\u0646 1000 \u0645\u0648\u0642\u0639 \u0645\u062F\u0639\u0648\u0645",
        landing_text3:
          "\u0645\u0648\u062B\u0648\u0642 \u0645\u0646 \u0642\u0628\u0644 \u0623\u0643\u062B\u0631 \u0645\u0646 7 \u0645\u0644\u0627\u064A\u064A\u0646 \u0645\u0633\u062A\u062E\u062F\u0645",
        landing_text4:
          "\u062A\u0642\u064A\u064A\u0645 4.5 \u0646\u062C\u0648\u0645 \u0641\u064A \u0645\u062A\u062C\u0631 \u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062A",
        landing_install_for_google:
          "\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0644\u0645\u062A\u0635\u0641\u062D Chrome",
        landing_install_for_mozilla:
          "\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0644\u0645\u062A\u0635\u0641\u062D Firefox",
        landing_install_for_microsoft:
          "\u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0644\u0645\u062A\u0635\u0641\u062D Edge",
        landing_feature1_title:
          "\u062A\u062D\u0645\u064A\u0644 \u0639\u0627\u0644\u064A \u0627\u0644\u062F\u0642\u0629 \u0628\u0623\u0642\u0635\u0649 \u0633\u0631\u0639\u0629",
        landing_feature1_description:
          "\u0642\u0645 \u0628\u062A\u062D\u0645\u064A\u0644 \u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0628\u062F\u0642\u0629 \u0639\u0627\u0644\u064A\u0629 \u0648\u0628\u0623\u0642\u0635\u0649 \u0633\u0631\u0639\u0629 \u0645\u0645\u0643\u0646\u0629. \u0646\u0641\u062E\u0631 \u0628\u0623\u0646 \u0645\u062D\u0631\u0643 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0644\u062F\u064A\u0646\u0627 \u0647\u0648 \u0627\u0644\u0623\u0633\u0631\u0639 \u0639\u0644\u0649 \u0627\u0644\u0625\u0637\u0644\u0627\u0642.",
        landing_feature2_title:
          "\u0623\u0631\u0634\u0641\u0629 \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A",
        landing_feature2_description:
          "\u0627\u062D\u062A\u0641\u0638 \u0628\u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0644\u062F\u064A\u0643 \u0644\u062A\u0636\u0645\u0646 \u0639\u062F\u0645 \u0636\u064A\u0627\u0639\u0647\u0627 \u0623\u0628\u062F\u064B\u0627.",
        landing_feature3_title:
          "\u062F\u0639\u0645 \u0627\u0644\u0628\u062B \u0627\u0644\u0645\u0628\u0627\u0634\u0631",
        landing_feature3_description:
          "\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u0628\u062B \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u062F\u0648\u0646 \u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A\u060C \u0644\u062A\u062D\u0631\u0631 \u0646\u0641\u0633\u0643 \u0645\u0646 \u0642\u064A\u0648\u062F \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0642\u064A\u0642\u064A.",
        landing_feature4_title:
          "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0648\u062A \u0641\u0642\u0637",
        landing_feature4_description:
          "\u0627\u0633\u062A\u062E\u0631\u062C \u0627\u0644\u0635\u0648\u062A \u0645\u0646 \u0645\u0642\u0627\u0637\u0639 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0648\u062D\u0648\u0651\u0644\u0647 \u0625\u0644\u0649 \u0645\u0644\u0641\u0627\u062A MP3 \u0623\u0648 \u0628\u0648\u062F\u0643\u0627\u0633\u062A \u0644\u0644\u0627\u0633\u062A\u0645\u0627\u0639 \u0628\u0633\u0647\u0648\u0644\u0629.",
        premium_hero1:
          "\u0627\u062F\u0641\u0639 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629\u060C \u0648\u0627\u0633\u062A\u062E\u062F\u0645 \u0644\u0644\u0623\u0628\u062F",
        premium_hero2:
          "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u062A\u0631\u062E\u064A\u0635 \u062F\u0627\u0626\u0645 \u0644\u0640 Video DownloadHelper",
        premium_hero3:
          "\u062D\u0645\u0651\u0644 \u0645\u0627 \u062A\u0634\u0627\u0621 \u0645\u0646 \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A \u062F\u0648\u0646 \u0623\u064A \u062D\u062F\u0648\u062F.",
        welcome_text:
          "\u0627\u0644\u0622\u0646 \u0644\u0646 \u062A\u0641\u0648\u0651\u062A \u0623\u064A \u0641\u064A\u062F\u064A\u0648 \u0628\u0639\u062F \u0627\u0644\u064A\u0648\u0645!",
        welcome_pin_message:
          "\u0642\u0645 \u0628\u062A\u062B\u0628\u064A\u062A \u0623\u064A\u0642\u0648\u0646\u0629 \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0639\u0644\u0649 \u0634\u0631\u064A\u0637 \u0627\u0644\u0623\u062F\u0648\u0627\u062A:",
      },
    },
    bg: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    ca: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    co: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    cs: {
      addon: {
        appDesc: "Stahov\xE1n\xED vide\xED z webu.",
        restore_purchase_button: "Obnovit n\xE1kup",
        get_premium_button: "Z\xEDskat pr\xE9mium",
        back: "Zp\u011Bt",
        rm_notifications_all: "Smazat v\u0161echna ozn\xE1men\xED",
        waiting_for_media: "\u010Cek\xE1m na m\xE9die",
        nomedia_title: "Nevid\xEDte m\xE9dia, kter\xE1 hled\xE1te?",
        nomedia_description:
          "Spus\u0165te video (a p\u0159esko\u010Dte p\u0159\xEDpadn\xE9 reklamy), abyste uleh\u010Dili detekci m\xE9di\xED. P\u0159\xEDpadn\u011B reportujte chyb\u011Bj\xEDc\xED m\xE9dia.",
        nomedia_reload_button: "Vynutit detekci",
        nomedia_reload_button_tooltip:
          "Vynutit znovuna\u010Dten\xED str\xE1nky (smaz\xE1n\xED cookies)",
        show_nomedia_button: "\u017D\xE1dn\xE9 video?",
        show_nomedia_button_tooltip:
          "Klikn\u011Bte zde, pokud nem\u016F\u017Eete naj\xEDt va\u0161e video",
        setting_button_tooltip: "Nastaven\xED",
        history_button_tooltip: "Zobrazit historii stahov\xE1n\xED",
        show_all_history_button: "zobrazit v\u0161echno",
        complete_title: "Hotovo",
        hide_complete_button: "Skr\xFDt",
        translate_button_tooltip: "Pomozte s p\u0159ekladem VDH",
        open_source_tab_button_tooltip:
          "Otev\u0159\xEDt z\xE1lo\u017Eku se zdrojov\xFDm k\xF3dem",
        retry_download_button_tooltip: "Opakovat stahov\xE1n\xED",
        delete_file_button_tooltip: "Smazat soubor",
        download_directory_button_tooltip: "Zobrazit stahovac\xED slo\u017Eku",
        clear_downloaded_tooltip: "Smazat dokon\u010Den\xE1 stahov\xE1n\xED",
        show_in_popup_button_tooltip: "Zobrazit v popup okn\u011B",
        show_in_sidebar_button_tooltip: "Zobrazit v bo\u010Dn\xEDm panelu",
        video_not_playing_button_tooltip: "Video se nep\u0159ehr\xE1v\xE1?",
        play: "P\u0159ehr\xE1t",
        warn_drm_tooltip: "Detekov\xE1na ochrana DRM",
        version_title: "Verze",
        account_title: "\xDA\u010Det",
        one_hundred_downloads_title: "St\xE1hl jste 100 vide\xED!",
        leave_review_description:
          "Jsme r\xE1di, \u017Ee si u\u017E\xEDv\xE1te Video DownloadHelper :) Necht\u011Bl byste napsat hezkou recenzi na str\xE1nk\xE1ch obchodu s addony? ",
        leave_review_button: "Zanechat recenzi",
        account_status: "Status",
        account_status_premium: "Pr\xE9mium (1$)",
        free_account: "Zdarma",
        copy_to_clipboard: "Kop\xEDrovat informace do schr\xE1nky",
        my_account_button: "M\u016Fj \xFA\u010Det",
        download_title: "Stahov\xE1n\xED",
        show_notification: "Zm\u011Bnit nastaven\xED",
        max_parallel_downloads:
          "Maxim\xE1ln\xED po\u010Det soub\u011B\u017En\xFDch stahov\xE1n\xED",
        saveas_detected_warning:
          "V\u0161imli jsme si, \u017Ee v\xE1\u0161 prohl\xED\u017Ee\u010D zobrazuje dialog 'Ulo\u017Eit jako', kdy\u017E se dokon\u010D\xED stahov\xE1n\xED. Doporu\u010Dujeme zak\xE1zat tuto mo\u017Enost v nastaven\xED va\u0161eho prohl\xED\u017Ee\u010De",
        change_saveas_setting: "Zm\u011Bnit nastaven\xED",
        private_browsing_title: "Soukrom\xE9 proch\xE1zen\xED",
        private_browsing_warning:
          "Video DownloadHelper nen\xED povolen v soukrom\xFDch/anonymn\xEDch oknech. Mus\xEDte to povolit ru\u010Dn\u011B (nen\xED vy\u017Eadov\xE1no).",
        private_browsing_notifications:
          "Zobrazit ozn\xE1men\xED pro soukrom\xE1 stahov\xE1n\xED",
        private_browsing_button:
          "Zm\u011Bnit nastaven\xED soukrom\xE9ho proch\xE1zen\xED",
        throttle_youtube:
          "Throttlovat YouTube (pomalej\u0161\xED stahov\xE1n\xED, ale men\u0161\xED pravd\u011Bpodobnost zablokov\xE1n\xED)",
        prefer_original_audio: "Up\u0159ednostnit p\u016Fvodn\xED zvuk",
        settings_history_title: "Historie",
        transient_history_description:
          "Zobrazit dokon\u010Den\xE1 stahov\xE1n\xED v panelu",
        history_limit: "Zapomenout historii stahov\xE1n\xED po X dnech",
        appearance_title: "P\u0159izp\u016Fsoben\xED",
        theme_title: "T\xE9ma",
        theme_light: "sv\u011Btl\xE9",
        theme_dark: "tmav\xE9",
        theme_system: "syst\xE9mov\xE9",
        popup_size_title: "Velikost okna",
        popup_size_small: "Mal\xE9",
        popup_size_medium: "St\u0159edn\xED",
        popup_size_big: "Velk\xE9",
        panel_position_title: "Um\xEDst\u011Bn\xED panelu",
        use_popup: "Zobrazit ve vyskakovac\xEDm okn\u011B",
        use_sidebar: "Zobrazit v bo\u010Dn\xEDm panelu",
        behavior_title: "Chov\xE1n\xED",
        controls_title: "Ovl\xE1d\xE1n\xED",
        show_in_context_menu:
          "Umo\u017Enit ovl\xE1d\xE1n\xED z kontextov\xE9 nab\xEDdky",
        restart_addon: "Znovu na\u010D\xEDst addon",
        reset_settings: "Reset nastaven\xED",
        prefered_quality: "Up\u0159ednost\u0148ovan\xE1 kvalita videa",
        prefered_quality_highest:
          "Nejvy\u0161\u0161\xED (pomal\xE9 stahov\xE1n\xED, vysok\xE9 rozli\u0161en\xED)",
        prefered_quality_1080p: "1080p (slu\u0161n\xE9 v\xFDchoz\xED)",
        prefered_quality_720p:
          "720p (rychl\xE9 stahov\xE1n\xED, n\xEDzk\xE9 rozli\u0161en\xED)",
        prefer_mkv: "Pokud mo\u017Eno st\xE1hnout jako MKV",
        preview_mode_title: "N\xE1hled m\xE9dia",
        preview_mode_none: "Zak\xE1z\xE1no",
        preview_mode_video: "Kr\xE1tk\xFD n\xE1hled",
        preview_mode_image: "Obraz",
        history_title: "Historie stahov\xE1n\xED",
        history_warning:
          "Nezaznamen\xE1v\xE1me va\u0161i historii stahov\xE1n\xED. Chcete, aby si Video DownloadHelper pamatoval va\u0161i historii stahov\xE1n\xED?",
        history_warning_2:
          "Bu\u010Fte v klidu, v\u0161echno z\u016Fst\xE1v\xE1 na va\u0161em po\u010D\xEDta\u010Di. Cen\xEDme si va\u0161eho soukrom\xED.",
        enable_history: "Povolit historii",
        clear_history: "Vymazat historii",
        disable_history: "Nezaznamen\xE1vat historii",
        no_downloads_yet: "Zat\xEDm \u017E\xE1dn\xE9 z\xE1znamy",
        download_failed: "Stahov\xE1n\xED selhalo",
        download_failed_description:
          "Bohu\u017Eel se nepoda\u0159ilo st\xE1hnout specifick\xE9 m\xE9dium. Sna\u017E\xEDme se o podporu co nejv\xEDce webov\xFDch str\xE1nek, proto velmi pom\u016F\u017Ee, pokud nahl\xE1s\xEDte toto selh\xE1n\xED (je to anonymn\xED!).",
        download_interrupted: "Stahov\xE1n\xED p\u0159eru\u0161eno",
        download_interrupted_description:
          "B\u011Bhem stahov\xE1n\xED souboru do\u0161lo k probl\xE9mu se s\xEDt\xED, tak\u017Ee soubor m\u016F\u017Ee b\xFDt krat\u0161\xED, ne\u017E o\u010Dek\xE1v\xE1te. Sna\u017E\xEDme se o podporu co nejv\xEDce webov\xFDch str\xE1nek, proto velmi pom\u016F\u017Ee, pokud nahl\xE1s\xEDte toto selh\xE1n\xED (je to anonymn\xED!).",
        download_with_drm_failed_description:
          "N\u011Bco se nepovedlo. Mysl\xEDme, \u017Ee toto video m\xE1 ochranu DRM. Nepodporujeme videa s DRM.",
        no_youtube: "Stahov\xE1n\xED z YouTube nen\xED povoleno",
        no_youtube_description:
          "Bohu\u017Eel Chrome Web Store nepovoluje roz\u0161\xED\u0159en\xED, kter\xE1 stahuj\xED YouTube videa, tak\u017Ee jsme nemohli tuto mo\u017Enost do verze pro Chrome vlo\u017Eit.",
        no_youtube_description_2:
          "Pros\xEDm pou\u017Eijte Firefox nebo Microsoft Edge",
        premium_required: "Po\u017Eadov\xE1no pr\xE9mium",
        premium_yt_required_description:
          "Bez pr\xE9mium statusu mus\xEDte po\u010Dkat 2 hodiny do dal\u0161\xEDho stahov\xE1n\xED.",
        premium_hls_required_description:
          "Bez pr\xE9mium statusu mohou b\xFDt HLS a MPD stahov\xE1n\xED prov\xE1d\u011Bna nejd\u0159\xEDve po 2 hodin\xE1ch po skon\u010Den\xED p\u0159edchoz\xEDho stahov\xE1n\xED.",
        youtube_too_many_downloads:
          "Kua, zd\xE1 se, \u017Ee YouTube v\xE1s blokuje.",
        youtube_too_many_downloads_description:
          "YouTube ob\u010Das omezuje po\u010Det po\u017Eadovan\xFDch vide\xED. Je to smutn\xE9, ale nic s t\xEDm nem\u016F\u017Eeme ud\u011Blat. Zkuste to znovu pozd\u011Bji.",
        stop: "Stop",
        cancel: "Zru\u0161it",
        copy_url: "Skop\xEDrovat adresu",
        always_copy_url: "V\u017Edy kop\xEDrovat adresu",
        download_button: "St\xE1hnout",
        download_as_button_and_menu: "St\xE1hnout jako...",
        rename_short: "P\u0159ejmenovat",
        always_download_as_menu: "V\u017Edy st\xE1hnout jako...",
        download_audio_button: "Zvuk",
        download_audio_and_video_menu: "St\xE1hnout zvuk a video",
        download_audio_only_menu: "St\xE1hnout zvuk",
        audio_only_for_this_website: "V\u017Edy pouze zvuk pro tuto str\xE1nku",
        details: "Detaily",
        report: "Report",
        reporting: "Reportov\xE1n\xED...",
        reported_thankyou: "Dekujeme!",
      },
      web: {
        back: "Zp\u011Bt",
        header_help: "Pomoc",
        activate_title: "Aktivace",
        activate_pending: "\u010Cek\xE1n\xED...",
        activate_success: "\xDAsp\u011Bch",
        activate_error: "Chyba",
        activate_no_addon_found:
          "Roz\u0161\xED\u0159en\xED nenalezeno. Je roz\u0161\xED\u0159en\xED instalov\xE1no?",
        activate_no_method_found: "Metoda nenalezena.",
        activate_help_me: "Pomozte mi.",
        issue_title: "Obnovuji n\xE1kup",
        issue_submit: "Odeslat",
        issue_thank_you: "D\u011Bkujeme",
        issue_enter_email:
          "Pro obnoven\xED n\xE1kupu zadejte e-mailovou adresu pou\u017Eitou pro n\xE1kup licence:",
        issue_email_sent:
          "Pr\xE1v\u011B jsme v\xE1m odeslali e-mail s odkazem pro aktivaci prosuktu.",
        issue_or_digit:
          "P\u0159\xEDpadn\u011B m\u016F\u017Eete zadat 6m\xEDstn\xFD k\xF3d, kter\xFD jsme v\xE1m poslali:",
        issue_just_digit:
          "Zadejte 6m\xEDstn\xFD k\xF3d, kter\xFD jsme v\xE1m poslali:",
        issue_i_have_a_code:
          "(Klikn\u011Bte zde, pokud u\u017E m\xE1te k\xF3d)",
        issue_i_have_a_key:
          "(Klikn\u011Bte zde, pokud u\u017E m\xE1te licen\u010Dn\xED kl\xED\u010D)",
        issue_key:
          "Zadejte licen\u010Dn\xED kl\xED\u010D k Video DownloadHelperu:",
        landing_text1:
          "Stahujte jak\xE9koliv videa odkudkoliv, prost\u011B to funguje!",
        landing_text2: "Podporujeme v\xEDce ne\u017E 1000 str\xE1nek",
        landing_text3:
          "D\u016Fv\u011B\u0159uje n\xE1m 7 mili\xF3n\u016F u\u017Eivatel\u016F",
        landing_text4: "Hodnocen\xED 4,5 hv\u011Bzdy v obchod\u011B",
        landing_install_for_google: "Instalovat do Chromu",
        landing_install_for_mozilla: "Instalovat do Firefoxu",
        landing_install_for_microsoft: "Instalovat do Edge",
        landing_feature1_title: "Stahujte HD plnou rychlost\xED",
        landing_feature1_description:
          "Stahujte videa ve vysok\xE9m rozli\u0161en\xED maxim\xE1ln\xED rychlost\xED. Jsme hrd\xED na to, \u017Ee m\u016F\u017Eeme tvrdit, \u017Ee m\xE1me nejrychlej\u0161\xED stahovac\xED engine na trhu.",
        landing_feature2_title: "Archivovat videa",
        landing_feature2_description:
          "Archivujte obl\xEDben\xE1 videa, abyste se ujistili, \u017Ee o nic nep\u0159ijdete.",
        landing_feature3_title: "Podpora \u017Eiv\xE9ho p\u0159enosu",
        landing_feature3_description:
          "u\u017Eijte si offline sledov\xE1n\xED \u017Eiv\xFDch stream\u016F, osvobo\u010Fte se od real-time omezen\xED.",
        landing_feature4_title: "Stahov\xE1n\xED zvuku",
        landing_feature4_description:
          "Extrahovat zvuk z vide\xED, konvertovat je do MP3 nebo podcast\u016F pro snadn\xFD poslech.",
        premium_hero1: "Zapla\u0165 jednou, pou\u017E\xEDvej nav\u017Edy",
        premium_hero2:
          "Z\xEDskejte do\u017Eivotn\xED licenci pro Video DownloadHelper",
        premium_hero3: "Stahujte kolik vide\xED chcete, bez limitu.",
        welcome_text: "Nyn\xED neprop\xE1snete \u017E\xE1dn\xE9 video.",
        welcome_pin_message: "P\u0159ipn\u011Bte addon na toolbar:",
      },
    },
    da: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    de: {
      addon: {
        appDesc: "Videos aus dem Internet herunterladen.",
        restore_purchase_button: "Einkauf wiederherstellen",
        get_premium_button: "Premium beziehen",
        back: "Zur\xFCck",
        rm_notifications_all: "Alle Benachrichtigungen schlie\xDFen",
        waiting_for_media: "Warten auf Medien\u2026",
        nomedia_title: "Von Ihnen gesuchte Medien sind nicht auffindbar?",
        nomedia_description:
          "Video starten (etwaige Werbung \xFCberspringen), um die Medien zu erkennen oder fehlende Medien zu melden.",
        nomedia_reload_button: "Erkennung erzwingen",
        nomedia_reload_button_tooltip:
          "Erneutes Laden der Seite erzwingen (Cookies l\xF6schen)",
        show_nomedia_button: "Kein Video?",
        show_nomedia_button_tooltip:
          "Hier klicken, wenn Sie Ihr Video nicht finden k\xF6nnen",
        setting_button_tooltip: "Einstellungen",
        history_button_tooltip: "Downloadchronik anzeigen",
        show_all_history_button: "Alle anzeigen",
        complete_title: "Vollst\xE4ndig",
        hide_complete_button: "verstecken",
        translate_button_tooltip: "Helfen Sie mit, VDH zu \xFCbersetzen",
        open_source_tab_button_tooltip: "Quellenregisterkarte \xF6ffnen",
        retry_download_button_tooltip: "Download wiederholen",
        delete_file_button_tooltip: "Datei l\xF6schen",
        download_directory_button_tooltip: "Downloadordner anzeigen",
        clear_downloaded_tooltip: "Abgeschlossene Downloads l\xF6schen",
        show_in_popup_button_tooltip: "Im Pop-up-Fenster anzeigen",
        show_in_sidebar_button_tooltip: "In der Seitenleiste anzeigen",
        video_not_playing_button_tooltip: "Video wird nicht abgespielt?",
        play: "Abspielen",
        warn_drm_tooltip: "DRM erkannt",
        version_title: "Version",
        account_title: "Konto",
        one_hundred_downloads_title: "Sie haben 100 Videos heruntergeladen!",
        leave_review_description:
          "Wir hoffen, Ihnen gef\xE4llt Video DownloadHelper. Hinterlassen Sie uns bitte noch eine gute Bewertung auf der Add-on-Seite.",
        leave_review_button: "Eine Bewertung hinterlassen",
        account_status: "Status",
        account_status_premium: "Premium ($1)",
        free_account: "Kostenloser Plan",
        copy_to_clipboard: "Information in die Zwischenablage kopieren",
        my_account_button: "Mein Konto",
        download_title: "Downloads",
        show_notification:
          "Benachrichtigung anzeigen, wenn der Download abgeschlossen ist",
        max_parallel_downloads: "Maximal gleichzeitige Downloads",
        saveas_detected_warning:
          "Wir haben festgestellt, dass Ihr Browser nach Abschluss des Downloads ein Dialogfeld \u201ESpeichern unter\u201C anzeigt. Wir empfehlen, diese Option in Ihren Browsereinstellungen zu deaktivieren.",
        change_saveas_setting: "Einstellung \xE4ndern",
        download_directory_title: "Downloadverzeichnis",
        download_directory_description:
          "Videos werden im Standard-Downloadverzeichnis des Browsers gespeichert. Sie k\xF6nnen auch ein Unterverzeichnis angeben. Website-spezifische Downloadverzeichnisse k\xF6nnen mit dem Smartnaming-Tool festgelegt werden.",
        change_browser_download_directory:
          "Downloadverzeichnis des Browsers \xE4ndern",
        bad_download_subdirectory_warning:
          "Das von Ihnen angegebene Unterverzeichnis ist ung\xFCltig.",
        download_subdirectory: "Downloadunterverzeichnis",
        private_browsing_title: "Privates Surfen",
        private_browsing_warning:
          "Video DownloadHelper ist nicht im Privat-/Inkognito-Fenster aktiviert. Sie m\xFCssen diese Option manuell einschalten (dies ist nicht erforderlich).",
        private_browsing_notifications:
          "Benachrichtigung f\xFCr private Downloads anzeigen",
        private_browsing_button: "Einstellung f\xFCr privates Surfen \xE4ndern",
        throttle_youtube:
          "YouTube drosseln (langsamere Downloads, aber geringeres Risiko einer Blockierung)",
        prefer_original_audio: "Vorzug f\xFCr Originalton",
        settings_history_title: "Verlauf",
        transient_history_description: "Komplette Downloads im Panel anzeigen",
        history_limit: "Downloadchronik nach x Tagen l\xF6schen",
        appearance_title: "Aussehen",
        theme_title: "Thema",
        theme_light: "hell",
        theme_dark: "dunkel",
        theme_system: "System",
        popup_size_title: "Fenstergr\xF6\xDFe",
        popup_size_small: "Klein",
        popup_size_medium: "Mittel",
        popup_size_big: "Gro\xDF",
        panel_position_title: "Bildschirmposition",
        use_popup: "Im Pop-up-Fenster anzeigen",
        use_sidebar: "In der Seitenleiste anzeigen",
        behavior_title: "Verhalten",
        controls_title: "Bedienelemente",
        show_in_context_menu:
          "Auf Befehle per Rechtsklick auf der Seite zugreifen",
        restart_addon: "Add-on neu laden",
        reset_settings: "Einstellungen zur\xFCcksetzen",
        prefered_quality: "Bevorzugte Videoqualit\xE4t",
        prefered_quality_highest:
          "H\xF6chste (langsamer Download, hohe Aufl\xF6sung)",
        prefered_quality_1080p: "1080p (gute Standardeinstellung)",
        prefered_quality_720p:
          "720p (schneller Download, niedrige Aufl\xF6sung)",
        prefer_mkv: "Wenn m\xF6glich, als MKV herunterladen",
        preview_mode_title: "Medienvorschau",
        preview_mode_none: "Deaktiviert",
        preview_mode_video: "Kurze Videovorschau",
        preview_mode_image: "Bild",
        history_title: "Downloadchronik",
        history_warning:
          "Es ist keine Downloadchronik angelegt. M\xF6chten Sie, dass Video DownloadHelper eine Downloadchronik anlegt?",
        history_warning_2:
          "Keine Sorge, alles bleibt auf Ihrem Ger\xE4t. Wir respektieren Ihre Privatsph\xE4re.",
        enable_history: "Chronik anlegen",
        clear_history: "Chronik l\xF6schen",
        disable_history: "Chronik nicht anlegen",
        no_downloads_yet: "Bisher keine Eintr\xE4ge",
        download_failed: "Herunterladen fehlgeschlagen",
        download_failed_description:
          "Leider ist es uns nicht gelungen, dieses spezielle Medium herunterzuladen. Wir versuchen, so viele Websites wie m\xF6glich zu unterst\xFCtzen. Daher w\xE4re es sehr hilfreich, wenn Sie diesen Fehler (anonym) melden!",
        download_interrupted: "Download unterbrochen",
        download_interrupted_description:
          "Wir konnten Ihre Datei herunterladen, aber es gab Netzwerkprobleme, sodass die Datei m\xF6glicherweise k\xFCrzer ist als erwartet. Wir versuchen, so viele Websites wie m\xF6glich zu unterst\xFCtzen. Es w\xE4re daher sehr hilfreich, wenn Sie dieses Problem melden k\xF6nnten (Die Meldung ist anonym!).",
        download_with_drm_failed_description:
          "Etwas hat nicht funktioniert. Und wir denken, dass dieses Video dem DRM unterliegt. Wir unterst\xFCtzen keine Videos mit DRM.",
        no_youtube: "Download von YouTube ist nicht zul\xE4ssig",
        no_youtube_description:
          "Leider erlaubt der Chrome Web Store keine Erweiterungen zum Herunterladen von YouTube-Videos, sodass wir diese Funktion nicht in die Chrome-Version der Erweiterung aufnehmen konnten.",
        no_youtube_description_2:
          "Bitte verwenden Sie Firefox oder Microsoft Edge.",
        premium_required: "Premiumstatus wird ben\xF6tigt",
        premium_yt_required_description:
          "Ohne Premium-Status kann ein YouTube-Download erst 2 Stunden nach dem vorherigen Download durchgef\xFChrt werden.",
        premium_hls_required_description:
          "Ohne Premium-Status kann ein HLS- oder MPD-Download erst 2 Stunden nach dem vorherigen Download durchgef\xFChrt werden.",
        premium_all_required_description:
          "Ohne Premium-Status kann ein Download erst 2 Stunden nach dem vorherigen Download durchgef\xFChrt werden.",
        youtube_too_many_downloads:
          "Hoppla, YouTube scheint blockiert zu sein.",
        youtube_too_many_downloads_description:
          "YouTube begrenzt manchmal die Anzahl der Videos, die angefordert werden k\xF6nnen. Leider k\xF6nnen wir daran nichts \xE4ndern. Versuchen Sie es sp\xE4ter erneut.",
        stop: "Stopp",
        cancel: "Abbrechen",
        copy_url: "URL kopieren",
        always_copy_url: "URL immer kopieren",
        download_button: "Herunterladen",
        download_as_button_and_menu: "Herunterladen als\u2026",
        rename_short: "Umbenennen",
        always_download_as_menu: "Immer herunterladen als\u2026",
        download_audio_button: "Audio",
        download_audio_and_video_menu: "Audio & Video herunterladen",
        download_audio_only_menu: "Audio herunterladen",
        audio_only_for_this_website: "F\xFCr diese Website immer nur Audio",
        details: "Details",
        report: "Fehler melden",
        reporting: "Wird gemeldet\u2026",
        reported_thankyou: "Vielen Dank!",
      },
      web: {
        back: "Zur\xFCck",
        header_help: "Hilfe",
        activate_title: "Aktivierung",
        activate_pending: "Steht noch aus\u2026",
        activate_success: "Erfolg",
        activate_error: "Fehler",
        activate_no_addon_found:
          "Kein Add-on gefunden. Ist das Add-on installiert?",
        activate_no_method_found: "Keine Methode gefunden.",
        activate_help_me: "Brauche Hilfe.",
        issue_title: "Einkauf wird wiederhergestellt",
        issue_submit: "Absenden",
        issue_thank_you: "Vielen Dank",
        issue_enter_email:
          "Geben Sie zur Wiederherstellung Ihres Einkaufs die E-Mail-Adresse ein, die Sie zum Erwerb Ihrer Lizenz verwendeten:",
        issue_email_sent:
          "Wir sandten Ihnen gerade eine E-Mail mit einem Link zu, der Ihr Produkt aktivieren wird.",
        issue_or_digit:
          "Alternativ k\xF6nnen Sie auch den 6-stelligen Code eingeben, den wir Ihnen zusandten:",
        issue_just_digit:
          "Geben Sie den 6-stelligen Code ein, den wir Ihnen gesendet haben:",
        issue_i_have_a_code:
          "(Klicken Sie hier, wenn Sie bereits einen Code haben)",
        issue_i_have_a_key:
          "(Klicken Sie hier, wenn Sie einen Lizenzschl\xFCssel haben)",
        issue_key:
          "Geben Sie Ihren Video DownloadHelper-Lizenzschl\xFCssel ein:",
        landing_text1:
          "Laden Sie jetzt problemlos Videos von beliebigen Websites herunter!",
        landing_text2: "1000+ Websites werden unterst\xFCtzt",
        landing_text3:
          "7 Millionen Nutzer halten dies f\xFCr vertrauensw\xFCrdig",
        landing_text4: "4,5 Sterne im Store der Erweiterungen",
        landing_install_for_google: "F\xFCr Chrome installieren",
        landing_install_for_mozilla: "F\xFCr Firefox installieren",
        landing_install_for_microsoft: "F\xFCr Edge installieren",
        landing_feature1_title: "HD-Download mit H\xF6chstgeschwindigkeit",
        landing_feature1_description:
          "Laden Sie hochaufl\xF6sende Videos mit maximaler Geschwindigkeit herunter. Stolz behaupten wir, die schnellste Download-Engine auf dem Markt zu haben.",
        landing_feature2_title: "Videos archivieren",
        landing_feature2_description:
          "Archivieren Sie Ihre Lieblingsvideos mit der Gew\xE4hr, dass nichts zur\xFCckgelassen wird.",
        landing_feature3_title: "Livestream-Unterst\xFCtzung",
        landing_feature3_description:
          "Genie\xDFen Sie es, Livestreams offline anzuschauen - frei von Echtzeiteinschr\xE4nkungen.",
        landing_feature4_title: "Audio-Download",
        landing_feature4_description:
          "Extrahieren Sie Audio aus Videos, wandeln Sie diese in MP3s oder Podcasts f\xFCr bequemes Anh\xF6ren um.",
        premium_hero1: "Einmal zahlen, f\xFCr immer verwenden",
        premium_hero2:
          "Beziehen Sie eine Lizenz f\xFCr Video DownloadHelper auf Lebenszeit",
        premium_hero3:
          "Laden Sie uneingeschr\xE4nkt so viele Videos herunter, wie Sie m\xF6chten.",
        welcome_text: "Jetzt verpassen Sie kein Video mehr!",
        welcome_pin_message: "Das Add-on-Symbol an die Symbolleiste anheften:",
      },
    },
    dsb: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    el: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    en: {
      addon: {
        appDesc: "Download Videos from the Web.",
        restore_purchase_button: "Restore purchase",
        get_premium_button: "Get premium",
        back: "Back",
        rm_notifications_all: "Dismiss all notifications",
        waiting_for_media: "Waiting for media\u2026",
        nomedia_title: "Can't see the media you're looking for?",
        nomedia_description:
          "Start the video (and skip ads if any) to help detect the media. Or report missing media.",
        nomedia_reload_button: "Force detection",
        nomedia_reload_button_tooltip: "Force page reload (clear cookies)",
        show_nomedia_button: "No video?",
        show_nomedia_button_tooltip: "Click here if you can't find your video",
        setting_button_tooltip: "Settings",
        history_button_tooltip: "Show Download History",
        show_all_history_button: "show all",
        complete_title: "Complete",
        hide_complete_button: "hide",
        translate_button_tooltip: "Help translate VDH",
        help_button_tooltip: "Help",
        open_source_tab_button_tooltip: "Open source tab",
        retry_download_button_tooltip: "Retry download",
        delete_file_button_tooltip: "Delete file",
        download_directory_button_tooltip: "Show download folder",
        clear_downloaded_tooltip: "Clear completed downloaded",
        show_in_popup_button_tooltip: "Show in popup",
        show_in_sidebar_button_tooltip: "Show in sidebar",
        video_not_playing_button_tooltip: "Video not playing?",
        play: "Play",
        warn_drm_tooltip: "DRM detected",
        version_title: "Version",
        account_title: "Account",
        one_hundred_downloads_title: "You've downloaded 100 videos!",
        leave_review_description:
          "We hope you're enjoying Video DownloadHelper :) Would you mind writing a nice review on the addon website?",
        leave_review_button: "Leave a review",
        account_status: "Status",
        account_status_premium: "Premium ($1)",
        free_account: "Free plan",
        copy_to_clipboard: "Copy information to clipboard",
        my_account_button: "My account",
        download_title: "Downloads",
        show_notification: "Show notification when download is complete",
        max_parallel_downloads: "Max concurrent downloads",
        saveas_detected_warning:
          "We have detected that your browser shows a 'Save As' dialog, once the download is finished. We recommend disabling that option in your browser settings",
        change_saveas_setting: "Change setting",
        download_directory_title: "Download Directory",
        download_directory_description:
          "Videos are downloaded in the default browser download directory. You can also specicify a sub-directory. Website-specific download directories can be set with the smartnaming tool.",
        change_browser_download_directory: "Change browser download directory",
        bad_download_subdirectory_warning:
          "The sub-directory you specified is not valid.",
        download_subdirectory: "Download subdirectory",
        private_browsing_title: "Private browsing",
        private_browsing_warning:
          "Video DownloadHelper is not enabled in a Private/Incognito windows. You need to turn on that option manually (this is not required).",
        private_browsing_notifications:
          "Show notification for private downloads",
        private_browsing_button: "Change private browsing setting",
        throttle_youtube:
          "Throttle YouTube (slower downloads, but less likely to be blocked)",
        prefer_original_audio: "Prefer original audio",
        settings_history_title: "History",
        transient_history_description: "Show complete downloads in panel",
        history_limit: "Forget download history after X days",
        appearance_title: "Appearance",
        theme_title: "Theme",
        theme_light: "light",
        theme_dark: "dark",
        theme_system: "system",
        popup_size_title: "Window size",
        popup_size_small: "Small",
        popup_size_medium: "Medium",
        popup_size_big: "Big",
        font_size_title: "Text size",
        font_size_default: "Default",
        font_size_large: "Large",
        font_size_verylarge: "Very large",
        panel_position_title: "Panel position",
        use_popup: "Show in popup",
        use_sidebar: "Show in sidebar",
        behavior_title: "Behavior",
        controls_title: "Controls",
        show_in_context_menu: "Access commands from right-click in page",
        restart_addon: "Reload addon",
        reset_settings: "Reset settings",
        prefered_quality: "Prefered video quality",
        prefered_quality_highest: "Highest (slow download, high resolution)",
        prefered_quality_1080p: "1080p (good default)",
        prefered_quality_720p: "720p (fast download, low resolution)",
        prefered_quality_480p: "480p (faster download, lower resolution)",
        prefer_mkv: "Download as MKV when possible",
        preview_mode_title: "Media preview",
        preview_mode_none: "Disabled",
        preview_mode_video: "Short video preview",
        preview_mode_image: "Image",
        media_discovered_ordering_title: "Media sorting strategy",
        order_media_smart: "Smart (recommended)",
        order_media_by_newest: "Newest first",
        order_media_by_oldest: "Oldest first",
        history_title: "Download History",
        history_warning:
          "We do not record your download history. Do you want Video DownloadHelper to remember your download history?",
        history_warning_2:
          "Don't worry, everything stays on your machine. We value your privacy.",
        enable_history: "Enable History",
        clear_history: "Clear History",
        disable_history: "Do not remember my history",
        no_downloads_yet: "No entries yet.",
        download_failed: "Download failed",
        download_failed_description:
          "Sadly we failed at downloading that specific media. We try to support as many websites as possible, so it would help a lot if you could report that error (it's anonymous!).",
        download_interrupted: "Download interrupted",
        download_interrupted_description:
          "We managed to download your file, but there was a network issues, so the file might be shorter than expected. We try to support as many websites as possible, so it would help a lot if you could report this problem (it's anonymous!).",
        download_with_drm_failed_description:
          "Something didn't work. And we think this video has DRM. We do not support videos with DRM.",
        no_youtube: "Download from youtube not allowed",
        no_youtube_description:
          "Unfortunately, the Chrome Web Store does not allow extensions for downloading YouTube videos so we could not include this feature in the Chrome version of the extension.",
        no_youtube_description_2: "Please use Firefox or Microsoft Edge",
        premium_required: "Premium status required",
        premium_yt_required_description:
          "Without Premium status, a YouTube download can only be performed 2 hours after the previous one.",
        premium_hls_required_description:
          "Without Premium status, an HLS or MPD download can only be performed 2 hours after the previous one.",
        premium_all_required_description:
          "Without Premium status, a download can only be performed 2 hours after the previous one.",
        youtube_too_many_downloads: "Oops, YouTube seems to be blocked",
        youtube_too_many_downloads_description:
          "YouTube sometimes will limit how many videos can be requested. Nothing we can do about sadly. Try again later.",
        stop: "Stop",
        cancel: "Cancel",
        copy_url: "Copy URL",
        always_copy_url: "Always copy URL",
        download_button: "Download",
        download_as_button_and_menu: "Download As\u2026",
        rename_short: "Rename",
        always_download_as_menu: "Always Download As\u2026",
        download_audio_button: "Audio",
        download_audio_and_video_menu: "Download Audio & video",
        download_audio_only_menu: "Download Audio",
        audio_only_for_this_website: "Always audio only for this website",
        details: "Details",
        report: "Report",
        reporting: "Reporting\u2026",
        reported_thankyou: "Thank you!",
      },
      web: {
        back: "Back",
        header_help: "Help",
        header_ask_question: "Ask us a question",
        activate_title: "Activation",
        activate_pending: "Pending\u2026",
        activate_success: "Success",
        activate_error: "Error",
        activate_no_addon_found: "No addon found. Is the addon installed?",
        activate_no_method_found: "No method found.",
        activate_help_me: "Help me.",
        issue_title: "Restoring purchase",
        issue_submit: "Submit",
        issue_thank_you: "Thank you",
        issue_enter_email:
          "To restore your purchase, enter the email address you used to buy your license:",
        issue_email_sent:
          "We just sent you an email with a link that will activate your product.",
        issue_or_digit: "Or, you can also enter the 6 digit code we sent you:",
        issue_just_digit: "Enter the 6 digit code we sent you:",
        issue_i_have_a_code: "(Click here if you already have a code)",
        issue_i_have_a_key: "(Click here if you have a license key)",
        issue_key: "Enter your Video DownloadHelper license key:",
        landing_text1: "Download any video from any websites, it just works!",
        landing_text2: "1000+ websites supported",
        landing_text3: "Trusted by 7 millions users",
        landing_text4: "4.5 stars on extension store",
        landing_install_for_google: "Install for Chrome",
        landing_install_for_mozilla: "Install for Firefox",
        landing_install_for_microsoft: "Install for Edge",
        landing_feature1_title: "HD Download at full speed",
        landing_feature1_description:
          "Download videos in high-definition, at maximum speed. We proud to claim we have the fasted download engine out there.",
        landing_feature2_title: "Archive videos",
        landing_feature2_description:
          "Archive your favorite videos, ensuring nothing gets left behind.",
        landing_feature3_title: "Live Stream Support",
        landing_feature3_description:
          "Enjoy offline viewing of live streams, freeing you from real-time constraints.",
        landing_feature4_title: "Audio Download",
        landing_feature4_description:
          "Extract audio from videos, converting them into MP3s or podcasts for easy listening.",
        premium_hero1: "Pay once, use forever",
        premium_hero2: "Get a Lifetime License for Video DownloadHelper",
        premium_hero3: "Download any videos as much as you want, no limits.",
        premium_supported_payment_methods: "Supported payment methods",
        premium_buy: "buy",
        welcome_text: "Now you're not going to miss any video!",
        welcome_pin_message: "Pin the add-on icon to your toolbar:",
      },
    },
    es: {
      addon: {
        appDesc: "Descargar videos de la web.",
        restore_purchase_button: "Restaurar compra",
        get_premium_button: "Ir a premium",
        back: "Atr\xE1s",
        waiting_for_media: "Esperando medios\u2026",
        nomedia_title: "\xBFNo ve el medio que est\xE1 buscando?",
        nomedia_description:
          "Inicie el video (y omita los anuncios, si los hay) para ayudar a detectar el medio. O informe que faltan medios.",
        nomedia_reload_button: "Forzar detecci\xF3n",
        nomedia_reload_button_tooltip:
          "Forzar recarga de p\xE1gina (borrar cookies)",
        show_nomedia_button: "\xBFNo hay video?",
        show_nomedia_button_tooltip:
          "Haga clic aqu\xED si no encuentra su video.",
        setting_button_tooltip: "Ajustes",
        history_button_tooltip: "Mostrar historial de descargas",
        translate_button_tooltip: "Ayudar a traducir VDH",
        open_source_tab_button_tooltip: "Abrir pesta\xF1a de c\xF3digo",
        retry_download_button_tooltip: "Reintentar descarga",
        delete_file_button_tooltip: "Eliminar archivo",
        download_directory_button_tooltip: "Mostrar directorio de descargas",
        show_in_popup_button_tooltip: "Mostrar en ventana emergente",
        show_in_sidebar_button_tooltip: "Mostrar en la barra lateral",
        video_not_playing_button_tooltip: "\xBFNo se reproduce el video?",
        play: "Reproducir",
        warn_drm_tooltip: "Se ha detectado DRM",
        version_title: "Versi\xF3n",
        account_title: "Cuenta",
        leave_review_description:
          "Hola \u{1F91A} Video DownloadHelper es de uso gratuito. \xBFLe importar\xEDa dejar una buena rese\xF1a? Me ser\xEDa de gran ayuda \u{1F60A}.",
        leave_review_button: "Dejar una rese\xF1a",
        account_status: "Estado",
        account_status_premium: "Premium ($1)",
        free_account: "Plan gratuito",
        copy_to_clipboard: "Copiar informaci\xF3n al portapapeles",
        my_account_button: "Mi cuenta",
        download_title: "Descargas",
        show_notification:
          "Mostrar notificaci\xF3n una vez completada la descarga",
        max_parallel_downloads: "Descargas simult\xE1neas m\xE1ximas",
        private_browsing_title: "Navegaci\xF3n privada",
        private_browsing_warning:
          "Video DownloadHelper no est\xE1 habilitado en la navegaci\xF3n privada.",
        private_browsing_notifications:
          "Mostrar notificaci\xF3n para descargas privadas",
        private_browsing_button:
          "Cambiar configuraci\xF3n de navegaci\xF3n privada",
        prefer_original_audio: "Preferir audio original",
        settings_history_title: "Historial",
        history_limit: "D\xEDas antes de olvidar las descargas",
        appearance_title: "Apariencia",
        theme_title: "Tema",
        theme_light: "Tema claro",
        theme_dark: "Tema oscuro",
        theme_system: "Tema del sistema",
        popup_size_title: "Tama\xF1o de la ventana",
        popup_size_small: "Peque\xF1o",
        popup_size_medium: "Mediano",
        popup_size_big: "Grande",
        panel_position_title: "Posici\xF3n del panel",
        use_popup: "Usar ventana emergente",
        use_sidebar: "Usar barra lateral",
        behavior_title: "Comportamiento",
        show_in_context_menu:
          "Mostrar men\xFA de descarga en el men\xFA contextual de la p\xE1gina",
        restart_addon: "Reiniciar complemento",
        reset_settings: "Restablecer ajustes",
        history_title: "Historial de descargas",
        history_warning:
          "No registramos su historial de descargas. \xBFDesea que Video DownloadHelper recuerde su historial de descargas?",
        history_warning_2:
          "No se preocupe, todo permanece en su equipo. Valoramos su privacidad.",
        enable_history: "Habilitar historial",
        clear_history: "Borrar historial",
        disable_history: "Deshabilitar historial",
        no_downloads_yet: "A\xFAn no hay descargas.",
        download_failed: "Descarga fallida",
        download_failed_description:
          "Algo no ha funcionado. Informe del error y haremos todo lo posible por averiguar por qu\xE9 ha fallado (enviamos la URL del video de forma an\xF3nima, \xA1no lo rastreamos!).",
        download_with_drm_failed_description:
          "Algo no ha funcionado. Creemos que este video tiene DRM. No admitimos videos con DRM.",
        no_youtube: "No se permite la descarga desde YouTube",
        no_youtube_description:
          "Lamentablemente, Chrome Web Store no permite que las extensiones descarguen videos de YouTube. Otros navegadores como Firefox no tienen esta limitaci\xF3n.",
        premium_required: "Se requiere el estado Premium",
        premium_yt_required_description:
          "Sin el estado Premium debe esperar dos horas entre descargas de videos de YouTube.",
        premium_hls_required_description:
          "Sin el estado Premium, solo se puede realizar una descarga HLS dos horas despu\xE9s de la anterior.",
        stop: "Detener",
        cancel: "Cancelar",
        copy_url: "Copiar URL",
        always_copy_url: "Copiar siempre la URL",
        download_button: "Descargar",
        download_audio_button: "Audio",
        download_audio_and_video_menu: "Descargar audio y video",
        download_audio_only_menu: "Descargar solo audio",
        audio_only_for_this_website: "Siempre solo audio para este sitio web.",
        details: "Detalles",
        report: "Informar",
        reporting: "Informando\u2026",
      },
      web: {
        header_help: "Ayuda",
        activate_title: "Activaci\xF3n",
        activate_pending: "Pendiente\u2026",
        activate_success: "\xC9xito",
        activate_error: "Error",
        activate_no_addon_found:
          "No se ha encontrado ning\xFAn complemento. \xBFEst\xE1 instalado el complemento?",
        activate_no_method_found: "No se ha encontrado ning\xFAn m\xE9todo.",
        activate_help_me: "Ayuda",
        issue_title: "Restaurar compra",
        issue_submit: "Enviar",
        issue_thank_you: "Gracias",
        issue_enter_email:
          "Para restaurar su compra, introduzca la direcci\xF3n de correo electr\xF3nico que utiliz\xF3 para comprar su licencia:",
        issue_email_sent:
          "Le acabamos de enviar un correo electr\xF3nico con un enlace que activar\xE1 su producto.",
        issue_or_digit:
          "O bien, tambi\xE9n puede introducir el c\xF3digo de 6 d\xEDgitos que le hemos enviado:",
        landing_text1:
          "Descargue cualquier video de cualquier sitio web, \xA1funciona!",
        landing_text2: "M\xE1s de 1000 sitios web compatibles",
        landing_text3: "Con la confianza de 7 millones de usuarios",
        landing_text4: "4.5 estrellas en la tienda de extensiones",
        landing_install_for_google: "Instalar para Chrome",
        landing_install_for_mozilla: "Instalar para Firefox",
        landing_install_for_microsoft: "Instalar para Edge",
        landing_feature1_title: "Descarga HD a toda velocidad",
        landing_feature1_description:
          "Descargue videos en alta definici\xF3n a la m\xE1xima velocidad. Nos enorgullece afirmar que contamos con el motor de descarga m\xE1s r\xE1pido del mercado.",
        landing_feature2_title: "Archivar videos",
        landing_feature2_description:
          "Archive sus videos favoritos y aseg\xFArese de que no se pierda nada.",
        landing_feature3_title: "Compatibilidad con transmisiones en directo",
        landing_feature3_description:
          "Disfrute de la visualizaci\xF3n sin conexi\xF3n de transmisiones en directo, sin limitaciones de tiempo real.",
        landing_feature4_title: "Descarga de audio",
        landing_feature4_description:
          "Extraiga el audio de los videos y convi\xE9rtalo a MP3 o podcasts para escucharlo f\xE1cilmente.",
        premium_hero1: "Pague una vez y \xFAselo para siempre",
        premium_hero2:
          "Obtenga una licencia de por vida para Video DownloadHelper",
        premium_hero3: "Descargue todos los videos que quiera, sin l\xEDmites.",
      },
    },
    fa: {
      addon: {
        appDesc:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627 \u0627\u0632 \u0648\u0628. \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0648\u0631\u062F \u0639\u0644\u0627\u0642\u0647\u200C\u062A\u0627\u0646 \u0631\u0627 \u0633\u0631\u06CC\u0639 \u0648 \u0622\u0633\u0627\u0646 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F",
        restore_purchase_button:
          "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u062E\u0631\u06CC\u062F",
        get_premium_button:
          "\u0627\u0631\u062A\u0642\u0627 \u0628\u0647 \u0648\u06CC\u0698\u0647",
        back: "\u0628\u0627\u0632\u06AF\u0634\u062A",
        rm_notifications_all:
          "\u0628\u0633\u062A\u0646 \u0647\u0645\u0647 \u0627\u0639\u0644\u0627\u0646 \u0647\u0627",
        waiting_for_media:
          "...\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0631\u0633\u0627\u0646\u0647",
        nomedia_title:
          "\u0631\u0633\u0627\u0646\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644\u0634 \u0647\u0633\u062A\u06CC\u062F \u0631\u0627 \u0646\u0645\u06CC\u200C\u0628\u06CC\u0646\u06CC\u062F\u061F",
        nomedia_description:
          "\u0628\u0631\u0627\u06CC \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u0646 \u0631\u0633\u0627\u0646\u0647\u060C \u0648\u06CC\u062F\u06CC\u0648 \u0631\u0627 \u067E\u062E\u0634 \u06A9\u0646\u06CC\u062F (\u0648 \u062F\u0631 \u0635\u0648\u0631\u062A \u0648\u062C\u0648\u062F \u062A\u0628\u0644\u06CC\u063A\u060C \u0627\u0632 \u0622\u0646 \u0631\u062F \u0634\u0648\u06CC\u062F). \u06CC\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F\u0646\u060C \u06AF\u0632\u0627\u0631\u0634 \u062F\u0647\u06CC\u062F",
        nomedia_reload_button:
          "\u0634\u0646\u0627\u0633\u0627\u06CC\u06CC \u0627\u062C\u0628\u0627\u0631\u06CC",
        nomedia_reload_button_tooltip:
          "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u062C\u062F\u062F \u0635\u0641\u062D\u0647 (\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u06A9\u0648\u06A9\u06CC\u200C\u0647\u0627)",
        show_nomedia_button:
          "\u0648\u06CC\u062F\u06CC\u0648 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F\u061F",
        show_nomedia_button_tooltip:
          "\u0627\u06AF\u0631 \u0648\u06CC\u062F\u06CC\u0648\u06CC \u062E\u0648\u062F \u0631\u0627 \u067E\u06CC\u062F\u0627 \u0646\u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F\u060C \u0627\u06CC\u0646\u062C\u0627 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F",
        setting_button_tooltip: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        history_button_tooltip:
          "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062F\u0627\u0646\u0644\u0648\u062F",
        show_all_history_button:
          "\u0646\u0645\u0627\u06CC\u0634 \u0647\u0645\u0647",
        complete_title: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F",
        hide_complete_button: "\u067E\u0646\u0647\u0627\u0646",
        translate_button_tooltip:
          "\u06A9\u0645\u06A9 \u0628\u0631\u0627\u06CC \u062A\u0631\u062C\u0645\u0647",
        help_button_tooltip: "\u0631\u0627\u0647\u0646\u0645\u0627",
        open_source_tab_button_tooltip:
          "\u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0628\u0631\u06AF\u0647 \u0645\u0646\u0628\u0639",
        retry_download_button_tooltip:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0645\u062C\u062F\u062F",
        delete_file_button_tooltip:
          "\u062D\u0630\u0641 \u0641\u0627\u06CC\u0644",
        download_directory_button_tooltip:
          "\u0646\u0645\u0627\u06CC\u0634 \u067E\u0648\u0634\u0647 \u062F\u0627\u0646\u0644\u0648\u062F",
        clear_downloaded_tooltip:
          "\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062F\u0627\u0646\u0644\u0648\u062F\u0647\u0627\u06CC \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647",
        show_in_popup_button_tooltip:
          "\u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u067E\u0646\u062C\u0631\u0647 \u0628\u0627\u0632\u0634\u0648\u0646\u062F\u0647",
        show_in_sidebar_button_tooltip:
          "\u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0646\u0648\u0627\u0631 \u06A9\u0646\u0627\u0631\u06CC",
        video_not_playing_button_tooltip:
          "\u0648\u06CC\u062F\u06CC\u0648 \u067E\u062E\u0634 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F\u061F",
        play: "\u067E\u062E\u0634",
        warn_drm_tooltip:
          "\u0634\u0646\u0627\u0633\u0627\u06CC\u06CC \u0634\u062F DRM",
        version_title: "\u0646\u0633\u062E\u0647",
        account_title:
          "\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        one_hundred_downloads_title:
          "\u0634\u0645\u0627 \u06F1\u06F0\u06F0 \u0648\u06CC\u062F\u06CC\u0648 \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
        leave_review_description:
          "\u0627\u0645\u06CC\u062F\u0648\u0627\u0631\u06CC\u0645 \u0627\u0632 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u06CC\u0646 \u0627\u0641\u0632\u0648\u0646\u0647 \u0631\u0627\u0636\u06CC \u0628\u0648\u062F\u0647 \u0628\u0627\u0634\u06CC\u062F :) \u0645\u0627\u06CC\u0644 \u0628\u0647 \u0646\u0648\u0634\u062A\u0646 \u06CC\u06A9 \u0646\u0638\u0631 \u0645\u062B\u0628\u062A \u062F\u0631 \u0633\u0627\u06CC\u062A \u0627\u0641\u0632\u0648\u0646\u0647 \u0647\u0633\u062A\u06CC\u062F\u061F",
        leave_review_button: "\u062B\u0628\u062A \u0646\u0638\u0631",
        account_status: "\u0648\u0636\u0639\u06CC\u062A",
        account_status_premium:
          "($1) \u0646\u0633\u062E\u0647 \u0648\u06CC\u0698\u0647",
        free_account:
          "\u0646\u0633\u062E\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
        copy_to_clipboard:
          "\u06A9\u067E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u0647 \u06A9\u0644\u06CC\u067E\u200C\u0628\u0648\u0631\u062F",
        my_account_button:
          "\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0645\u0646",
        download_title: "\u062F\u0627\u0646\u0644\u0648\u062F\u0647\u0627",
        show_notification:
          "\u0646\u0645\u0627\u06CC\u0634 \u0627\u0639\u0644\u0627\u0646 \u067E\u0633 \u0627\u0632 \u062A\u06A9\u0645\u06CC\u0644 \u062F\u0627\u0646\u0644\u0648\u062F",
        max_parallel_downloads:
          "\u062D\u062F\u0627\u06A9\u062B\u0631 \u062F\u0627\u0646\u0644\u0648\u062F \u0647\u0645\u0632\u0645\u0627\u0646",
        saveas_detected_warning:
          "\u062A\u0634\u062E\u06CC\u0635 \u062F\u0627\u062F\u06CC\u0645 \u06A9\u0647 \u0645\u0631\u0648\u0631\u06AF\u0631 \u0634\u0645\u0627 \u0628\u0639\u062F \u0627\u0632 \u0627\u062A\u0645\u0627\u0645 \u062F\u0627\u0646\u0644\u0648\u062F\u060C \u067E\u0646\u062C\u0631\u0647 \xAB\u0630\u062E\u06CC\u0631\u0647 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646\xBB \u0631\u0627 \u0646\u0645\u0627\u06CC\u0634 \u0645\u06CC\u062F\u0647\u062F. \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0645\u06CC\u06A9\u0646\u06CC\u0645 \u0627\u06CC\u0646 \u06AF\u0632\u06CC\u0646\u0647 \u0631\u0627 \u062F\u0631 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0631\u0648\u0631\u06AF\u0631 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0646\u06CC\u062F",
        change_saveas_setting:
          "\u062A\u063A\u06CC\u06CC\u0631 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        download_directory_title:
          "\u067E\u0648\u0634\u0647 \u062F\u0627\u0646\u0644\u0648\u062F",
        download_directory_description:
          "\u0648\u06CC\u062F\u06CC\u0648\u0647\u0627 \u062F\u0631 \u067E\u0648\u0634\u0647 \u062F\u0627\u0646\u0644\u0648\u062F \u067E\u06CC\u0634\u200C\u0641\u0631\u0636 \u0645\u0631\u0648\u0631\u06AF\u0631 \u0630\u062E\u06CC\u0631\u0647 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F. \u0634\u0645\u0627 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u06CC\u06A9 \u0632\u06CC\u0631\u067E\u0648\u0634\u0647 \u0645\u0634\u062E\u0635 \u06A9\u0646\u06CC\u062F. \u067E\u0648\u0634\u0647\u200C\u0647\u0627\u06CC \u062F\u0627\u0646\u0644\u0648\u062F \u0645\u062E\u0635\u0648\u0635 \u0647\u0631 \u0633\u0627\u06CC\u062A \u0631\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0628\u0627 \u0627\u0628\u0632\u0627\u0631 SmartNaming \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0631\u062F",
        change_browser_download_directory:
          "\u062A\u063A\u06CC\u06CC\u0631 \u067E\u0648\u0634\u0647 \u062F\u0627\u0646\u0644\u0648\u062F \u0645\u0631\u0648\u0631\u06AF\u0631",
        bad_download_subdirectory_warning:
          "\u0632\u06CC\u0631\u067E\u0648\u0634\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0645\u0634\u062E\u0635 \u06A9\u0631\u062F\u06CC\u062F \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A",
        download_subdirectory:
          "\u0632\u06CC\u0631\u067E\u0648\u0634\u0647 \u062F\u0627\u0646\u0644\u0648\u062F",
        private_browsing_title:
          "\u062D\u0627\u0644\u062A \u0646\u0627\u0634\u0646\u0627\u0633",
        private_browsing_warning:
          "\u0627\u0641\u0632\u0648\u0646\u0647 \u062F\u0631 \u067E\u0646\u062C\u0631\u0647\u200C\u0647\u0627\u06CC \u062E\u0635\u0648\u0635\u06CC/\u0646\u0627\u0634\u0646\u0627\u0633 \u0641\u0639\u0627\u0644 \u0646\u06CC\u0633\u062A. \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u062D\u0627\u0644\u062A \u0628\u0627\u06CC\u062F \u0627\u06CC\u0646 \u06AF\u0632\u06CC\u0646\u0647 \u0631\u0627 \u0628\u0647\u200C\u0635\u0648\u0631\u062A \u062F\u0633\u062A\u06CC \u0631\u0648\u0634\u0646 \u06A9\u0646\u06CC\u062F (\u0627\u06CC\u0646 \u06A9\u0627\u0631 \u0636\u0631\u0648\u0631\u06CC \u0646\u06CC\u0633\u062A)",
        private_browsing_notifications:
          "\u0646\u0645\u0627\u06CC\u0634 \u0627\u0639\u0644\u0627\u0646 \u0628\u0631\u0627\u06CC \u062F\u0627\u0646\u0644\u0648\u062F\u0647\u0627\u06CC \u062E\u0635\u0648\u0635\u06CC",
        private_browsing_button:
          "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0627\u0644\u062A \u0646\u0627\u0634\u0646\u0627\u0633",
        throttle_youtube:
          "\u0645\u062D\u062F\u0648\u062F \u06A9\u0631\u062F\u0646 \u0633\u0631\u0639\u062A \u06CC\u0648\u062A\u06CC\u0648\u0628 (\u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u062F\u062A\u0631\u060C \u0627\u0645\u0627 \u0627\u062D\u062A\u0645\u0627\u0644 \u0645\u0633\u062F\u0648\u062F \u0634\u062F\u0646 \u06A9\u0645\u062A\u0631)",
        prefer_original_audio:
          "\u0627\u0648\u0644\u0648\u06CC\u062A \u0628\u0627 \u0635\u062F\u0627\u06CC \u0627\u0635\u0644\u06CC",
        settings_history_title: "\u062A\u0627\u0631\u06CC\u062E\u0686\u0647",
        transient_history_description:
          "\u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u0646\u0644\u0648\u062F\u0647\u0627\u06CC \u06A9\u0627\u0645\u0644 \u0634\u062F\u0647 \u062F\u0631 \u067E\u0646\u0644",
        history_limit:
          "\u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062F\u0627\u0646\u0644\u0648\u062F \u067E\u0633 \u0627\u0632 \u0686\u0646\u062F \u0631\u0648\u0632 \u0641\u0631\u0627\u0645\u0648\u0634 \u0634\u0648\u062F\u061F",
        appearance_title:
          "\u0646\u0645\u0627\u06CC \u0638\u0627\u0647\u0631\u06CC",
        theme_title: "\u067E\u0648\u0633\u062A\u0647",
        theme_light: "\u0631\u0648\u0634\u0646",
        theme_dark: "\u062A\u0627\u0631\u06CC\u06A9",
        theme_system:
          "\u067E\u06CC\u0634\u200C\u0641\u0631\u0636 \u0633\u06CC\u0633\u062A\u0645",
        popup_size_title:
          "\u0627\u0646\u062F\u0627\u0632\u0647 \u067E\u0646\u062C\u0631\u0647",
        popup_size_small: "\u06A9\u0648\u0686\u06A9",
        popup_size_medium: "\u0645\u062A\u0648\u0633\u0637",
        popup_size_big: "\u0628\u0632\u0631\u06AF",
        font_size_title:
          "\u0627\u0646\u062F\u0627\u0632\u0647 \u0645\u062A\u0646",
        font_size_default: "\u067E\u06CC\u0634\u200C\u0641\u0631\u0636",
        font_size_large: "\u0628\u0632\u0631\u06AF",
        font_size_verylarge:
          "\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF",
        panel_position_title:
          "\u0645\u0648\u0642\u0639\u06CC\u062A \u067E\u0646\u0644",
        use_popup:
          "\u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u067E\u0646\u062C\u0631\u0647 \u0628\u0627\u0632\u0634\u0648\u0646\u062F\u0647",
        use_sidebar:
          "\u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0646\u0648\u0627\u0631 \u06A9\u0646\u0627\u0631\u06CC",
        behavior_title: "\u0639\u0645\u0644\u06A9\u0631\u062F",
        controls_title:
          "\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0646\u062A\u0631\u0644\u06CC",
        show_in_context_menu:
          "\u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0641\u0631\u0645\u0627\u0646\u200C\u0647\u0627 \u0627\u0632 \u0637\u0631\u06CC\u0642 \u06A9\u0644\u06CC\u06A9 \u0631\u0627\u0633\u062A \u0631\u0648\u06CC \u0635\u0641\u062D\u0647 (\u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0646 \u0628\u0647 \u06A9\u0644\u06CC\u06A9 \u0631\u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0635\u0648\u0631\u062A\u06CC \u06A9\u0647 \u062F\u0631 \u0635\u0641\u062D\u0647 \u0648\u0628 \u06A9\u0644\u06CC\u06A9 \u0631\u0627\u0633\u062A \u06A9\u0646\u06CC\u062F \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0645\u06CC \u0634\u0648\u062F)",
        restart_addon:
          "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u062C\u062F\u062F \u0627\u0641\u0632\u0648\u0646\u0647",
        reset_settings:
          "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        prefered_quality:
          "\u06A9\u06CC\u0641\u06CC\u062A \u067E\u06CC\u0634\u200C\u0641\u0631\u0636 \u0648\u06CC\u062F\u06CC\u0648",
        prefered_quality_highest:
          "\u062D\u062F\u0627\u06A9\u062B\u0631 \u06A9\u06CC\u0641\u06CC\u062A (\u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u062F\u060C \u06A9\u06CC\u0641\u06CC\u062A \u0628\u0627\u0644\u0627)",
        prefered_quality_1080p:
          "\u06A9\u06CC\u0641\u06CC\u062A 1080 (\u062A\u0646\u0638\u06CC\u0645 \u067E\u06CC\u0634\u200C\u0641\u0631\u0636 \u0645\u0646\u0627\u0633\u0628)",
        prefered_quality_720p:
          "\u06A9\u06CC\u0641\u06CC\u062A 720 (\u062F\u0627\u0646\u0644\u0648\u062F \u0633\u0631\u06CC\u0639\u060C \u06A9\u06CC\u0641\u06CC\u062A \u067E\u0627\u06CC\u06CC\u0646)",
        prefered_quality_480p:
          "\u06A9\u06CC\u0641\u06CC\u062A 480 (\u062F\u0627\u0646\u0644\u0648\u062F \u0633\u0631\u06CC\u0639\u200C\u062A\u0631\u060C \u06A9\u06CC\u0641\u06CC\u062A \u067E\u0627\u06CC\u06CC\u0646\u200C\u062A\u0631)",
        prefer_mkv:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0634\u0648\u062F MKV \u062F\u0631 \u0635\u0648\u0631\u062A \u0627\u0645\u06A9\u0627\u0646\u060C \u0628\u0627 \u0641\u0631\u0645\u062A",
        preview_mode_title:
          "\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0631\u0633\u0627\u0646\u0647",
        preview_mode_none: "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644",
        preview_mode_video:
          "\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u06A9\u0648\u062A\u0627\u0647 \u0648\u06CC\u062F\u06CC\u0648",
        preview_mode_image: "\u062A\u0635\u0648\u06CC\u0631",
        history_title:
          "\u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062F\u0627\u0646\u0644\u0648\u062F",
        history_warning:
          "\u0645\u0627 \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062F\u0627\u0646\u0644\u0648\u062F \u0634\u0645\u0627 \u0631\u0627 \u062B\u0628\u062A \u0646\u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645. \u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u06A9\u0647 \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062F\u0627\u0646\u0644\u0648\u062F \u0634\u0645\u0627 \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u0645\u061F",
        history_warning_2:
          "\u0646\u06AF\u0631\u0627\u0646 \u0646\u0628\u0627\u0634\u06CC\u062F\u060C \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0641\u0642\u0637 \u0631\u0648\u06CC \u062F\u0633\u062A\u06AF\u0627\u0647 \u0634\u0645\u0627 \u0628\u0627\u0642\u06CC \u0645\u06CC\u200C\u0645\u0627\u0646\u062F. \u0645\u0627 \u0628\u0647 \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC \u0634\u0645\u0627 \u0627\u062D\u062A\u0631\u0627\u0645 \u0645\u06CC\u200C\u06AF\u0630\u0627\u0631\u06CC\u0645",
        enable_history:
          "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u062A\u0627\u0631\u06CC\u062E\u0686\u0647",
        clear_history:
          "\u067E\u0627\u06A9\u200C \u06A9\u0631\u062F\u0646 \u062A\u0627\u0631\u06CC\u062E\u0686\u0647",
        disable_history:
          "\u062A\u0627\u0631\u06CC\u0686\u0647 \u0645\u0646 \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0646\u06A9\u0646",
        no_downloads_yet:
          "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0645\u0648\u0631\u062F\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",
        download_failed:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F",
        download_failed_description:
          "\u0628\u0627 \u0639\u0631\u0636 \u067E\u0648\u0632\u0634\u060C \u062F\u0631 \u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0645\u0648\u0641\u0642 \u0646\u0628\u0648\u062F\u06CC\u0645. \u0647\u0645\u0648\u0627\u0631\u0647 \u0645\u06CC\u200C\u06A9\u0648\u0634\u06CC\u0645 \u062A\u0627 \u0627\u0632 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC \u06AF\u0648\u0646\u0627\u06AF\u0648\u0646 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u06A9\u0646\u06CC\u0645. \u062F\u0631 \u0635\u0648\u0631\u062A \u0627\u0645\u06A9\u0627\u0646 \u0627\u06CC\u0646 \u062E\u0637\u0627 \u0631\u0627 \u06AF\u0632\u0627\u0631\u0634 \u06A9\u0646\u06CC\u062F. \u0628\u0633\u06CC\u0627\u0631  \u0633\u067E\u0627\u0633\u06AF\u0632\u0627\u0631 \u062E\u0648\u0627\u0647\u06CC\u0645 \u0628\u0648\u062F (\u06AF\u0632\u0627\u0631\u0634 \u0628\u0635\u0648\u0631\u062A \u0646\u0627\u0634\u0646\u0627\u0633 \u0627\u0633\u062A!)",
        download_interrupted:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0646\u0627\u062A\u0645\u0627\u0645 \u0645\u0627\u0646\u062F",
        download_interrupted_description:
          "\u0641\u0627\u06CC\u0644 \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062F\u0627\u0646\u0644\u0648\u062F \u0634\u062F\u060C \u0627\u0645\u0627 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0645\u0634\u06A9\u0644 \u0634\u0628\u06A9\u0647\u060C \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0641\u0627\u06CC\u0644 \u06A9\u0648\u062A\u0627\u0647\u200C\u062A\u0631 \u0627\u0632 \u062D\u062F \u0627\u0646\u062A\u0638\u0627\u0631 \u0628\u0627\u0634\u062F.  \u0645\u06CC\u200C\u06A9\u0648\u0634\u06CC\u0645 \u062A\u0627 \u0627\u0632 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC \u06AF\u0648\u0646\u0627\u06AF\u0648\u0646 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u06A9\u0646\u06CC\u0645. \u062F\u0631 \u0635\u0648\u0631\u062A \u0627\u0645\u06A9\u0627\u0646 \u0627\u06CC\u0646 \u062E\u0637\u0627 \u0631\u0627 \u06AF\u0632\u0627\u0631\u0634 \u06A9\u0646\u06CC\u062F. \u0628\u0633\u06CC\u0627\u0631  \u0633\u067E\u0627\u0633\u06AF\u0632\u0627\u0631 \u062E\u0648\u0627\u0647\u06CC\u0645 \u0628\u0648\u062F (\u06AF\u0632\u0627\u0631\u0634 \u0628\u0635\u0648\u0631\u062A \u0646\u0627\u0634\u0646\u0627\u0633 \u0627\u0633\u062A!)",
        download_with_drm_failed_description:
          "\u0645\u0634\u06A9\u0644\u06CC \u067E\u06CC\u0634 \u0622\u0645\u062F. \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0627\u06CC\u0646 \u0648\u06CC\u062F\u0626\u0648 \u062F\u0627\u0631\u0627\u06CC \u0645\u062D\u0627\u0641\u0638\u062A \u0627\u0633\u062A. \u0648\u06CC\u062F\u0626\u0648\u0647\u0627\u06CC \u062F\u0627\u0631\u0627\u06CC \u0645\u062D\u0627\u0641\u0638\u062A \u062A\u0648\u0633\u0637 \u0627\u06CC\u0646 \u0627\u0641\u0632\u0648\u0646\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC\u200C\u0634\u0648\u0646\u062F. \u062E\u0637\u0627\u06CC DRM",
        no_youtube:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0627\u0632 \u06CC\u0648\u062A\u06CC\u0648\u0628 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A",
        no_youtube_description:
          "\u0645\u062A\u0623\u0633\u0641\u0627\u0646\u0647 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0648\u0628 \u06AF\u0648\u06AF\u0644 \u06A9\u0631\u0648\u0645 \u0627\u062C\u0627\u0632\u0647 \u0646\u0645\u06CC\u200C\u062F\u0647\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627\u06CC\u06CC \u0628\u0631\u0627\u06CC \u062F\u0627\u0646\u0644\u0648\u062F \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u06CC\u0648\u062A\u06CC\u0648\u0628 \u0645\u0646\u062A\u0634\u0631 \u0634\u0648\u0646\u062F\u060C \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0627\u06CC\u0646 \u0642\u0627\u0628\u0644\u06CC\u062A \u0631\u0627 \u062F\u0631 \u0646\u0633\u062E\u0647 \u06A9\u0631\u0648\u0645 \u0627\u0641\u0632\u0648\u0646\u0647 \u0642\u0631\u0627\u0631 \u062F\u0647\u06CC\u0645",
        no_youtube_description_2:
          "\u0644\u0637\u0641\u0627\u064B \u0627\u0632 \u0641\u0627\u06CC\u0631\u0641\u0627\u06A9\u0633 \u06CC\u0627 \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0627\u062C \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F",
        premium_required:
          "\u0646\u06CC\u0627\u0632 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0648\u06CC\u0698\u0647",
        premium_yt_required_description:
          "\u0628\u062F\u0648\u0646 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0648\u06CC\u0698\u0647\u060C \u062F\u0627\u0646\u0644\u0648\u062F \u0627\u0632 \u06CC\u0648\u062A\u06CC\u0648\u0628 \u062A\u0646\u0647\u0627 \u06F2 \u0633\u0627\u0639\u062A \u067E\u0633 \u0627\u0632 \u062F\u0627\u0646\u0644\u0648\u062F \u0642\u0628\u0644\u06CC \u0627\u0645\u06A9\u0627\u0646\u200C\u067E\u0630\u06CC\u0631 \u0627\u0633\u062A",
        premium_hls_required_description:
          "\u0628\u062F\u0648\u0646 \u062F\u0627\u0634\u062A\u0646 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0648\u06CC\u0698\u0647\u060C \u0641\u0642\u0637 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0647\u0631 \u062F\u0648 \u0633\u0627\u0639\u062A \u06CC\u06A9\u0628\u0627\u0631 \u0648\u06CC\u062F\u0626\u0648\u0647\u0627\u06CC\u06CC \u0628\u0627 \u0627\u06CC\u0646 \u0641\u0631\u0645\u062A\u200C\u0647\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0646\u06CC\u062F: HLS \u0648 MPD",
        premium_all_required_description:
          "\u0628\u062F\u0648\u0646 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0648\u06CC\u0698\u0647\u060C \u062F\u0627\u0646\u0644\u0648\u062F \u062A\u0646\u0647\u0627 \u06F2 \u0633\u0627\u0639\u062A \u067E\u0633 \u0627\u0632 \u062F\u0627\u0646\u0644\u0648\u062F \u0642\u0628\u0644\u06CC \u0627\u0645\u06A9\u0627\u0646\u200C\u067E\u0630\u06CC\u0631 \u0627\u0633\u062A",
        youtube_too_many_downloads:
          "\u0627\u06CC \u062F\u0627\u062F \u0628\u06CC\u062F\u0627\u062F\u060C \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u06CC\u0648\u062A\u06CC\u0648\u0628 \u0645\u0633\u062F\u0648\u062F \u0634\u062F\u0647 \u0627\u0633\u062A",
        youtube_too_many_downloads_description:
          "\u06AF\u0627\u0647\u06CC \u06CC\u0648\u062A\u06CC\u0648\u0628 \u0645\u062D\u062F\u0648\u062F\u06CC\u062A\u06CC \u0628\u0631\u0627\u06CC \u062A\u0639\u062F\u0627\u062F \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u06A9\u0631\u062F \u0627\u0639\u0645\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u062F. \u0645\u062A\u0623\u0633\u0641\u0627\u0646\u0647 \u06A9\u0627\u0631\u06CC \u0627\u0632 \u062F\u0633\u062A \u0645\u0627 \u0633\u0627\u062E\u062A\u0647 \u0646\u06CC\u0633\u062A. \u0644\u0637\u0641\u0627\u064B \u0628\u0639\u062F\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F",
        stop: "\u062A\u0648\u0642\u0641",
        cancel: "\u0644\u063A\u0648",
        copy_url: "\u06A9\u067E\u06CC \u0644\u06CC\u0646\u06A9",
        always_copy_url:
          "\u0647\u0645\u06CC\u0634\u0647 \u0644\u06CC\u0646\u06A9 \u0631\u0627 \u06A9\u067E\u06CC \u06A9\u0646",
        download_button: "\u062F\u0627\u0646\u0644\u0648\u062F",
        download_as_button_and_menu:
          "...\u062F\u0627\u0646\u0644\u0648\u062F \u0628\u0635\u0648\u0631\u062A",
        rename_short: "\u062A\u063A\u06CC\u06CC\u0631 \u0646\u0627\u0645",
        always_download_as_menu:
          "...\u0647\u0645\u06CC\u0634\u0647 \u062F\u0627\u0646\u0644\u0648\u062F \u0628\u0647 \u0635\u0648\u0631\u062A",
        download_audio_button: "\u0635\u062F\u0627",
        download_audio_and_video_menu:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0635\u062F\u0627 \u0648 \u0648\u06CC\u062F\u06CC\u0648",
        download_audio_only_menu:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0635\u062F\u0627",
        audio_only_for_this_website:
          "\u0647\u0645\u06CC\u0634\u0647 \u0641\u0642\u0637 \u0635\u062F\u0627 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0633\u0627\u06CC\u062A",
        details: "\u062C\u0632\u0626\u06CC\u0627\u062A",
        report: "\u06AF\u0632\u0627\u0631\u0634",
        reporting:
          "...\u062F\u0631 \u062D\u0627\u0644 \u06AF\u0632\u0627\u0631\u0634",
        reported_thankyou:
          "\u0633\u067E\u0627\u0633 \u0627\u0632 \u0634\u0645\u0627",
      },
      web: {
        back: "\u0628\u0627\u0632\u06AF\u0634\u062A",
        header_help: "\u0631\u0627\u0647\u0646\u0645\u0627",
        header_ask_question:
          "\u067E\u0631\u0633\u0634\u06CC \u062F\u0627\u0631\u06CC\u062F\u061F \u0627\u0632 \u0645\u0627 \u0628\u067E\u0631\u0633\u06CC\u062F",
        activate_title:
          "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC",
        activate_pending:
          "...\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631",
        activate_success: "\u0645\u0648\u0641\u0642\u06CC\u062A",
        activate_error: "\u062E\u0637\u0627",
        activate_no_addon_found:
          "\u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0627\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F. \u0622\u06CC\u0627 \u0627\u0641\u0632\u0648\u0646\u0647 \u0646\u0635\u0628 \u0634\u062F\u0647 \u0627\u0633\u062A\u061F",
        activate_no_method_found:
          "\u0631\u0648\u0634\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
        activate_help_me: "\u06A9\u0645\u06A9\u0645 \u06A9\u0646",
        issue_title:
          "\u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u062E\u0631\u06CC\u062F",
        issue_submit: "\u0627\u0631\u0633\u0627\u0644",
        issue_thank_you:
          "\u0633\u067E\u0627\u0633 \u0627\u0632 \u0634\u0645\u0627",
        issue_enter_email:
          "\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u062E\u0631\u06CC\u062F \u062E\u0648\u062F\u060C \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0628\u0631\u0627\u06CC \u062E\u0631\u06CC\u062F \u0644\u0627\u06CC\u0633\u0646\u0633 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
        issue_email_sent:
          "\u0645\u0627 \u06CC\u06A9 \u0627\u06CC\u0645\u06CC\u0644 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u06CC\u0645 \u06A9\u0647 \u0634\u0627\u0645\u0644 \u0644\u06CC\u0646\u06A9\u06CC \u0628\u0631\u0627\u06CC \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0645\u062D\u0635\u0648\u0644\u062A\u0627\u0646 \u0627\u0633\u062A",
        issue_or_digit:
          "\u06CC\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u06A9\u062F \u06F6 \u0631\u0642\u0645\u06CC \u06A9\u0647 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u06CC\u0645 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
        issue_just_digit:
          "\u06A9\u062F \u06F6 \u0631\u0642\u0645\u06CC \u06A9\u0647 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u06CC\u0645 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F:",
        issue_i_have_a_code:
          "(\u0627\u06AF\u0631 \u0642\u0628\u0644\u0627\u064B \u06A9\u062F \u062F\u0627\u0631\u06CC\u062F\u060C \u0627\u06CC\u0646\u062C\u0627 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F)",
        issue_i_have_a_key:
          "(\u0627\u06AF\u0631 \u06A9\u0644\u06CC\u062F \u0644\u0627\u06CC\u0633\u0646\u0633 \u062F\u0627\u0631\u06CC\u062F\u060C \u0627\u06CC\u0646\u062C\u0627 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F)",
        issue_key:
          "\u0644\u0637\u0641\u0627 \u06A9\u0644\u06CC\u062F \u0644\u0627\u06CC\u0633\u0646\u0633 \u0627\u06CC\u0646 \u0627\u0641\u0632\u0648\u0646\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u062A\u06CC\u062F:",
        landing_text1:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0647\u0631 \u0648\u06CC\u062F\u06CC\u0648 \u0627\u0632 \u0647\u0631 \u0633\u0627\u06CC\u062A\u06CC\u060C \u0628\u062F\u0648\u0646 \u062F\u0631\u062F\u0633\u0631!",
        landing_text2:
          "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0627\u0632 \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0\u06F0 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A",
        landing_text3:
          "\u0645\u0648\u0631\u062F \u0627\u0639\u062A\u0645\u0627\u062F \u06F7 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u06A9\u0627\u0631\u0628\u0631",
        landing_text4:
          "\u0627\u0645\u062A\u06CC\u0627\u0632 \u06F4.\u06F5 \u0633\u062A\u0627\u0631\u0647 \u062F\u0631 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0627\u0641\u0632\u0648\u0646\u0647",
        landing_install_for_google:
          "\u0646\u0635\u0628 \u0628\u0631\u0627\u06CC \u06A9\u0631\u0648\u0645",
        landing_install_for_mozilla:
          "\u0646\u0635\u0628 \u0628\u0631\u0627\u06CC \u0641\u0627\u06CC\u0631\u0641\u0627\u06A9\u0633",
        landing_install_for_microsoft:
          "\u0646\u0635\u0628 \u0628\u0631\u0627\u06CC \u0627\u062C",
        landing_feature1_title:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0628\u0627 \u06A9\u06CC\u0641\u06CC\u062A \u0628\u0627\u0644\u0627 \u0648 \u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0633\u0631\u0639\u062A",
        landing_feature1_description:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627 \u0628\u0627 \u06A9\u06CC\u0641\u06CC\u062A \u0628\u0627\u0644\u0627 \u0648 \u062D\u062F\u0627\u06A9\u062B\u0631 \u0633\u0631\u0639\u062A. \u0628\u0627 \u0627\u0641\u062A\u062E\u0627\u0631 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u06CC\u0645 \u06A9\u0647 \u0633\u0631\u06CC\u0639\u200C\u062A\u0631\u06CC\u0646 \u0645\u0648\u062A\u0648\u0631 \u062F\u0627\u0646\u0644\u0648\u062F \u0645\u0648\u062C\u0648\u062F \u0631\u0627 \u062F\u0627\u0631\u06CC\u0645",
        landing_feature2_title:
          "\u0628\u0627\u06CC\u06AF\u0627\u0646\u06CC \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627",
        landing_feature2_description:
          "\u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0645\u0648\u0631\u062F \u0639\u0644\u0627\u0642\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0627\u06CC\u06AF\u0627\u0646\u06CC \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0647\u06CC\u0686 \u0686\u06CC\u0632\u06CC \u0627\u0632 \u062F\u0633\u062A \u0646\u0631\u0648\u062F",
        landing_feature3_title:
          "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0627\u0632 \u067E\u062E\u0634 \u0632\u0646\u062F\u0647",
        landing_feature3_description:
          "\u0627\u0632 \u062A\u0645\u0627\u0634\u0627\u06CC \u0622\u0641\u0644\u0627\u06CC\u0646 \u067E\u062E\u0634\u200C\u0647\u0627\u06CC \u0632\u0646\u062F\u0647 \u0644\u0630\u062A \u0628\u0628\u0631\u06CC\u062F \u0648 \u062E\u0648\u062F \u0631\u0627 \u0627\u0632 \u0645\u062D\u062F\u0648\u062F\u06CC\u062A\u200C\u0647\u0627\u06CC \u0632\u0645\u0627\u0646 \u0648\u0627\u0642\u0639\u06CC \u0622\u0632\u0627\u062F \u06A9\u0646\u06CC\u062F",
        landing_feature4_title:
          "\u062F\u0627\u0646\u0644\u0648\u062F \u0635\u062F\u0627",
        landing_feature4_description:
          "\u0635\u062F\u0627 \u0631\u0627 \u0627\u0632 \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627 \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u06A9\u0646\u06CC\u062F \u0648 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0641\u0627\u06CC\u0644 \u0635\u0648\u062A\u06CC \u06CC\u0627 \u067E\u0627\u062F\u06A9\u0633\u062A \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u06AF\u0648\u0634 \u062F\u0647\u06CC\u062F",
        premium_hero1:
          "\u06CC\u06A9\u200C\u0628\u0627\u0631 \u0628\u067E\u0631\u062F\u0627\u0632\u06CC\u062F \u0648 \u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F",
        premium_hero2:
          "\u062F\u0631\u06CC\u0627\u0641\u062A \u0644\u0627\u06CC\u0633\u0646\u0633 \u0645\u0627\u062F\u0627\u0645\u200C\u0627\u0644\u0639\u0645\u0631 \u0628\u0631\u0627\u06CC Video DownloadHelper",
        premium_hero3:
          "\u0647\u0631 \u062A\u0639\u062F\u0627\u062F \u0648\u06CC\u062F\u06CC\u0648 \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F\u060C \u0628\u062F\u0648\u0646 \u0647\u06CC\u0686 \u0645\u062D\u062F\u0648\u062F\u06CC\u062A\u06CC",
        premium_supported_payment_methods:
          "\u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u062F\u0647",
        premium_buy: "\u062E\u0631\u06CC\u062F",
        welcome_text:
          "\u062F\u06CC\u06AF\u0631 \u0647\u06CC\u0686 \u0648\u06CC\u062F\u06CC\u0648\u06CC\u06CC \u0631\u0627 \u0627\u0632 \u062F\u0633\u062A \u0646\u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u0627\u062F!",
        welcome_pin_message:
          "\u0622\u06CC\u06A9\u0648\u0646 \u0627\u0641\u0632\u0648\u0646\u0647 \u0631\u0627 \u0628\u0647 \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631 \u062E\u0648\u062F \u0633\u0646\u062C\u0627\u0642 \u06A9\u0646\u06CC\u062F",
      },
    },
    fr: {
      addon: {
        appDesc: "T\xE9l\xE9charger des vid\xE9os \xE0 partir du Web",
        restore_purchase_button: "Restaurer votre achat",
        get_premium_button: "Obtenir le Premium",
        back: "Retour",
        rm_notifications_all: "Ignorer toutes les notifications",
        waiting_for_media: "En attente de m\xE9dias\u2026",
        nomedia_title: "Vous ne voyez pas votre vid\xE9o ?",
        nomedia_description:
          "D\xE9marrez la vid\xE9o (et passez les publicit\xE9s si n\xE9cessaire) pour aider \xE0 d\xE9tecter le contenu. Ou signalez nous un contenu manquant.",
        nomedia_reload_button: "Forcer la d\xE9tection",
        nomedia_reload_button_tooltip:
          "Force le rechargement de la page (efface les cookies)",
        show_nomedia_button: "Pas de vid\xE9o ?",
        show_nomedia_button_tooltip:
          "Cliquez ici si vous ne voyez pas votre vid\xE9o",
        setting_button_tooltip: "Param\xE8tres",
        history_button_tooltip:
          "Afficher l'historique de t\xE9l\xE9chargements ",
        show_all_history_button: "Tout montrer",
        complete_title: "T\xE9l\xE9chargements termin\xE9s",
        hide_complete_button: "cacher",
        translate_button_tooltip: "Aider \xE0 traduire VDH",
        open_source_tab_button_tooltip: "Ouvrir l'onglet d'origine",
        retry_download_button_tooltip: "R\xE9essayer le t\xE9l\xE9chargement",
        delete_file_button_tooltip: "Supprimer le fichier",
        download_directory_button_tooltip:
          "Montrer le dossier de t\xE9l\xE9chargement",
        clear_downloaded_tooltip:
          "Effacer les t\xE9l\xE9chargements termin\xE9s",
        show_in_popup_button_tooltip: "Afficher dans un popup",
        show_in_sidebar_button_tooltip: "Afficher dans une barre lat\xE9rale",
        video_not_playing_button_tooltip:
          "La vid\xE9o ne joue pas correctement ?",
        play: "Lire",
        warn_drm_tooltip: "DRM d\xE9tect\xE9s",
        version_title: "Version",
        account_title: "Compte",
        one_hundred_downloads_title:
          "Vous avez t\xE9l\xE9charg\xE9 100 vid\xE9os\xA0!",
        leave_review_description:
          "Nous esp\xE9rons que vous appr\xE9ciez Video DownloadHelper :) Voudriez-vous laisser un gentil commentaire sur le site de l'addon ?",
        leave_review_button: "Laissez un commentaire",
        account_status: "Statut",
        account_status_premium: "Premium ($1)",
        free_account: "Plan gratuit",
        copy_to_clipboard: "Copier",
        my_account_button: "Mon compte",
        download_title: "T\xE9l\xE9chargements",
        show_notification:
          "Afficher les notifications de fin de t\xE9l\xE9chargement",
        max_parallel_downloads: "T\xE9l\xE9chargements simultan\xE9s maximum ",
        saveas_detected_warning:
          "Nous avons d\xE9tect\xE9 que votre navigateur affiche une bo\xEEte de dialogue \xAB Enregistrer sous \xBB une fois le t\xE9l\xE9chargement termin\xE9. Nous vous recommandons de d\xE9sactiver cette option dans les param\xE8tres de votre navigateur.",
        change_saveas_setting: "Changer le param\xE8tre",
        download_directory_title: "R\xE9pertoire de t\xE9l\xE9chargement",
        download_directory_description:
          "Les vid\xE9os t\xE9l\xE9charg\xE9es sont plac\xE9es dans le r\xE9pertoire de t\xE9l\xE9chargement par d\xE9faut du navigateur. Vous pouvez aussi sp\xE9cifier un sous-r\xE9pertoire. Des r\xE9pertoires de t\xE9l\xE9chargement sp\xE9cifiques pour diff\xE9rents sites web peuvent \xEAtre param\xE9tr\xE9s avec l'outil de nommage intelligent ('smartnaming tool').",
        change_browser_download_directory:
          "Changer le r\xE9pertoire de t\xE9l\xE9chargement du navigateur",
        bad_download_subdirectory_warning:
          "Le sous-r\xE9pertoire que vous avez sp\xE9cifi\xE9 est invalide.",
        download_subdirectory: "Sous-r\xE9pertoire de t\xE9l\xE9chargement",
        private_browsing_title: "Navigation priv\xE9e",
        private_browsing_warning:
          "Video DownloadHelper n'est pas activ\xE9 en mode navigation priv\xE9e. Vous devez activer cette option \xE0 la main. (ce n'est pas obligatoire)",
        private_browsing_notifications:
          "Afficher une notification m\xEAme en navigation priv\xE9e",
        private_browsing_button:
          "Changer le param\xE8tre de navigation priv\xE9e",
        throttle_youtube:
          "Optimiser pour YouTube (t\xE9l\xE9chargements plus lents, mais moins susceptibles d'\xEAtre bloqu\xE9s)",
        prefer_original_audio: "Pr\xE9f\xE9rer l'audio original",
        settings_history_title: "Historique",
        transient_history_description:
          "Afficher les t\xE9l\xE9chargements finis dans la fen\xEAtres",
        history_limit: "Supprimer l'historique apr\xE8s X jours",
        appearance_title: "Apparence",
        theme_title: "Th\xE8me ",
        theme_light: "clair",
        theme_dark: "sombre",
        theme_system: "syst\xE8me",
        popup_size_title: "Taille de la fen\xEAtre",
        popup_size_small: "Petite",
        popup_size_medium: "Moyenne",
        popup_size_big: "Grande",
        panel_position_title: "Position de la fen\xEAtre",
        use_popup: "Afficher dans un popup",
        use_sidebar: "Afficher dans une barre lat\xE9rale",
        behavior_title: "Comportement",
        controls_title: "Contr\xF4les",
        show_in_context_menu:
          "Acc\xE9der aux commandes via un clic droit dans la page",
        restart_addon: "Recharger l'addon",
        reset_settings: "R\xE9initialiser les param\xE8tres",
        prefered_quality: "Qualit\xE9 de t\xE9l\xE9chargement",
        prefered_quality_highest:
          "La plus \xE9lev\xE9e (t\xE9l\xE9chargement lent, meilleure r\xE9solution)",
        prefered_quality_1080p: "1080p (bonne, par d\xE9faut)",
        prefered_quality_720p:
          "720p (t\xE9l\xE9chargement rapide, faible r\xE9solution)",
        prefer_mkv: "T\xE9l\xE9charger en MKV si possible",
        preview_mode_title: "Aper\xE7u du m\xE9dia",
        preview_mode_none: "D\xE9sactiv\xE9",
        preview_mode_video: "Court aper\xE7u vid\xE9o",
        preview_mode_image: "Image",
        history_title: "Historique des t\xE9l\xE9chargements",
        history_warning:
          "Nous ne sauvegardons pas votre historique de t\xE9l\xE9chargements. Voulez-vous que DownloadHelper conserve votre historique de t\xE9l\xE9chargements ?",
        history_warning_2:
          "Pas d'inqui\xE9tudes, tout reste stock\xE9 sur votre appareil. Votre vie priv\xE9e est importante pour nous.",
        enable_history: "Activer l'historique",
        clear_history: "Effacer l'historique",
        disable_history: "D\xE9sactiver l'historique",
        no_downloads_yet: "Pas encore d'entr\xE9es.",
        download_failed: "Le t\xE9l\xE9chargement a \xE9chou\xE9",
        download_failed_description:
          "Ce m\xE9dia n'a malheureusement pas pu \xEAtre t\xE9l\xE9charg\xE9. Nous essayons de supporter autant de sites que possible, donc n'h\xE9sitez pas \xE0 faire un rapport d'erreur (c'est anonyme !).",
        download_interrupted: "T\xE9l\xE9chargement interrompu",
        download_interrupted_description:
          "Nous avons r\xE9ussi \xE0 t\xE9l\xE9charger votre fichier, mais suite \xE0 un probl\xE8me de r\xE9seau il est possible que le fichier soit plus court que pr\xE9vu. Nous nous effor\xE7ons de soutenir autant de sites web que possible\xA0; il serait donc tr\xE8s utile de signaler ce probl\xE8me (c'est anonyme\xA0!).",
        download_with_drm_failed_description:
          "Quelque chose n\u2019a pas fonctionn\xE9. Et nous pensons que cette vid\xE9o est prot\xE9g\xE9e par un DRM. Nous ne prenons pas en charge les vid\xE9os avec DRM.",
        no_youtube:
          "Le t\xE9l\xE9chargement depuis Youtube n'est pas autoris\xE9",
        no_youtube_description:
          "Malheureusement, le Web Store Chrome n'autorisant pas d'extensions qui t\xE9l\xE9chargent des vid\xE9os YouTube, nous n'avons pas pu int\xE9grer cette fonctionnalit\xE9 dans la version Chrome de l'extension.",
        no_youtube_description_2: "Merci d'utiliser Firefox ou Microsoft Edge",
        premium_required: "Statut Premium n\xE9cessaire",
        premium_yt_required_description:
          "Sans statut Premium, un t\xE9l\xE9chargement YouTube ne peut \xEAtre effectu\xE9 que 2 heures apr\xE8s le pr\xE9c\xE9dent.",
        premium_hls_required_description:
          "Sans le statut Premium, un t\xE9l\xE9chargement HLS ou MPD ne peut \xEAtre effectu\xE9 que 2 heures apr\xE8s le pr\xE9c\xE9dent.",
        premium_all_required_description:
          "Sans le statut Premium, un t\xE9l\xE9chargement ne peut \xEAtre effectu\xE9 que 2 heures apr\xE8s le pr\xE9c\xE9dent.",
        youtube_too_many_downloads: "Oups, YouTube semble \xEAtre bloqu\xE9",
        youtube_too_many_downloads_description:
          "YouTube limite parfois le nombre de vid\xE9os pouvant \xEAtre demand\xE9es. Nous ne pouvons malheureusement rien y faire. R\xE9essayez plus tard.",
        stop: "Arr\xEAter",
        cancel: "Annuler",
        copy_url: "Copier l'URL",
        always_copy_url: "Toujours copier l'URL",
        download_button: "T\xE9l\xE9charger",
        download_as_button_and_menu: "T\xE9l\xE9charger sous\u2026",
        rename_short: "Renommer",
        always_download_as_menu:
          "Toujours t\xE9l\xE9charger en tant que \u2026",
        download_audio_button: "Audio",
        download_audio_and_video_menu: "T\xE9l\xE9charger audio & vid\xE9o",
        download_audio_only_menu: "T\xE9l\xE9charger l'audio",
        audio_only_for_this_website:
          "Toujours t\xE9l\xE9charger l'audio uniquement pour ce site",
        details: "D\xE9tails",
        report: "Signaler",
        reporting: "En cours \u2026",
        reported_thankyou: "Merci !",
      },
      web: {
        back: "Retour",
        header_help: "Aide",
        activate_title: "Activation",
        activate_pending: "Patientez \u2026",
        activate_success: "Succ\xE8s",
        activate_error: "Erreur",
        activate_no_addon_found:
          "Est-ce que l'addon est install\xE9 ? Nous ne le trouvons pas.",
        activate_no_method_found: "Pas de m\xE9thode trouv\xE9e.",
        activate_help_me: "J'ai besoin d'aide.",
        issue_title: "R\xE9activer votre achat",
        issue_submit: "Envoyer",
        issue_thank_you: "Merci",
        issue_enter_email:
          "Pour r\xE9activer votre achat, saisissez l'adresse e-mail que vous avez utilis\xE9 pour l'achat de votre licence :",
        issue_email_sent:
          "Nous vous avons envoy\xE9 un e-mail avec un lien pour r\xE9-activer votre produit.",
        issue_or_digit:
          "Ou vous pouvez aussi saisir le code \xE0 6 chiffres que nous vous avons envoy\xE9 :",
        issue_just_digit:
          "Saisir le code \xE0 6 chiffres que nous vous avons envoy\xE9 :",
        issue_i_have_a_code: "(Cliquez ici si vous avez d\xE9j\xE0 un code)",
        issue_i_have_a_key: "(Cliquez ici si vous avez une cl\xE9 de licence)",
        issue_key:
          "Saisissez votre cl\xE9 de licence Video DownloadHelper\xA0:",
        landing_text1:
          "T\xE9l\xE9chargez toutes vid\xE9os sur internet, facile, \xE7a marche !",
        landing_text2: "Plus de 1000+ sites support\xE9s",
        landing_text3: "Utilis\xE9 par plus de 7 millions d'utilisateurs",
        landing_text4: "4.5 \xE9toiles sur les stores",
        landing_install_for_google: "Installer pour Chrome",
        landing_install_for_mozilla: "Installer pour Firefox",
        landing_install_for_microsoft: "Installer pour Edge",
        landing_feature1_title:
          "T\xE9l\xE9chargement en HD \xE0 pleine vitesse",
        landing_feature1_description:
          "Les vid\xE9os sont t\xE9l\xE9charg\xE9es en haute d\xE9finition, \xE0 vitesse maximum. On est fier d'etre l'outil de t\xE9l\xE9chargement le plus rapide.",
        landing_feature2_title: "Archiver vos vid\xE9os",
        landing_feature2_description:
          "Archivez vos vid\xE9os favorites, ne perdez plus vos m\xE9dias.",
        landing_feature3_title: "Support de contenu stream\xE9",
        landing_feature3_description:
          "Visualisez les Live Stream hors-ligne, plus besoin d'etre pr\xE9sent constament.",
        landing_feature4_title: "T\xE9l\xE9chargement audio",
        landing_feature4_description:
          "Convertissez n'importe quel flux vid\xE9os en contenu audio, en MP3s ou podcasts.",
        premium_hero1: "Payez une fois, utilisez pour toujours",
        premium_hero2: "Obtenez une licence 'lifetime' Video DownloadHelper",
        premium_hero3:
          "T\xE9l\xE9chargez toutes vid\xE9os, autant que vous le souhaitez, sans limites.",
        premium_supported_payment_methods: "Moyens de paiement support\xE9s",
        premium_buy: "payer",
        welcome_text: "Votre downloadeur de vid\xE9o est pr\xEAt !",
        welcome_pin_message:
          "Activez l'ic\xF4ne de l'add-on dans votre barre d'outils :",
      },
    },
    hsb: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    hu: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    id: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    is: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    it: {
      addon: {
        appDesc: "Scarica i video dal Web.",
        restore_purchase_button: "Ripristina l'acquisto",
        get_premium_button: "Acquista l'accesso Premium",
        back: "Indietro",
        rm_notifications_all: "Ignora le notifiche",
        waiting_for_media: "In attesa di file multimediali\u2026",
        nomedia_title:
          "Non riesci a vedere i file multimediali che stai cercando?",
        nomedia_description:
          "Avvia il video (e salta gli annunci, se presenti) per rilevare i file multimediali o segnala i file multimediali mancanti.",
        nomedia_reload_button: "Forza il rilevamento",
        nomedia_reload_button_tooltip:
          "Forza la ricarica della pagina (pulisce i cookie)",
        show_nomedia_button: "Nessun video?",
        show_nomedia_button_tooltip: "Clicca qui se non trovi il tuo video",
        setting_button_tooltip: "Impostazioni",
        history_button_tooltip: "Mostra la Cronologia dei Download",
        show_all_history_button: "Mostra tutto",
        complete_title: "Completati",
        hide_complete_button: "Nascondi",
        translate_button_tooltip: "Aiuta a tradurre VDH",
        help_button_tooltip: "Aiuto",
        open_source_tab_button_tooltip: "Apri la scheda sorgente",
        retry_download_button_tooltip: "Scarica di nuovo",
        delete_file_button_tooltip: "Elimina il file",
        download_directory_button_tooltip: "Mostra la cartella download",
        clear_downloaded_tooltip: "Pulisci i download completati",
        show_in_popup_button_tooltip: "Mostra nel popup",
        show_in_sidebar_button_tooltip: "Mostra nella barra laterale",
        video_not_playing_button_tooltip: "Il video non viene riprodotto?",
        play: "Riproduci",
        warn_drm_tooltip: "Rilevato DRM",
        version_title: "Versione",
        account_title: "Account",
        one_hundred_downloads_title: "Hai scaricato 100 video!",
        leave_review_description:
          "Ci auguriamo che Video DownloadHelper ti piaccia :) Ti dispiacerebbe scrivere una recensione positiva sul sito web dell'estensione?",
        leave_review_button: "Lascia una recensione",
        account_status: "Status",
        account_status_premium: "Premium ($1)",
        free_account: "Piano gratuito",
        copy_to_clipboard: "Copia dati negli appunti",
        my_account_button: "Il mio account",
        download_title: "Download",
        show_notification:
          "Mostra una notifica una volta completato il download",
        max_parallel_downloads: "Numero massimo di download contemporanei",
        saveas_detected_warning:
          "Abbiamo rilevato che il tuo browser mostra una finestra di dialogo 'Salva con nome', una volta terminato il download. Ti consigliamo di disabilitare questa opzione nelle impostazioni del tuo browser.",
        change_saveas_setting: "Cambia impostazione",
        download_directory_title: "Cartella di Download",
        download_directory_description:
          "I video vengono scaricati nella cartella di download predefinita del browser. \xC8 anche possibile specificare una sottocartella. \xC8 possibile impostare cartelle di download specifiche per il sito Web con lo strumento smartnaming.",
        change_browser_download_directory:
          "Cambia la cartella di download del browser",
        bad_download_subdirectory_warning:
          "La sottocartella specificata non \xE8 valida.",
        download_subdirectory: "Sottocartella di download",
        private_browsing_title: "Navigazione anonima",
        private_browsing_warning:
          "Video DownloadHelper non \xE8 abilitato in navigazione anonima.",
        private_browsing_notifications:
          "Mostra una notifica per i download in navigazione anonima",
        private_browsing_button: "Cambia impostazioni in navigazione anonima",
        throttle_youtube:
          "Limita YouTube (download pi\xF9 lenti, ma meno probabilit\xE0 di essere bloccati)",
        prefer_original_audio: "Preferisci audio originale",
        settings_history_title: "Cronologia",
        transient_history_description:
          "Mostra i download completati nel pannello",
        history_limit: "Dopo quanti giorni dimentico i file scaricati?",
        appearance_title: "Aspetto",
        theme_title: "Tema",
        theme_light: "Chiaro",
        theme_dark: "Scuro",
        theme_system: "Sistema",
        popup_size_title: "Dimensione finestra",
        popup_size_small: "Piccola",
        popup_size_medium: "Media",
        popup_size_big: "Grande",
        font_size_title: "Dimensione testo",
        font_size_default: "Default",
        font_size_large: "Grande",
        font_size_verylarge: "Molto grande",
        panel_position_title: "Posizione pannello",
        use_popup: "Mostra in un popup",
        use_sidebar: "Mostra nella barra laterale",
        behavior_title: "Comportamento",
        controls_title: "Controlli",
        show_in_context_menu: "Accedi ai comandi con clic destro nella pagina",
        restart_addon: "Ricarica l'estensione VDH",
        reset_settings: "Ripristina le impostazioni",
        prefered_quality: "Qualit\xE0 video preferita",
        prefered_quality_highest:
          "La pi\xF9 alta (download lento, alta risoluzione)",
        prefered_quality_1080p: "1080p (impostazione predefinita)",
        prefered_quality_720p: "720p (download veloce, bassa risoluzione)",
        prefered_quality_480p:
          "480p (download pi\xF9 veloce, risoluzione pi\xF9 bassa)",
        prefer_mkv: "Scarica MKV quando possibile",
        preview_mode_title: "Anteprima",
        preview_mode_none: "Disabilitata",
        preview_mode_video: "Breve anteprima video",
        preview_mode_image: "Immagine",
        media_discovered_ordering_title: "Come ordino i file multimediali",
        order_media_smart: "Smart (raccomandato)",
        order_media_by_newest: "Prima i pi\xF9 recenti",
        order_media_by_oldest: "Prima i pi\xF9 vecchi",
        history_title: "Cronologia Download",
        history_warning:
          "Non registriamo la tua cronologia di download. Vuoi che Video DownloadHelper ricordi la tua cronologia di download?",
        history_warning_2:
          "Non ti preoccupare, tutto rimane sul tuo computer. Apprezziamo la tua privacy.",
        enable_history: "Abilita Cronologia",
        clear_history: "Pulisci Cronologia",
        disable_history: "Non ricordare la mia cronologia",
        no_downloads_yet: "Ancora nessuna attivit\xE0.",
        download_failed: "Download fallito",
        download_failed_description:
          "Purtroppo non siamo riusciti a scaricare quel file multimediale specifico. Cerchiamo di supportare quanti pi\xF9 siti web possibile, quindi sarebbe di grande aiuto se potessi segnalare l'errore (\xE8 anonimo!)",
        download_interrupted: "Download interrotto",
        download_interrupted_description:
          "Siamo riusciti a scaricare il tuo file, ma c'erano problemi di rete, quindi il file potrebbe essere pi\xF9 breve del previsto. Cerchiamo di supportare quanti pi\xF9 siti web possibile, quindi sarebbe di grande aiuto se potessi segnalare questo problema (\xE8 anonimo!).",
        download_with_drm_failed_description:
          "Qualcosa non ha funzionato. Pensiamo che questo video abbia DRM. Non supportiamo i video con DRM.",
        no_youtube: "Download da YouTube non permesso",
        no_youtube_description:
          "Purtroppo, il Chrome Web Store non consente estensioni per il download di video da YouTube, pertanto non abbiamo potuto includere questa funzionalit\xE0 nella versione dell'estensione per Chrome.",
        no_youtube_description_2:
          "Raccomandiamo l'uso di Firefox o Microsoft Edge",
        premium_required: "Licenza Premium richiesta",
        premium_yt_required_description:
          "Senza licenza Premium un download da YouTube pu\xF2 essere effettuato solo 2 ore dopo il precedente.",
        premium_hls_required_description:
          "Senza licenza Premium un download HLS o MPD pu\xF2 essere effettuato solo 2 ore dopo il precedente.",
        youtube_too_many_downloads: "Oops, YouTube sembra essersi bloccato",
        youtube_too_many_downloads_description:
          "YouTube a volte limita il numero di video che possono essere richiesti. Purtroppo non possiamo farci niente. Riprova pi\xF9 tardi.",
        stop: "Stop",
        cancel: "Cancella",
        copy_url: "Copia URL",
        always_copy_url: "Copia sempre URL",
        download_button: "Download",
        download_as_button_and_menu: "Download come\u2026",
        rename_short: "Rinomina",
        always_download_as_menu: "Download sempre come\u2026",
        download_audio_button: "Audio",
        download_audio_and_video_menu: "Download Audio & Video",
        download_audio_only_menu: "Download Audio",
        audio_only_for_this_website:
          "Download sempre solo l'audio da questo sito",
        details: "Dettagli",
        report: "Segnala",
        reporting: "Segnalando\u2026",
        reported_thankyou: "Grazie!",
      },
      web: {
        back: "Indietro",
        header_help: "Aiuto",
        header_ask_question: "Fai una domanda",
        activate_title: "Attivazione",
        activate_pending: "In attesa\u2026",
        activate_success: "Successo",
        activate_error: "Errore",
        activate_no_addon_found:
          "Estensione non trovata. L'estensione VDH \xE8 installata?",
        activate_no_method_found: "Nessun metodo trovato.",
        activate_help_me: "Aiutami.",
        issue_title: "Ripristina l'acquisto",
        issue_submit: "Invia",
        issue_thank_you: "Grazie",
        issue_enter_email:
          "Per ripristinare l'acquisto, immetti l'indirizzo email utilizzato per acquistare la licenza:",
        issue_email_sent:
          "Ti abbiamo appena inviato una email con un link che attiver\xE0 il tuo prodotto.",
        issue_or_digit:
          "Oppure puoi anche inserire il codice a 6 cifre che ti abbiamo inviato:",
        issue_just_digit:
          "Inserisci il codice a 6 cifre che ti abbiamo inviato:",
        issue_i_have_a_code: "(Clicca qui se hai gi\xE0 un codice)",
        issue_i_have_a_key: "(Clicca qui se hai una chiave di licenza)",
        issue_key:
          "Inserisci la tua chiave di licenza di Video DownloadHelper:",
        landing_text1:
          "Scarica qualsiasi video da qualsiasi sito web, funziona!",
        landing_text2: "1000+ siti web supportati",
        landing_text3: "Fidati di 7 milioni di utenti",
        landing_text4: "4,5 stelle sul negozio delle estensioni",
        landing_install_for_google: "Installa per Chrome",
        landing_install_for_mozilla: "Installa per Firefox",
        landing_install_for_microsoft: "Installa per Edge",
        landing_feature1_title: "Download in HD a piena velocit\xE0",
        landing_feature1_description:
          "Scarica video in alta definizione alla massima velocit\xE0. Siamo orgogliosi di affermare che abbiamo il motore di download pi\xF9 veloce di tutti.",
        landing_feature2_title: "Archivio video",
        landing_feature2_description:
          "Archivia i tuoi video preferiti, assicurati che nessun video sar\xE0 dimenticato.",
        landing_feature3_title: "Supporto ai Live Stream",
        landing_feature3_description:
          "Goditi la visualizzazione offline dei flussi in diretta, liberati dai limiti della visione in tempo reale.",
        landing_feature4_title: "Download Audio",
        landing_feature4_description:
          "Estrai l'audio dai video e convertili in MP3 o podcast per un facile ascolto.",
        premium_hero1: "Paga una volta, usa per sempre",
        premium_hero2: "Ottieni una Licenza a Vita per Video DownloadHelper",
        premium_hero3: "Scarica tutti i video che vuoi, senza limiti.",
        premium_supported_payment_methods: "Metodi di pagamento supportati",
        premium_buy: "acquista",
        welcome_text: "Ora non ti perderai alcun video!",
        welcome_pin_message: "Fissa l'icona di VDH nella barra strumenti:",
      },
    },
    ja: {
      addon: {
        appDesc:
          "\u30A6\u30A7\u30D6\u304B\u3089\u52D5\u753B\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        restore_purchase_button: "\u8CFC\u5165\u3092\u5FA9\u5143",
        get_premium_button: "\u30D7\u30EC\u30DF\u30A2\u30E0\u306B\u66F4\u65B0",
        back: "\u623B\u308B",
        rm_notifications_all:
          "\u3059\u3079\u3066\u306E\u901A\u77E5\u3092\u9589\u3058\u308B",
        waiting_for_media:
          "\u30E1\u30C7\u30A3\u30A2\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\u2026",
        nomedia_title:
          "\u304A\u63A2\u3057\u306E\u30E1\u30C7\u30A3\u30A2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u304B?",
        nomedia_description:
          "\u30E1\u30C7\u30A3\u30A2\u691C\u51FA\u306E\u305F\u3081\u306B\u52D5\u753B\u3092\u518D\u751F\u3057\u3066\u304F\u3060\u3055\u3044(\u5E83\u544A\u304C\u3042\u308B\u5834\u5408\u30B9\u30AD\u30C3\u30D7)\u3002\u305D\u308C\u3067\u3082\u30E1\u30C7\u30A3\u30A2\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001\u5831\u544A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        nomedia_reload_button: "\u5F37\u5236\u691C\u51FA",
        nomedia_reload_button_tooltip:
          "\u5F37\u5236\u30DA\u30FC\u30B8\u66F4\u65B0(\u30AF\u30C3\u30AD\u30FC\u3092\u524A\u9664)",
        show_nomedia_button: "\u52D5\u753B\u304C\u306A\u3044",
        show_nomedia_button_tooltip:
          "\u52D5\u753B\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u306F\u3053\u3061\u3089",
        setting_button_tooltip: "\u8A2D\u5B9A\u2026",
        history_button_tooltip:
          "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5C65\u6B74\u3092\u8868\u793A",
        show_all_history_button: "\u5168\u8868\u793A",
        complete_title: "\u5B8C\u4E86",
        hide_complete_button: "\u975E\u8868\u793A",
        translate_button_tooltip:
          "VDH\u306E\u7FFB\u8A33\u306B\u3054\u5354\u529B\u4E0B\u3055\u3044",
        help_button_tooltip: "\u30D8\u30EB\u30D7",
        open_source_tab_button_tooltip:
          "\u30BD\u30FC\u30B9\u30BF\u30D6\u3092\u958B\u304F",
        retry_download_button_tooltip:
          "\u518D\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        delete_file_button_tooltip:
          "\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664",
        download_directory_button_tooltip:
          "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u958B\u304F",
        clear_downloaded_tooltip:
          "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5C65\u6B74\u3092\u30AF\u30EA\u30A2",
        show_in_popup_button_tooltip:
          "\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u3067\u8868\u793A",
        show_in_sidebar_button_tooltip:
          "\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u8868\u793A",
        video_not_playing_button_tooltip:
          "\u52D5\u753B\u304C\u518D\u751F\u3055\u308C\u307E\u305B\u3093\u304B?",
        play: "\u518D\u751F",
        warn_drm_tooltip: "DRM\u304C\u691C\u51FA\u3055\u308C\u307E\u3057\u305F",
        version_title: "\u30D0\u30FC\u30B8\u30E7\u30F3",
        account_title: "\u30A2\u30AB\u30A6\u30F3\u30C8",
        one_hundred_downloads_title:
          "100\u672C\u306E\u52D5\u753B\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3057\u305F\uFF01",
        leave_review_description:
          "Video DownloadHelper \u3092\u304A\u697D\u3057\u307F\u3044\u305F\u3060\u3051\u308C\u3070\u5E78\u3044\u3067\u3059 :) \u30A2\u30C9\u30AA\u30F3 Web \u30B5\u30A4\u30C8\u306B\u7D20\u6575\u306A\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u3044\u3066\u3044\u305F\u3060\u3051\u307E\u305B\u3093\u304B?",
        leave_review_button: "\u30EC\u30D3\u30E5\u30FC\u3059\u308B",
        account_status: "\u30B9\u30C6\u30FC\u30BF\u30B9",
        account_status_premium: "\u30D7\u30EC\u30DF\u30A2\u30E0 ($1)",
        free_account: "\u7121\u6599\u30D7\u30E9\u30F3",
        copy_to_clipboard:
          "\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC",
        my_account_button: "\u30DE\u30A4\u30A2\u30AB\u30A6\u30F3\u30C8",
        download_title: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        show_notification:
          "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5B8C\u4E86\u5F8C\u306B\u901A\u77E5\u3059\u308B",
        max_parallel_downloads:
          "\u6700\u5927\u540C\u6642\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u6570",
        saveas_detected_warning:
          "\u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5B8C\u4E86\u6642\u306B\u300C\u540D\u524D\u3092\u4ED8\u3051\u3066\u4FDD\u5B58\u300D\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u308B\u8A2D\u5B9A\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 \u30D6\u30E9\u30A6\u30B6\u306E\u8A2D\u5B9A\u3067\u3001\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u7121\u52B9\u306B\u3059\u308B\u3053\u3068\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059\u3002",
        change_saveas_setting: "\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B",
        download_directory_title: "\u4FDD\u5B58\u5148",
        download_directory_description:
          "\u52D5\u753B\u306F\u3001\u30D6\u30E9\u30A6\u30B6\u898F\u5B9A\u306E\u4FDD\u5B58\u5148\u306B\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u304C\u3001\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u3001\u30B5\u30A4\u30C8\u3054\u3068\u306E\u4FDD\u5B58\u5148\u306FSmartnaming\u30C4\u30FC\u30EB\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002",
        change_browser_download_directory:
          "\u30D6\u30E9\u30A6\u30B6\u306E\u4FDD\u5B58\u5148\u3092\u5909\u66F4\u3059\u308B",
        bad_download_subdirectory_warning:
          "\u5165\u529B\u3055\u308C\u305F\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u540D\u306E\u6587\u5B57\u5217\u304C\u4E0D\u6B63\u3067\u3059",
        download_subdirectory: "\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0\u30FC",
        private_browsing_title:
          "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30D6\u30E9\u30A6\u30BA\u30E2\u30FC\u30C9",
        private_browsing_warning:
          "Video DownloadHelper\u306F \u30D7\u30E9\u30A4\u30D9\u30FC\u30C8/\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8 \u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u6709\u52B9\u5316\u3055\u308C\u307E\u305B\u3093\u3002\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u624B\u52D5\u3067\u6709\u52B9\u306B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\uFF08\u5FC5\u9808\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09\u3002",
        private_browsing_notifications:
          "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306E\u901A\u77E5\u3092\u8868\u793A\u3059\u308B",
        private_browsing_button:
          "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30D6\u30E9\u30A6\u30BA\u30E2\u30FC\u30C9\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B",
        throttle_youtube:
          "YouTube\u306E\u901F\u5EA6\u3092\u5236\u9650\u3059\u308B\uFF08\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u901F\u5EA6\u306F\u9045\u304F\u306A\u308B\u304C\u3001\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u4F4E\u304F\u306A\u308B\uFF09",
        prefer_original_audio:
          "\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u8A00\u8A9E\u306E\u97F3\u58F0\u3092\u5229\u7528\u3059\u308B",
        settings_history_title: "\u5C65\u6B74",
        transient_history_description:
          "\u5B8C\u4E86\u3055\u308C\u305F\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3092\u30D1\u30CD\u30EB\u306B\u8868\u793A\u3059\u308B",
        history_limit:
          "\u65E5\u5F8C\u306B\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5C65\u6B74\u3092\u81EA\u52D5\u3067\u524A\u9664\u3059\u308B",
        appearance_title: "\u5916\u89B3",
        theme_title: "\u30C6\u30FC\u30DE",
        theme_light: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9",
        theme_dark: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9",
        theme_system: "\u30B7\u30B9\u30C6\u30E0\u6A19\u6E96",
        popup_size_title: "\u30A6\u30A3\u30F3\u30C9\u30A6\u30B5\u30A4\u30BA",
        popup_size_small: "\u5C0F",
        popup_size_medium: "\u4E2D",
        popup_size_big: "\u5927",
        panel_position_title: "\u30D1\u30CD\u30EB\u306E\u4F4D\u7F6E",
        use_popup: "\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u3067\u8868\u793A",
        use_sidebar: "\u30B5\u30A4\u30C9\u30D0\u30FC\u3067\u8868\u793A",
        behavior_title: "\u52D5\u4F5C",
        controls_title: "\u64CD\u4F5C",
        show_in_context_menu:
          "\u30DA\u30FC\u30B8\u5185\u3092\u53F3\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30B3\u30DE\u30F3\u30C9\u306B\u30A2\u30AF\u30BB\u30B9",
        restart_addon: "DownloadHelper\u3092\u518D\u8D77\u52D5\u3059\u308B",
        reset_settings: "\u8A2D\u5B9A\u3092\u521D\u671F\u5316",
        prefered_quality: "\u63A8\u5968\u52D5\u753B\u54C1\u8CEA",
        prefered_quality_highest:
          "\u6700\u9AD8\u753B\u8CEA \uFF08\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u901F\u5EA6\u304C\u9045\u3044\u3001\u9AD8\u89E3\u50CF\u5EA6\uFF09",
        prefered_quality_1080p:
          "1080p \uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u3001\u30D0\u30E9\u30F3\u30B9\u91CD\u8996\uFF09",
        prefered_quality_720p:
          "720p \uFF08\u9AD8\u901F\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3001\u4F4E\u89E3\u50CF\u5EA6\uFF09",
        prefer_mkv:
          "\u53EF\u80FD\u306A\u5834\u5408\u306FMKV\u5F62\u5F0F\u3067\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        preview_mode_title:
          "\u30E1\u30C7\u30A3\u30A2\u306E\u30D7\u30EC\u30D3\u30E5\u30FC",
        preview_mode_none: "\u7121\u52B9",
        preview_mode_video:
          "\u30B7\u30E7\u30FC\u30C8\u52D5\u753B\u3067\u30D7\u30EC\u30D3\u30E5\u30FC",
        preview_mode_image: "\u753B\u50CF",
        history_title: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5C65\u6B74",
        history_warning:
          "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5C65\u6B74\u306F\u8A18\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002Video DownloadHelper \u3067\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5C65\u6B74\u3092\u8A18\u9332\u3057\u307E\u3059\u304B\uFF1F",
        history_warning_2:
          "\u3054\u5B89\u5FC3\u304F\u3060\u3055\u3044\u3002\u30C7\u30FC\u30BF\u306F\u3059\u3079\u3066\u304A\u4F7F\u3044\u306E\u7AEF\u672B\u5185\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u6211\u3005\u306F\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u3092\u5C0A\u91CD\u3057\u3066\u3044\u307E\u3059\u3002",
        enable_history: "\u5C65\u6B74\u3092\u6709\u52B9\u5316",
        clear_history: "\u5C65\u6B74\u3092\u6D88\u53BB",
        disable_history: "\u5C65\u6B74\u3092\u7121\u52B9\u5316",
        no_downloads_yet:
          "\u307E\u3060\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
        download_failed:
          "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
        download_failed_description:
          "\u6B8B\u5FF5\u306A\u304C\u3089\u3001\u3053\u306E\u30E1\u30C7\u30A3\u30A2\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002 \u6539\u5584\u306E\u305F\u3081\u3001\u30A8\u30E9\u30FC\u306E\u5831\u544A\u306B\u3054\u5354\u529B\u304F\u3060\u3055\u3044\uFF08\u5831\u544A\u306F\u533F\u540D\u3067\u3059\uFF09\u3002",
        download_interrupted:
          "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u304C\u4E2D\u65AD\u3055\u308C\u307E\u3057\u305F",
        download_interrupted_description:
          "\u30D5\u30A1\u30A4\u30EB\u306F\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3057\u305F\u304C\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u554F\u984C\u306B\u3088\u308A\u3001\u5185\u5BB9\u304C\u5B8C\u5168\u3067\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u6539\u5584\u306E\u305F\u3081\u3001\u554F\u984C\u306E\u5831\u544A\u306B\u3054\u5354\u529B\u304F\u3060\u3055\u3044\uFF08\u5831\u544A\u306F\u533F\u540D\u3067\u3059\uFF09\u3002",
        download_with_drm_failed_description:
          "\u51E6\u7406\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u3053\u306E\u52D5\u753B\u306B\u306F DRM \u304C\u542B\u307E\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002DRM \u4ED8\u304D\u306E\u52D5\u753B\u306F\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002",
        no_youtube:
          "YouTube\u304B\u3089\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306F\u3067\u304D\u307E\u305B\u3093",
        no_youtube_description:
          "\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093\u304C\u3001Chrome \u30A6\u30A7\u30D6\u30B9\u30C8\u30A2\u3067\u306F YouTube \u52D5\u753B\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u7528\u306E\u62E1\u5F35\u6A5F\u80FD\u304C\u8A31\u53EF\u3055\u308C\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u6A5F\u80FD\u3092 Chrome \u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u62E1\u5F35\u6A5F\u80FD\u306B\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
        no_youtube_description_2:
          "Firefox \u307E\u305F\u306F Microsoft Edge \u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044",
        premium_required:
          "\u30D7\u30EC\u30DF\u30A2\u30E0\u30B9\u30C6\u30FC\u30BF\u30B9\u304C\u5FC5\u8981",
        premium_yt_required_description:
          "\u30D7\u30EC\u30DF\u30A2\u30E0\u30B9\u30C6\u30FC\u30BF\u30B9\u3067\u306A\u3044\u5834\u5408\u3001YouTube\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306F\u524D\u56DE\u306E2\u6642\u9593\u5F8C\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059",
        premium_hls_required_description:
          "\u30D7\u30EC\u30DF\u30A2\u30E0\u30B9\u30C6\u30FC\u30BF\u30B9\u3067\u306A\u3044\u5834\u5408\u3001HLS \u307E\u305F\u306F MPD \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306F\u524D\u56DE\u306E2\u6642\u9593\u5F8C\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059",
        premium_all_required_description:
          "\u30D7\u30EC\u30DF\u30A2\u30E0\u30B9\u30C6\u30FC\u30BF\u30B9\u3067\u306A\u3044\u5834\u5408\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306F\u524D\u56DE\u306E2\u6642\u9593\u5F8C\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059",
        youtube_too_many_downloads:
          "\u304A\u3063\u3068\u3001YouTube\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u3067\u3059",
        youtube_too_many_downloads_description:
          "YouTube\u3067\u306F\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u304D\u308B\u52D5\u753B\u306E\u6570\u306B\u5236\u9650\u304C\u304B\u304B\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u6B8B\u5FF5\u306A\u304C\u3089\u3001\u3053\u308C\u306B\u3064\u3044\u3066\u306F\u5BFE\u5FDC\u3067\u304D\u307E\u305B\u3093\u3002\u5F8C\u307B\u3069\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
        stop: "\u505C\u6B62",
        cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
        copy_url: "URL\u3092\u30B3\u30D4\u30FC",
        always_copy_url: "\u5E38\u306BURL\u3092\u30B3\u30D4\u30FC\u3059\u308B",
        download_button: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        download_as_button_and_menu:
          "\u540D\u524D\u3092\u4ED8\u3051\u3066\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        rename_short: "\u540D\u524D\u3092\u5909\u66F4",
        always_download_as_menu:
          "\u5E38\u306B\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u5F62\u5F0F\u3092\u2026",
        download_audio_button: "\u30AA\u30FC\u30C7\u30A3\u30AA",
        download_audio_and_video_menu:
          "\u30AA\u30FC\u30C7\u30A3\u30AA\u3068\u30D3\u30C7\u30AA\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B",
        download_audio_only_menu:
          "\u97F3\u58F0\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        audio_only_for_this_website:
          "\u3053\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u306F\u5E38\u306B\u97F3\u58F0\u306E\u307F\u5229\u7528\u3059\u308B",
        details: "\u8A73\u7D30",
        report: "\u5831\u544A",
        reporting: "\u5831\u544A\u4E2D",
        reported_thankyou:
          "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\uFF01",
      },
      web: {
        back: "\u623B\u308B",
        header_help: "\u30D8\u30EB\u30D7",
        header_ask_question: "\u79C1\u305F\u3061\u306B\u8CEA\u554F\u3059\u308B",
        activate_title:
          "\u30A2\u30AF\u30C6\u30A3\u30D9\u30FC\u30B7\u30E7\u30F3",
        activate_pending: "\u9032\u884C\u4E2D",
        activate_success: "\u6210\u529F\u3057\u307E\u3057\u305F",
        activate_error: "\u30A8\u30E9\u30FC",
        activate_no_addon_found:
          "\u30A2\u30C9\u30AA\u30F3\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u307E\u3059\u304B\uFF1F",
        activate_no_method_found:
          "\u8A72\u5F53\u3059\u308B\u65B9\u6CD5\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
        activate_help_me: "\u30D8\u30EB\u30D7",
        issue_title: "\u8CFC\u5165\u3092\u5FA9\u5143",
        issue_submit: "\u9001\u4FE1",
        issue_thank_you:
          "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F",
        issue_enter_email:
          "\u8CFC\u5165\u3092\u5FA9\u5143\u3059\u308B\u305F\u3081\u3001\u30E9\u30A4\u30BB\u30F3\u30B9\u8CFC\u5165\u6642\u306B\u4F7F\u3063\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        issue_email_sent:
          "\u88FD\u54C1\u3092\u30A2\u30AF\u30C6\u30A3\u30D9\u30FC\u30C8\u3059\u308B\u305F\u3081\u306EE\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002",
        issue_or_digit:
          "\u3082\u3057\u304F\u306F\u9001\u4FE1\u3057\u305F6\u6841\u306E\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        issue_just_digit:
          "6\u6841\u306E\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
        issue_i_have_a_code:
          "\u3059\u3067\u306B\u30B3\u30FC\u30C9\u3092\u6301\u3063\u3066\u3044\u308B\u5834\u5408\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044",
        issue_i_have_a_key:
          "(\u30E9\u30A4\u30BB\u30F3\u30B9\u30AD\u30FC\u3092\u304A\u6301\u3061\u306E\u65B9\u306F\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044)",
        issue_key:
          "Video DownloadHelper\u306E\u30E9\u30A4\u30BB\u30F3\u30B9\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF1A",
        landing_text1:
          "\u3069\u3093\u306A\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u304B\u3089\u3067\u3082\u3001\u3069\u3093\u306A\u30D3\u30C7\u30AA\u3067\u3082\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3067\u304D\u307E\u3059!",
        landing_text2:
          "1000\u4EE5\u4E0A\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u5229\u7528\u3067\u304D\u307E\u3059",
        landing_text3:
          "700\u4E07\u4EBA\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u4FE1\u983C\u3055\u308C\u3066\u3044\u307E\u3059",
        landing_text4:
          "\u30B9\u30C8\u30A2\u30674.5\u306E\u8A55\u4FA1\u3092\u5F97\u3066\u3044\u307E\u3059",
        landing_install_for_google:
          "Chrome\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
        landing_install_for_mozilla:
          "Firefox\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
        landing_install_for_microsoft:
          "Edge\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
        landing_feature1_title:
          "\u30D5\u30EB\u30B9\u30D4\u30FC\u30C9\u3067HD\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        landing_feature1_description:
          "\u6700\u901F\u3001\u6700\u9AD8\u753B\u8CEA\u3067\u30D3\u30C7\u30AA\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002\u6211\u3005\u306F\u6700\u3082\u901F\u3044\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30A8\u30F3\u30B8\u30F3\u3067\u3059\u3002",
        landing_feature2_title:
          "\u30D3\u30C7\u30AA\u3092\u30A2\u30FC\u30AB\u30A4\u30D6",
        landing_feature2_description:
          "\u597D\u304D\u306A\u30D3\u30C7\u30AA\u3092\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002",
        landing_feature3_title:
          "\u30E9\u30A4\u30D6\u30B9\u30C8\u30EA\u30FC\u30E0\u30B5\u30DD\u30FC\u30C8",
        landing_feature3_description:
          "\u30E9\u30A4\u30D6\u30B9\u30C8\u30EA\u30FC\u30E0\u306E\u30AA\u30D5\u30E9\u30A4\u30F3\u9451\u8CDE\u3092\u697D\u3057\u3081\u307E\u3059\u3002\u9045\u5EF6\u306B\u56F0\u308B\u3053\u3068\u306F\u3082\u3046\u3042\u308A\u307E\u305B\u3093\u3002",
        landing_feature4_title:
          "\u30AA\u30FC\u30C7\u30A3\u30AA\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
        landing_feature4_description:
          "\u30D3\u30C7\u30AA\u304B\u3089\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u62BD\u51FA\u3057\u3001MP3\u3084\u30DD\u30C3\u30C9\u30AD\u30E3\u30B9\u30C8\u306B\u7D44\u307F\u8FBC\u3081\u307E\u3059\u3002",
        premium_hero1:
          "\u4E00\u5EA6\u306E\u304A\u652F\u6255\u3044\u3067\u6C38\u4E45\u5229\u7528\u3067\u304D\u307E\u3059",
        premium_hero2:
          "Video DownloadHelper\u306E\u6C38\u4E45\u5229\u7528\u3092\u59CB\u3081\u308B",
        premium_hero3:
          "\u5236\u9650\u306A\u3057\u3067\u3001\u597D\u304D\u306A\u3060\u3051\u52D5\u753B\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3067\u304D\u307E\u3059",
        welcome_text:
          "\u3082\u3046\u30D3\u30C7\u30AA\u3092\u5931\u3046\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093!",
        welcome_pin_message:
          "\u30A2\u30C9\u30AA\u30F3\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u30C4\u30FC\u30EB\u30D0\u30FC\u306B\u30D4\u30F3\u6B62\u3081\u3059\u308B",
      },
    },
    ko: {
      addon: {
        appDesc:
          "\uC6F9\uC5D0\uC11C \uB3D9\uC601\uC0C1 \uB2E4\uC6B4\uB85C\uB4DC.",
        restore_purchase_button: "\uAD6C\uB9E4 \uBCF5\uC6D0",
        get_premium_button: "\uD504\uB9AC\uBBF8\uC5C4 \uC5BB\uAE30",
        back: "\uB4A4\uB85C",
        waiting_for_media: "\uBBF8\uB514\uC5B4 \uB300\uAE30 \uC911\u2026",
        nomedia_title:
          "\uCC3E\uC73C\uC2DC\uB294 \uBBF8\uB514\uC5B4\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uB098\uC694?",
        nomedia_description:
          "\uBBF8\uB514\uC5B4 \uAC10\uC9C0\uB97C \uC704\uD574 \uB3D9\uC601\uC0C1\uC744 \uC7AC\uC0DD\uD558\uC138\uC694 (\uAD11\uACE0\uAC00 \uC788\uB2E4\uBA74 \uAC74\uB108\uB6F0\uC138\uC694). \uB610\uB294 \uBBF8\uB514\uC5B4 \uB204\uB77D\uC744 \uC2E0\uACE0\uD558\uC138\uC694.",
        nomedia_reload_button: "\uAC15\uC81C \uAC10\uC9C0",
        nomedia_reload_button_tooltip:
          "\uD398\uC774\uC9C0 \uAC15\uC81C \uC0C8\uB85C\uACE0\uCE68 (\uCFE0\uD0A4 \uC0AD\uC81C)",
        show_nomedia_button: "\uB3D9\uC601\uC0C1\uC774 \uC5C6\uB098\uC694?",
        show_nomedia_button_tooltip:
          "\uB3D9\uC601\uC0C1\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC73C\uBA74 \uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC138\uC694.",
        setting_button_tooltip: "\uC124\uC815",
        history_button_tooltip:
          "\uB2E4\uC6B4\uB85C\uB4DC \uAE30\uB85D \uBCF4\uAE30",
        show_all_history_button: "\uBAA8\uB450 \uBCF4\uAE30",
        complete_title: "\uC644\uB8CC",
        hide_complete_button: "\uC228\uAE30\uAE30",
        translate_button_tooltip: "VDH \uBC88\uC5ED \uB3D5\uAE30",
        open_source_tab_button_tooltip: "\uC18C\uC2A4 \uD0ED \uC5F4\uAE30",
        retry_download_button_tooltip:
          "\uB2E4\uC6B4\uB85C\uB4DC \uC7AC\uC2DC\uB3C4",
        delete_file_button_tooltip: "\uD30C\uC77C \uC0AD\uC81C",
        download_directory_button_tooltip:
          "\uB2E4\uC6B4\uB85C\uB4DC \uD3F4\uB354 \uD45C\uC2DC",
        show_in_popup_button_tooltip: "\uD31D\uC5C5\uC73C\uB85C \uBCF4\uAE30",
        show_in_sidebar_button_tooltip:
          "\uC0AC\uC774\uB4DC\uBC14\uB85C \uBCF4\uAE30",
        video_not_playing_button_tooltip:
          "\uB3D9\uC601\uC0C1\uC774 \uC7AC\uC0DD\uB418\uC9C0 \uC54A\uB098\uC694?",
        play: "\uC7AC\uC0DD",
        warn_drm_tooltip: "DRM \uAC10\uC9C0\uB428",
        version_title: "\uBC84\uC804",
        account_title: "\uACC4\uC815",
        one_hundred_downloads_title:
          "100\uAC1C\uC758 \uB3D9\uC601\uC0C1\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC168\uC2B5\uB2C8\uB2E4!",
        leave_review_description:
          "Video DownloadHelper\uB97C \uC990\uAC81\uAC8C \uC0AC\uC6A9\uD558\uC2DC\uAE38 \uBC14\uB78D\uB2C8\uB2E4 :) \uC560\uB4DC\uC628 \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uC88B\uC740 \uB9AC\uBDF0\uB97C \uB0A8\uACA8\uC8FC\uC2DC\uACA0\uC5B4\uC694?",
        leave_review_button: "\uB9AC\uBDF0 \uB0A8\uAE30\uAE30",
        account_status: "\uC0C1\uD0DC",
        account_status_premium: "\uD504\uB9AC\uBBF8\uC5C4 \uC0AC\uC6A9\uC790",
        free_account: "\uBB34\uB8CC \uD50C\uB79C",
        copy_to_clipboard:
          "\uC815\uBCF4\uB97C \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC",
        my_account_button: "\uB0B4 \uACC4\uC815",
        download_title: "\uB2E4\uC6B4\uB85C\uB4DC",
        show_notification:
          "\uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC \uC2DC \uC54C\uB9BC \uD45C\uC2DC",
        max_parallel_downloads:
          "\uCD5C\uB300 \uB3D9\uC2DC \uB2E4\uC6B4\uB85C\uB4DC \uC218",
        saveas_detected_warning:
          "\uB2E4\uC6B4\uB85C\uB4DC\uAC00 \uC644\uB8CC\uB418\uBA74 \uBE0C\uB77C\uC6B0\uC800\uC5D0 '\uB2E4\uB978 \uC774\uB984\uC73C\uB85C \uC800\uC7A5' \uB300\uD654 \uC0C1\uC790\uAC00 \uB098\uD0C0\uB098\uB294 \uAC83\uC744 \uAC10\uC9C0\uD588\uC2B5\uB2C8\uB2E4. \uBE0C\uB77C\uC6B0\uC800 \uC124\uC815\uC5D0\uC11C \uC774 \uC635\uC158\uC744 \uBE44\uD65C\uC131\uD654\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4.",
        change_saveas_setting: "\uC124\uC815 \uBCC0\uACBD",
        private_browsing_title: "\uC2DC\uD06C\uB9BF \uBE0C\uB77C\uC6B0\uC9D5",
        private_browsing_warning:
          "Video DownloadHelper\uB294 \uC2DC\uD06C\uB9BF/\uBE44\uACF5\uAC1C \uCC3D\uC5D0\uC11C \uD65C\uC131\uD654\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uC635\uC158\uC744 \uC218\uB3D9\uC73C\uB85C \uCF1C\uC57C \uD569\uB2C8\uB2E4 (\uD544\uC218\uB294 \uC544\uB2D8).",
        private_browsing_notifications:
          "\uC2DC\uD06C\uB9BF \uB2E4\uC6B4\uB85C\uB4DC \uC54C\uB9BC \uD45C\uC2DC",
        private_browsing_button:
          "\uC2DC\uD06C\uB9BF \uBE0C\uB77C\uC6B0\uC9D5 \uC124\uC815 \uBCC0\uACBD",
        prefer_original_audio: "\uC6D0\uBCF8 \uC624\uB514\uC624 \uC120\uD638",
        settings_history_title: "\uAE30\uB85D",
        transient_history_description:
          "\uC644\uB8CC\uB41C \uB2E4\uC6B4\uB85C\uB4DC \uD328\uB110\uC5D0 \uD45C\uC2DC",
        history_limit:
          "X\uC77C \uD6C4 \uB2E4\uC6B4\uB85C\uB4DC \uAE30\uB85D \uC0AD\uC81C",
        appearance_title: "\uBAA8\uC591",
        theme_title: "\uD14C\uB9C8",
        theme_light: "\uBC1D\uAC8C",
        theme_dark: "\uC5B4\uB461\uAC8C",
        theme_system: "\uC2DC\uC2A4\uD15C",
        popup_size_title: "\uCC3D \uD06C\uAE30",
        popup_size_small: "\uC791\uAC8C",
        popup_size_medium: "\uC911\uAC04",
        popup_size_big: "\uD06C\uAC8C",
        panel_position_title: "\uD328\uB110 \uC704\uCE58",
        use_popup: "\uD31D\uC5C5\uC73C\uB85C \uD45C\uC2DC",
        use_sidebar: "\uC0AC\uC774\uB4DC\uBC14\uB85C \uD45C\uC2DC",
        behavior_title: "\uB3D9\uC791",
        show_in_context_menu:
          "\uD398\uC774\uC9C0\uC5D0\uC11C \uB9C8\uC6B0\uC2A4 \uC624\uB978\uCABD \uD074\uB9AD\uC73C\uB85C \uBA85\uB839\uC5D0 \uC561\uC138\uC2A4",
        restart_addon: "\uC560\uB4DC\uC628 \uB2E4\uC2DC \uB85C\uB4DC",
        reset_settings: "\uC124\uC815 \uCD08\uAE30\uD654",
        preview_mode_title: "\uBBF8\uB514\uC5B4 \uBBF8\uB9AC\uBCF4\uAE30",
        preview_mode_none: "\uBE44\uD65C\uC131\uD654\uB428",
        preview_mode_video:
          "\uC9E7\uC740 \uB3D9\uC601\uC0C1 \uBBF8\uB9AC\uBCF4\uAE30",
        preview_mode_image: "\uC774\uBBF8\uC9C0",
        history_title: "\uB2E4\uC6B4\uB85C\uB4DC \uAE30\uB85D",
        history_warning:
          "\uC800\uD76C\uB294 \uADC0\uD558\uC758 \uB2E4\uC6B4\uB85C\uB4DC \uAE30\uB85D\uC744 \uC800\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Video DownloadHelper\uAC00 \uADC0\uD558\uC758 \uB2E4\uC6B4\uB85C\uB4DC \uAE30\uB85D\uC744 \uAE30\uC5B5\uD558\uB3C4\uB85D \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
        history_warning_2:
          "\uAC71\uC815\uD558\uC9C0 \uB9C8\uC138\uC694, \uBAA8\uB4E0 \uAC83\uC740 \uADC0\uD558\uC758 \uAE30\uAE30\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC800\uD76C\uB294 \uADC0\uD558\uC758 \uD504\uB77C\uC774\uBC84\uC2DC\uB97C \uC18C\uC911\uD788 \uC5EC\uAE41\uB2C8\uB2E4.",
        enable_history: "\uAE30\uB85D \uD65C\uC131\uD654",
        clear_history: "\uAE30\uB85D \uC9C0\uC6B0\uAE30",
        disable_history:
          "\uB0B4 \uAE30\uB85D\uC744 \uAE30\uC5B5\uD558\uC9C0 \uC54A\uAE30",
        no_downloads_yet:
          "\uC544\uC9C1 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
        download_failed: "\uB2E4\uC6B4\uB85C\uB4DC \uC2E4\uD328",
        download_failed_description:
          "\uC8C4\uC1A1\uD558\uAC8C\uB3C4 \uD574\uB2F9 \uBBF8\uB514\uC5B4\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB294 \uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uC800\uD76C\uB294 \uAC00\uB2A5\uD55C \uB9CE\uC740 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uACE0 \uC788\uC73C\uBBC0\uB85C, \uC774 \uC624\uB958\uB97C \uC2E0\uACE0\uD574 \uC8FC\uC2DC\uBA74 \uD070 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4 (\uC775\uBA85\uC785\uB2C8\uB2E4!).",
        download_interrupted: "\uB2E4\uC6B4\uB85C\uB4DC \uC911\uB2E8\uB428",
        download_interrupted_description:
          "\uD30C\uC77C\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB294 \uB370 \uC131\uACF5\uD588\uC9C0\uB9CC, \uB124\uD2B8\uC6CC\uD06C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uC5EC \uD30C\uC77C\uC774 \uC608\uC0C1\uBCF4\uB2E4 \uC9E7\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC800\uD76C\uB294 \uAC00\uB2A5\uD55C \uB9CE\uC740 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uACE0 \uC788\uC73C\uBBC0\uB85C, \uC774 \uBB38\uC81C\uB97C \uC2E0\uACE0\uD574 \uC8FC\uC2DC\uBA74 \uD070 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4 (\uC775\uBA85\uC785\uB2C8\uB2E4!).",
        download_with_drm_failed_description:
          "\uBB54\uAC00 \uC81C\uB300\uB85C \uC791\uB3D9\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uC774 \uB3D9\uC601\uC0C1\uC5D0\uB294 DRM\uC774 \uC788\uB294 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. \uC800\uD76C\uB294 DRM\uC774 \uC788\uB294 \uB3D9\uC601\uC0C1\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",
        no_youtube:
          "YouTube \uB2E4\uC6B4\uB85C\uB4DC \uD5C8\uC6A9 \uC548 \uB428",
        no_youtube_description:
          " \uC544\uC27D\uAC8C\uB3C4 Chrome \uC6F9 \uC2A4\uD1A0\uC5B4\uB294 YouTube \uB3D9\uC601\uC0C1 \uB2E4\uC6B4\uB85C\uB4DC \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uC744 \uD5C8\uC6A9\uD558\uC9C0 \uC54A\uC73C\uBBC0\uB85C, \uC774 \uAE30\uB2A5\uC744 Chrome \uBC84\uC804 \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uD3EC\uD568\uD560 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4.",
        premium_required: "\uD504\uB9AC\uBBF8\uC5C4 \uC0C1\uD0DC \uD544\uC694",
        premium_yt_required_description:
          "\uD504\uB9AC\uBBF8\uC5C4 \uC0C1\uD0DC\uAC00 \uC544\uB2C8\uBA74 YouTube \uB2E4\uC6B4\uB85C\uB4DC\uB294 \uC774\uC804 \uB2E4\uC6B4\uB85C\uB4DC\uB85C\uBD80\uD130 2\uC2DC\uAC04 \uD6C4\uC5D0\uB9CC \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        premium_hls_required_description:
          "\uD504\uB9AC\uBBF8\uC5C4 \uC0C1\uD0DC\uAC00 \uC544\uB2C8\uBA74 HLS \uB610\uB294 MPD \uB2E4\uC6B4\uB85C\uB4DC\uB294 \uC774\uC804 \uB2E4\uC6B4\uB85C\uB4DC\uB85C\uBD80\uD130 2\uC2DC\uAC04 \uD6C4\uC5D0\uB9CC \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        youtube_too_many_downloads:
          "\uC774\uB7F0, YouTube\uAC00 \uCC28\uB2E8\uB41C \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.",
        youtube_too_many_downloads_description:
          "YouTube\uB294 \uB54C\uB54C\uB85C \uC694\uCCAD\uD560 \uC218 \uC788\uB294 \uB3D9\uC601\uC0C1 \uC218\uB97C \uC81C\uD55C\uD569\uB2C8\uB2E4. \uC544\uC27D\uAC8C\uB3C4 \uC800\uD76C\uAC00 \uD560 \uC218 \uC788\uB294 \uC77C\uC740 \uC5C6\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uBCF4\uC138\uC694.",
        stop: "\uC911\uC9C0",
        cancel: "\uCDE8\uC18C",
        copy_url: "URL \uBCF5\uC0AC",
        always_copy_url: "\uD56D\uC0C1 URL \uBCF5\uC0AC",
        download_button: "\uB2E4\uC6B4\uB85C\uB4DC",
        download_as_button_and_menu:
          "\uB2E4\uB978 \uC774\uB984\uC73C\uB85C \uB2E4\uC6B4\uB85C\uB4DC...",
        rename_short: "\uC774\uB984 \uBCC0\uACBD",
        always_download_as_menu:
          "\uD56D\uC0C1 \uB2E4\uB978 \uC774\uB984\uC73C\uB85C \uB2E4\uC6B4\uB85C\uB4DC\u2026",
        download_audio_button: "\uC624\uB514\uC624",
        download_audio_and_video_menu:
          "\uC624\uB514\uC624 \uBC0F \uB3D9\uC601\uC0C1 \uB2E4\uC6B4\uB85C\uB4DC",
        download_audio_only_menu:
          "\uC624\uB514\uC624\uB9CC \uB2E4\uC6B4\uB85C\uB4DC",
        audio_only_for_this_website:
          "\uC774 \uC6F9\uC0AC\uC774\uD2B8\uC5D0\uC11C\uB294 \uD56D\uC0C1 \uC624\uB514\uC624\uB9CC",
        details: "\uC138\uBD80 \uC815\uBCF4",
        report: "\uC2E0\uACE0",
        reporting: "\uC2E0\uACE0 \uC911...",
        reported_thankyou: "\uAC10\uC0AC\uD569\uB2C8\uB2E4!",
      },
      web: {
        back: "\uB4A4\uB85C",
        header_help: "\uB3C4\uC6C0\uB9D0",
        activate_title: "\uD65C\uC131\uD654",
        activate_pending: "\uB300\uAE30 \uC911...",
        activate_success: "\uC131\uACF5",
        activate_error: "\uC624\uB958",
        activate_no_addon_found:
          " \uC560\uB4DC\uC628\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC560\uB4DC\uC628\uC774 \uC124\uCE58\uB418\uC5B4 \uC788\uB098\uC694?",
        activate_no_method_found:
          "\uBC29\uBC95\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
        activate_help_me: "\uB3C4\uC640\uC8FC\uC138\uC694.",
        issue_title: "\uAD6C\uB9E4\uBCF5\uC6D0",
        issue_submit: "\uC81C\uCD9C",
        issue_thank_you: "\uAC10\uC0AC\uD569\uB2C8\uB2E4.",
        issue_enter_email:
          "\uAD6C\uB9E4\uB97C \uBCF5\uC6D0\uD558\uB824\uBA74 \uB77C\uC774\uC120\uC2A4\uB97C \uAD6C\uB9E4\uD560 \uB54C \uC0AC\uC6A9\uD55C \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694:",
        issue_email_sent:
          "\uC81C\uD488\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC788\uB294 \uB9C1\uD06C\uAC00 \uD3EC\uD568\uB41C \uC774\uBA54\uC77C\uC744 \uBC29\uAE08 \uBCF4\uB0B4\uB4DC\uB838\uC2B5\uB2C8\uB2E4.",
        issue_or_digit:
          "\uB610\uB294, \uC800\uD76C\uAC00 \uBCF4\uB0B4\uB4DC\uB9B0 6\uC790\uB9AC \uCF54\uB4DC\uB97C \uC785\uB825\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4:",
        issue_just_digit:
          "\uC800\uD76C\uAC00 \uBCF4\uB0B4\uB4DC\uB9B0 6\uC790\uB9AC \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694:",
        issue_i_have_a_code:
          "(\uC774\uBBF8 \uCF54\uB4DC\uAC00 \uC788\uB2E4\uBA74 \uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC138\uC694)",
        issue_i_have_a_key:
          "(\uB77C\uC774\uC120\uC2A4 \uD0A4\uAC00 \uC788\uB2E4\uBA74 \uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC138\uC694)",
        issue_key:
          "Video DownloadHelper \uB77C\uC774\uC120\uC2A4 \uD0A4\uB97C \uC785\uB825\uD558\uC138\uC694:",
        landing_text1:
          "\uC5B4\uB5A4 \uC6F9\uC0AC\uC774\uD2B8\uC5D0\uC11C\uB4E0 \uB3D9\uC601\uC0C1\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC138\uC694, \uADF8\uB0E5 \uC791\uB3D9\uD569\uB2C8\uB2E4!",
        landing_text2:
          "1000\uAC1C \uC774\uC0C1\uC758 \uC6F9\uC0AC\uC774\uD2B8 \uC9C0\uC6D0",
        landing_text3: "7\uBC31\uB9CC \uC0AC\uC6A9\uC790\uC758 \uC2E0\uB8B0",
        landing_text4:
          "\uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8 \uC2A4\uD1A0\uC5B4\uC5D0\uC11C 4.5\uC810 \uD3C9\uC810",
        landing_install_for_google: "Chrome\uC6A9 \uC124\uCE58",
        landing_install_for_mozilla: "Firefox\uC6A9 \uC124\uCE58",
        landing_install_for_microsoft: "Edge\uC6A9 \uC124\uCE58",
        landing_feature1_title: "\uACE0\uC18D HD \uB2E4\uC6B4\uB85C\uB4DC",
        landing_feature1_description:
          "\uACE0\uD654\uC9C8 \uB3D9\uC601\uC0C1\uC744 \uCD5C\uACE0 \uC18D\uB3C4\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC138\uC694. \uC800\uD76C\uB294 \uAC00\uC7A5 \uBE60\uB978 \uB2E4\uC6B4\uB85C\uB4DC \uC5D4\uC9C4\uC744 \uBCF4\uC720\uD558\uACE0 \uC788\uB2E4\uACE0 \uC790\uB791\uC2A4\uB7FD\uAC8C \uB9D0\uC500\uB4DC\uB9BD\uB2C8\uB2E4.",
        landing_feature2_title: "\uB3D9\uC601\uC0C1 \uBCF4\uAD00",
        landing_feature2_description:
          "\uC88B\uC544\uD558\uB294 \uB3D9\uC601\uC0C1\uC744 \uBCF4\uAD00\uD558\uC5EC \uC544\uBB34\uAC83\uB3C4 \uB193\uCE58\uC9C0 \uC54A\uB3C4\uB85D \uD569\uB2C8\uB2E4.",
        landing_feature3_title:
          " \uB77C\uC774\uBE0C \uC2A4\uD2B8\uB9BC \uC9C0\uC6D0",
        landing_feature3_description:
          "\uB77C\uC774\uBE0C \uC2A4\uD2B8\uB9BC\uC744 \uC624\uD504\uB77C\uC778\uC73C\uB85C \uC2DC\uCCAD\uD558\uC5EC \uC2E4\uC2DC\uAC04 \uC81C\uC57D\uC5D0\uC11C \uBC97\uC5B4\uB098\uC138\uC694.",
        landing_feature4_title: "\uC624\uB514\uC624 \uB2E4\uC6B4\uB85C\uB4DC",
        landing_feature4_description:
          "\uB3D9\uC601\uC0C1\uC5D0\uC11C \uC624\uB514\uC624\uB97C \uCD94\uCD9C\uD558\uC5EC MP3 \uB610\uB294 \uD31F\uCE90\uC2A4\uD2B8\uB85C \uBCC0\uD658\uD558\uC5EC \uC27D\uAC8C \uB4E4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        premium_hero1:
          "\uD55C \uBC88 \uACB0\uC81C\uD558\uACE0 \uC601\uC6D0\uD788 \uC0AC\uC6A9\uD558\uC138\uC694",
        premium_hero2:
          "Video DownloadHelper \uD3C9\uC0DD \uB77C\uC774\uC120\uC2A4\uB97C \uBC1B\uC73C\uC138\uC694",
        premium_hero3:
          "\uC6D0\uD558\uB294 \uB9CC\uD07C \uBAA8\uB4E0 \uB3D9\uC601\uC0C1\uC744 \uC81C\uD55C \uC5C6\uC774 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC138\uC694.",
        welcome_text:
          "\uC774\uC81C \uC5B4\uB5A4 \uB3D9\uC601\uC0C1\uB3C4 \uB193\uCE58\uC9C0 \uC54A\uC744 \uAC70\uC608\uC694!",
        welcome_pin_message:
          "\uC560\uB4DC\uC628 \uC544\uC774\uCF58\uC744 \uB3C4\uAD6C \uBAA8\uC74C\uC5D0 \uACE0\uC815\uD558\uC138\uC694:",
      },
    },
    nb: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    nl: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    pl: {
      addon: {
        appDesc: "Pobierz wideo z sieci web.",
        restore_purchase_button: "Przywr\xF3\u0107 zakup",
        get_premium_button: "Uzyskaj premium",
        back: "Wstecz",
        waiting_for_media: "Oczekiwanie na multimedia\u2026",
        nomedia_title: "Nie widzisz poszukiwanych multimedi\xF3w?",
        nomedia_description:
          "Uruchom wideo (i pomi\u0144 ewentualne reklamy), aby u\u0142atwi\u0107 wykrywanie multimedi\xF3w. Lub zg\u0142o\u015B brakuj\u0105ce multimedia.",
        nomedia_reload_button: "Wymu\u015B wykrywanie",
        nomedia_reload_button_tooltip:
          "Wymu\u015B prze\u0142adowanie strony (usu\u0144 pliki cookies)",
        show_nomedia_button: "Brak wideo?",
        show_nomedia_button_tooltip:
          "Kliknij tutaj, je\u015Bli nie mo\u017Cesz znale\u017A\u0107 swojego wideo",
        setting_button_tooltip: "Ustawienia",
        history_button_tooltip: "Poka\u017C histori\u0119 pobierania",
        translate_button_tooltip: "Pom\xF3\u017C w t\u0142umaczeniu VDH",
        open_source_tab_button_tooltip:
          "Otw\xF3rz kart\u0119 \u017Ar\xF3d\u0142a",
        retry_download_button_tooltip: "Pon\xF3w pobieranie",
        delete_file_button_tooltip: "Usu\u0144 plik",
        download_directory_button_tooltip: "Poka\u017C folder pobierania",
        show_in_popup_button_tooltip: "Poka\u017C w wyskakuj\u0105cym okienku",
        show_in_sidebar_button_tooltip: "Poka\u017C na pasku bocznym",
        video_not_playing_button_tooltip: "Wideo nie odtwarza si\u0119?",
        play: "Odtw\xF3rz",
        warn_drm_tooltip: "Wykryto DRM",
        version_title: "Wersja",
        account_title: "Konto",
        leave_review_description:
          "Mamy nadziej\u0119, \u017Ce podoba Ci si\u0119 Video DownloadHelper :) Czy zechcia\u0142by\u015B napisa\u0107 mi\u0142\u0105 recenzj\u0119 na stronie dodatku?",
        leave_review_button: "Zostaw recenzj\u0119",
        account_status: "Stan",
        account_status_premium: "Premium ($1}",
        free_account: "Bezp\u0142atny plan",
        copy_to_clipboard: "Skopiuj do schowka",
        my_account_button: "Moje konto",
        download_title: "Do pobrania",
        show_notification:
          "Poka\u017C powiadomienie po zako\u0144czeniu pobierania",
        max_parallel_downloads:
          "Maksymalna liczba r\xF3wnoczesnych pobra\u0144",
        private_browsing_title: "Przegl\u0105danie prywatne",
        private_browsing_warning:
          "Narz\u0119dzie Video DownloadHelper nie jest w\u0142\u0105czone w oknach prywatnych/incognito. Musisz w\u0142\u0105czy\u0107 t\u0119 opcj\u0119 r\u0119cznie (nie jest to wymagane).",
        private_browsing_notifications:
          "Poka\u017C powiadomienie dla prywatnych pobra\u0144",
        private_browsing_button:
          "Zmiana ustawie\u0144 przegl\u0105dania prywatnego",
        prefer_original_audio: "Preferuj oryginalne audio",
        settings_history_title: "Historia",
        history_limit: "Liczba dni przed zapomnieniem plik\xF3w do pobrania",
        appearance_title: "Wygl\u0105d",
        theme_title: "Schemat kolorystyczny",
        theme_light: "jasny",
        theme_dark: "ciemny",
        theme_system: "system",
        popup_size_title: "Rozmiar okna",
        popup_size_small: "Ma\u0142e",
        popup_size_medium: "\u015Arednie",
        popup_size_big: "Du\u017Ce",
        panel_position_title: "Pozycja panela",
        use_popup: "Poka\u017C w wyskakuj\u0105cym okienku",
        use_sidebar: "Poka\u017C na pasku bocznym",
        behavior_title: "Zachowanie",
        show_in_context_menu:
          "Uzyskaj dost\u0119p do komend poprzez klikni\u0119cie prawym przyciskiem myszy na stronie",
        restart_addon: "Za\u0142aduj ponownie dodatek",
        reset_settings: "Resetowanie ustawie\u0144",
        history_title: "Historia pobierania",
        history_warning:
          "Nie rejestrujemy historii pobierania. Czy chcesz, aby Video DownloadHelper zapami\u0119tywa\u0142 histori\u0119 pobierania?",
        history_warning_2:
          "Nie martw si\u0119, wszystko pozostanie w twoim komputerze. Cenimy twoj\u0105 prywatno\u015B\u0107.",
        enable_history: "W\u0142\u0105cz histori\u0119",
        clear_history: "Usu\u0144 histori\u0119",
        disable_history: "Wy\u0142\u0105cz histori\u0119",
        no_downloads_yet: "Nie pobrano jeszcze \u017Cadnych plik\xF3w.",
        download_failed: "Pobieranie nie udane",
        download_failed_description:
          "Niestety nie uda\u0142o nam si\u0119 pobra\u0107 tego konkretnego no\u015Bnika. Staramy si\u0119 obs\u0142ugiwa\u0107 jak najwi\u0119cej stron internetowych, dlatego bardzo pomocne by\u0142oby zg\u0142oszenie tego b\u0142\u0119du (jest to anonimowe!).",
        download_with_drm_failed_description:
          "Co\u015B nie zadzia\u0142a\u0142o. Wydaje nam si\u0119, \u017Ce to wideo ma DRM. Nie obs\u0142ugujemy film\xF3w z DRM.",
        no_youtube: "Pobieranie z youtube jest niedozwolone",
        no_youtube_description:
          "Niestety, Chrome Web Store nie pozwala na zamieszczanie rozszerze\u0144 pozwalajacych na pobieranie plik\xF3w wideo z serwisu YouTube. Nie mo\u017Cemy wi\u0119c do\u0142\u0105czy\u0107 tej funkcji do tego rozszerzenia w wersji dla przegl\u0105darki Chrome.",
        premium_required: "Status Premium wymagany",
        premium_yt_required_description:
          "Bez statusu Premium, pobieranie z YouTube mo\u017Ce by\u0107 wykonane dopiero 2 godziny po poprzednim.",
        premium_hls_required_description:
          "Bez statusu Premium, pobieranie HLS mo\u017Ce zosta\u0107 przeprowadzone tylko 2 godziny po poprzednim",
        stop: "Przerwij",
        cancel: "Anuluj",
        copy_url: "Kopiuj URL",
        always_copy_url: "Zawsze kopiuj URL",
        download_button: "Pobierz",
        download_as_button_and_menu: "Pobierz jako\u2026",
        download_audio_button: "Audio",
        download_audio_and_video_menu: "Pobierz audio i wideo",
        download_audio_only_menu: "Pobierz d\u017Awi\u0119k",
        audio_only_for_this_website:
          "Audio zawsze tylko dla tej strony internetowej",
        details: "Detale",
        report: "Zg\u0142o\u015B",
        reporting: "Zg\u0142aszanie\u2026",
        reported_thankyou: "Dzi\u0119kujemy!",
      },
      web: {
        header_help: "Pomoc",
        activate_title: "Aktywacja",
        activate_pending: "Oczekuj\u0105ce\u2026",
        activate_success: "Powodzenie",
        activate_error: "B\u0142\u0105d",
        activate_no_addon_found:
          "Nie znaleziono dodatku. Czy dodatek jest zainstalowany?",
        activate_no_method_found: "Nie znaleziono metody.",
        activate_help_me: "Pom\xF3\u017C mi.",
        issue_title: "Przywracanie zakupu",
        issue_submit: "Prze\u015Blij",
        issue_thank_you: "Dzi\u0119kuj\u0119",
        issue_enter_email:
          "Aby przywr\xF3ci\u0107 zakupion\u0105 licencj\u0119, wprowad\u017A adres e-mail u\u017Cyty do jej zakupu:",
        issue_email_sent:
          "W\u0142a\u015Bnie wys\u0142ali\u015Bmy ci wiadomo\u015B\u0107 e-mail z linkiem, kt\xF3ry aktywuje tw\xF3j produkt.",
        issue_or_digit:
          "Mo\u017Cna te\u017C wprowadzi\u0107 6-cyfrowy kod, kt\xF3ry wys\u0142ali\u015Bmy:",
        landing_text1:
          "Pobierz dowolne wideo z dowolnej strony internetowej, to po prostu dzia\u0142a!",
        landing_text2: "Obs\u0142ugiwanych jest ponad 1000 stron internetowych",
        landing_text3: "Zaufa\u0142o nam 7 milion\xF3w u\u017Cytkownik\xF3w",
        landing_text4: "4,5 gwiazdki w sklepie z rozszerzeniami",
        landing_install_for_google: "Zainstaluj dla Chrome",
        landing_install_for_mozilla: "Zainstaluj dla Firefox",
        landing_install_for_microsoft: "Zainstaluj dla Edge",
        landing_feature1_title:
          "Pobieranie HD z pe\u0142n\u0105 szybko\u015Bci\u0105",
        landing_feature1_description:
          "Pobieraj filmy w wysokiej rozdzielczo\u015Bci z maksymaln\u0105 szybko\u015Bci\u0105. Z dum\u0105 twierdzimy, \u017Ce mamy najszybszy silnik pobierania.",
        landing_feature2_title: "Archiwizuj wideo",
        landing_feature2_description:
          "Archiwizuj swoje ulubione wideo, aby mie\u0107 pewno\u015B\u0107, \u017Ce nic nie zostanie pomini\u0119te.",
        landing_feature3_title: "Obs\u0142uga transmisji na \u017Cywo",
        landing_feature3_description:
          "Ciesz si\u0119 ogl\u0105daniem transmisji na \u017Cywo w trybie offline, uwalniaj\u0105c si\u0119 od ogranicze\u0144 w czasie rzeczywistym.",
        landing_feature4_title: "Pobieranie audio",
        landing_feature4_description:
          "Wyodr\u0119bnij audio z wideo, konwertuj\u0105c je na pliki MP3 lub podcasty dla u\u0142atwienia s\u0142uchania.",
        premium_hero1: "Zap\u0142a\u0107 raz, korzystaj bezterminowo",
        premium_hero2:
          "Uzyskaj do\u017Cywotni\u0105 licencj\u0119 na Video DownloadHelper",
        premium_hero3:
          "Pobieraj dowoln\u0105 liczb\u0119 film\xF3w, bez ogranicze\u0144.",
      },
    },
    "pt-BR": {
      addon: {
        appDesc: "Baixar v\xEDdeos da Web.",
        restore_purchase_button: "Restaurar compra",
        get_premium_button: "Obter premium",
        back: "Voltar",
        rm_notifications_all: "Descartar todas as notifica\xE7\xF5es",
        waiting_for_media: "Esperando pela m\xEDdia\u2026",
        nomedia_title: "N\xE3o consegue ver a m\xEDdia que est\xE1 procurando?",
        nomedia_description:
          "Inicie o v\xEDdeo (e pule os an\xFAncios, se houver) para ajudar a detectar a m\xEDdia. Ou relate a m\xEDdia ausente. ",
        nomedia_reload_button: "For\xE7ar detec\xE7\xE3o",
        nomedia_reload_button_tooltip:
          "For\xE7ar o recarregamento da p\xE1gina (limpar cookies)",
        show_nomedia_button: "Sem v\xEDdeo?",
        show_nomedia_button_tooltip:
          "Clique aqui se n\xE3o conseguir encontrar seu v\xEDdeo",
        setting_button_tooltip: "Configura\xE7\xF5es",
        history_button_tooltip: "Mostrar hist\xF3rico de downloads",
        show_all_history_button: "mostrar tudo",
        complete_title: "Conclu\xEDdo",
        hide_complete_button: "esconder",
        translate_button_tooltip: "Ajude a traduzir o VDH",
        help_button_tooltip: "Ajuda",
        open_source_tab_button_tooltip: "Abrir aba de origem",
        retry_download_button_tooltip: "Baixar novamente",
        delete_file_button_tooltip: "Excluir arquivo",
        download_directory_button_tooltip: "Mostrar pasta de download",
        clear_downloaded_tooltip: "Limpar downloads conclu\xEDdos",
        show_in_popup_button_tooltip: "Mostrar em pop-up",
        show_in_sidebar_button_tooltip: "Mostrar na barra lateral",
        video_not_playing_button_tooltip: "Sem v\xEDdeo?",
        play: "Reproduzir",
        warn_drm_tooltip: "DRM detectado",
        version_title: "Vers\xE3o",
        account_title: "Conta",
        one_hundred_downloads_title: "Voc\xEA baixou 100 v\xEDdeos!",
        leave_review_description:
          "Esperamos que esteja gostando do V\xEDdeo DownloadHelper :) Voc\xEA se importaria de escrever uma boa cr\xEDtica no site da extens\xE3o?",
        leave_review_button: "Deixe um coment\xE1rio",
        account_status: "Status",
        account_status_premium: "Premium ($1)",
        free_account: "Plano gratuito",
        copy_to_clipboard:
          "Copiar informa\xE7\xF5es para a \xE1rea de transfer\xEAncia",
        my_account_button: "Minha conta",
        download_title: "Downloads",
        show_notification:
          "Mostrar notifica\xE7\xE3o quando o download for conclu\xEDdo",
        max_parallel_downloads: "M\xE1ximo de downloads simult\xE2neos",
        saveas_detected_warning:
          ' Detectamos que seu navegador mostra um di\xE1logo "Salvar como" quando o download \xE9 conclu\xEDdo. Recomendamos desativar essa op\xE7\xE3o nas configura\xE7\xF5es do seu navegador',
        change_saveas_setting: "Alterar configura\xE7\xE3o",
        download_directory_title: "Diret\xF3rio de downloads",
        download_directory_description:
          "Os v\xEDdeos s\xE3o baixados no diret\xF3rio de downloads padr\xE3o do navegador. Voc\xEA tamb\xE9m pode especificar um subdiret\xF3rio. Diret\xF3rios de download espec\xEDficos para cada site podem ser definidos com a ferramenta de nomea\xE7\xE3o inteligente (smartnaming)",
        change_browser_download_directory:
          "Alterar o diret\xF3rio de download do navegador",
        bad_download_subdirectory_warning:
          "O subdiret\xF3rio especificado n\xE3o \xE9 v\xE1lido.",
        download_subdirectory: "Subdiret\xF3rio de downloads",
        private_browsing_title: "Navega\xE7\xE3o privativa",
        private_browsing_warning:
          "O Video DownloadHelper n\xE3o est\xE1 ativado em janelas privativas/an\xF4nimas. Voc\xEA precisa ativar essa op\xE7\xE3o manualmente (isso n\xE3o \xE9 obrigat\xF3rio).",
        private_browsing_notifications:
          "Mostrar notifica\xE7\xE3o para downloads privativos",
        private_browsing_button:
          "Alterar a configura\xE7\xE3o de navega\xE7\xE3o privativa",
        throttle_youtube:
          "Limitar largura de banda do YouTube (downloads mais lentos, mas menos chance de ser bloqueado)",
        prefer_original_audio: "Preferir \xE1udio original",
        settings_history_title: "Hist\xF3rico",
        transient_history_description: "Mostrar downloads completos no painel",
        history_limit: "Esquecer o hist\xF3rico de downloads ap\xF3s X dias",
        appearance_title: "Apar\xEAncia",
        theme_title: "Tema",
        theme_light: "claro",
        theme_dark: "escuro",
        theme_system: "sistema",
        popup_size_title: "Tamanho da janela",
        popup_size_small: "Pequeno",
        popup_size_medium: "M\xE9dio",
        popup_size_big: "Grande",
        panel_position_title: "Posi\xE7\xE3o do painel",
        use_popup: "Mostrar em pop-up",
        use_sidebar: "Mostrar na barra lateral",
        behavior_title: "Comportamento",
        controls_title: "Controles",
        show_in_context_menu:
          "Acessar comandos pelo bot\xE3o direito na p\xE1gina",
        restart_addon: "Recarregar extens\xE3o",
        reset_settings: "Redefinir configura\xE7\xF5es",
        prefered_quality: "Qualidade de v\xEDdeo preferida",
        prefered_quality_highest:
          "Mais alta (download lento, alta resolu\xE7\xE3o)",
        prefered_quality_1080p: "1080p (valor padr\xE3o)",
        prefered_quality_720p:
          "720p (download r\xE1pido, baixa resolu\xE7\xE3o)",
        prefer_mkv: "Baixar como MKV quando poss\xEDvel",
        preview_mode_title: "Pr\xE9via de m\xEDdia",
        preview_mode_none: "Desativado",
        preview_mode_video: "Pr\xE9via curta do v\xEDdeo",
        preview_mode_image: "Imagem",
        history_title: "Hist\xF3rico de downloads",
        history_warning:
          "N\xE3o registramos seu hist\xF3rico de downloads. Deseja que o Video DownloadHelper lembre do seu hist\xF3rico de downloads?",
        history_warning_2:
          "N\xE3o se preocupe, tudo fica na sua m\xE1quina. Valorizamos sua privacidade.",
        enable_history: "Lembrar hist\xF3rico",
        clear_history: "Limpar hist\xF3rico",
        disable_history: "N\xE3o lembrar meu hist\xF3rico",
        no_downloads_yet: "Nenhuma entrada",
        download_failed: "Download falhou",
        download_failed_description:
          "Infelizmente, falhamos no download dessa m\xEDdia espec\xEDfica. Tentamos oferecer suporte ao maior n\xFAmero poss\xEDvel de sites, ent\xE3o ajudaria muito se voc\xEA pudesse relatar esse erro!",
        download_interrupted: "Download interrompido",
        download_interrupted_description:
          "Conseguimos baixar seu arquivo, mas houve um problema de rede, ent\xE3o o arquivo pode estar menor do que o esperado. Tentamos oferecer suporte ao maior n\xFAmero poss\xEDvel de sites, ent\xE3o ajudaria muito se voc\xEA pudesse relatar esse problema (\xE9 an\xF4nimo!).",
        download_with_drm_failed_description:
          "Algo n\xE3o deu certo. E achamos que este v\xEDdeo possui DRM. N\xE3o oferecemos suporte a v\xEDdeos com DRM.",
        no_youtube: "N\xE3o \xE9 permitido baixar do YouTube",
        no_youtube_description:
          "Infelizmente, a Chrome Web Store n\xE3o permite extens\xF5es para baixar v\xEDdeos do YouTube, por isso n\xE3o conseguimos incluir este recurso na vers\xE3o da extens\xE3o para o Chrome.",
        no_youtube_description_2: "Use o Firefox ou o Microsoft Edge",
        premium_required: "\xC9 necess\xE1rio status Premium",
        premium_yt_required_description:
          "Sem o status Premium, o download de um v\xEDdeo do YouTube s\xF3 pode ser realizado 2 horas ap\xF3s o anterior.",
        premium_hls_required_description:
          "Sem o status Premium, o download de HLS ou MPD s\xF3 pode ser realizado 2 horas ap\xF3s o anterior.",
        premium_all_required_description:
          "Sem o status Premium, um download s\xF3 pode ser realizado 2 horas ap\xF3s o anterior.",
        youtube_too_many_downloads:
          "Ops, parece que o YouTube est\xE1 bloqueado",
        youtube_too_many_downloads_description:
          "O YouTube \xE0s vezes limita a quantidade de v\xEDdeos que podem ser solicitados. Infelizmente, n\xE3o h\xE1 nada que possamos fazer a respeito. Tente novamente mais tarde.",
        stop: "Parar",
        cancel: "Cancelar",
        copy_url: "Copiar URL",
        always_copy_url: "Sempre copiar URL",
        download_button: "Baixar",
        download_as_button_and_menu: "Baixar como\u2026",
        rename_short: "Renomear",
        always_download_as_menu: "Sempre baixar como\u2026",
        download_audio_button: "\xC1udio",
        download_audio_and_video_menu: "Baixar \xE1udio e v\xEDdeo",
        download_audio_only_menu: "Baixar \xE1udio",
        audio_only_for_this_website: "Sempre apenas \xE1udio para este site",
        details: "Detalhes",
        report: "Relatar",
        reporting: "Relatando\u2026",
        reported_thankyou: "Agradecemos!",
      },
      web: {
        back: "Voltar",
        header_help: "Ajuda",
        header_ask_question: "Fa\xE7a-nos uma pergunta",
        activate_title: "Ativa\xE7\xE3o",
        activate_pending: "Pendente\u2026",
        activate_success: "Sucesso",
        activate_error: "Erro",
        activate_no_addon_found:
          "Nenhuma extens\xE3o encontrada. A extens\xE3o est\xE1 instalada?",
        activate_no_method_found: "Nenhum m\xE9todo encontrado.",
        activate_help_me: "Ajude-me.",
        issue_title: "Restaurando compra",
        issue_submit: "Enviar",
        issue_thank_you: "Agradecemos",
        issue_enter_email:
          "Para restaurar sua compra, insira o endere\xE7o de e-mail que usou para comprar sua licen\xE7a:",
        issue_email_sent:
          "Acabamos de enviar um e-mail com um link que ativar\xE1 seu produto.",
        issue_or_digit: "Ou insira o c\xF3digo de 6 d\xEDgitos que enviamos:",
        issue_just_digit:
          "Digite o c\xF3digo de 6 d\xEDgitos que lhe enviamos:",
        issue_i_have_a_code: "(Clique aqui se j\xE1 tiver um c\xF3digo)",
        issue_i_have_a_key:
          "(Clique aqui se voc\xEA j\xE1 possui uma chave de licen\xE7a)",
        issue_key: "Digite sua chave de licen\xE7a do Video DownloadHelper:",
        landing_text1:
          "Baixe qualquer v\xEDdeo de qualquer site, simplesmente funciona!",
        landing_text2: "Mais de 1000 sites suportados",
        landing_text3: "Utilizado por 7 milh\xF5es de usu\xE1rios",
        landing_text4: "4,5 estrelas na loja de extens\xF5es",
        landing_install_for_google: "Instalar para o Chrome",
        landing_install_for_mozilla: "Instalar para o Firefox",
        landing_install_for_microsoft: "Instalar para o Edge",
        landing_feature1_title: "Baixar em HD na velocidade m\xE1xima",
        landing_feature1_description:
          "Baixe v\xEDdeos em alta defini\xE7\xE3o, na velocidade m\xE1xima. Temos orgulho de afirmar que possu\xEDmos o motor de download mais r\xE1pido do mercado.",
        landing_feature2_title: "Arquivar v\xEDdeos",
        landing_feature2_description:
          "Arquive seus v\xEDdeos favoritos, garantindo que nada seja deixado para tr\xE1s.",
        landing_feature3_title: "Suporte a transmiss\xF5es ao vivo",
        landing_feature3_description:
          "Assista \xE0s transmiss\xF5es ao vivo offline, libertando voc\xEA das restri\xE7\xF5es do tempo real.",
        landing_feature4_title: "Baixar \xE1udio",
        landing_feature4_description:
          "Extraia o \xE1udio de v\xEDdeos, convertendo-os em MP3s ou podcasts para ouvir com facilidade.",
        premium_hero1: "Pague uma vez, use para sempre",
        premium_hero2:
          "Adquira a Licen\xE7a Vital\xEDcia do Video DownloadHelper",
        premium_hero3: "Baixe quantos v\xEDdeos quiser, sem limites.",
        welcome_text: "Agora voc\xEA n\xE3o perde mais nenhum v\xEDdeo!",
        welcome_pin_message:
          "Fixe o \xEDcone da extens\xE3o na sua barra de ferramentas:",
      },
    },
    ro: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    ru: {
      addon: {
        appDesc:
          "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432\u0438\u0434\u0435\u043E \u0438\u0437 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430.",
        restore_purchase_button:
          "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0443",
        get_premium_button:
          "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u0432\u0435\u0440\u0441\u0438\u044E",
        back: "\u041D\u0430\u0437\u0430\u0434",
        rm_notifications_all:
          "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
        waiting_for_media:
          "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043C\u0435\u0434\u0438\u0430\u2026",
        nomedia_title:
          "\u041D\u0435 \u0432\u0438\u0434\u0438\u0442\u0435 \u043D\u0443\u0436\u043D\u043E\u0435 \u0432\u0438\u0434\u0435\u043E?",
        nomedia_description:
          "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043E (\u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u0443, \u0435\u0441\u043B\u0438 \u0435\u0441\u0442\u044C), \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C \u043C\u0435\u0434\u0438\u0430. \u0418\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u043E\u0431 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u043C\u0435\u0434\u0438\u0430.",
        nomedia_reload_button:
          "\u041F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A",
        nomedia_reload_button_tooltip:
          "\u041F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 (\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C cookies)",
        show_nomedia_button:
          "\u041D\u0435\u0442 \u0432\u0438\u0434\u0435\u043E?",
        show_nomedia_button_tooltip:
          "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0435\u0441\u043B\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0441\u0432\u043E\u0451 \u0432\u0438\u0434\u0435\u043E",
        setting_button_tooltip:
          "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        history_button_tooltip:
          "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A",
        show_all_history_button:
          "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435",
        complete_title:
          "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
        hide_complete_button: "\u0421\u043A\u0440\u044B\u0442\u044C",
        translate_button_tooltip:
          "\u041F\u043E\u043C\u043E\u0447\u044C \u0441 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u043C VDH",
        help_button_tooltip: "\u0421\u043F\u0440\u0430\u0432\u043A\u0430",
        open_source_tab_button_tooltip:
          "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u0441 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C",
        retry_download_button_tooltip:
          "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443",
        delete_file_button_tooltip:
          "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B",
        download_directory_button_tooltip:
          "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A",
        clear_downloaded_tooltip:
          "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
        show_in_popup_button_tooltip:
          "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u043E \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u043C \u043E\u043A\u043D\u0435",
        show_in_sidebar_button_tooltip:
          "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438",
        video_not_playing_button_tooltip:
          "\u0412\u0438\u0434\u0435\u043E \u043D\u0435 \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F?",
        play: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438",
        warn_drm_tooltip:
          "\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430 DRM-\u0437\u0430\u0449\u0438\u0442\u0430",
        version_title: "\u0412\u0435\u0440\u0441\u0438\u044F",
        account_title: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442",
        one_hundred_downloads_title:
          "\u0412\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438 100 \u0432\u0438\u0434\u0435\u043E!",
        leave_review_description:
          "\u041F\u0440\u0438\u0432\u0435\u0442! \u{1F91A} Video DownloadHelper \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u0425\u043E\u0442\u0438\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0437\u044B\u0432? \u042D\u0442\u043E \u043C\u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043C\u043E\u0436\u0435\u0442.",
        leave_review_button:
          "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432",
        account_status: "\u0421\u0442\u0430\u0442\u0443\u0441",
        account_status_premium: "Premium ($1)",
        free_account:
          "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444",
        copy_to_clipboard:
          "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",
        my_account_button:
          "\u041C\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
        download_title: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
        show_notification:
          "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
        max_parallel_downloads:
          "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A",
        saveas_detected_warning:
          '\u041C\u044B \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u043B\u0438, \u0447\u0442\u043E \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 \u0432\u0430\u0448\u0435\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0435 \u043E\u043A\u043D\u043E "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A". \u041C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u0442\u0443 \u043E\u043F\u0446\u0438\u044E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430',
        change_saveas_setting:
          "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443",
        download_directory_title:
          "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A",
        download_directory_description:
          "\u0412\u0438\u0434\u0435\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442\u0441\u044F \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u043A\u0430\u0442\u0430\u043B\u043E\u0433. \u041A\u0430\u0442\u0430\u043B\u043E\u0433\u0438 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A \u0441 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0445 \u0441\u0430\u0439\u0442\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430 Smartnaming.",
        change_browser_download_directory:
          "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",
        bad_download_subdirectory_warning:
          "\u0423\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u043C\u0438 \u043F\u043E\u0434\u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C.",
        download_subdirectory:
          "\u041F\u043E\u0434\u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A",
        private_browsing_title:
          "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
        private_browsing_warning:
          "Video DownloadHelper \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435.",
        private_browsing_notifications:
          "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A \u0432 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435",
        private_browsing_button:
          "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430",
        throttle_youtube:
          "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u044C YouTube (\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0435\u0435, \u043D\u043E \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u0435\u043D\u044C\u0448\u0435)",
        prefer_original_audio:
          "\u041E\u0442\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u0435 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0437\u0432\u0443\u0447\u0430\u043D\u0438\u044E",
        settings_history_title: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F",
        transient_history_description:
          "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432 \u043F\u0430\u043D\u0435\u043B\u0438",
        history_limit:
          "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0434\u043D\u0435\u0439 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u0438",
        appearance_title:
          "\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434",
        theme_title: "\u0422\u0435\u043C\u0430",
        theme_light:
          "\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0442\u0435\u043C\u0430",
        theme_dark:
          "\u0422\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
        theme_system:
          "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
        popup_size_title:
          "\u0420\u0430\u0437\u043C\u0435\u0440 \u043E\u043A\u043D\u0430",
        popup_size_small:
          "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",
        popup_size_medium: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439",
        popup_size_big: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439",
        panel_position_title:
          "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043D\u0435\u043B\u0438",
        use_popup:
          "\u0412\u043E \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0435\u043C \u043E\u043A\u043D\u0435",
        use_sidebar:
          "\u0412 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438",
        behavior_title:
          "\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435",
        controls_title:
          "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",
        show_in_context_menu:
          "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043C\u0435\u043D\u044E \u043A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u043B\u0438\u043A\u0443 \u043C\u044B\u0448\u044C\u044E \u043D\u0430 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435",
        restart_addon:
          "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435",
        reset_settings:
          "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        prefered_quality:
          "\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0438\u0434\u0435\u043E",
        prefered_quality_highest:
          "\u0412\u044B\u0441\u043E\u043A\u043E\u0435 (\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430, \u0432\u044B\u0441\u043E\u043A\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435)",
        prefered_quality_1080p:
          "1080p (\u0445\u043E\u0440\u043E\u0448\u0435\u0435, \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E)",
        prefered_quality_720p:
          "720p (\u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430, \u043D\u0438\u0437\u043A\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435)",
        prefer_mkv:
          "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u043A\u0430\u043A MKV \u043F\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
        preview_mode_title:
          "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043C\u0435\u0434\u0438\u0430",
        preview_mode_none:
          "\u041E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E",
        preview_mode_video:
          "\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0432\u0438\u0434\u0435\u043E",
        preview_mode_image:
          "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        history_title:
          "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A",
        history_warning:
          "\u041C\u044B \u043D\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0432\u0430\u0448\u0443 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A. \u0425\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B Video DownloadHelper \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043B \u0438\u0441\u0442\u043E\u0440\u0438\u044E?",
        history_warning_2:
          "\u041D\u0435 \u0432\u043E\u043B\u043D\u0443\u0439\u0442\u0435\u0441\u044C, \u0432\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u041C\u044B \u0446\u0435\u043D\u0438\u043C \u0432\u0430\u0448\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C.",
        enable_history:
          "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E",
        clear_history:
          "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E",
        disable_history:
          "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E",
        no_downloads_yet:
          "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A.",
        download_failed:
          "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
        download_failed_description:
          "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u0421\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435, \u0438 \u043C\u044B \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F (\u043C\u044B \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C URL \u0432\u0438\u0434\u0435\u043E \u2014 \u043C\u044B \u043D\u0435 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0435\u043C \u0432\u0430\u0441!).",
        download_interrupted:
          "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u0435\u0440\u0432\u0430\u043D\u0430",
        download_interrupted_description:
          "\u041D\u0430\u043C \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u0430\u0448 \u0444\u0430\u0439\u043B, \u043D\u043E \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0441\u0435\u0442\u044C\u044E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0444\u0430\u0439\u043B \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u043E\u0440\u043E\u0447\u0435, \u0447\u0435\u043C \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C. \u041C\u044B \u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u0432, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u044B\u043B\u043E \u0431\u044B \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043B\u0435\u0437\u043D\u043E, \u0435\u0441\u043B\u0438 \u0431\u044B \u0432\u044B \u043C\u043E\u0433\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E\u0431 \u044D\u0442\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435 (\u044D\u0442\u043E \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u043E!).",
        download_with_drm_failed_description:
          "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u0418 \u043C\u044B \u0434\u0443\u043C\u0430\u0435\u043C, \u0447\u0442\u043E \u044D\u0442\u043E \u0432\u0438\u0434\u0435\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u043E DRM. \u041C\u044B \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u0432\u0438\u0434\u0435\u043E \u0441 DRM.",
        no_youtube:
          "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 YouTube \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u0430",
        no_youtube_description:
          "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D Chrome \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432\u0438\u0434\u0435\u043E \u0441 YouTube, \u043F\u043E\u0442\u043E\u043C\u0443 \u044D\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0432\u0435\u0440\u0441\u0438\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0434\u043B\u044F Chrome.",
        no_youtube_description_2:
          "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 Firefox \u0438\u043B\u0438 Microsoft Edge",
        premium_required:
          "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u0442\u0443\u0441 Premium",
        premium_yt_required_description:
          "\u0411\u0435\u0437 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u041F\u0440\u0435\u043C\u0438\u0443\u043C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 YouTube \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u0440\u0435\u0437 2 \u0447\u0430\u0441\u0430 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439.",
        premium_hls_required_description:
          "\u0411\u0435\u0437 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u041F\u0440\u0435\u043C\u0438\u0443\u043C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 HLS \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u0440\u0435\u0437 2 \u0447\u0430\u0441\u0430 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439.",
        premium_all_required_description:
          "\u0411\u0435\u0437 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u041F\u0440\u0435\u043C\u0438\u0443\u043C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u0440\u0435\u0437 2 \u0447\u0430\u0441\u0430 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439.",
        youtube_too_many_downloads:
          "\u041E\u0439, \u043F\u043E\u0445\u043E\u0436\u0435, YouTube \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D",
        youtube_too_many_downloads_description:
          "YouTube \u0438\u043D\u043E\u0433\u0434\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u0432\u0438\u0434\u0435\u043E. \u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043C\u044B \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u0441 \u044D\u0442\u0438\u043C \u043F\u043E\u0434\u0435\u043B\u0430\u0442\u044C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u043F\u043E\u0437\u0436\u0435.",
        stop: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430",
        cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
        copy_url:
          "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C URL",
        always_copy_url:
          "\u0412\u0441\u0435\u0433\u0434\u0430 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C URL",
        download_button: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C",
        download_as_button_and_menu:
          "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043A\u0430\u043A...",
        rename_short:
          "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
        always_download_as_menu:
          "\u0412\u0441\u0435\u0433\u0434\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u043A\u0430\u043A...",
        download_audio_button: "\u0410\u0443\u0434\u0438\u043E",
        download_audio_and_video_menu:
          "\u0410\u0443\u0434\u0438\u043E \u0438 \u0432\u0438\u0434\u0435\u043E",
        download_audio_only_menu:
          "\u0422\u043E\u043B\u044C\u043A\u043E \u0430\u0443\u0434\u0438\u043E",
        audio_only_for_this_website:
          "\u0412\u0441\u0435\u0433\u0434\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u0443\u0434\u0438\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430",
        details: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
        report: "\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C",
        reporting: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026",
        reported_thankyou: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E!",
      },
      web: {
        back: "\u041D\u0430\u0437\u0430\u0434",
        header_help: "\u041F\u043E\u043C\u043E\u0449\u044C",
        header_ask_question:
          "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",
        activate_title:
          "\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F",
        activate_pending:
          "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435\u2026",
        activate_success: "\u0423\u0441\u043F\u0435\u0445",
        activate_error: "\u041E\u0448\u0438\u0431\u043A\u0430",
        activate_no_addon_found:
          "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041E\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E?",
        activate_no_method_found:
          "\u041C\u0435\u0442\u043E\u0434 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.",
        activate_help_me:
          "\u041F\u043E\u043C\u043E\u0433\u0438\u0442\u0435 \u043C\u043D\u0435.",
        issue_title:
          "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0438",
        issue_submit:
          "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
        issue_thank_you: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E!",
        issue_enter_email:
          "\u0427\u0442\u043E\u0431\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0443, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 email, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435:",
        issue_email_sent:
          "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0432\u0430\u043C \u043F\u0438\u0441\u044C\u043C\u043E \u0441 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438.",
        issue_or_digit:
          "\u0418\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 6-\u0437\u043D\u0430\u0447\u043D\u044B\u0439 \u043A\u043E\u0434 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430:",
        issue_just_digit:
          "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 6-\u0437\u043D\u0430\u0447\u043D\u044B\u0439 \u043A\u043E\u0434 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430:",
        issue_i_have_a_code:
          "(\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u043A\u043E\u0434)",
        issue_i_have_a_key:
          "(\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043A\u043B\u044E\u0447 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438)",
        issue_key:
          "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043A\u043B\u044E\u0447 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 Video DownloadHelper:",
        landing_text1:
          "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u043B\u044E\u0431\u043E\u0435 \u0432\u0438\u0434\u0435\u043E \u0441 \u043B\u044E\u0431\u044B\u0445 \u0441\u0430\u0439\u0442\u043E\u0432, \u0432\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u043E!",
        landing_text2:
          "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 1000+ \u0441\u0430\u0439\u0442\u043E\u0432",
        landing_text3:
          "\u0414\u043E\u0432\u0435\u0440\u044F\u044E\u0442 7 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439",
        landing_text4:
          "4.5 \u0437\u0432\u0435\u0437\u0434\u044B \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0439",
        landing_install_for_google:
          "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u043B\u044F Chrome",
        landing_install_for_mozilla:
          "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u043B\u044F Firefox",
        landing_install_for_microsoft:
          "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u043B\u044F Edge",
        landing_feature1_title:
          "HD-\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438",
        landing_feature1_description:
          "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0432\u0438\u0434\u0435\u043E \u0432 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438. \u041C\u044B \u0433\u043E\u0440\u0434\u0438\u043C\u0441\u044F \u0441\u0430\u043C\u044B\u043C \u0431\u044B\u0441\u0442\u0440\u044B\u043C \u0434\u0432\u0438\u0436\u043A\u043E\u043C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438.",
        landing_feature2_title:
          "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0438\u0434\u0435\u043E",
        landing_feature2_description:
          "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u043B\u044E\u0431\u0438\u043C\u044B\u0435 \u0432\u0438\u0434\u0435\u043E, \u0447\u0442\u043E\u0431\u044B \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C.",
        landing_feature3_title:
          "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u0440\u044F\u043C\u044B\u0445 \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0439",
        landing_feature3_description:
          "\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438 \u043E\u0444\u0444\u043B\u0430\u0439\u043D \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438.",
        landing_feature4_title:
          "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u0430\u0443\u0434\u0438\u043E",
        landing_feature4_description:
          "\u0418\u0437\u0432\u043B\u0435\u043A\u0430\u0439\u0442\u0435 \u0430\u0443\u0434\u0438\u043E \u0438\u0437 \u0432\u0438\u0434\u0435\u043E \u0432 MP3 \u0438\u043B\u0438 \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u044B.",
        premium_hero1:
          "\u041E\u0434\u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0430 \u2014 \u043F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435",
        premium_hero2:
          "\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0438\u0442\u0435 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E Video DownloadHelper \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",
        premium_hero3:
          "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0432\u0438\u0434\u0435\u043E \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0412\u0430\u043C \u0443\u0433\u043E\u0434\u043D\u043E \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439!",
        welcome_text:
          "\u0422\u0435\u043F\u0435\u0440\u044C \u0432\u044B \u043D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u0434\u0435\u043E!",
        welcome_pin_message:
          "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u043E\u043A \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u043F\u0430\u043D\u0435\u043B\u0438:",
      },
    },
    sk: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    sl: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    sv: { addon: { appDesc: "Download Videos from the Web." }, web: {} },
    tr: {
      addon: {
        appDesc: "Web'den Videolar \u0130ndirin.",
        restore_purchase_button: "Sat\u0131n al\u0131m\u0131 geri y\xFCkle",
        get_premium_button: "Premium al",
        back: "Geri",
        waiting_for_media: "Medya i\xE7in bekleniyor...",
        nomedia_title:
          "Arad\u0131\u011F\u0131n medyay\u0131 g\xF6remiyor musun?",
        nomedia_description:
          "Medya tespitine yard\u0131mc\u0131 olmak i\xE7in videoyu ba\u015Flat (varsa reklamlar\u0131 atla). Veya kay\u0131p medyay\u0131 raporla.",
        nomedia_reload_button: "Tespite zorla",
        nomedia_reload_button_tooltip:
          "Zorla sayfay\u0131 yenile (\xE7erezleri temizler)",
        show_nomedia_button: "Video yok mu?",
        show_nomedia_button_tooltip:
          "E\u011Fer videonu bulam\u0131yorsan buraya t\u0131kla",
        setting_button_tooltip: "Ayarlar",
        history_button_tooltip: "\u0130ndirme Ge\xE7mi\u015Fini G\xF6ster",
        show_all_history_button: "t\xFCm\xFCn\xFC g\xF6ster",
        complete_title: "Tamamlanm\u0131\u015F",
        hide_complete_button: "gizle",
        translate_button_tooltip: "VDH \xE7evirisine yard\u0131mc\u0131 ol",
        open_source_tab_button_tooltip: "Kaynak sekmesini a\xE7",
        retry_download_button_tooltip: "\u0130ndirmeyi tekrar dene",
        delete_file_button_tooltip: "Dosyay\u0131 sil",
        download_directory_button_tooltip:
          "\u0130ndirme klas\xF6r\xFCn\xFC g\xF6ster",
        show_in_popup_button_tooltip: "A\xE7\u0131l\u0131r pencerede g\xF6ster",
        show_in_sidebar_button_tooltip: "Kenar \xE7ubu\u011Funda g\xF6ster",
        video_not_playing_button_tooltip: "Video oynam\u0131yor mu?",
        play: "Oynat",
        warn_drm_tooltip: "DRM alg\u0131land\u0131",
        version_title: "S\xFCr\xFCm",
        account_title: "Hesap",
        one_hundred_downloads_title: "100 video indirdin!",
        leave_review_description:
          "Video DownloadHelper'\u0131 be\u011Fendi\u011Fini umuyoruz :) Eklenti web sitesine ho\u015F bir inceleme yazman m\xFCmk\xFCn m\xFC?",
        leave_review_button: "\u0130nceleme yaz",
        account_status: "Durum",
        account_status_premium: "Premium ($1)",
        free_account: "\xDCcretsiz plan",
        copy_to_clipboard: "Bilgiyi panoya kopyala",
        my_account_button: "Hesab\u0131m",
        download_title: "\u0130ndirmeler",
        show_notification: "\u0130ndirme tamamlan\u0131nca bildirim g\xF6ster",
        max_parallel_downloads: "Maks e\u015F zamanl\u0131 indirme",
        saveas_detected_warning:
          "\u0130ndirme i\u015Flemi tamamland\u0131ktan sonra taray\u0131c\u0131n\u0131z\u0131n 'Farkl\u0131 Kaydet' ileti\u015Fim kutusunu g\xF6sterdi\u011Fini tespit ettik. Bu se\xE7ene\u011Fi taray\u0131c\u0131 ayarlar\u0131n\u0131zdan devre d\u0131\u015F\u0131 b\u0131rakman\u0131z\u0131 \xF6neririz.",
        change_saveas_setting: "Ayar\u0131 de\u011Fi\u015Ftir",
        private_browsing_title: "Gizli gezinme",
        private_browsing_warning:
          "Video DownloadHelper, \xD6zel/Gizli pencerelerde etkin de\u011Fil. Bu se\xE7ene\u011Fi manuel olarak a\xE7man\u0131z gerekiyor (zorunlu de\u011Fil).",
        private_browsing_notifications:
          "Gizli indirmeler i\xE7in bildirim g\xF6ster",
        private_browsing_button:
          "Gizli gezinme ayar\u0131n\u0131 de\u011Fi\u015Ftir",
        prefer_original_audio: "Orijinal sesi tercih et",
        settings_history_title: "Ge\xE7mi\u015F",
        transient_history_description:
          "Panelde tamamlanm\u0131\u015F indirmeleri g\xF6ster",
        history_limit: "X g\xFCn sonra indirme ge\xE7mi\u015Fini unut",
        appearance_title: "G\xF6r\xFCn\xFCm",
        theme_title: "Tema",
        theme_light: "ayd\u0131nl\u0131k",
        theme_dark: "karanl\u0131k",
        theme_system: "sistem",
        popup_size_title: "Pencere boyutu",
        popup_size_small: "K\xFC\xE7\xFCk",
        popup_size_medium: "Orta",
        popup_size_big: "B\xFCy\xFCk",
        panel_position_title: "Panel pozisyonu",
        use_popup: "A\xE7\u0131l\u0131r pencerede g\xF6ster",
        use_sidebar: "Kenar \xE7ubu\u011Funda g\xF6ster",
        behavior_title: "Davran\u0131\u015F",
        show_in_context_menu:
          "Sayfada sa\u011F t\u0131k men\xFCs\xFCnden komutlara eri\u015F",
        restart_addon: "Eklentiyi yeniden y\xFCkle",
        reset_settings: "Ayarlar\u0131 s\u0131f\u0131rla",
        preview_mode_title: "Medya \xF6nizlemesi",
        preview_mode_none: "Devred\u0131\u015F\u0131",
        preview_mode_video: "K\u0131sa video \xF6nizlemesi",
        preview_mode_image: "Resim",
        history_title: "\u0130ndirme Ge\xE7mi\u015Fi",
        history_warning:
          "\u0130ndirme ge\xE7mi\u015Finizi kaydetmiyoruz. Video DownloadHelper'\u0131n indirme ge\xE7mi\u015Fini hat\u0131rlamas\u0131n\u0131 ister misin?",
        history_warning_2:
          "Endi\u015Felenmeyin, her \u015Fey bilgisayar\u0131n\u0131zda kal\u0131r. Gizlili\u011Finize de\u011Fer veriyoruz.",
        enable_history: "Ge\xE7mi\u015Fi Etkinle\u015Ftir",
        clear_history: "Ge\xE7mi\u015Fi Temizle",
        disable_history: "Ge\xE7mi\u015Fimi hat\u0131rlama",
        no_downloads_yet: "Hen\xFCz giri\u015F yok.",
        download_failed: "\u0130ndirme ba\u015Far\u0131s\u0131z",
        download_failed_description:
          "Maalesef s\xF6z konusu medyay\u0131 indirmeyi ba\u015Faramad\u0131k. M\xFCmk\xFCn oldu\u011Funca \xE7ok web sitesini desteklemeye \xE7al\u0131\u015F\u0131yoruz, bu nedenle bu hatay\u0131 bildirirseniz bize \xE7ok yard\u0131mc\u0131 olursunuz (anonimdir!).",
        download_interrupted: "\u0130ndirme kesintiye u\u011Frad\u0131",
        download_interrupted_description:
          "Dosyan\u0131z\u0131 indirmeyi ba\u015Fard\u0131k, ancak bir a\u011F sorunu olu\u015Ftu, bu nedenle dosya beklenenden daha k\u0131sa olabilir. M\xFCmk\xFCn oldu\u011Funca \xE7ok web sitesini desteklemeye \xE7al\u0131\u015F\u0131yoruz, bu nedenle bu hatay\u0131 bildirirseniz bize \xE7ok yard\u0131mc\u0131 olursunuz (anonimdir!).",
        download_with_drm_failed_description:
          "Bir sorun olu\u015Ftu. Bu videonun DRM korumas\u0131na sahip oldu\u011Funu d\xFC\u015F\xFCn\xFCyoruz. DRM korumas\u0131na sahip videolar\u0131 desteklemiyoruz.",
        no_youtube: "Youtube'dan indirmeye izin verilmiyor",
        no_youtube_description:
          "Ne yaz\u0131k ki Chrome Web Ma\u011Fazas\u0131 YouTube videolar\u0131n\u0131 indirmek i\xE7in eklentilere izin vermiyor, bu nedenle eklentinin Chrome s\xFCr\xFCm\xFCne bu \xF6zelli\u011Fi ekleyemedik.",
        premium_required: "Premium stat\xFC gerekli",
        premium_yt_required_description:
          "Premium stat\xFCs\xFC olmadan YouTube indirme i\u015Flemi bir \xF6ncekinden en fazla 2 saat sonra ger\xE7ekle\u015Ftirilebilir.",
        premium_hls_required_description:
          "Premium stat\xFCs\xFC olmadan HLS veya MPD indirme i\u015Flemi bir \xF6ncekinden en fazla 2 saat sonra ger\xE7ekle\u015Ftirilebilir.",
        youtube_too_many_downloads:
          "Eyvah, YouTube engellenmi\u015F g\xF6r\xFCn\xFCyor",
        youtube_too_many_downloads_description:
          "YouTube bazen istenebilecek video say\u0131s\u0131n\u0131 s\u0131n\u0131rlayabilir. Maalesef yapabilece\u011Fimiz bir \u015Fey yok. Daha sonra tekrar deneyin.",
        stop: "Dur",
        cancel: "\u0130ptal",
        copy_url: "URL'yi Kopyala",
        always_copy_url: "Her zaman URL'yi kopyala",
        download_button: "\u0130ndir",
        download_as_button_and_menu: "Farkl\u0131 \u0130ndir...",
        rename_short: "Yeniden Adland\u0131r",
        always_download_as_menu: "Her Zaman Farkl\u0131 \u0130ndir...",
        download_audio_button: "Ses",
        download_audio_and_video_menu: "Ses & Video \u0130ndir",
        download_audio_only_menu: "Ses \u0130ndir",
        audio_only_for_this_website: "Bu website i\xE7in her zaman sadece ses",
        details: "Detaylar",
        report: "Bildir",
        reporting: "Bildiriliyor...",
        reported_thankyou: "Te\u015Fekk\xFCrler!",
      },
      web: {
        back: "Geri",
        header_help: "Yard\u0131m",
        activate_title: "Etkinle\u015Ftirme",
        activate_pending: "Bekliyor...",
        activate_success: "Ba\u015Far\u0131l\u0131",
        activate_error: "Hata",
        activate_no_addon_found:
          "Hi\xE7bir eklenti bulunamad\u0131. Eklenti kurulu mu?",
        activate_no_method_found: "Hi\xE7bir metod bulunamad\u0131.",
        activate_help_me: "Bana yard\u0131m et.",
        issue_title: "Sat\u0131n al\u0131mlar geri y\xFCkleniyor",
        issue_submit: "G\xF6nder",
        issue_thank_you: "Te\u015Fekk\xFCrler",
        issue_enter_email:
          "Sat\u0131n al\u0131m\u0131n\u0131z\u0131 geri y\xFCklemek i\xE7in lisans\u0131n\u0131z\u0131 al\u0131rken kulland\u0131\u011F\u0131n\u0131z e-posta adresini girin:",
        issue_email_sent:
          "Size \xFCr\xFCn\xFCn\xFCz\xFC etkinle\u015Ftirecek ba\u011Flant\u0131y\u0131 i\xE7eren bir e-posta g\xF6nderdik.",
        issue_or_digit:
          "Veya size g\xF6nderdi\u011Fimiz 6 haneli kodu girebilirsiniz:",
        issue_just_digit: "Size g\xF6nderdi\u011Fimiz 6 haneli kodu girin:",
        issue_i_have_a_code:
          "(E\u011Fer koda zaten sahipseniz buraya t\u0131klay\u0131n)",
        issue_i_have_a_key:
          "(E\u011Fer lisans\u0131n\u0131z varsa buraya t\u0131klay\u0131n)",
        issue_key:
          "Video DownloadHelper lisans anahtar\u0131n\u0131z\u0131 girin:",
        landing_text1:
          "\u0130stedi\u011Finiz videoyu istedi\u011Finiz websitesinden indirin, i\u015Fe yar\u0131yor!",
        landing_text2: "1000+ website destekleniyor",
        landing_text3:
          "7 milyon kullan\u0131c\u0131 taraf\u0131ndan g\xFCveniliyor",
        landing_text4: "Eklenti ma\u011Fazas\u0131nda 4.5 y\u0131ld\u0131z",
        landing_install_for_google: "Chrome i\xE7in \u0130ndir",
        landing_install_for_mozilla: "Firefox i\xE7in \u0130ndir",
        landing_install_for_microsoft: "Edge i\xE7in \u0130ndir",
        landing_feature1_title: "Son h\u0131z HD \u0130ndirme",
        landing_feature1_description:
          "Videolar\u0131 y\xFCksek \xE7\xF6z\xFCn\xFCrl\xFCkte ve maksimum h\u0131zda indirin. Piyasadaki en h\u0131zl\u0131 indirme motoruna sahip oldu\u011Fumuzu iddia etmekten gurur duyuyoruz.",
        landing_feature2_title: "Videolar\u0131 ar\u015Fivle",
        landing_feature2_description:
          "En sevdi\u011Finiz videolar\u0131 ar\u015Fivleyin, hi\xE7bir \u015Feyin geride kalmad\u0131\u011F\u0131ndan emin olun.",
        landing_feature3_title: "Canl\u0131 Ak\u0131\u015F Deste\u011Fi",
        landing_feature3_description:
          "Canl\u0131 yay\u0131nlar\u0131 \xE7evrimd\u0131\u015F\u0131 izlemenin keyfini \xE7\u0131kar\u0131n, ger\xE7ek zamanl\u0131 k\u0131s\u0131tlamalardan kurtulun.",
        landing_feature4_title: "Ses \u0130ndirme",
        landing_feature4_description:
          "Videolardan ses dosyalar\u0131n\u0131 \xE7\u0131kar\u0131n ve bunlar\u0131 kolay dinleme i\xE7in MP3'lere veya podcast'lere d\xF6n\xFC\u015Ft\xFCr\xFCn.",
        premium_hero1: "Bir kere \xF6de, \xF6m\xFCr boyu kullan",
        premium_hero2: "Video DownloadHelper i\xE7in \xD6m\xFCr Boyu Lisans Al",
        premium_hero3:
          "\u0130stedi\u011Finiz kadar videoyu indirin, hi\xE7bir s\u0131n\u0131rlama yok.",
        welcome_text:
          "Art\u0131k hi\xE7bir videoyu ka\xE7\u0131rmayacaks\u0131n\u0131z!",
        welcome_pin_message:
          "Eklenti simgesini ara\xE7 \xE7ubu\u011Funuza sabitleyin:",
      },
    },
    uk: {
      addon: {
        appDesc:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0432\u0456\u0434\u0435\u043E \u0437 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443.",
        restore_purchase_button:
          "\u0412\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0443",
        get_premium_button:
          "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0435\u043C\u0456\u0443\u043C-\u0432\u0435\u0440\u0441\u0456\u044E",
        back: "\u041D\u0430\u0437\u0430\u0434",
        rm_notifications_all:
          "\u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438 \u0432\u0441\u0456 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F",
        waiting_for_media:
          "\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0435\u0434\u0456\u0430\u2026",
        nomedia_title:
          "\u041D\u0435 \u0431\u0430\u0447\u0438\u0442\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0435 \u0432\u0456\u0434\u0435\u043E?",
        nomedia_description:
          "\u0417\u0430\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u0432\u0456\u0434\u0435\u043E (\u0456 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443, \u044F\u043A\u0449\u043E \u0454), \u0449\u043E\u0431 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u0437\u043D\u0430\u0439\u0442\u0438 \u043C\u0435\u0434\u0456\u0430. \u0410\u0431\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0442\u0435 \u043F\u0440\u043E \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u043C\u0435\u0434\u0456\u0430.",
        nomedia_reload_button:
          "\u041F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u0448\u0443\u043A",
        nomedia_reload_button_tooltip:
          "\u041F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 (\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 cookies)",
        show_nomedia_button:
          "\u041D\u0435\u043C\u0430\u0454 \u0432\u0456\u0434\u0435\u043E?",
        show_nomedia_button_tooltip:
          "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0442\u0443\u0442, \u044F\u043A\u0449\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0432\u043E\u0454 \u0432\u0456\u0434\u0435\u043E",
        setting_button_tooltip:
          "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        history_button_tooltip:
          "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C",
        show_all_history_button:
          "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0432\u0441\u0435",
        complete_title:
          "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
        hide_complete_button: "\u0421\u0445\u043E\u0432\u0430\u0442\u0438",
        translate_button_tooltip:
          "\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u0437 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u043E\u043C VDH",
        open_source_tab_button_tooltip:
          "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u0437 \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u043C \u043A\u043E\u0434\u043E\u043C",
        retry_download_button_tooltip:
          "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
        delete_file_button_tooltip:
          "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0444\u0430\u0439\u043B",
        download_directory_button_tooltip:
          "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0430\u043F\u043A\u0443 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C",
        clear_downloaded_tooltip:
          "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
        show_in_popup_button_tooltip:
          "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0443 \u0432\u0438\u0440\u0438\u043D\u0430\u044E\u0447\u043E\u043C\u0443 \u0432\u0456\u043A\u043D\u0456",
        show_in_sidebar_button_tooltip:
          "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456",
        video_not_playing_button_tooltip:
          "\u0412\u0456\u0434\u0435\u043E \u043D\u0435 \u0432\u0456\u0434\u0442\u0432\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F?",
        play: "\u0412\u0456\u0434\u0442\u0432\u043E\u0440\u0438\u0442\u0438",
        warn_drm_tooltip:
          "\u0412\u0438\u044F\u0432\u043B\u0435\u043D\u043E DRM-\u0437\u0430\u0445\u0438\u0441\u0442",
        version_title: "\u0412\u0435\u0440\u0441\u0456\u044F",
        account_title: "\u0410\u043A\u0430\u0443\u043D\u0442",
        one_hundred_downloads_title:
          "\u0412\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u043B\u0438 100 \u0432\u0456\u0434\u0435\u043E!",
        leave_review_description:
          "\u041F\u0440\u0438\u0432\u0456\u0442! \u{1F91A} Video DownloadHelper \u043C\u043E\u0436\u043D\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E. \u0425\u043E\u0447\u0435\u0442\u0435 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0438\u0439 \u0432\u0456\u0434\u0433\u0443\u043A? \u0426\u0435 \u0434\u0443\u0436\u0435 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435 \u{1F60A}.",
        leave_review_button:
          "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043A",
        account_status: "\u0421\u0442\u0430\u0442\u0443\u0441",
        account_status_premium: "Premium ($1)",
        free_account:
          "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u0442\u0430\u0440\u0438\u0444",
        copy_to_clipboard:
          "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443",
        my_account_button:
          "\u041C\u0456\u0439 \u0430\u043A\u0430\u0443\u043D\u0442",
        download_title:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
        show_notification:
          "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
        max_parallel_downloads:
          "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0430\u0440\u0430\u043B\u0435\u043B\u044C\u043D\u0438\u0445 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C",
        saveas_detected_warning:
          "\u0412\u0438\u044F\u0432\u043B\u0435\u043D\u043E, \u0449\u043E \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0434\u0456\u0430\u043B\u043E\u0433 \xAB\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u044F\u043A\xBB \u043F\u0456\u0441\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F. \u0420\u0430\u0434\u0438\u043C\u043E \u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0446\u044E \u043E\u043F\u0446\u0456\u044E \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.",
        change_saveas_setting:
          "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        download_directory_title:
          "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C",
        download_directory_description:
          "\u0412\u0456\u0434\u0435\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u044E\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C. \u0412\u0438 \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0456\u0434\u043A\u0430\u0442\u0430\u043B\u043E\u0433. \u041A\u0430\u0442\u0430\u043B\u043E\u0433\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C \u0434\u043B\u044F \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0438\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u043C\u043E\u0436\u043D\u0430 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430 SmartNaming.",
        change_browser_download_directory:
          "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",
        bad_download_subdirectory_warning:
          "\u0412\u043A\u0430\u0437\u0430\u043D\u0438\u0439 \u0432\u0430\u043C\u0438 \u043F\u0456\u0434\u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043D\u0435\u0434\u0456\u0439\u0441\u043D\u0438\u0439.",
        download_subdirectory:
          "\u041F\u0456\u0434\u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C",
        private_browsing_title:
          "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
        private_browsing_warning:
          "Video DownloadHelper \u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0454 \u0432 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u043C\u0443 \u0440\u0435\u0436\u0438\u043C\u0456.",
        private_browsing_notifications:
          "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C \u0443 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u043C\u0443 \u0440\u0435\u0436\u0438\u043C\u0456",
        private_browsing_button:
          "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0443",
        throttle_youtube:
          "\u041E\u0431\u043C\u0435\u0436\u0438\u0442\u0438 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C YouTube (\u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0456\u0448\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F, \u0430\u043B\u0435 \u043C\u0435\u043D\u0448\u0438\u0439 \u0440\u0438\u0437\u0438\u043A \u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F)",
        prefer_original_audio:
          "\u0412\u0456\u0434\u0434\u0430\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0443 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0437\u0432\u0443\u043A\u0443",
        settings_history_title: "\u0406\u0441\u0442\u043E\u0440\u0456\u044F",
        transient_history_description:
          "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0432\u0441\u0456 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0443 \u043F\u0430\u043D\u0435\u043B\u0456",
        history_limit:
          "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0434\u043D\u0456\u0432 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u0457",
        appearance_title:
          "\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u0432\u0438\u0433\u043B\u044F\u0434",
        theme_title: "\u0422\u0435\u043C\u0430",
        theme_light:
          "\u0421\u0432\u0456\u0442\u043B\u0430 \u0442\u0435\u043C\u0430",
        theme_dark: "\u0422\u0435\u043C\u043D\u0430 \u0442\u0435\u043C\u0430",
        theme_system:
          "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430 \u0442\u0435\u043C\u0430",
        popup_size_title:
          "\u0420\u043E\u0437\u043C\u0456\u0440 \u0432\u0456\u043A\u043D\u0430",
        popup_size_small:
          "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",
        popup_size_medium: "\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439",
        popup_size_big: "\u0412\u0435\u043B\u0438\u043A\u0438\u0439",
        panel_position_title:
          "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043F\u0430\u043D\u0435\u043B\u0456",
        use_popup:
          "\u0423 \u0432\u0438\u0440\u0438\u043D\u0430\u044E\u0447\u043E\u043C\u0443 \u0432\u0456\u043A\u043D\u0456",
        use_sidebar:
          "\u0423 \u0431\u0456\u0447\u043D\u0456\u0439 \u043F\u0430\u043D\u0435\u043B\u0456",
        behavior_title:
          "\u041F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430",
        controls_title:
          "\u0423\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F",
        show_in_context_menu:
          "\u0414\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043C\u0435\u043D\u044E \u043A\u043E\u043C\u0430\u043D\u0434 \u043F\u0440\u0430\u0432\u043E\u044E \u043A\u043D\u043E\u043F\u043A\u043E\u044E \u043C\u0438\u0448\u0456 \u043D\u0430 \u0446\u0456\u043B\u044C\u043E\u0432\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456",
        restart_addon:
          "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F",
        reset_settings:
          "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        prefered_quality:
          "\u0411\u0430\u0436\u0430\u043D\u0430 \u044F\u043A\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u0435\u043E",
        prefered_quality_highest:
          "\u041D\u0430\u0439\u0432\u0438\u0449\u0430 (\u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F, \u0432\u0438\u0441\u043E\u043A\u0430 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0456\u0441\u0442\u044C)",
        prefered_quality_1080p:
          "1080p (\u0432\u0438\u0441\u043E\u043A\u0430 \u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C)",
        prefered_quality_720p:
          "720p (\u0448\u0432\u0438\u0434\u043A\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F, \u043D\u0438\u0437\u044C\u043A\u0430 \u0440\u043E\u0437\u0434\u0456\u043B\u044C\u043D\u0456\u0441\u0442\u044C)",
        prefer_mkv:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438 \u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0456 MKV, \u043A\u043E\u043B\u0438 \u0446\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u043E",
        preview_mode_title:
          "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u043C\u0435\u0434\u0456\u0430",
        preview_mode_none: "\u0412\u0438\u043C\u043A\u043D\u0435\u043D\u043E",
        preview_mode_video:
          "\u041F\u0435\u0440\u0435\u0434 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0433\u043E \u0432\u0456\u0434\u0435\u043E",
        preview_mode_image:
          "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
        history_title:
          "\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C",
        history_warning:
          "\u041C\u0438 \u043D\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u043C\u043E \u0432\u0430\u0448\u0443 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C. \u0425\u043E\u0447\u0435\u0442\u0435, \u0449\u043E\u0431 Video DownloadHelper \u0437\u0430\u043F\u0430\u043C\u2019\u044F\u0442\u043E\u0432\u0443\u0432\u0430\u0432 \u0456\u0441\u0442\u043E\u0440\u0456\u044E?",
        history_warning_2:
          "\u041D\u0435 \u0445\u0432\u0438\u043B\u044E\u0439\u0442\u0435\u0441\u044F, \u0443\u0441\u0456 \u0434\u0430\u043D\u0456 \u0437\u0430\u043B\u0438\u0448\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u043E\u043C\u0443 \u043F\u0440\u0438\u0441\u0442\u0440\u043E\u0457. \u041C\u0438 \u0446\u0456\u043D\u0443\u0454\u043C\u043E \u0432\u0430\u0448\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C.",
        enable_history:
          "\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E",
        clear_history:
          "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E",
        disable_history:
          "\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E",
        no_downloads_yet:
          "\u041F\u043E\u043A\u0438 \u0449\u043E \u043D\u0435\u043C\u0430\u0454 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u044C.",
        download_failed:
          "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
        download_failed_description:
          "\u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u0442\u0435 \u043F\u0440\u043E \u043F\u043E\u043C\u0438\u043B\u043A\u0443, \u0456 \u043C\u0438 \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0454\u043C\u043E\u0441\u044F \u0440\u043E\u0437\u0456\u0431\u0440\u0430\u0442\u0438\u0441\u044F (\u043C\u0438 \u0430\u043D\u043E\u043D\u0456\u043C\u043D\u043E \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u044F\u0454\u043C\u043E URL \u0432\u0456\u0434\u0435\u043E \u2014 \u043C\u0438 \u043D\u0435 \u0432\u0456\u0434\u0441\u043B\u0456\u0434\u043A\u043E\u0432\u0443\u0454\u043C\u043E \u0432\u0430\u0441!).",
        download_interrupted:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u0440\u0432\u0430\u043D\u043E",
        download_interrupted_description:
          "\u0424\u0430\u0439\u043B \u0431\u0443\u043B\u043E \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E, \u0430\u043B\u0435 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0437 \u043C\u0435\u0440\u0435\u0436\u0435\u044E \u0432\u0456\u043D \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043A\u043E\u0440\u043E\u0442\u0448\u0438\u0439, \u043D\u0456\u0436 \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043B\u043E\u0441\u044F. \u041C\u0438 \u043D\u0430\u043C\u0430\u0433\u0430\u0454\u043C\u043E\u0441\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u044F\u043A\u043E\u043C\u043E\u0433\u0430 \u0431\u0456\u043B\u044C\u0448\u0435 \u0441\u0430\u0439\u0442\u0456\u0432, \u0442\u043E\u043C\u0443 \u0431\u0443\u043B\u043E \u0431 \u0434\u0443\u0436\u0435 \u043A\u043E\u0440\u0438\u0441\u043D\u043E, \u044F\u043A\u0431\u0438 \u0432\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043B\u0438 \u043F\u0440\u043E \u0446\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 (\u0446\u0435 \u0430\u043D\u043E\u043D\u0456\u043C\u043D\u043E!).",
        download_with_drm_failed_description:
          "\u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u0419\u043C\u043E\u0432\u0456\u0440\u043D\u043E, \u0446\u0435 \u0432\u0456\u0434\u0435\u043E \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0435 DRM. \u041C\u0438 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u043C\u043E \u0432\u0456\u0434\u0435\u043E \u0437 DRM.",
        no_youtube:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437 YouTube \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E",
        no_youtube_description:
          "\u041D\u0430 \u0436\u0430\u043B\u044C, \u043C\u0430\u0433\u0430\u0437\u0438\u043D Chrome \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0454 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0432\u0456\u0434\u0435\u043E \u0437 YouTube, \u0442\u043E\u043C\u0443 \u0446\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u044F \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u044F \u0443 \u0432\u0435\u0440\u0441\u0456\u0457 \u0434\u043B\u044F Chrome.",
        no_youtube_description_2:
          "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 Firefox \u0430\u0431\u043E Microsoft Edge",
        premium_required:
          "\u041F\u043E\u0442\u0440\u0456\u0431\u0435\u043D \u0441\u0442\u0430\u0442\u0443\u0441 Premium",
        premium_yt_required_description:
          "\u0411\u0435\u0437 \u0441\u0442\u0430\u0442\u0443\u0441\u0443 Premium \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437 YouTube \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u043B\u0438\u0448\u0435 \u0447\u0435\u0440\u0435\u0437 2 \u0433\u043E\u0434\u0438\u043D\u0438 \u043F\u0456\u0441\u043B\u044F \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E.",
        premium_hls_required_description:
          "\u0411\u0435\u0437 \u0441\u0442\u0430\u0442\u0443\u0441\u0443 Premium \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F HLS \u0430\u0431\u043E MPD \u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043B\u0438\u0448\u0435 \u0447\u0435\u0440\u0435\u0437 2 \u0433\u043E\u0434\u0438\u043D\u0438 \u043F\u0456\u0441\u043B\u044F \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E",
        premium_all_required_description:
          "\u0411\u0435\u0437 \u043F\u0440\u0435\u043C\u0456\u0443\u043C-\u0441\u0442\u0430\u0442\u0443\u0441\u0443 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u043A\u043E\u043D\u0430\u0442\u0438 \u043B\u0438\u0448\u0435 \u0447\u0435\u0440\u0435\u0437 2 \u0433\u043E\u0434\u0438\u043D\u0438 \u043F\u0456\u0441\u043B\u044F \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E.",
        youtube_too_many_downloads:
          "\u0423\u043F\u0441, \u0437\u0434\u0430\u0454\u0442\u044C\u0441\u044F, YouTube \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u043E",
        youtube_too_many_downloads_description:
          "\u0406\u043D\u043E\u0434\u0456 YouTube \u043E\u0431\u043C\u0435\u0436\u0443\u0454 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0430\u043F\u0438\u0442\u0443\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0435\u043E. \u041D\u0430 \u0436\u0430\u043B\u044C, \u043C\u0438 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043C\u043E\u0436\u0435\u043C\u043E \u0437 \u0446\u0438\u043C \u0432\u0434\u0456\u044F\u0442\u0438. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u0456\u0437\u043D\u0456\u0448\u0435.",
        stop: "\u0417\u0443\u043F\u0438\u043D\u0438\u0442\u0438",
        cancel: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
        copy_url: "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 URL",
        always_copy_url:
          "\u0417\u0430\u0432\u0436\u0434\u0438 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 URL",
        download_button:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438",
        download_as_button_and_menu:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u044F\u043A\u2026",
        rename_short:
          "\u041F\u0435\u0440\u0435\u043D\u0430\u0437\u0432\u0430\u0442\u0438",
        always_download_as_menu:
          "\u0417\u0430\u0432\u0436\u0434\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438 \u044F\u043A\u2026",
        download_audio_button: "\u0410\u0443\u0434\u0456\u043E",
        download_audio_and_video_menu:
          "\u0410\u0443\u0434\u0456\u043E \u0442\u0430 \u0432\u0456\u0434\u0435\u043E",
        download_audio_only_menu:
          "\u0422\u0456\u043B\u044C\u043A\u0438 \u0430\u0443\u0434\u0456\u043E",
        audio_only_for_this_website:
          "\u0417\u0430\u0432\u0436\u0434\u0438 \u0442\u0456\u043B\u044C\u043A\u0438 \u0430\u0443\u0434\u0456\u043E \u0434\u043B\u044F \u0446\u044C\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0443",
        details: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435",
        report: "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438",
        reporting:
          "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430\u2026",
        reported_thankyou: "\u0414\u044F\u043A\u0443\u044E!",
      },
      web: {
        back: "\u041D\u0430\u0437\u0430\u0434",
        header_help: "\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430",
        activate_title:
          "\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0456\u044F",
        activate_pending:
          "\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F\u2026",
        activate_success: "\u0423\u0441\u043F\u0456\u0445",
        activate_error: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430",
        activate_no_addon_found:
          "\u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u0412\u043E\u043D\u043E \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0435?",
        activate_no_method_found:
          "\u041C\u0435\u0442\u043E\u0434 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E.",
        activate_help_me:
          "\u0414\u043E\u043F\u043E\u043C\u043E\u0436\u0456\u0442\u044C \u043C\u0435\u043D\u0456.",
        issue_title:
          "\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438",
        issue_submit:
          "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438",
        issue_thank_you: "\u0414\u044F\u043A\u0443\u0454\u043C\u043E!",
        issue_enter_email:
          "\u0429\u043E\u0431 \u0432\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0443, \u0432\u0432\u0435\u0434\u0456\u0442\u044C email, \u044F\u043A\u0438\u0439 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043B\u0438 \u043F\u0440\u0438 \u043A\u0443\u043F\u0456\u0432\u043B\u0456:",
        issue_email_sent:
          "\u041C\u0438 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043B\u0438 \u0432\u0430\u043C \u043B\u0438\u0441\u0442 \u0456\u0437 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C \u0434\u043B\u044F \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0456\u0457.",
        issue_or_digit:
          "\u0410\u0431\u043E \u0432\u0432\u0435\u0434\u0456\u0442\u044C 6-\u0437\u043D\u0430\u0447\u043D\u0438\u0439 \u043A\u043E\u0434 \u0456\u0437 \u043B\u0438\u0441\u0442\u0430:",
        issue_just_digit:
          "\u0412\u0432\u0435\u0434\u0456\u0442\u044C 6-\u0437\u043D\u0430\u0447\u043D\u0438\u0439 \u043A\u043E\u0434, \u044F\u043A\u0438\u0439 \u043C\u0438 \u0432\u0430\u043C \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043B\u0438:",
        issue_i_have_a_code:
          "(\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0442\u0443\u0442, \u044F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0432\u0436\u0435 \u0454 \u043A\u043E\u0434)",
        issue_i_have_a_key:
          "(\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0442\u0443\u0442, \u044F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0454 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u0439\u043D\u0438\u0439 \u043A\u043B\u044E\u0447)",
        issue_key:
          "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u0439\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 Video DownloadHelper:",
        landing_text1:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0439\u0442\u0435 \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0432\u0456\u0434\u0435\u043E \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0441\u0430\u0439\u0442\u0456\u0432 \u2014 \u0443\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u043E!",
        landing_text2:
          "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 1000+ \u0441\u0430\u0439\u0442\u0456\u0432",
        landing_text3:
          "\u0414\u043E\u0432\u0456\u0440\u044F\u044E\u0442\u044C 7 \u043C\u0456\u043B\u044C\u0439\u043E\u043D\u0456\u0432 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432",
        landing_text4:
          "4.5 \u0437\u0456\u0440\u043E\u043A \u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u044C",
        landing_install_for_google:
          "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0434\u043B\u044F Chrome",
        landing_install_for_mozilla:
          "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0434\u043B\u044F Firefox",
        landing_install_for_microsoft:
          "\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0434\u043B\u044F Edge",
        landing_feature1_title:
          "HD-\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0456\u0439 \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456",
        landing_feature1_description:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0439\u0442\u0435 \u0432\u0456\u0434\u0435\u043E \u0443 \u0432\u0438\u0441\u043E\u043A\u0456\u0439 \u044F\u043A\u043E\u0441\u0442\u0456 \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0456\u0439 \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456. \u041C\u0438 \u043F\u0438\u0448\u0430\u0454\u043C\u043E\u0441\u044F \u043D\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0438\u043C \u0434\u0432\u0438\u0436\u043A\u043E\u043C \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F.",
        landing_feature2_title:
          "\u0410\u0440\u0445\u0456\u0432\u0443\u0439\u0442\u0435 \u0432\u0456\u0434\u0435\u043E",
        landing_feature2_description:
          "\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0439\u0442\u0435 \u0443\u043B\u044E\u0431\u043B\u0435\u043D\u0456 \u0432\u0456\u0434\u0435\u043E, \u0449\u043E\u0431 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0438.",
        landing_feature3_title:
          "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 live-\u0441\u0442\u0440\u0438\u043C\u0456\u0432",
        landing_feature3_description:
          "\u0414\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0456\u0457 \u043E\u0444\u043B\u0430\u0439\u043D \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C \u0437\u0430 \u0447\u0430\u0441\u043E\u043C.",
        landing_feature4_title:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0430\u0443\u0434\u0456\u043E",
        landing_feature4_description:
          "\u0412\u0438\u0442\u044F\u0433\u0430\u0439\u0442\u0435 \u0430\u0443\u0434\u0456\u043E \u0437 \u0432\u0456\u0434\u0435\u043E \u0443 MP3 \u0430\u0431\u043E \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u0438.",
        premium_hero1:
          "\u041E\u0434\u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0430 \u2014 \u0434\u043E\u0432\u0456\u0447\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F",
        premium_hero2:
          "\u041F\u0440\u0438\u0434\u0431\u0430\u0439\u0442\u0435 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E Video DownloadHelper \u043D\u0430\u0437\u0430\u0432\u0436\u0434\u0438.",
        premium_hero3:
          "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0439\u0442\u0435 \u0432\u0456\u0434\u0435\u043E \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0437\u0430\u0432\u0433\u043E\u0434\u043D\u043E \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C!",
        welcome_text:
          "\u0422\u0435\u043F\u0435\u0440 \u0432\u0438 \u043D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0456\u0434\u0435\u043E!",
        welcome_pin_message:
          "\u0417\u0430\u043A\u0440\u0456\u043F\u0456\u0442\u044C \u0456\u043A\u043E\u043D\u043A\u0443 \u0434\u043E\u0434\u0430\u0442\u043A\u0430 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0456\u0432:",
      },
    },
    "zh-CN": {
      addon: {
        appDesc: "\u4ECE\u7F51\u4E0A\u4E0B\u8F7D\u89C6\u9891\u3002",
        restore_purchase_button: "\u6062\u590D\u8D2D\u4E70",
        get_premium_button: "\u83B7\u53D6\u9AD8\u7EA7\u4F1A\u5458",
        back: "\u8FD4\u56DE",
        rm_notifications_all: "\u5FFD\u89C6\u6240\u6709\u901A\u77E5",
        waiting_for_media: "\u6B63\u5728\u7B49\u5F85\u5A92\u4F53\u2026",
        nomedia_title: "\u770B\u4E0D\u5230\u67E5\u627E\u7684\u5A92\u4F53\uFF1F",
        nomedia_description:
          "\u64AD\u653E\u89C6\u9891\uFF08\u5982\u6709\u5E7F\u544A\u8BF7\u8DF3\u8FC7\uFF09\uFF0C\u4EE5\u5E2E\u52A9\u68C0\u6D4B\u5A92\u4F53\u3002\u6216\u62A5\u544A\u5A92\u4F53\u7F3A\u5931\u3002",
        nomedia_reload_button: "\u5F3A\u5236\u68C0\u6D4B",
        nomedia_reload_button_tooltip:
          "\u5F3A\u5236\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF08\u6E05\u9664 cookie\uFF09",
        show_nomedia_button: "\u65E0\u89C6\u9891\uFF1F",
        show_nomedia_button_tooltip:
          "\u5982\u679C\u627E\u4E0D\u5230\u60A8\u7684\u89C6\u9891\uFF0C\u8BF7\u5355\u51FB\u6B64\u5904",
        setting_button_tooltip: "\u8BBE\u7F6E",
        history_button_tooltip:
          "\u663E\u793A\u4E0B\u8F7D\u5386\u53F2\u8BB0\u5F55",
        show_all_history_button: "\u663E\u793A\u5168\u90E8",
        complete_title: "\u5B8C\u6210",
        hide_complete_button: "\u9690\u85CF",
        translate_button_tooltip: "\u534F\u52A9\u7FFB\u8BD1\u6B64\u63D2\u4EF6",
        help_button_tooltip: "\u5E2E\u52A9",
        open_source_tab_button_tooltip: "\u6253\u5F00\u6E90\u9009\u9879\u5361",
        retry_download_button_tooltip: "\u91CD\u8BD5\u4E0B\u8F7D",
        delete_file_button_tooltip: "\u5220\u9664\u6587\u4EF6",
        download_directory_button_tooltip:
          "\u663E\u793A\u4E0B\u8F7D\u6587\u4EF6\u5939",
        clear_downloaded_tooltip: "\u6E05\u9664\u5DF2\u5B8C\u6210\u4E0B\u8F7D",
        show_in_popup_button_tooltip:
          "\u5728\u5F39\u51FA\u7A97\u53E3\u663E\u793A",
        show_in_sidebar_button_tooltip: "\u5728\u4FA7\u8FB9\u680F\u663E\u793A",
        video_not_playing_button_tooltip:
          "\u89C6\u9891\u65E0\u6CD5\u64AD\u653E\uFF1F",
        play: "\u64AD\u653E",
        warn_drm_tooltip: "\u68C0\u6D4B\u5230 DRM",
        version_title: "\u7248\u672C",
        account_title: "\u5E10\u6237",
        one_hundred_downloads_title:
          "\u4F60\u5DF2\u7ECF\u4E0B\u8F7D\u4E86100\u4E2A\u89C6\u9891\u4E86\uFF01",
        leave_review_description:
          "\u6211\u4EEC\u5E0C\u671B\u60A8\u4EAB\u53D7\u6B64\u6269\u5C55\u5E26\u6765\u7684\u4FBF\u5229 :) \u53EF\u4EE5\u5728\u63D2\u4EF6\u5546\u5E97\u9875\u7ED9\u6211\u4EEC\u4E00\u4E2A\u597D\u8BC4\u5417\uFF1F",
        leave_review_button: "\u53BB\u8BC4\u8BBA",
        account_status: "\u72B6\u6001",
        account_status_premium: "\u9AD8\u7EA7\u7248 ($1)",
        free_account: "\u514D\u8D39\u5957\u9910",
        copy_to_clipboard:
          "\u590D\u5236\u914D\u7F6E\u4FE1\u606F\u5230\u526A\u8D34\u677F",
        my_account_button: "\u6211\u7684\u5E10\u6237",
        download_title: "\u4E0B\u8F7D\u5185\u5BB9",
        show_notification:
          "\u4E0B\u8F7D\u5B8C\u6210\u540E\u663E\u793A\u901A\u77E5",
        max_parallel_downloads:
          "\u6700\u5927\u540C\u65F6\u4E0B\u8F7D\u4EFB\u52A1\u6570",
        saveas_detected_warning:
          "\u6211\u4EEC\u68C0\u6D4B\u5230\u60A8\u7684\u6D4F\u89C8\u5668\u5728\u4E0B\u8F7D\u5B8C\u6210\u540E\u4F1A\u663E\u793A\u201C\u53E6\u5B58\u4E3A\u201D\u5BF9\u8BDD\u6846\u3002\u5EFA\u8BAE\u60A8\u5728\u6D4F\u89C8\u5668\u8BBE\u7F6E\u4E2D\u7981\u7528\u8BE5\u9009\u9879\u3002",
        change_saveas_setting: "\u66F4\u6539\u8BBE\u7F6E",
        download_directory_title: "\u4E0B\u8F7D\u76EE\u5F55",
        download_directory_description:
          "\u89C6\u9891\u4E0B\u8F7D\u81F3\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4E0B\u8F7D\u76EE\u5F55\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u5B50\u76EE\u5F55\u3002\u53EF\u4EE5\u4F7F\u7528samrtnaming\u5DE5\u5177\u4E3A\u7F51\u7AD9\u6307\u5B9A\u4E0B\u8F7D\u76EE\u5F55\u3002",
        change_browser_download_directory:
          "\u66F4\u6539\u6D4F\u89C8\u5668\u4E0B\u8F7D\u76EE\u5F55",
        bad_download_subdirectory_warning:
          "\u6307\u5B9A\u5B50\u76EE\u5F55\u4E0D\u5B58\u5728",
        download_subdirectory: "\u4E0B\u8F7D\u5B50\u76EE\u5F55",
        private_browsing_title: "\u9690\u79C1\u6D4F\u89C8",
        private_browsing_warning:
          "Video DownloadHelper \u672A\u5728\u9690\u8EAB\u6A21\u5F0F\u4E2D\u542F\u7528\uFF0C\u4F60\u9700\u8981\u5728\u9009\u9879\u4E2D\u624B\u5DE5\u542F\u52A8\uFF08\u975E\u5FC5\u987B\uFF09\u3002",
        private_browsing_notifications:
          "\u663E\u793A\u9690\u79C1\u4E0B\u8F7D\u901A\u77E5",
        private_browsing_button:
          "\u66F4\u6539\u9690\u79C1\u6D4F\u89C8\u8BBE\u7F6E",
        throttle_youtube:
          "\u9650\u5236 YouTube \u4E0B\u8F7D\u901F\u5EA6\uFF08\u4E0B\u8F7D\u901F\u5EA6\u53D8\u6162\uFF0C\u4F46\u88AB\u5C4F\u853D\u7684\u53EF\u80FD\u6027\u66F4\u5C0F\uFF09",
        prefer_original_audio: "\u9996\u9009\u539F\u59CB\u97F3\u9891",
        settings_history_title: "\u5386\u53F2\u8BB0\u5F55",
        transient_history_description:
          "\u5728\u9762\u677F\u4E2D\u663E\u793A\u5B8C\u6574\u7684\u4E0B\u8F7D\u8BB0\u5F55",
        history_limit:
          "X \u5929\u540E\u6E05\u9664\u4E0B\u8F7D\u5386\u53F2\u8BB0\u5F55",
        appearance_title: "\u754C\u9762",
        theme_title: "\u4E3B\u9898",
        theme_light: "\u6D45\u8272",
        theme_dark: "\u6DF1\u8272",
        theme_system: "\u7CFB\u7EDF",
        popup_size_title: "\u7A97\u53E3\u5927\u5C0F",
        popup_size_small: "\u5C0F",
        popup_size_medium: "\u4E2D",
        popup_size_big: "\u5927",
        font_size_title: "\u6587\u5B57\u5C3A\u5BF8",
        font_size_default: "\u6807\u51C6",
        font_size_large: "\u5927",
        font_size_verylarge: "\u975E\u5E38\u5927",
        panel_position_title: "\u9762\u677F\u4F4D\u7F6E",
        use_popup: "\u5728\u5F39\u51FA\u7A97\u53E3\u663E\u793A",
        use_sidebar: "\u5728\u4FA7\u8FB9\u680F\u663E\u793A",
        behavior_title: "\u5E38\u89C4",
        controls_title: "\u63A7\u4EF6",
        show_in_context_menu:
          "\u8BBF\u95EE\u6765\u81EA\u9875\u9762\u53F3\u51FB\u7684\u547D\u4EE4",
        restart_addon: "\u5237\u65B0\u63D2\u4EF6",
        reset_settings: "\u91CD\u7F6E\u8BBE\u7F6E",
        prefered_quality: "\u9996\u9009\u89C6\u9891\u8D28\u91CF",
        prefered_quality_highest:
          "\u6700\u9AD8\uFF08\u4E0B\u8F7D\u901F\u5EA6\u6162\uFF0C\u5206\u8FA8\u7387\u9AD8\uFF09",
        prefered_quality_1080p:
          "1080p\uFF08\u4E0D\u9519\u7684\u9ED8\u8BA4\u8BBE\u7F6E\uFF09",
        prefered_quality_720p:
          "720p\uFF08\u4E0B\u8F7D\u901F\u5EA6\u5FEB\uFF0C\u5206\u8FA8\u7387\u4F4E\uFF09",
        prefer_mkv:
          "\u5C3D\u53EF\u80FD\u4E0B\u8F7D\u4E3A MKV \u683C\u5F0F\u3002",
        preview_mode_title: "\u5A92\u4F53\u9884\u89C8",
        preview_mode_none: "\u5173\u95ED",
        preview_mode_video: "\u9884\u89C8\u89C6\u9891",
        preview_mode_image: "\u9884\u89C8\u56FE\u50CF",
        history_title: "\u4E0B\u8F7D\u5386\u53F2",
        history_warning:
          "\u6211\u4EEC\u4E0D\u4F1A\u4E0A\u4F20\u60A8\u7684\u4E0B\u8F7D\u5386\u53F2\u8BB0\u5F55\uFF0C\u60A8\u60F3\u8BA9 Video DownloadHelper \u8BB0\u4F4F\u60A8\u7684\u4E0B\u8F7D\u5386\u53F2\u8BB0\u5F55\u5417\uFF1F",
        history_warning_2:
          "\u522B\u62C5\u5FC3\uFF0C\u6240\u6709\u5185\u5BB9\u53EA\u4F1A\u4FDD\u7559\u5728\u60A8\u7684\u673A\u5668\u4E0A\u3002\u6211\u4EEC\u91CD\u89C6\u60A8\u7684\u9690\u79C1\u3002",
        enable_history: "\u8BB0\u4F4F\u5386\u53F2\u8BB0\u5F55",
        clear_history: "\u6E05\u9664\u5386\u53F2\u8BB0\u5F55",
        disable_history: "\u4E0D\u8981\u8BB0\u4F4F\u5386\u53F2\u8BB0\u5F55",
        no_downloads_yet: "\u5C1A\u65E0\u4EFB\u4F55\u6761\u76EE\u3002",
        download_failed: "\u4E0B\u8F7D\u5931\u8D25",
        download_failed_description:
          "\u62B1\u6B49\uFF0C\u4E0B\u8F7D\u6307\u5B9A\u5A92\u4F53\u5931\u8D25\u3002\u6211\u4EEC\u5E0C\u671B\u60A8\u53EF\u4EE5\u4E0A\u4F20\u533F\u540D\u7684\u9519\u8BEF\u62A5\u544A\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u53EF\u4EE5\u5C3D\u5FEB\u652F\u6301\u66F4\u591A\u7F51\u7AD9",
        download_interrupted: "\u4E0B\u8F7D\u4E2D\u65AD",
        download_interrupted_description:
          "\u6211\u4EEC\u5DF2\u6210\u529F\u4E0B\u8F7D\u60A8\u7684\u6587\u4EF6\uFF0C\u4F46\u7531\u4E8E\u7F51\u7EDC\u95EE\u9898\uFF0C\u6587\u4EF6\u53EF\u80FD\u6BD4\u9884\u671F\u77ED\u3002\u6211\u4EEC\u52AA\u529B\u652F\u6301\u5C3D\u53EF\u80FD\u591A\u7684\u7F51\u7AD9\uFF0C\u5982\u679C\u60A8\u80FD\u533F\u540D\u62A5\u544A\u6B64\u95EE\u9898\uFF0C\u5C06\u5BF9\u6211\u4EEC\u975E\u5E38\u6709\u5E2E\u52A9\uFF01",
        download_with_drm_failed_description:
          "\u51FA\u9519\u4E86\u3002\u6211\u4EEC\u8BA4\u4E3A\u6B64\u89C6\u9891\u91C7\u7528\u4E86 DRM \u4FDD\u62A4\u3002\u6211\u4EEC\u4E0D\u652F\u6301\u91C7\u7528 DRM \u4FDD\u62A4\u7684\u89C6\u9891\u3002",
        no_youtube: "\u4E0D\u5141\u8BB8\u4ECE youtube \u4E0B\u8F7D",
        no_youtube_description:
          "\u9057\u61BE\u7684\u662F\uFF0CChrome\u63D2\u4EF6\u5546\u5E97\u4E0D\u5141\u8BB8\u6269\u5C55\u7A0B\u5E8F\u4E0B\u8F7DYouTube\u89C6\u9891\uFF0C\u56E0\u6B64\u6211\u4EEC\u65E0\u6CD5\u5728\u6B64\u63D2\u4EF6\u7684Chrome\u7248\u672C\u4E2D\u5305\u542B\u6B64\u529F\u80FD\u3002",
        no_youtube_description_2:
          "\u8BF7\u4F7F\u7528 Firefox \u6216 Microsoft Edge \u6D4F\u89C8\u5668\u3002",
        premium_required: "\u9700\u8981\u9AD8\u7EA7\u7248",
        premium_yt_required_description:
          "\u5982\u679C\u6CA1\u6709\u9AD8\u7EA7\u7248\uFF0CYouTube \u89C6\u9891\u4E0B\u8F7D\u53EA\u80FD\u5728\u524D\u6B21\u4E0B\u8F7D 2 \u5C0F\u65F6\u540E\u624D\u80FD\u8FDB\u884C\u3002",
        premium_hls_required_description:
          "\u5982\u679C\u6CA1\u6709\u9AD8\u7EA7\u7248\uFF0CHLS\u548CMPD\u4E0B\u8F7D\u53EA\u80FD\u5728\u524D\u6B21\u4E0B\u8F7D 2 \u5C0F\u65F6\u540E\u624D\u80FD\u8FDB\u884C\u3002",
        premium_all_required_description:
          "\u5982\u679C\u6CA1\u6709\u9AD8\u7EA7\u7248\uFF0C\u53EA\u80FD\u5728\u524D\u6B21\u4E0B\u8F7D 2 \u5C0F\u65F6\u540E\u624D\u80FD\u5F00\u59CB\u65B0\u4E0B\u8F7D",
        youtube_too_many_downloads:
          "\u7CDF\u7CD5\uFF0CYouTube \u4F3C\u4E4E\u88AB\u5C4F\u853D\u4E86\u3002",
        youtube_too_many_downloads_description:
          "YouTube\u6709\u65F6\u4F1A\u9650\u5236\u89C6\u9891\u8BF7\u6C42\u7684\u6570\u91CF\u3002\u5F88\u9057\u61BE\uFF0C\u6211\u4EEC\u5BF9\u6B64\u65E0\u80FD\u4E3A\u529B\u3002\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002",
        stop: "\u505C\u6B62",
        cancel: "\u53D6\u6D88",
        copy_url: "\u590D\u5236URL",
        always_copy_url: "\u59CB\u7EC8\u590D\u5236 URL",
        download_button: "\u4E0B\u8F7D",
        download_as_button_and_menu: "\u4E0B\u8F7D\u4E3A\u2026",
        rename_short: "\u91CD\u547D\u540D",
        always_download_as_menu: "\u59CB\u7EC8\u4E0B\u8F7D\u4E3A\u2026",
        download_audio_button: "\u97F3\u9891",
        download_audio_and_video_menu:
          "\u4E0B\u8F7D\u97F3\u9891\u548C\u89C6\u9891",
        download_audio_only_menu: "\u4E0B\u8F7D\u97F3\u9891",
        audio_only_for_this_website:
          "\u6B64\u7F51\u7AD9\u59CB\u7EC8\u53EA\u4E0B\u8F7D\u97F3\u9891",
        details: "\u8BE6\u60C5",
        report: "\u62A5\u544A",
        reporting: "\u6B63\u5728\u62A5\u544A\u2026",
        reported_thankyou: "\u8C22\u8C22\uFF01",
      },
      web: {
        back: "\u8FD4\u56DE",
        header_help: "\u5E2E\u52A9",
        header_ask_question: "\u5411\u6211\u4EEC\u63D0\u95EE",
        activate_title: "\u6FC0\u6D3B",
        activate_pending: "\u5F85\u5904\u7406\u2026",
        activate_success: "\u6210\u529F",
        activate_error: "\u9519\u8BEF",
        activate_no_addon_found:
          "\u672A\u627E\u5230\u63D2\u4EF6\u3002\u63D2\u4EF6\u662F\u5426\u5DF2\u5B89\u88C5\uFF1F",
        activate_no_method_found: "\u672A\u627E\u5230\u65B9\u6CD5\u3002",
        activate_help_me: "\u5E2E\u5E2E\u6211\u3002",
        issue_title: "\u6B63\u5728\u6062\u590D\u8D2D\u4E70",
        issue_submit: "\u63D0\u4EA4",
        issue_thank_you: "\u611F\u8C22",
        issue_enter_email:
          "\u8981\u6062\u590D\u8D2D\u4E70\uFF0C\u8BF7\u8F93\u5165\u60A8\u8D2D\u4E70\u8BB8\u53EF\u8BC1\u65F6\u4F7F\u7528\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740\uFF1A",
        issue_email_sent:
          "\u6211\u4EEC\u521A\u521A\u5411\u60A8\u53D1\u9001\u4E00\u5C01\u7535\u5B50\u90AE\u4EF6\uFF0C\u5176\u4E2D\u5305\u542B\u60A8\u4EA7\u54C1\u7684\u6FC0\u6D3B\u94FE\u63A5\u3002",
        issue_or_digit:
          "\u60A8\u4E5F\u53EF\u4EE5\u8F93\u5165\u6211\u4EEC\u53D1\u7ED9\u60A8\u7684 6 \u4F4D\u9A8C\u8BC1\u7801\u3002",
        issue_just_digit:
          "\u8BF7\u8F93\u5165\u6211\u4EEC\u53D1\u9001\u7ED9\u60A8\u7684 6 \u4F4D\u9A8C\u8BC1\u7801\uFF1A",
        issue_i_have_a_code:
          "\uFF08\u5982\u679C\u60A8\u5DF2\u6536\u5230\u9A8C\u8BC1\u7801\uFF0C\u8BF7\u70B9\u51FB\u6B64\u5904\uFF09",
        issue_i_have_a_key:
          "\uFF08\u5982\u679C\u60A8\u6709\u8BB8\u53EF\u8BC1\u5BC6\u94A5\uFF0C\u8BF7\u70B9\u51FB\u6B64\u5904\uFF09",
        issue_key:
          "\u8BF7\u8F93\u5165\u60A8\u7684 Video DownloadHelper \u8BB8\u53EF\u8BC1\u5BC6\u94A5\uFF1A",
        landing_text1:
          "\u53EF\u4EE5\u4ECE\u4EFB\u4F55\u7F51\u7AD9\u4E0B\u8F7D\u4EFB\u4F55\u89C6\u9891\uFF01",
        landing_text2: "\u652F\u6301 1000 \u591A\u4E2A\u7F51\u7AD9",
        landing_text3:
          "\u53D7\u5230 700 \u591A\u4E07\u7528\u6237\u7684\u4FE1\u8D56",
        landing_text4:
          "\u5728\u6269\u5C55\u7A0B\u5E8F\u5546\u5E97\u83B7\u5F97 4.5 \u661F\u8BC4\u5206",
        landing_install_for_google: "\u4E3A Chrome \u5B89\u88C5",
        landing_install_for_mozilla: "\u4E3A Firefox \u5B89\u88C5",
        landing_install_for_microsoft: "\u4E3A Edge \u5B89\u88C5",
        landing_feature1_title:
          "\u5168\u901F\u4E0B\u8F7D\u9AD8\u6E05\u89C6\u9891",
        landing_feature1_description:
          "\u4EE5\u6700\u9AD8\u901F\u5EA6\u4E0B\u8F7D\u9AD8\u6E05\u89C6\u9891\u3002\u6211\u4EEC\u81EA\u8C6A\u5730\u5BA3\u5E03\uFF0C\u6211\u4EEC\u62E5\u6709\u76EE\u524D\u5E02\u9762\u4E0A\u901F\u5EA6\u6700\u5FEB\u7684\u4E0B\u8F7D\u5F15\u64CE\u3002",
        landing_feature2_title: "\u5B58\u6863\u89C6\u9891",
        landing_feature2_description:
          "\u5C06\u60A8\u559C\u7231\u7684\u89C6\u9891\u5B58\u6863\uFF0C\u786E\u4FDD\u4E0D\u4F1A\u9057\u5931\u4EFB\u4F55\u5185\u5BB9\u3002",
        landing_feature3_title: "\u652F\u6301\u76F4\u64AD",
        landing_feature3_description:
          "\u4EAB\u53D7\u79BB\u7EBF\u89C2\u770B\u76F4\u64AD\uFF0C\u6446\u8131\u5B9E\u65F6\u89C2\u770B\u7684\u9650\u5236\u3002",
        landing_feature4_title: "\u97F3\u9891\u4E0B\u8F7D",
        landing_feature4_description:
          "\u4ECE\u89C6\u9891\u4E2D\u63D0\u53D6\u97F3\u9891\uFF0C\u5C06\u5176\u8F6C\u6362\u4E3A MP3 \u6216\u64AD\u5BA2\uFF0C\u65B9\u4FBF\u6536\u542C\u3002",
        premium_hero1: "\u4E00\u6B21\u4ED8\u6B3E\uFF0C\u6C38\u4E45\u4F7F\u7528",
        premium_hero2:
          "\u83B7\u53D6 Video DownloadHelper \u7684\u7EC8\u8EAB\u8BB8\u53EF\u8BC1\u3002",
        premium_hero3:
          "\u968F\u5FC3\u6240\u6B32\u4E0B\u8F7D\u89C6\u9891\uFF0C\u6CA1\u6709\u4EFB\u4F55\u9650\u5236\u3002",
        premium_supported_payment_methods:
          "\u652F\u6301\u7684\u4ED8\u6B3E\u65B9\u5F0F",
        premium_buy: "\u8D2D\u4E70",
        welcome_text:
          "\u73B0\u5728\u4F60\u4E0D\u4F1A\u9519\u8FC7\u4EFB\u4F55\u89C6\u9891\u4E86\uFF01",
        welcome_pin_message:
          "\u5C06\u9644\u52A0\u7EC4\u4EF6\u56FE\u6807\u56FA\u5B9A\u5230\u5DE5\u5177\u680F\uFF1A",
      },
    },
    "zh-TW": {
      addon: {
        appDesc: "\u5F9E\u7DB2\u8DEF\u4E0A\u4E0B\u8F09\u5F71\u7247\u3002",
        restore_purchase_button: "\u627E\u56DE\u60A8\u7684\u5E33\u865F",
        get_premium_button: "\u53D6\u5F97\u4ED8\u8CBB\u7248",
        back: "\u8FD4\u56DE",
        waiting_for_media: "\u6B63\u5728\u7B49\u5F85\u5A92\u9AD4\u2026",
        nomedia_title:
          "\u770B\u4E0D\u5230\u60A8\u8981\u5C0B\u627E\u7684\u5A92\u9AD4\uFF1F",
        nomedia_description:
          "\u8ACB\u958B\u59CB\u5F71\u7247 (\u5982\u679C\u6709\u5EE3\u544A\uFF0C\u8ACB\u7565\u904E)\uFF0C\u4EE5\u5354\u52A9\u5075\u6E2C\u5A92\u9AD4\u3002\u6216\u56DE\u5831\u5A92\u9AD4\u907A\u5931\u3002",
        nomedia_reload_button: "\u5F37\u5236\u5075\u6E2C",
        nomedia_reload_button_tooltip:
          "\u5F37\u5236\u9801\u9762\u91CD\u65B0\u8F09\u5165 (\u6E05\u9664 Cookie)",
        show_nomedia_button: "\u6C92\u6709\u5F71\u7247\uFF1F",
        show_nomedia_button_tooltip:
          "\u5982\u679C\u627E\u4E0D\u5230\u5F71\u7247\uFF0C\u8ACB\u6309\u4E00\u4E0B\u6B64\u8655",
        setting_button_tooltip: "\u8A2D\u5B9A",
        history_button_tooltip: "\u986F\u793A\u4E0B\u8F09\u7D00\u9304",
        translate_button_tooltip: "\u5354\u52A9\u7FFB\u8B6F VDH",
        open_source_tab_button_tooltip: "\u958B\u555F\u4F86\u6E90\u5206\u9801",
        retry_download_button_tooltip: "\u91CD\u8A66\u4E0B\u8F09",
        delete_file_button_tooltip: "\u522A\u9664\u6A94\u6848",
        download_directory_button_tooltip:
          "\u986F\u793A\u4E0B\u8F09\u8CC7\u6599\u593E",
        show_in_popup_button_tooltip: "\u986F\u793A\u5F48\u51FA\u8996\u7A97",
        show_in_sidebar_button_tooltip: "\u986F\u793A\u5074\u908A\u6B04",
        video_not_playing_button_tooltip:
          "\u7121\u6CD5\u64AD\u653E\u5F71\u7247\uFF1F",
        play: "\u64AD\u653E",
        warn_drm_tooltip: "\u5075\u6E2C\u5230 DRM",
        version_title: "\u7248\u672C",
        account_title: "\u5E33\u6236",
        leave_review_description:
          "\u5E0C\u671B\u60A8\u559C\u6B61 Video DownloadHelper\uFF0C \u60A8\u4ECB\u610F\u5728\u5916\u7DB2\u4E0A\u7D66\u4E88\u597D\u8A55\u55CE\uFF1F",
        leave_review_button: "\u767C\u8868\u8A55\u8AD6",
        account_status: "\u72C0\u614B",
        account_status_premium: "\u9032\u968E\u6703\u54E1 ($1)",
        free_account: "\u514D\u8CBB\u65B9\u6848",
        copy_to_clipboard: "\u8907\u88FD\u5230\u526A\u8CBC\u7C3F",
        my_account_button: "\u6211\u7684\u5E33\u6236",
        download_title: "\u4E0B\u8F09",
        show_notification:
          "\u4E0B\u8F09\u5B8C\u6210\u6642\u986F\u793A\u901A\u77E5",
        max_parallel_downloads:
          "\u6700\u5927\u540C\u6642\u4E0B\u8F09\u6578\u91CF",
        private_browsing_title: "\u79C1\u5BC6\u700F\u89BD",
        private_browsing_warning:
          "Video DownloadHelper \u65BC\u7121\u75D5\u8996\u7A97\u4E2D\u672A\u555F\u7528\u81EA\u52D5\u5075\u6E2C\uFF0C\u8ACB\u624B\u52D5\u555F\u7528 (\u5982\u975E\u5FC5\u8981)",
        private_browsing_notifications:
          "\u986F\u793A\u79C1\u5BC6\u4E0B\u8F09\u901A\u77E5",
        private_browsing_button:
          "\u8B8A\u66F4\u79C1\u5BC6\u700F\u89BD\u8A2D\u5B9A",
        prefer_original_audio: "\u504F\u597D\u539F\u59CB\u97F3\u8A0A",
        settings_history_title: "\u7D00\u9304",
        history_limit: "\u5FD8\u8A18\u4E0B\u8F09\u4E4B\u524D\u7684\u5929\u6578",
        appearance_title: "\u5916\u89C0",
        theme_title: "\u4E3B\u984C",
        theme_light: "\u6DFA\u8272\u4E3B\u984C",
        theme_dark: "\u6DF1\u8272\u4E3B\u984C",
        theme_system: "\u7CFB\u7D71",
        popup_size_title: "\u8996\u7A97\u5927\u5C0F",
        popup_size_small: "\u5C0F",
        popup_size_medium: "\u4E2D",
        popup_size_big: "\u5927",
        panel_position_title: "\u9762\u677F\u4F4D\u7F6E",
        use_popup: "\u986F\u793A\u5F48\u51FA\u8996\u7A97",
        use_sidebar: "\u986F\u793A\u5074\u908A\u6B04",
        behavior_title: "\u884C\u70BA",
        show_in_context_menu:
          "\u4F7F\u7528\u53F3\u9375\u4F86\u67E5\u8A62\u53EF\u7528\u7684\u6307\u4EE4",
        restart_addon: "\u91CD\u65B0\u4E0B\u8F09\u8EDF\u9AD4",
        reset_settings: "\u56DE\u5FA9\u539F\u5EE0\u8A2D\u5B9A",
        history_title: "\u4E0B\u8F09\u7D00\u9304",
        history_warning:
          "\u6211\u5011\u4E0D\u6703\u8A18\u9304\u60A8\u7684\u4E0B\u8F09\u7D00\u9304\u3002\u662F\u5426\u8981 Video DownloadHelper \u8A18\u4F4F\u60A8\u7684\u4E0B\u8F09\u7D00\u9304\uFF1F",
        history_warning_2:
          "\u5225\u64D4\u5FC3\uFF0C\u4E00\u5207\u90FD\u6703\u4FDD\u7559\u5728\u60A8\u7684\u96FB\u8166\u4E0A\u3002\u6211\u5011\u91CD\u8996\u60A8\u7684\u96B1\u79C1\u3002",
        enable_history: "\u555F\u7528\u7D00\u9304",
        clear_history: "\u6E05\u9664\u7D00\u9304",
        disable_history: "\u505C\u7528\u7D00\u9304",
        no_downloads_yet: "\u5C1A\u7121\u4EFB\u4F55\u4E0B\u8F09\u3002",
        download_failed: "\u4E0B\u8F09\u5931\u6557",
        download_failed_description:
          "\u5F88\u907A\u61BE\u6211\u5011\u7121\u6CD5\u4E0B\u8F09\u6B64\u5F71\u7247\uFF0C\u8ACB\u56DE\u5831\u6B64\u7DB2\u7AD9\u4EE5\u5229\u6211\u5011\u66F4\u65B0",
        download_with_drm_failed_description:
          "\u767C\u751F\u554F\u984C\u3002\u6211\u5011\u8A8D\u70BA\u9019\u652F\u5F71\u7247\u6709 DRM\u3002\u6211\u5011\u4E0D\u652F\u63F4\u6709 DRM \u7684\u5F71\u7247\u3002",
        no_youtube: "\u4E0D\u5141\u8A31\u5F9E YouTube \u4E0B\u8F09",
        no_youtube_description:
          "\u5F88\u907A\u61BE\uFF0C\u56E0\u70BA Chrome \u7DDA\u4E0A\u61C9\u7528\u7A0B\u5F0F\u5546\u5E97\u4E0D\u5141\u8A31\u53EF\u4E0B\u8F09 Youtube \u5F71\u7247\u7684\u64F4\u5145\u529F\u80FD\uFF0C\u6240\u4EE5\u6211\u5011\u5728 Chrome \u7248\u672C\u7684\u64F4\u5145\u529F\u80FD\u4E0D\u63D0\u4F9B\u9019\u9805\u529F\u80FD\u3002",
        premium_required:
          "\u6B64\u529F\u80FD\u9700\u8981\u9032\u968E\u6703\u54E1",
        premium_yt_required_description:
          "\u5982\u679C\u662F\u514D\u8CBB\u7248\u4F7F\u7528\u8005\uFF0C\u5FC5\u9808\u7B49\u5F85 2 \u5C0F\u6642\u624D\u80FD\u518D\u6B21\u9032\u884C YouTube \u4E0B\u8F09",
        premium_hls_required_description:
          "\u6C92\u6709\u9032\u968E\u6703\u54E1\u7684\u4F7F\u7528\u8005\uFF0C\u4E0B\u8F09HLS\u6A94\u6848\u5FC5\u9808\u9593\u9694120\u6BCF\u5206\u9418\u3002",
        stop: "\u505C\u6B62",
        cancel: "\u53D6\u6D88",
        copy_url: "\u8907\u88FD\u7DB2\u5740",
        always_copy_url: "\u4E00\u5F8B\u8907\u88FD URL",
        download_button: "\u4E0B\u8F09",
        download_as_button_and_menu:
          "\u4E0B\u8F09\u4E26\u9078\u64C7\u5132\u5B58\u4F4D\u7F6E",
        download_audio_button: "\u8072\u97F3",
        download_audio_and_video_menu:
          "\u4E0B\u8F09\u8072\u97F3\u548C\u5F71\u7247",
        download_audio_only_menu: "\u4E0B\u8F09\u97F3\u8A0A",
        audio_only_for_this_website:
          "\u91DD\u5C0D\u6B64\u7DB2\u7AD9\u4E00\u5F8B\u53EA\u4E0B\u8F09\u8072\u97F3",
        details: "\u8A73\u7EC6\u8CC7\u8A0A",
        report: "\u56DE\u5831",
        reporting: "\u6B63\u5728\u56DE\u5831\u2026",
      },
      web: {
        header_help: "\u8AAA\u660E",
        activate_title: "\u555F\u7528",
        activate_pending: "\u7B49\u5F85\u4E2D\u2026",
        activate_success: "\u6210\u529F",
        activate_error: "\u932F\u8AA4",
        activate_no_addon_found:
          "\u627E\u4E0D\u5230\u9644\u52A0\u5143\u4EF6\u3002\u662F\u5426\u5DF2\u5B89\u88DD\u9644\u52A0\u5143\u4EF6\uFF1F",
        activate_no_method_found: "\u627E\u4E0D\u5230\u65B9\u6CD5\u3002",
        activate_help_me: "\u5354\u52A9\u6211\u3002",
        issue_title: "\u6B63\u5728\u6062\u5FA9\u8CFC\u8CB7",
        issue_submit: "\u63D0\u4EA4",
        issue_thank_you: "\u8B1D\u8B1D",
        issue_enter_email:
          "\u82E5\u8981\u6062\u5FA9\u8CFC\u8CB7\uFF0C\u8ACB\u8F38\u5165\u7528\u4EE5\u8CFC\u8CB7\u6388\u6B0A\u7684\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\uFF1A",
        issue_email_sent:
          "\u6211\u5011\u5DF2\u50B3\u9001\u96FB\u5B50\u90F5\u4EF6\u7D66\u60A8\uFF0C\u5176\u4E2D\u5305\u542B\u53EF\u555F\u7528\u7522\u54C1\u7684\u9023\u7D50\u3002",
        issue_or_digit:
          "\u6216\u8005\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u8F38\u5165\u6211\u5011\u50B3\u9001\u7D66\u60A8\u7684 6 \u4F4D\u6578\u4EE3\u78BC\uFF1A",
        landing_text1:
          "\u5F9E\u4EFB\u4F55\u7DB2\u7AD9\u4E0B\u8F09\u4EFB\u4F55\u5F71\u7247\uFF0C\u5C31\u662F\u9019\u9EBC\u597D\u7528\uFF01",
        landing_text2: "\u652F\u63F4 1000 \u591A\u500B\u7DB2\u7AD9",
        landing_text3: "700 \u842C\u4F7F\u7528\u8005\u4FE1\u4EFB",
        landing_text4:
          "\u64F4\u5145\u529F\u80FD\u5546\u5E97\u8A55\u50F9 4.5 \u9846\u661F",
        landing_install_for_google: "\u70BA Chrome \u5B89\u88DD",
        landing_install_for_mozilla: "\u70BA Firefox \u5B89\u88DD",
        landing_install_for_microsoft: "\u70BA Edge \u5B89\u88DD",
        landing_feature1_title: "\u5168\u901F HD \u4E0B\u8F09",
        landing_feature1_description:
          "\u4EE5\u6700\u9AD8\u901F\u5EA6\u4E0B\u8F09\u9AD8\u756B\u8CEA\u5F71\u7247\u3002\u6211\u5011\u4EE5\u64C1\u6709\u6700\u5FEB\u901F\u7684\u4E0B\u8F09\u5F15\u64CE\u70BA\u50B2\u3002",
        landing_feature2_title: "\u5C01\u5B58\u5F71\u7247",
        landing_feature2_description:
          "\u5C01\u5B58\u60A8\u559C\u611B\u7684\u5F71\u7247\uFF0C\u78BA\u4FDD\u7D55\u4E0D\u907A\u5931\u3002",
        landing_feature3_title: "\u76F4\u64AD\u652F\u63F4",
        landing_feature3_description:
          "\u96E2\u7DDA\u89C0\u770B\u76F4\u64AD\uFF0C\u64FA\u812B\u5373\u6642\u9650\u5236\u3002",
        landing_feature4_title: "\u8072\u97F3\u4E0B\u8F09",
        landing_feature4_description:
          "\u5F9E\u5F71\u7247\u4E2D\u64F7\u53D6\u8072\u97F3\uFF0C\u8F49\u63DB\u6210 MP3 \u6216 podcast \u4EE5\u65B9\u4FBF\u6536\u807D\u3002",
        premium_hero1: "\u4ED8\u8CBB\u4E00\u6B21\uFF0C\u6C38\u4E45\u4F7F\u7528",
        premium_hero2:
          "\u53D6\u5F97 Video DownloadHelper \u7D42\u8EAB\u6388\u6B0A",
        premium_hero3:
          "\u76E1\u60C5\u4E0B\u8F09\u4EFB\u4F55\u5F71\u7247\uFF0C\u4E0D\u53D7\u9650\u5236\u3002",
      },
    },
  },
  Va = [
    "ar",
    "bg",
    "ca",
    "co",
    "cs",
    "da",
    "de",
    "dsb",
    "el",
    "en",
    "es",
    "fa",
    "fr",
    "hsb",
    "hu",
    "id",
    "is",
    "it",
    "ja",
    "ko",
    "nb",
    "nl",
    "pl",
    "pt-BR",
    "ro",
    "ru",
    "sk",
    "sl",
    "sv",
    "tr",
    "uk",
    "zh-CN",
    "zh-TW",
  ],
  fe = [
    "appDesc",
    "restore_purchase_button",
    "get_premium_button",
    "back",
    "rm_notifications_all",
    "waiting_for_media",
    "nomedia_title",
    "nomedia_description",
    "nomedia_reload_button",
    "nomedia_reload_button_tooltip",
    "show_nomedia_button",
    "show_nomedia_button_tooltip",
    "setting_button_tooltip",
    "history_button_tooltip",
    "show_all_history_button",
    "complete_title",
    "hide_complete_button",
    "translate_button_tooltip",
    "help_button_tooltip",
    "open_source_tab_button_tooltip",
    "retry_download_button_tooltip",
    "delete_file_button_tooltip",
    "download_directory_button_tooltip",
    "clear_downloaded_tooltip",
    "show_in_popup_button_tooltip",
    "show_in_sidebar_button_tooltip",
    "video_not_playing_button_tooltip",
    "play",
    "warn_drm_tooltip",
    "version_title",
    "account_title",
    "one_hundred_downloads_title",
    "leave_review_description",
    "leave_review_button",
    "account_status",
    "account_status_premium",
    "free_account",
    "copy_to_clipboard",
    "my_account_button",
    "download_title",
    "show_notification",
    "max_parallel_downloads",
    "saveas_detected_warning",
    "change_saveas_setting",
    "download_directory_title",
    "download_directory_description",
    "change_browser_download_directory",
    "bad_download_subdirectory_warning",
    "download_subdirectory",
    "private_browsing_title",
    "private_browsing_warning",
    "private_browsing_notifications",
    "private_browsing_button",
    "throttle_youtube",
    "prefer_original_audio",
    "settings_history_title",
    "transient_history_description",
    "history_limit",
    "appearance_title",
    "theme_title",
    "theme_light",
    "theme_dark",
    "theme_system",
    "popup_size_title",
    "popup_size_small",
    "popup_size_medium",
    "popup_size_big",
    "font_size_title",
    "font_size_default",
    "font_size_large",
    "font_size_verylarge",
    "panel_position_title",
    "use_popup",
    "use_sidebar",
    "behavior_title",
    "controls_title",
    "show_in_context_menu",
    "restart_addon",
    "reset_settings",
    "prefered_quality",
    "prefered_quality_highest",
    "prefered_quality_1080p",
    "prefered_quality_720p",
    "prefered_quality_480p",
    "prefer_mkv",
    "preview_mode_title",
    "preview_mode_none",
    "preview_mode_video",
    "preview_mode_image",
    "media_discovered_ordering_title",
    "order_media_smart",
    "order_media_by_newest",
    "order_media_by_oldest",
    "history_title",
    "history_warning",
    "history_warning_2",
    "enable_history",
    "clear_history",
    "disable_history",
    "no_downloads_yet",
    "download_failed",
    "download_failed_description",
    "download_interrupted",
    "download_interrupted_description",
    "download_with_drm_failed_description",
    "no_youtube",
    "no_youtube_description",
    "no_youtube_description_2",
    "premium_required",
    "premium_yt_required_description",
    "premium_hls_required_description",
    "premium_all_required_description",
    "youtube_too_many_downloads",
    "youtube_too_many_downloads_description",
    "stop",
    "cancel",
    "copy_url",
    "always_copy_url",
    "download_button",
    "download_as_button_and_menu",
    "rename_short",
    "always_download_as_menu",
    "download_audio_button",
    "download_audio_and_video_menu",
    "download_audio_only_menu",
    "audio_only_for_this_website",
    "details",
    "report",
    "reporting",
    "reported_thankyou",
  ],
  Se = [
    "back",
    "header_help",
    "header_ask_question",
    "activate_title",
    "activate_pending",
    "activate_success",
    "activate_error",
    "activate_no_addon_found",
    "activate_no_method_found",
    "activate_help_me",
    "issue_title",
    "issue_submit",
    "issue_thank_you",
    "issue_enter_email",
    "issue_email_sent",
    "issue_or_digit",
    "issue_just_digit",
    "issue_i_have_a_code",
    "issue_i_have_a_key",
    "issue_key",
    "landing_text1",
    "landing_text2",
    "landing_text3",
    "landing_text4",
    "landing_install_for_google",
    "landing_install_for_mozilla",
    "landing_install_for_microsoft",
    "landing_feature1_title",
    "landing_feature1_description",
    "landing_feature2_title",
    "landing_feature2_description",
    "landing_feature3_title",
    "landing_feature3_description",
    "landing_feature4_title",
    "landing_feature4_description",
    "premium_hero1",
    "premium_hero2",
    "premium_hero3",
    "premium_supported_payment_methods",
    "premium_buy",
    "welcome_text",
    "welcome_pin_message",
  ];
var Ve = "google";
var lm = Ve != "mozilla",
  qr = Ve == "mozilla";
var cm = atob(
  "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOURtQkJNNitRZ1BDRlhJK2dBTFMreXkvdytBaQplMjdMbXRTWmExWjFWMlV1YWt6UmxzTGgrOFZMdE9KekdwVlcyenQ0bUpSMzVFWFRlYUhOQ0g0bEFBPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
);
var ee = "https://v10.downloadhelper.net:443",
  dm = `${ee}/v2/entitlements/validate`,
  _m = `${ee}/v2/entitlements/activate`,
  mm = `${ee}/v2/entitlements/migrate`,
  pm = `${ee}/v2/reports`,
  fm = `${ee}/issue`,
  gm = `${ee}/premium`,
  hm = `${ee}/manage-subscription`,
  vm = `${ee}/welcome/${Ve}`,
  ym = `${ee}/changelog/${Ve}`,
  bm = `${ee}/goodbye/${Ve}`;
var Bu = It(Me(), 1);
function te(e) {
  if (e.__serde_tag == "primitive") return e.__serde_val;
  if (e.__serde_tag == "object") {
    let r = {};
    for (let [o, i] of Object.entries(e.__serde_val)) {
      let t = i;
      r[o] = te(t);
    }
    return r;
  } else {
    if (e.__serde_tag == "map")
      return new Map(e.__serde_val.map(([r, o]) => [te(r), te(o)]));
    if (e.__serde_tag == "set") return new Set(e.__serde_val.map(te));
    if (e.__serde_tag == "url") return new URL(e.__serde_val);
    if (e.__serde_tag == "array") return e.__serde_val.map(te);
    if (e.__serde_tag == "headers") return new Headers(e.__serde_val);
    if (e.__serde_tag == "regex")
      return new RegExp(e.__serde_val[0], e.__serde_val[1]);
    if (e.__serde_tag == "some") return J(te(e.__serde_val));
    if (e.__serde_tag == "none") return X;
    if (e.__serde_tag == "ok") return H(te(e.__serde_val));
    if (e.__serde_tag == "err") return L(te(e.__serde_val));
    throw new Error("Unreachable");
  }
}
var f = {};
pe(f, {
  $brand: () => Pt,
  $input: () => ii,
  $output: () => oi,
  NEVER: () => Gd,
  ZodAny: () => ou,
  ZodArray: () => su,
  ZodBase64: () => ga,
  ZodBase64URL: () => ha,
  ZodBigInt: () => zt,
  ZodBigIntFormat: () => ba,
  ZodBoolean: () => kt,
  ZodCIDRv4: () => pa,
  ZodCIDRv6: () => fa,
  ZodCUID: () => sa,
  ZodCUID2: () => ua,
  ZodCatch: () => Iu,
  ZodCustom: () => jr,
  ZodDate: () => Dr,
  ZodDefault: () => wu,
  ZodDiscriminatedUnion: () => uu,
  ZodE164: () => va,
  ZodEmail: () => na,
  ZodEmoji: () => ia,
  ZodEnum: () => xt,
  ZodError: () => Wc,
  ZodFile: () => vu,
  ZodGUID: () => wr,
  ZodIPv4: () => _a,
  ZodIPv6: () => ma,
  ZodISODate: () => hr,
  ZodISODateTime: () => gr,
  ZodISODuration: () => yr,
  ZodISOTime: () => vr,
  ZodIntersection: () => lu,
  ZodIssueCode: () => Yd,
  ZodJWT: () => ya,
  ZodKSUID: () => da,
  ZodLazy: () => Tu,
  ZodLiteral: () => gu,
  ZodMap: () => mu,
  ZodNaN: () => Au,
  ZodNanoID: () => aa,
  ZodNever: () => iu,
  ZodNonOptional: () => Ia,
  ZodNull: () => ru,
  ZodNullable: () => bu,
  ZodNumber: () => $t,
  ZodNumberFormat: () => Ue,
  ZodObject: () => Ar,
  ZodOptional: () => Sa,
  ZodPipe: () => Da,
  ZodPrefault: () => $u,
  ZodPromise: () => Eu,
  ZodReadonly: () => Pu,
  ZodRealError: () => Ee,
  ZodRecord: () => ka,
  ZodSet: () => pu,
  ZodString: () => Sr,
  ZodStringFormat: () => E,
  ZodSuccess: () => Su,
  ZodSymbol: () => eu,
  ZodTemplateLiteral: () => Ou,
  ZodTransform: () => yu,
  ZodTuple: () => du,
  ZodType: () => z,
  ZodULID: () => la,
  ZodURL: () => oa,
  ZodUUID: () => le,
  ZodUndefined: () => tu,
  ZodUnion: () => $a,
  ZodUnknown: () => wa,
  ZodVoid: () => au,
  ZodXID: () => ca,
  _ZodString: () => ra,
  _default: () => xu,
  any: () => zd,
  array: () => xa,
  base64: () => _d,
  base64url: () => md,
  bigint: () => bd,
  boolean: () => Qs,
  catch: () => Du,
  check: () => Uu,
  cidrv4: () => cd,
  cidrv6: () => dd,
  clone: () => W,
  coerce: () => Aa,
  config: () => Z,
  core: () => ue,
  cuid: () => nd,
  cuid2: () => od,
  custom: () => Fd,
  date: () => Id,
  discriminatedUnion: () => Od,
  e164: () => pd,
  email: () => Kc,
  emoji: () => td,
  endsWith: () => pt,
  enum: () => fu,
  file: () => Rd,
  flattenError: () => Qe,
  float32: () => gd,
  float64: () => hd,
  formatError: () => et,
  function: () => Fi,
  getErrorMap: () => Qd,
  globalRegistry: () => ne,
  gt: () => ae,
  gte: () => q,
  guid: () => Yc,
  includes: () => _t,
  instanceof: () => Hd,
  int: () => ta,
  int32: () => vd,
  int64: () => wd,
  intersection: () => cu,
  ipv4: () => ud,
  ipv6: () => ld,
  iso: () => br,
  json: () => Bd,
  jwt: () => fd,
  keyof: () => Dd,
  ksuid: () => sd,
  lazy: () => Nu,
  length: () => Ne,
  literal: () => hu,
  locales: () => at,
  looseObject: () => jd,
  lowercase: () => ct,
  lt: () => ie,
  lte: () => G,
  map: () => Ed,
  maxLength: () => Te,
  maxSize: () => Oe,
  mime: () => ft,
  minLength: () => me,
  minSize: () => xe,
  multipleOf: () => we,
  nan: () => Ld,
  nanoid: () => rd,
  nativeEnum: () => Zd,
  negative: () => Ei,
  never: () => Ir,
  nonnegative: () => Zi,
  nonoptional: () => zu,
  nonpositive: () => Ui,
  normalize: () => gt,
  null: () => nu,
  nullable: () => kr,
  nullish: () => Md,
  number: () => Xs,
  object: () => Ad,
  optional: () => $r,
  overwrite: () => se,
  parse: () => Ji,
  parseAsync: () => Gi,
  partialRecord: () => Nd,
  pipe: () => zr,
  positive: () => Ni,
  prefault: () => ku,
  preprocess: () => Kd,
  prettifyError: () => rn,
  promise: () => qd,
  property: () => Ri,
  readonly: () => ju,
  record: () => _u,
  refine: () => Zu,
  regex: () => lt,
  regexes: () => ye,
  registry: () => Bt,
  safeParse: () => Xi,
  safeParseAsync: () => Qi,
  set: () => Ud,
  setErrorMap: () => Xd,
  size: () => ut,
  startsWith: () => mt,
  strictObject: () => Pd,
  string: () => ea,
  stringbool: () => Wd,
  success: () => Cd,
  superRefine: () => Ru,
  symbol: () => $d,
  templateLiteral: () => Vd,
  toJSONSchema: () => Hi,
  toLowerCase: () => vt,
  toUpperCase: () => yt,
  transform: () => za,
  treeifyError: () => tn,
  trim: () => ht,
  tuple: () => Td,
  uint32: () => yd,
  uint64: () => xd,
  ulid: () => id,
  undefined: () => kd,
  union: () => Pr,
  unknown: () => xr,
  uppercase: () => dt,
  url: () => ed,
  uuid: () => Jc,
  uuidv4: () => Gc,
  uuidv6: () => Xc,
  uuidv7: () => Qc,
  void: () => Sd,
  xid: () => ad,
});
var ue = {};
pe(ue, {
  $ZodAny: () => jo,
  $ZodArray: () => ot,
  $ZodAsyncError: () => re,
  $ZodBase64: () => xo,
  $ZodBase64URL: () => $o,
  $ZodBigInt: () => Ft,
  $ZodBigIntFormat: () => Io,
  $ZodBoolean: () => nt,
  $ZodCIDRv4: () => yo,
  $ZodCIDRv6: () => bo,
  $ZodCUID: () => so,
  $ZodCUID2: () => uo,
  $ZodCatch: () => Go,
  $ZodCheck: () => U,
  $ZodCheckBigIntFormat: () => Zn,
  $ZodCheckEndsWith: () => Yn,
  $ZodCheckGreaterThan: () => Ct,
  $ZodCheckIncludes: () => Bn,
  $ZodCheckLengthEquals: () => qn,
  $ZodCheckLessThan: () => Mt,
  $ZodCheckLowerCase: () => Hn,
  $ZodCheckMaxLength: () => Ln,
  $ZodCheckMaxSize: () => Rn,
  $ZodCheckMimeType: () => Gn,
  $ZodCheckMinLength: () => Vn,
  $ZodCheckMinSize: () => Mn,
  $ZodCheckMultipleOf: () => En,
  $ZodCheckNumberFormat: () => Un,
  $ZodCheckOverwrite: () => Xn,
  $ZodCheckProperty: () => Jn,
  $ZodCheckRegex: () => Fn,
  $ZodCheckSizeEquals: () => Cn,
  $ZodCheckStartsWith: () => Kn,
  $ZodCheckStringFormat: () => Ae,
  $ZodCheckUpperCase: () => Wn,
  $ZodCustom: () => ni,
  $ZodDate: () => No,
  $ZodDefault: () => Bo,
  $ZodDiscriminatedUnion: () => Uo,
  $ZodE164: () => ko,
  $ZodEmail: () => no,
  $ZodEmoji: () => io,
  $ZodEnum: () => Lo,
  $ZodError: () => Xe,
  $ZodFile: () => qo,
  $ZodFunction: () => fr,
  $ZodGUID: () => to,
  $ZodIPv4: () => ho,
  $ZodIPv6: () => vo,
  $ZodISODate: () => po,
  $ZodISODateTime: () => mo,
  $ZodISODuration: () => go,
  $ZodISOTime: () => fo,
  $ZodIntersection: () => Zo,
  $ZodJWT: () => zo,
  $ZodKSUID: () => _o,
  $ZodLazy: () => ri,
  $ZodLiteral: () => Vo,
  $ZodMap: () => Mo,
  $ZodNaN: () => Xo,
  $ZodNanoID: () => ao,
  $ZodNever: () => Oo,
  $ZodNonOptional: () => Yo,
  $ZodNull: () => Po,
  $ZodNullable: () => Wo,
  $ZodNumber: () => qt,
  $ZodNumberFormat: () => So,
  $ZodObject: () => Eo,
  $ZodOptional: () => Ho,
  $ZodPipe: () => it,
  $ZodPrefault: () => Ko,
  $ZodPromise: () => ti,
  $ZodReadonly: () => Qo,
  $ZodRealError: () => De,
  $ZodRecord: () => Ro,
  $ZodRegistry: () => Pe,
  $ZodSet: () => Co,
  $ZodString: () => rt,
  $ZodStringFormat: () => N,
  $ZodSuccess: () => Jo,
  $ZodSymbol: () => Do,
  $ZodTemplateLiteral: () => ei,
  $ZodTransform: () => Fo,
  $ZodTuple: () => be,
  $ZodType: () => k,
  $ZodULID: () => lo,
  $ZodURL: () => oo,
  $ZodUUID: () => ro,
  $ZodUndefined: () => Ao,
  $ZodUnion: () => Ht,
  $ZodUnknown: () => _e,
  $ZodVoid: () => To,
  $ZodXID: () => co,
  $brand: () => Pt,
  $constructor: () => c,
  $input: () => ii,
  $output: () => oi,
  Doc: () => tt,
  JSONSchema: () => Ys,
  JSONSchemaGenerator: () => wt,
  _any: () => Di,
  _array: () => bt,
  _base64: () => dr,
  _base64url: () => _r,
  _bigint: () => wi,
  _boolean: () => yi,
  _catch: () => Mc,
  _cidrv4: () => lr,
  _cidrv6: () => cr,
  _coercedBigint: () => xi,
  _coercedBoolean: () => bi,
  _coercedDate: () => Oi,
  _coercedNumber: () => mi,
  _coercedString: () => si,
  _cuid: () => rr,
  _cuid2: () => nr,
  _custom: () => Li,
  _date: () => ji,
  _default: () => Uc,
  _discriminatedUnion: () => zc,
  _e164: () => mr,
  _email: () => Kt,
  _emoji: () => er,
  _endsWith: () => pt,
  _enum: () => Pc,
  _file: () => Ci,
  _float32: () => fi,
  _float64: () => gi,
  _gt: () => ae,
  _gte: () => q,
  _guid: () => st,
  _includes: () => _t,
  _int: () => pi,
  _int32: () => hi,
  _int64: () => $i,
  _intersection: () => Sc,
  _ipv4: () => sr,
  _ipv6: () => ur,
  _isoDate: () => li,
  _isoDateTime: () => ui,
  _isoDuration: () => di,
  _isoTime: () => ci,
  _jwt: () => pr,
  _ksuid: () => ar,
  _lazy: () => qc,
  _length: () => Ne,
  _literal: () => Oc,
  _lowercase: () => ct,
  _lt: () => ie,
  _lte: () => G,
  _map: () => Dc,
  _max: () => G,
  _maxLength: () => Te,
  _maxSize: () => Oe,
  _mime: () => ft,
  _min: () => q,
  _minLength: () => me,
  _minSize: () => xe,
  _multipleOf: () => we,
  _nan: () => Ti,
  _nanoid: () => tr,
  _nativeEnum: () => jc,
  _negative: () => Ei,
  _never: () => Ai,
  _nonnegative: () => Zi,
  _nonoptional: () => Zc,
  _nonpositive: () => Ui,
  _normalize: () => gt,
  _null: () => Ii,
  _nullable: () => Ec,
  _number: () => _i,
  _optional: () => Nc,
  _overwrite: () => se,
  _parse: () => Ot,
  _parseAsync: () => Nt,
  _pipe: () => Cc,
  _positive: () => Ni,
  _promise: () => Fc,
  _property: () => Ri,
  _readonly: () => Lc,
  _record: () => Ic,
  _refine: () => Vi,
  _regex: () => lt,
  _safeParse: () => Ut,
  _safeParseAsync: () => Zt,
  _set: () => Ac,
  _size: () => ut,
  _startsWith: () => mt,
  _string: () => ai,
  _stringbool: () => qi,
  _success: () => Rc,
  _symbol: () => zi,
  _templateLiteral: () => Vc,
  _toLowerCase: () => vt,
  _toUpperCase: () => yt,
  _transform: () => Tc,
  _trim: () => ht,
  _tuple: () => Mi,
  _uint32: () => vi,
  _uint64: () => ki,
  _ulid: () => or,
  _undefined: () => Si,
  _union: () => kc,
  _unknown: () => je,
  _uppercase: () => dt,
  _url: () => Qt,
  _uuid: () => Yt,
  _uuidv4: () => Jt,
  _uuidv6: () => Gt,
  _uuidv7: () => Xt,
  _void: () => Pi,
  _xid: () => ir,
  clone: () => W,
  config: () => Z,
  flattenError: () => Qe,
  formatError: () => et,
  function: () => Fi,
  globalConfig: () => qe,
  globalRegistry: () => ne,
  isValidBase64: () => wo,
  isValidBase64URL: () => us,
  isValidJWT: () => ls,
  locales: () => at,
  parse: () => Tt,
  parseAsync: () => Et,
  prettifyError: () => rn,
  regexes: () => ye,
  registry: () => Bt,
  safeParse: () => nn,
  safeParseAsync: () => on,
  toDotPath: () => Fa,
  toJSONSchema: () => Hi,
  treeifyError: () => tn,
  util: () => y,
  version: () => Qn,
});
function c(e, r, o) {
  function i(s, l) {
    var u;
    (Object.defineProperty(s, "_zod", { value: s._zod ?? {}, enumerable: !1 }),
      (u = s._zod).traits ?? (u.traits = new Set()),
      s._zod.traits.add(e),
      r(s, l));
    for (let m in a.prototype)
      m in s || Object.defineProperty(s, m, { value: a.prototype[m].bind(s) });
    ((s._zod.constr = a), (s._zod.def = l));
  }
  let t = o?.Parent ?? Object;
  class n extends t {}
  Object.defineProperty(n, "name", { value: e });
  function a(s) {
    var l;
    let u = o?.Parent ? new n() : this;
    (i(u, s), (l = u._zod).deferred ?? (l.deferred = []));
    for (let m of u._zod.deferred) m();
    return u;
  }
  return (
    Object.defineProperty(a, "init", { value: i }),
    Object.defineProperty(a, Symbol.hasInstance, {
      value: (s) =>
        o?.Parent && s instanceof o.Parent ? !0 : s?._zod?.traits?.has(e),
    }),
    Object.defineProperty(a, "name", { value: e }),
    a
  );
}
var Pt = Symbol("zod_brand"),
  re = class extends Error {
    constructor() {
      super(
        "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
      );
    }
  },
  qe = {};
function Z(e) {
  return (e && Object.assign(qe, e), qe);
}
var y = {};
pe(y, {
  BIGINT_FORMAT_RANGES: () => Qr,
  Class: () => Hr,
  NUMBER_FORMAT_RANGES: () => Xr,
  aborted: () => he,
  allowsEval: () => Yr,
  assert: () => gl,
  assertEqual: () => _l,
  assertIs: () => pl,
  assertNever: () => fl,
  assertNotEqual: () => ml,
  assignProp: () => Kr,
  cached: () => We,
  cleanEnum: () => Dl,
  cleanRegex: () => Be,
  clone: () => W,
  createTransparentProxy: () => wl,
  defineLazy: () => T,
  esc: () => ge,
  escapeRegex: () => oe,
  extend: () => kl,
  finalizeIssue: () => B,
  floatSafeRemainder: () => Br,
  getElementAtPath: () => hl,
  getEnumValues: () => He,
  getLengthableOrigin: () => Ge,
  getParsedType: () => bl,
  getSizableOrigin: () => Je,
  isObject: () => Ie,
  isPlainObject: () => Ke,
  issue: () => en,
  joinValues: () => _,
  jsonStringifyReplacer: () => Wr,
  merge: () => zl,
  normalizeParams: () => h,
  nullish: () => de,
  numKeys: () => yl,
  omit: () => $l,
  optionalKeys: () => Gr,
  partial: () => Sl,
  pick: () => xl,
  prefixIssues: () => V,
  primitiveTypes: () => Jr,
  promiseAllObject: () => vl,
  propertyKeyTypes: () => Ye,
  randomString: () => jt,
  required: () => Il,
  stringifyPrimitive: () => b,
  unwrapMessage: () => Fe,
});
function _l(e) {
  return e;
}
function ml(e) {
  return e;
}
function pl(e) {}
function fl(e) {
  throw new Error();
}
function gl(e) {}
function He(e) {
  let r = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e)
    .filter(([i, t]) => r.indexOf(+i) === -1)
    .map(([i, t]) => t);
}
function _(e, r = "|") {
  return e.map((o) => b(o)).join(r);
}
function Wr(e, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function We(e) {
  return {
    get value() {
      {
        let o = e();
        return (Object.defineProperty(this, "value", { value: o }), o);
      }
      throw new Error("cached value already set");
    },
  };
}
function de(e) {
  return e == null;
}
function Be(e) {
  let r = e.startsWith("^") ? 1 : 0,
    o = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(r, o);
}
function Br(e, r) {
  let o = (e.toString().split(".")[1] || "").length,
    i = (r.toString().split(".")[1] || "").length,
    t = o > i ? o : i,
    n = Number.parseInt(e.toFixed(t).replace(".", "")),
    a = Number.parseInt(r.toFixed(t).replace(".", ""));
  return (n % a) / 10 ** t;
}
function T(e, r, o) {
  Object.defineProperty(e, r, {
    get() {
      {
        let t = o();
        return ((e[r] = t), t);
      }
      throw new Error("cached value already set");
    },
    set(t) {
      Object.defineProperty(e, r, { value: t });
    },
    configurable: !0,
  });
}
function Kr(e, r, o) {
  Object.defineProperty(e, r, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0,
  });
}
function hl(e, r) {
  return r ? r.reduce((o, i) => o?.[i], e) : e;
}
function vl(e) {
  let r = Object.keys(e),
    o = r.map((i) => e[i]);
  return Promise.all(o).then((i) => {
    let t = {};
    for (let n = 0; n < r.length; n++) t[r[n]] = i[n];
    return t;
  });
}
function jt(e = 10) {
  let r = "abcdefghijklmnopqrstuvwxyz",
    o = "";
  for (let i = 0; i < e; i++) o += r[Math.floor(Math.random() * r.length)];
  return o;
}
function ge(e) {
  return JSON.stringify(e);
}
function Ie(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var Yr = We(() => {
  try {
    let e = Function;
    return (new e(""), !0);
  } catch {
    return !1;
  }
});
function Ke(e) {
  if (Ie(e) === !1) return !1;
  let r = e.constructor;
  if (r === void 0) return !0;
  let o = r.prototype;
  return !(
    Ie(o) === !1 ||
    Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1
  );
}
function yl(e) {
  let r = 0;
  for (let o in e) Object.prototype.hasOwnProperty.call(e, o) && r++;
  return r;
}
var bl = (e) => {
    let r = typeof e;
    switch (r) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(e) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        return Array.isArray(e)
          ? "array"
          : e === null
            ? "null"
            : e.then &&
                typeof e.then == "function" &&
                e.catch &&
                typeof e.catch == "function"
              ? "promise"
              : typeof Map < "u" && e instanceof Map
                ? "map"
                : typeof Set < "u" && e instanceof Set
                  ? "set"
                  : typeof Date < "u" && e instanceof Date
                    ? "date"
                    : typeof File < "u" && e instanceof File
                      ? "file"
                      : "object";
      default:
        throw new Error(`Unknown data type: ${r}`);
    }
  },
  Ye = new Set(["string", "number", "symbol"]),
  Jr = new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined",
  ]);
function oe(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function W(e, r, o) {
  let i = new e._zod.constr(r ?? e._zod.def);
  return ((!r || o?.parent) && (i._zod.parent = e), i);
}
function h(e) {
  let r = e;
  if (!r) return {};
  if (typeof r == "string") return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return (
    delete r.message,
    typeof r.error == "string" ? { ...r, error: () => r.error } : r
  );
}
function wl(e) {
  let r;
  return new Proxy(
    {},
    {
      get(o, i, t) {
        return (r ?? (r = e()), Reflect.get(r, i, t));
      },
      set(o, i, t, n) {
        return (r ?? (r = e()), Reflect.set(r, i, t, n));
      },
      has(o, i) {
        return (r ?? (r = e()), Reflect.has(r, i));
      },
      deleteProperty(o, i) {
        return (r ?? (r = e()), Reflect.deleteProperty(r, i));
      },
      ownKeys(o) {
        return (r ?? (r = e()), Reflect.ownKeys(r));
      },
      getOwnPropertyDescriptor(o, i) {
        return (r ?? (r = e()), Reflect.getOwnPropertyDescriptor(r, i));
      },
      defineProperty(o, i, t) {
        return (r ?? (r = e()), Reflect.defineProperty(r, i, t));
      },
    },
  );
}
function b(e) {
  return typeof e == "bigint"
    ? e.toString() + "n"
    : typeof e == "string"
      ? `"${e}"`
      : `${e}`;
}
function Gr(e) {
  return Object.keys(e).filter(
    (r) => e[r]._zod.optin === "optional" && e[r]._zod.optout === "optional",
  );
}
var Xr = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
  },
  Qr = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")],
  };
function xl(e, r) {
  let o = {},
    i = e._zod.def;
  for (let t in r) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    r[t] && (o[t] = i.shape[t]);
  }
  return W(e, { ...e._zod.def, shape: o, checks: [] });
}
function $l(e, r) {
  let o = { ...e._zod.def.shape },
    i = e._zod.def;
  for (let t in r) {
    if (!(t in i.shape)) throw new Error(`Unrecognized key: "${t}"`);
    r[t] && delete o[t];
  }
  return W(e, { ...e._zod.def, shape: o, checks: [] });
}
function kl(e, r) {
  let o = {
    ...e._zod.def,
    get shape() {
      let i = { ...e._zod.def.shape, ...r };
      return (Kr(this, "shape", i), i);
    },
    checks: [],
  };
  return W(e, o);
}
function zl(e, r) {
  return W(e, {
    ...e._zod.def,
    get shape() {
      let o = { ...e._zod.def.shape, ...r._zod.def.shape };
      return (Kr(this, "shape", o), o);
    },
    catchall: r._zod.def.catchall,
    checks: [],
  });
}
function Sl(e, r, o) {
  let i = r._zod.def.shape,
    t = { ...i };
  if (o)
    for (let n in o) {
      if (!(n in i)) throw new Error(`Unrecognized key: "${n}"`);
      o[n] && (t[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n]);
    }
  else
    for (let n in i)
      t[n] = e ? new e({ type: "optional", innerType: i[n] }) : i[n];
  return W(r, { ...r._zod.def, shape: t, checks: [] });
}
function Il(e, r, o) {
  let i = r._zod.def.shape,
    t = { ...i };
  if (o)
    for (let n in o) {
      if (!(n in t)) throw new Error(`Unrecognized key: "${n}"`);
      o[n] && (t[n] = new e({ type: "nonoptional", innerType: i[n] }));
    }
  else for (let n in i) t[n] = new e({ type: "nonoptional", innerType: i[n] });
  return W(r, { ...r._zod.def, shape: t, checks: [] });
}
function he(e, r = 0) {
  for (let o = r; o < e.issues.length; o++)
    if (e.issues[o].continue !== !0) return !0;
  return !1;
}
function V(e, r) {
  return r.map((o) => {
    var i;
    return ((i = o).path ?? (i.path = []), o.path.unshift(e), o);
  });
}
function Fe(e) {
  return typeof e == "string" ? e : e?.message;
}
function B(e, r, o) {
  let i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let t =
      Fe(e.inst?._zod.def?.error?.(e)) ??
      Fe(r?.error?.(e)) ??
      Fe(o.customError?.(e)) ??
      Fe(o.localeError?.(e)) ??
      "Invalid input";
    i.message = t;
  }
  return (
    delete i.inst,
    delete i.continue,
    r?.reportInput || delete i.input,
    i
  );
}
function Je(e) {
  return e instanceof Set
    ? "set"
    : e instanceof Map
      ? "map"
      : e instanceof File
        ? "file"
        : "unknown";
}
function Ge(e) {
  return Array.isArray(e)
    ? "array"
    : typeof e == "string"
      ? "string"
      : "unknown";
}
function en(...e) {
  let [r, o, i] = e;
  return typeof r == "string"
    ? { message: r, code: "custom", input: o, inst: i }
    : { ...r };
}
function Dl(e) {
  return Object.entries(e)
    .filter(([r, o]) => Number.isNaN(Number.parseInt(r, 10)))
    .map((r) => r[1]);
}
var Hr = class {
  constructor(...r) {}
};
var qa = (e, r) => {
    ((e.name = "$ZodError"),
      Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
      Object.defineProperty(e, "issues", { value: r, enumerable: !1 }),
      Object.defineProperty(e, "message", {
        get() {
          return JSON.stringify(r, Wr, 2);
        },
        enumerable: !0,
      }));
  },
  Xe = c("$ZodError", qa),
  De = c("$ZodError", qa, { Parent: Error });
function Qe(e, r = (o) => o.message) {
  let o = {},
    i = [];
  for (let t of e.issues)
    t.path.length > 0
      ? ((o[t.path[0]] = o[t.path[0]] || []), o[t.path[0]].push(r(t)))
      : i.push(r(t));
  return { formErrors: i, fieldErrors: o };
}
function et(e, r) {
  let o =
      r ||
      function (n) {
        return n.message;
      },
    i = { _errors: [] },
    t = (n) => {
      for (let a of n.issues)
        if (a.code === "invalid_union" && a.errors.length)
          a.errors.map((s) => t({ issues: s }));
        else if (a.code === "invalid_key") t({ issues: a.issues });
        else if (a.code === "invalid_element") t({ issues: a.issues });
        else if (a.path.length === 0) i._errors.push(o(a));
        else {
          let s = i,
            l = 0;
          for (; l < a.path.length; ) {
            let u = a.path[l];
            (l === a.path.length - 1
              ? ((s[u] = s[u] || { _errors: [] }), s[u]._errors.push(o(a)))
              : (s[u] = s[u] || { _errors: [] }),
              (s = s[u]),
              l++);
          }
        }
    };
  return (t(e), i);
}
function tn(e, r) {
  let o =
      r ||
      function (n) {
        return n.message;
      },
    i = { errors: [] },
    t = (n, a = []) => {
      var s, l;
      for (let u of n.issues)
        if (u.code === "invalid_union" && u.errors.length)
          u.errors.map((m) => t({ issues: m }, u.path));
        else if (u.code === "invalid_key") t({ issues: u.issues }, u.path);
        else if (u.code === "invalid_element") t({ issues: u.issues }, u.path);
        else {
          let m = [...a, ...u.path];
          if (m.length === 0) {
            i.errors.push(o(u));
            continue;
          }
          let p = i,
            g = 0;
          for (; g < m.length; ) {
            let d = m[g],
              v = g === m.length - 1;
            (typeof d == "string"
              ? (p.properties ?? (p.properties = {}),
                (s = p.properties)[d] ?? (s[d] = { errors: [] }),
                (p = p.properties[d]))
              : (p.items ?? (p.items = []),
                (l = p.items)[d] ?? (l[d] = { errors: [] }),
                (p = p.items[d])),
              v && p.errors.push(o(u)),
              g++);
          }
        }
    };
  return (t(e), i);
}
function Fa(e) {
  let r = [];
  for (let o of e)
    typeof o == "number"
      ? r.push(`[${o}]`)
      : typeof o == "symbol"
        ? r.push(`[${JSON.stringify(String(o))}]`)
        : /[^\w$]/.test(o)
          ? r.push(`[${JSON.stringify(o)}]`)
          : (r.length && r.push("."), r.push(o));
  return r.join("");
}
function rn(e) {
  let r = [],
    o = [...e.issues].sort((i, t) => i.path.length - t.path.length);
  for (let i of o)
    (r.push(`\u2716 ${i.message}`),
      i.path?.length && r.push(`  \u2192 at ${Fa(i.path)}`));
  return r.join(`
`);
}
var Ot = (e) => (r, o, i, t) => {
    let n = i ? Object.assign(i, { async: !1 }) : { async: !1 },
      a = r._zod.run({ value: o, issues: [] }, n);
    if (a instanceof Promise) throw new re();
    if (a.issues.length) {
      let s = new (t?.Err ?? e)(a.issues.map((l) => B(l, n, Z())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  Tt = Ot(De),
  Nt = (e) => async (r, o, i, t) => {
    let n = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      a = r._zod.run({ value: o, issues: [] }, n);
    if ((a instanceof Promise && (a = await a), a.issues.length)) {
      let s = new (t?.Err ?? e)(a.issues.map((l) => B(l, n, Z())));
      throw (Error.captureStackTrace(s, t?.callee), s);
    }
    return a.value;
  },
  Et = Nt(De),
  Ut = (e) => (r, o, i) => {
    let t = i ? { ...i, async: !1 } : { async: !1 },
      n = r._zod.run({ value: o, issues: [] }, t);
    if (n instanceof Promise) throw new re();
    return n.issues.length
      ? { success: !1, error: new (e ?? Xe)(n.issues.map((a) => B(a, t, Z()))) }
      : { success: !0, data: n.value };
  },
  nn = Ut(De),
  Zt = (e) => async (r, o, i) => {
    let t = i ? Object.assign(i, { async: !0 }) : { async: !0 },
      n = r._zod.run({ value: o, issues: [] }, t);
    return (
      n instanceof Promise && (n = await n),
      n.issues.length
        ? { success: !1, error: new e(n.issues.map((a) => B(a, t, Z()))) }
        : { success: !0, data: n.value }
    );
  },
  on = Zt(De);
var ye = {};
pe(ye, {
  _emoji: () => Ha,
  base64: () => bn,
  base64url: () => Rt,
  bigint: () => In,
  boolean: () => Pn,
  browserEmail: () => Zl,
  cidrv4: () => vn,
  cidrv6: () => yn,
  cuid: () => an,
  cuid2: () => sn,
  date: () => $n,
  datetime: () => zn,
  domain: () => Rl,
  duration: () => _n,
  e164: () => xn,
  email: () => pn,
  emoji: () => fn,
  extendedDuration: () => Pl,
  guid: () => mn,
  hostname: () => wn,
  html5Email: () => Nl,
  integer: () => Dn,
  ipv4: () => gn,
  ipv6: () => hn,
  ksuid: () => cn,
  lowercase: () => Tn,
  nanoid: () => dn,
  null: () => jn,
  number: () => An,
  rfc5322Email: () => El,
  string: () => Sn,
  time: () => kn,
  ulid: () => un,
  undefined: () => On,
  unicodeEmail: () => Ul,
  uppercase: () => Nn,
  uuid: () => ve,
  uuid4: () => jl,
  uuid6: () => Ol,
  uuid7: () => Tl,
  xid: () => ln,
});
var an = /^[cC][^\s-]{8,}$/,
  sn = /^[0-9a-z]+$/,
  un = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  ln = /^[0-9a-vA-V]{20}$/,
  cn = /^[A-Za-z0-9]{27}$/,
  dn = /^[a-zA-Z0-9_-]{21}$/,
  _n =
    /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
  Pl =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  mn =
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  ve = (e) =>
    e
      ? new RegExp(
          `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
        )
      : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,
  jl = ve(4),
  Ol = ve(6),
  Tl = ve(7),
  pn =
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
  Nl =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  El =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  Ul = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
  Zl =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Ha = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function fn() {
  return new RegExp(Ha, "u");
}
var gn =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  hn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,
  vn =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  yn =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  bn =
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  Rt = /^[A-Za-z0-9_-]*$/,
  wn = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/,
  Rl = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
  xn = /^\+(?:[0-9]){6,14}[0-9]$/,
  Wa =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  $n = new RegExp(`^${Wa}$`);
function Ba(e) {
  let r = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (r = `${r}\\.\\d{${e.precision}}`)
      : e.precision == null && (r = `${r}(\\.\\d+)?`),
    r
  );
}
function kn(e) {
  return new RegExp(`^${Ba(e)}$`);
}
function zn(e) {
  let r = `${Wa}T${Ba(e)}`,
    o = [];
  return (
    o.push(e.local ? "Z?" : "Z"),
    e.offset && o.push("([+-]\\d{2}:?\\d{2})"),
    (r = `${r}(${o.join("|")})`),
    new RegExp(`^${r}$`)
  );
}
var Sn = (e) => {
    let r = e
      ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
      : "[\\s\\S]*";
    return new RegExp(`^${r}$`);
  },
  In = /^\d+n?$/,
  Dn = /^\d+$/,
  An = /^-?\d+(?:\.\d+)?/i,
  Pn = /true|false/i,
  jn = /null/i;
var On = /undefined/i;
var Tn = /^[^A-Z]*$/,
  Nn = /^[^a-z]*$/;
var U = c("$ZodCheck", (e, r) => {
    var o;
    (e._zod ?? (e._zod = {}),
      (e._zod.def = r),
      (o = e._zod).onattach ?? (o.onattach = []));
  }),
  Ya = { number: "number", bigint: "bigint", object: "date" },
  Mt = c("$ZodCheckLessThan", (e, r) => {
    U.init(e, r);
    let o = Ya[typeof r.value];
    (e._zod.onattach.push((i) => {
      let t = i._zod.bag,
        n =
          (r.inclusive ? t.maximum : t.exclusiveMaximum) ??
          Number.POSITIVE_INFINITY;
      r.value < n &&
        (r.inclusive ? (t.maximum = r.value) : (t.exclusiveMaximum = r.value));
    }),
      (e._zod.check = (i) => {
        (r.inclusive ? i.value <= r.value : i.value < r.value) ||
          i.issues.push({
            origin: o,
            code: "too_big",
            maximum: r.value,
            input: i.value,
            inclusive: r.inclusive,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Ct = c("$ZodCheckGreaterThan", (e, r) => {
    U.init(e, r);
    let o = Ya[typeof r.value];
    (e._zod.onattach.push((i) => {
      let t = i._zod.bag,
        n =
          (r.inclusive ? t.minimum : t.exclusiveMinimum) ??
          Number.NEGATIVE_INFINITY;
      r.value > n &&
        (r.inclusive ? (t.minimum = r.value) : (t.exclusiveMinimum = r.value));
    }),
      (e._zod.check = (i) => {
        (r.inclusive ? i.value >= r.value : i.value > r.value) ||
          i.issues.push({
            origin: o,
            code: "too_small",
            minimum: r.value,
            input: i.value,
            inclusive: r.inclusive,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  En = c("$ZodCheckMultipleOf", (e, r) => {
    (U.init(e, r),
      e._zod.onattach.push((o) => {
        var i;
        (i = o._zod.bag).multipleOf ?? (i.multipleOf = r.value);
      }),
      (e._zod.check = (o) => {
        if (typeof o.value != typeof r.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof o.value == "bigint"
          ? o.value % r.value === BigInt(0)
          : Br(o.value, r.value) === 0) ||
          o.issues.push({
            origin: typeof o.value,
            code: "not_multiple_of",
            divisor: r.value,
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Un = c("$ZodCheckNumberFormat", (e, r) => {
    (U.init(e, r), (r.format = r.format || "float64"));
    let o = r.format?.includes("int"),
      i = o ? "int" : "number",
      [t, n] = Xr[r.format];
    (e._zod.onattach.push((a) => {
      let s = a._zod.bag;
      ((s.format = r.format),
        (s.minimum = t),
        (s.maximum = n),
        o && (s.pattern = Dn));
    }),
      (e._zod.check = (a) => {
        let s = a.value;
        if (o) {
          if (!Number.isInteger(s)) {
            a.issues.push({
              expected: i,
              format: r.format,
              code: "invalid_type",
              input: s,
              inst: e,
            });
            return;
          }
          if (!Number.isSafeInteger(s)) {
            s > 0
              ? a.issues.push({
                  input: s,
                  code: "too_big",
                  maximum: Number.MAX_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !r.abort,
                })
              : a.issues.push({
                  input: s,
                  code: "too_small",
                  minimum: Number.MIN_SAFE_INTEGER,
                  note: "Integers must be within the safe integer range.",
                  inst: e,
                  origin: i,
                  continue: !r.abort,
                });
            return;
          }
        }
        (s < t &&
          a.issues.push({
            origin: "number",
            input: s,
            code: "too_small",
            minimum: t,
            inclusive: !0,
            inst: e,
            continue: !r.abort,
          }),
          s > n &&
            a.issues.push({
              origin: "number",
              input: s,
              code: "too_big",
              maximum: n,
              inst: e,
            }));
      }));
  }),
  Zn = c("$ZodCheckBigIntFormat", (e, r) => {
    U.init(e, r);
    let [o, i] = Qr[r.format];
    (e._zod.onattach.push((t) => {
      let n = t._zod.bag;
      ((n.format = r.format), (n.minimum = o), (n.maximum = i));
    }),
      (e._zod.check = (t) => {
        let n = t.value;
        (n < o &&
          t.issues.push({
            origin: "bigint",
            input: n,
            code: "too_small",
            minimum: o,
            inclusive: !0,
            inst: e,
            continue: !r.abort,
          }),
          n > i &&
            t.issues.push({
              origin: "bigint",
              input: n,
              code: "too_big",
              maximum: i,
              inst: e,
            }));
      }));
  }),
  Rn = c("$ZodCheckMaxSize", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        r.maximum < i && (o._zod.bag.maximum = r.maximum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        i.size <= r.maximum ||
          o.issues.push({
            origin: Je(i),
            code: "too_big",
            maximum: r.maximum,
            input: i,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Mn = c("$ZodCheckMinSize", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        r.minimum > i && (o._zod.bag.minimum = r.minimum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        i.size >= r.minimum ||
          o.issues.push({
            origin: Je(i),
            code: "too_small",
            minimum: r.minimum,
            input: i,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Cn = c("$ZodCheckSizeEquals", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.size !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        ((i.minimum = r.size), (i.maximum = r.size), (i.size = r.size));
      }),
      (e._zod.check = (o) => {
        let i = o.value,
          t = i.size;
        if (t === r.size) return;
        let n = t > r.size;
        o.issues.push({
          origin: Je(i),
          ...(n
            ? { code: "too_big", maximum: r.size }
            : { code: "too_small", minimum: r.size }),
          input: o.value,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  Ln = c("$ZodCheckMaxLength", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        r.maximum < i && (o._zod.bag.maximum = r.maximum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        if (i.length <= r.maximum) return;
        let n = Ge(i);
        o.issues.push({
          origin: n,
          code: "too_big",
          maximum: r.maximum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  Vn = c("$ZodCheckMinLength", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        r.minimum > i && (o._zod.bag.minimum = r.minimum);
      }),
      (e._zod.check = (o) => {
        let i = o.value;
        if (i.length >= r.minimum) return;
        let n = Ge(i);
        o.issues.push({
          origin: n,
          code: "too_small",
          minimum: r.minimum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  qn = c("$ZodCheckLengthEquals", (e, r) => {
    (U.init(e, r),
      (e._zod.when = (o) => {
        let i = o.value;
        return !de(i) && i.length !== void 0;
      }),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        ((i.minimum = r.length), (i.maximum = r.length), (i.length = r.length));
      }),
      (e._zod.check = (o) => {
        let i = o.value,
          t = i.length;
        if (t === r.length) return;
        let n = Ge(i),
          a = t > r.length;
        o.issues.push({
          origin: n,
          ...(a
            ? { code: "too_big", maximum: r.length }
            : { code: "too_small", minimum: r.length }),
          input: o.value,
          inst: e,
          continue: !r.abort,
        });
      }));
  }),
  Ae = c("$ZodCheckStringFormat", (e, r) => {
    var o;
    (U.init(e, r),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        ((t.format = r.format),
          r.pattern &&
            (t.patterns ?? (t.patterns = new Set()),
            t.patterns.add(r.pattern)));
      }),
      (o = e._zod).check ??
        (o.check = (i) => {
          if (!r.pattern) throw new Error("Not implemented.");
          ((r.pattern.lastIndex = 0),
            !r.pattern.test(i.value) &&
              i.issues.push({
                origin: "string",
                code: "invalid_format",
                format: r.format,
                input: i.value,
                ...(r.pattern ? { pattern: r.pattern.toString() } : {}),
                inst: e,
                continue: !r.abort,
              }));
        }));
  }),
  Fn = c("$ZodCheckRegex", (e, r) => {
    (Ae.init(e, r),
      (e._zod.check = (o) => {
        ((r.pattern.lastIndex = 0),
          !r.pattern.test(o.value) &&
            o.issues.push({
              origin: "string",
              code: "invalid_format",
              format: "regex",
              input: o.value,
              pattern: r.pattern.toString(),
              inst: e,
              continue: !r.abort,
            }));
      }));
  }),
  Hn = c("$ZodCheckLowerCase", (e, r) => {
    (r.pattern ?? (r.pattern = Tn), Ae.init(e, r));
  }),
  Wn = c("$ZodCheckUpperCase", (e, r) => {
    (r.pattern ?? (r.pattern = Nn), Ae.init(e, r));
  }),
  Bn = c("$ZodCheckIncludes", (e, r) => {
    U.init(e, r);
    let o = oe(r.includes),
      i = new RegExp(
        typeof r.position == "number" ? `^.{${r.position}}${o}` : o,
      );
    ((r.pattern = i),
      e._zod.onattach.push((t) => {
        let n = t._zod.bag;
        (n.patterns ?? (n.patterns = new Set()), n.patterns.add(i));
      }),
      (e._zod.check = (t) => {
        t.value.includes(r.includes, r.position) ||
          t.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: r.includes,
            input: t.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Kn = c("$ZodCheckStartsWith", (e, r) => {
    U.init(e, r);
    let o = new RegExp(`^${oe(r.prefix)}.*`);
    (r.pattern ?? (r.pattern = o),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(o));
      }),
      (e._zod.check = (i) => {
        i.value.startsWith(r.prefix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: r.prefix,
            input: i.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  Yn = c("$ZodCheckEndsWith", (e, r) => {
    U.init(e, r);
    let o = new RegExp(`.*${oe(r.suffix)}$`);
    (r.pattern ?? (r.pattern = o),
      e._zod.onattach.push((i) => {
        let t = i._zod.bag;
        (t.patterns ?? (t.patterns = new Set()), t.patterns.add(o));
      }),
      (e._zod.check = (i) => {
        i.value.endsWith(r.suffix) ||
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: r.suffix,
            input: i.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  });
function Ka(e, r, o) {
  e.issues.length && r.issues.push(...V(o, e.issues));
}
var Jn = c("$ZodCheckProperty", (e, r) => {
    (U.init(e, r),
      (e._zod.check = (o) => {
        let i = r.schema._zod.run(
          { value: o.value[r.property], issues: [] },
          {},
        );
        if (i instanceof Promise) return i.then((t) => Ka(t, o, r.property));
        Ka(i, o, r.property);
      }));
  }),
  Gn = c("$ZodCheckMimeType", (e, r) => {
    U.init(e, r);
    let o = new Set(r.mime);
    (e._zod.onattach.push((i) => {
      i._zod.bag.mime = r.mime;
    }),
      (e._zod.check = (i) => {
        o.has(i.value.type) ||
          i.issues.push({
            code: "invalid_value",
            values: r.mime,
            input: i.value.type,
            path: ["type"],
            inst: e,
          });
      }));
  }),
  Xn = c("$ZodCheckOverwrite", (e, r) => {
    (U.init(e, r),
      (e._zod.check = (o) => {
        o.value = r.tx(o.value);
      }));
  });
var tt = class {
  constructor(r = []) {
    ((this.content = []), (this.indent = 0), this && (this.args = r));
  }
  indented(r) {
    ((this.indent += 1), r(this), (this.indent -= 1));
  }
  write(r) {
    if (typeof r == "function") {
      (r(this, { execution: "sync" }), r(this, { execution: "async" }));
      return;
    }
    let i = r
        .split(
          `
`,
        )
        .filter((a) => a),
      t = Math.min(...i.map((a) => a.length - a.trimStart().length)),
      n = i.map((a) => a.slice(t)).map((a) => " ".repeat(this.indent * 2) + a);
    for (let a of n) this.content.push(a);
  }
  compile() {
    let r = Function,
      o = this?.args,
      t = [...(this?.content ?? [""]).map((n) => `  ${n}`)];
    return new r(
      ...o,
      t.join(`
`),
    );
  }
};
var Qn = { major: 4, minor: 0, patch: 0 };
var k = c("$ZodType", (e, r) => {
    var o;
    (e ?? (e = {}),
      (e._zod.id = r.type + "_" + jt(10)),
      (e._zod.def = r),
      (e._zod.bag = e._zod.bag || {}),
      (e._zod.version = Qn));
    let i = [...(e._zod.def.checks ?? [])];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (let t of i) for (let n of t._zod.onattach) n(e);
    if (i.length === 0)
      ((o = e._zod).deferred ?? (o.deferred = []),
        e._zod.deferred?.push(() => {
          e._zod.run = e._zod.parse;
        }));
    else {
      let t = (n, a, s) => {
        let l = he(n),
          u;
        for (let m of a) {
          if (m._zod.when) {
            if (!m._zod.when(n)) continue;
          } else if (l) continue;
          let p = n.issues.length,
            g = m._zod.check(n);
          if (g instanceof Promise && s?.async === !1) throw new re();
          if (u || g instanceof Promise)
            u = (u ?? Promise.resolve()).then(async () => {
              (await g, n.issues.length !== p && (l || (l = he(n, p))));
            });
          else {
            if (n.issues.length === p) continue;
            l || (l = he(n, p));
          }
        }
        return u ? u.then(() => n) : n;
      };
      e._zod.run = (n, a) => {
        let s = e._zod.parse(n, a);
        if (s instanceof Promise) {
          if (a.async === !1) throw new re();
          return s.then((l) => t(l, i, a));
        }
        return t(s, i, a);
      };
    }
    e["~standard"] = {
      validate: (t) => {
        try {
          let n = nn(e, t);
          return n.success ? { value: n.data } : { issues: n.error?.issues };
        } catch {
          return on(e, t).then((a) =>
            a.success ? { value: a.data } : { issues: a.error?.issues },
          );
        }
      },
      vendor: "zod",
      version: 1,
    };
  }),
  rt = c("$ZodString", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern =
        [...(e?._zod.bag?.patterns ?? [])].pop() ?? Sn(e._zod.bag)),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = String(o.value);
          } catch {}
        return (
          typeof o.value == "string" ||
            o.issues.push({
              expected: "string",
              code: "invalid_type",
              input: o.value,
              inst: e,
            }),
          o
        );
      }));
  }),
  N = c("$ZodStringFormat", (e, r) => {
    (Ae.init(e, r), rt.init(e, r));
  }),
  to = c("$ZodGUID", (e, r) => {
    (r.pattern ?? (r.pattern = mn), N.init(e, r));
  }),
  ro = c("$ZodUUID", (e, r) => {
    if (r.version) {
      let i = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
        r.version
      ];
      if (i === void 0) throw new Error(`Invalid UUID version: "${r.version}"`);
      r.pattern ?? (r.pattern = ve(i));
    } else r.pattern ?? (r.pattern = ve());
    N.init(e, r);
  }),
  no = c("$ZodEmail", (e, r) => {
    (r.pattern ?? (r.pattern = pn), N.init(e, r));
  }),
  oo = c("$ZodURL", (e, r) => {
    (N.init(e, r),
      (e._zod.check = (o) => {
        try {
          let i = new URL(o.value);
          (r.hostname &&
            ((r.hostname.lastIndex = 0),
            r.hostname.test(i.hostname) ||
              o.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: wn.source,
                input: o.value,
                inst: e,
                continue: !r.abort,
              })),
            r.protocol &&
              ((r.protocol.lastIndex = 0),
              r.protocol.test(
                i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol,
              ) ||
                o.issues.push({
                  code: "invalid_format",
                  format: "url",
                  note: "Invalid protocol",
                  pattern: r.protocol.source,
                  input: o.value,
                  inst: e,
                  continue: !r.abort,
                })));
          return;
        } catch {
          o.issues.push({
            code: "invalid_format",
            format: "url",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
        }
      }));
  }),
  io = c("$ZodEmoji", (e, r) => {
    (r.pattern ?? (r.pattern = fn()), N.init(e, r));
  }),
  ao = c("$ZodNanoID", (e, r) => {
    (r.pattern ?? (r.pattern = dn), N.init(e, r));
  }),
  so = c("$ZodCUID", (e, r) => {
    (r.pattern ?? (r.pattern = an), N.init(e, r));
  }),
  uo = c("$ZodCUID2", (e, r) => {
    (r.pattern ?? (r.pattern = sn), N.init(e, r));
  }),
  lo = c("$ZodULID", (e, r) => {
    (r.pattern ?? (r.pattern = un), N.init(e, r));
  }),
  co = c("$ZodXID", (e, r) => {
    (r.pattern ?? (r.pattern = ln), N.init(e, r));
  }),
  _o = c("$ZodKSUID", (e, r) => {
    (r.pattern ?? (r.pattern = cn), N.init(e, r));
  }),
  mo = c("$ZodISODateTime", (e, r) => {
    (r.pattern ?? (r.pattern = zn(r)), N.init(e, r));
  }),
  po = c("$ZodISODate", (e, r) => {
    (r.pattern ?? (r.pattern = $n), N.init(e, r));
  }),
  fo = c("$ZodISOTime", (e, r) => {
    (r.pattern ?? (r.pattern = kn(r)), N.init(e, r));
  }),
  go = c("$ZodISODuration", (e, r) => {
    (r.pattern ?? (r.pattern = _n), N.init(e, r));
  }),
  ho = c("$ZodIPv4", (e, r) => {
    (r.pattern ?? (r.pattern = gn),
      N.init(e, r),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        i.format = "ipv4";
      }));
  }),
  vo = c("$ZodIPv6", (e, r) => {
    (r.pattern ?? (r.pattern = hn),
      N.init(e, r),
      e._zod.onattach.push((o) => {
        let i = o._zod.bag;
        i.format = "ipv6";
      }),
      (e._zod.check = (o) => {
        try {
          new URL(`http://[${o.value}]`);
        } catch {
          o.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
        }
      }));
  }),
  yo = c("$ZodCIDRv4", (e, r) => {
    (r.pattern ?? (r.pattern = vn), N.init(e, r));
  }),
  bo = c("$ZodCIDRv6", (e, r) => {
    (r.pattern ?? (r.pattern = yn),
      N.init(e, r),
      (e._zod.check = (o) => {
        let [i, t] = o.value.split("/");
        try {
          if (!t) throw new Error();
          let n = Number(t);
          if (`${n}` !== t) throw new Error();
          if (n < 0 || n > 128) throw new Error();
          new URL(`http://[${i}]`);
        } catch {
          o.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
        }
      }));
  });
function wo(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var xo = c("$ZodBase64", (e, r) => {
  (r.pattern ?? (r.pattern = bn),
    N.init(e, r),
    e._zod.onattach.push((o) => {
      o._zod.bag.contentEncoding = "base64";
    }),
    (e._zod.check = (o) => {
      wo(o.value) ||
        o.issues.push({
          code: "invalid_format",
          format: "base64",
          input: o.value,
          inst: e,
          continue: !r.abort,
        });
    }));
});
function us(e) {
  if (!Rt.test(e)) return !1;
  let r = e.replace(/[-_]/g, (i) => (i === "-" ? "+" : "/")),
    o = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return wo(o);
}
var $o = c("$ZodBase64URL", (e, r) => {
    (r.pattern ?? (r.pattern = Rt),
      N.init(e, r),
      e._zod.onattach.push((o) => {
        o._zod.bag.contentEncoding = "base64url";
      }),
      (e._zod.check = (o) => {
        us(o.value) ||
          o.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  ko = c("$ZodE164", (e, r) => {
    (r.pattern ?? (r.pattern = xn), N.init(e, r));
  });
function ls(e, r = null) {
  try {
    let o = e.split(".");
    if (o.length !== 3) return !1;
    let [i] = o,
      t = JSON.parse(atob(i));
    return !(
      ("typ" in t && t?.typ !== "JWT") ||
      !t.alg ||
      (r && (!("alg" in t) || t.alg !== r))
    );
  } catch {
    return !1;
  }
}
var zo = c("$ZodJWT", (e, r) => {
    (N.init(e, r),
      (e._zod.check = (o) => {
        ls(o.value, r.alg) ||
          o.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: o.value,
            inst: e,
            continue: !r.abort,
          });
      }));
  }),
  qt = c("$ZodNumber", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = e._zod.bag.pattern ?? An),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = Number(o.value);
          } catch {}
        let t = o.value;
        if (typeof t == "number" && !Number.isNaN(t) && Number.isFinite(t))
          return o;
        let n =
          typeof t == "number"
            ? Number.isNaN(t)
              ? "NaN"
              : Number.isFinite(t)
                ? void 0
                : "Infinity"
            : void 0;
        return (
          o.issues.push({
            expected: "number",
            code: "invalid_type",
            input: t,
            inst: e,
            ...(n ? { received: n } : {}),
          }),
          o
        );
      }));
  }),
  So = c("$ZodNumber", (e, r) => {
    (Un.init(e, r), qt.init(e, r));
  }),
  nt = c("$ZodBoolean", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = Pn),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = !!o.value;
          } catch {}
        let t = o.value;
        return (
          typeof t == "boolean" ||
            o.issues.push({
              expected: "boolean",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          o
        );
      }));
  }),
  Ft = c("$ZodBigInt", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = In),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = BigInt(o.value);
          } catch {}
        let { value: t } = o;
        return (
          typeof t == "bigint" ||
            o.issues.push({
              expected: "bigint",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          o
        );
      }));
  }),
  Io = c("$ZodBigInt", (e, r) => {
    (Zn.init(e, r), Ft.init(e, r));
  }),
  Do = c("$ZodSymbol", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          typeof t == "symbol" ||
            o.issues.push({
              expected: "symbol",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          o
        );
      }));
  }),
  Ao = c("$ZodUndefined", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = On),
      (e._zod.values = new Set([void 0])),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          typeof t > "u" ||
            o.issues.push({
              expected: "undefined",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          o
        );
      }));
  }),
  Po = c("$ZodNull", (e, r) => {
    (k.init(e, r),
      (e._zod.pattern = jn),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          t === null ||
            o.issues.push({
              expected: "null",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          o
        );
      }));
  }),
  jo = c("$ZodAny", (e, r) => {
    (k.init(e, r), (e._zod.parse = (o) => o));
  }),
  _e = c("$ZodUnknown", (e, r) => {
    (k.init(e, r), (e._zod.parse = (o) => o));
  }),
  Oo = c("$ZodNever", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => (
        o.issues.push({
          expected: "never",
          code: "invalid_type",
          input: o.value,
          inst: e,
        }),
        o
      )));
  }),
  To = c("$ZodVoid", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o;
        return (
          typeof t > "u" ||
            o.issues.push({
              expected: "void",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          o
        );
      }));
  }),
  No = c("$ZodDate", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        if (r.coerce)
          try {
            o.value = new Date(o.value);
          } catch {}
        let t = o.value,
          n = t instanceof Date;
        return (
          (n && !Number.isNaN(t.getTime())) ||
            o.issues.push({
              expected: "date",
              code: "invalid_type",
              input: t,
              ...(n ? { received: "Invalid Date" } : {}),
              inst: e,
            }),
          o
        );
      }));
  });
function Ga(e, r, o) {
  (e.issues.length && r.issues.push(...V(o, e.issues)), (r.value[o] = e.value));
}
var ot = c("$ZodArray", (e, r) => {
  (k.init(e, r),
    (e._zod.parse = (o, i) => {
      let t = o.value;
      if (!Array.isArray(t))
        return (
          o.issues.push({
            expected: "array",
            code: "invalid_type",
            input: t,
            inst: e,
          }),
          o
        );
      o.value = Array(t.length);
      let n = [];
      for (let a = 0; a < t.length; a++) {
        let s = t[a],
          l = r.element._zod.run({ value: s, issues: [] }, i);
        l instanceof Promise ? n.push(l.then((u) => Ga(u, o, a))) : Ga(l, o, a);
      }
      return n.length ? Promise.all(n).then(() => o) : o;
    }));
});
function Lt(e, r, o) {
  (e.issues.length && r.issues.push(...V(o, e.issues)), (r.value[o] = e.value));
}
function Xa(e, r, o, i) {
  e.issues.length
    ? i[o] === void 0
      ? o in i
        ? (r.value[o] = void 0)
        : (r.value[o] = e.value)
      : r.issues.push(...V(o, e.issues))
    : e.value === void 0
      ? o in i && (r.value[o] = void 0)
      : (r.value[o] = e.value);
}
var Eo = c("$ZodObject", (e, r) => {
  k.init(e, r);
  let o = We(() => {
    let p = Object.keys(r.shape);
    for (let d of p)
      if (!(r.shape[d] instanceof k))
        throw new Error(`Invalid element at key "${d}": expected a Zod schema`);
    let g = Gr(r.shape);
    return {
      shape: r.shape,
      keys: p,
      keySet: new Set(p),
      numKeys: p.length,
      optionalKeys: new Set(g),
    };
  });
  T(e._zod, "propValues", () => {
    let p = r.shape,
      g = {};
    for (let d in p) {
      let v = p[d]._zod;
      if (v.values) {
        g[d] ?? (g[d] = new Set());
        for (let x of v.values) g[d].add(x);
      }
    }
    return g;
  });
  let i = (p) => {
      let g = new tt(["shape", "payload", "ctx"]),
        { keys: d, optionalKeys: v } = o.value,
        x = (I) => {
          let S = ge(I);
          return `shape[${S}]._zod.run({ value: input[${S}], issues: [] }, ctx)`;
        };
      g.write("const input = payload.value;");
      let P = Object.create(null);
      for (let I of d) P[I] = jt(15);
      g.write("const newResult = {}");
      for (let I of d)
        if (v.has(I)) {
          let S = P[I];
          g.write(`const ${S} = ${x(I)};`);
          let w = ge(I);
          g.write(`
        if (${S}.issues.length) {
          if (input[${w}] === undefined) {
            if (${w} in input) {
              newResult[${w}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${S}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${w}, ...iss.path] : [${w}],
              }))
            );
          }
        } else if (${S}.value === undefined) {
          if (${w} in input) newResult[${w}] = undefined;
        } else {
          newResult[${w}] = ${S}.value;
        }
        `);
        } else {
          let S = P[I];
          (g.write(`const ${S} = ${x(I)};`),
            g.write(`
          if (${S}.issues.length) payload.issues = payload.issues.concat(${S}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${ge(I)}, ...iss.path] : [${ge(I)}]
          })));`),
            g.write(`newResult[${ge(I)}] = ${S}.value`));
        }
      (g.write("payload.value = newResult;"), g.write("return payload;"));
      let j = g.compile();
      return (I, S) => j(p, I, S);
    },
    t,
    n = Ie,
    a = !qe.jitless,
    l = a && Yr.value,
    { catchall: u } = r,
    m;
  e._zod.parse = (p, g) => {
    m ?? (m = o.value);
    let d = p.value;
    if (!n(d))
      return (
        p.issues.push({
          expected: "object",
          code: "invalid_type",
          input: d,
          inst: e,
        }),
        p
      );
    let v = [];
    if (a && l && g?.async === !1 && g.jitless !== !0)
      (t || (t = i(r.shape)), (p = t(p, g)));
    else {
      p.value = {};
      let S = m.shape;
      for (let w of m.keys) {
        let $ = S[w],
          D = $._zod.run({ value: d[w], issues: [] }, g),
          O = $._zod.optin === "optional" && $._zod.optout === "optional";
        D instanceof Promise
          ? v.push(D.then((R) => (O ? Xa(R, p, w, d) : Lt(R, p, w))))
          : O
            ? Xa(D, p, w, d)
            : Lt(D, p, w);
      }
    }
    if (!u) return v.length ? Promise.all(v).then(() => p) : p;
    let x = [],
      P = m.keySet,
      j = u._zod,
      I = j.def.type;
    for (let S of Object.keys(d)) {
      if (P.has(S)) continue;
      if (I === "never") {
        x.push(S);
        continue;
      }
      let w = j.run({ value: d[S], issues: [] }, g);
      w instanceof Promise ? v.push(w.then(($) => Lt($, p, S))) : Lt(w, p, S);
    }
    return (
      x.length &&
        p.issues.push({
          code: "unrecognized_keys",
          keys: x,
          input: d,
          inst: e,
        }),
      v.length ? Promise.all(v).then(() => p) : p
    );
  };
});
function Qa(e, r, o, i) {
  for (let t of e) if (t.issues.length === 0) return ((r.value = t.value), r);
  return (
    r.issues.push({
      code: "invalid_union",
      input: r.value,
      inst: o,
      errors: e.map((t) => t.issues.map((n) => B(n, i, Z()))),
    }),
    r
  );
}
var Ht = c("$ZodUnion", (e, r) => {
    (k.init(e, r),
      T(e._zod, "values", () => {
        if (r.options.every((o) => o._zod.values))
          return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
      }),
      T(e._zod, "pattern", () => {
        if (r.options.every((o) => o._zod.pattern)) {
          let o = r.options.map((i) => i._zod.pattern);
          return new RegExp(`^(${o.map((i) => Be(i.source)).join("|")})$`);
        }
      }),
      (e._zod.parse = (o, i) => {
        let t = !1,
          n = [];
        for (let a of r.options) {
          let s = a._zod.run({ value: o.value, issues: [] }, i);
          if (s instanceof Promise) (n.push(s), (t = !0));
          else {
            if (s.issues.length === 0) return s;
            n.push(s);
          }
        }
        return t ? Promise.all(n).then((a) => Qa(a, o, e, i)) : Qa(n, o, e, i);
      }));
  }),
  Uo = c("$ZodDiscriminatedUnion", (e, r) => {
    Ht.init(e, r);
    let o = e._zod.parse;
    T(e._zod, "propValues", () => {
      let t = {};
      for (let n of r.options) {
        let a = n._zod.propValues;
        if (!a || Object.keys(a).length === 0)
          throw new Error(
            `Invalid discriminated union option at index "${r.options.indexOf(n)}"`,
          );
        for (let [s, l] of Object.entries(a)) {
          t[s] || (t[s] = new Set());
          for (let u of l) t[s].add(u);
        }
      }
      return t;
    });
    let i = We(() => {
      let t = r.options,
        n = new Map();
      for (let a of t) {
        let s = a._zod.propValues[r.discriminator];
        if (!s || s.size === 0)
          throw new Error(
            `Invalid discriminated union option at index "${r.options.indexOf(a)}"`,
          );
        for (let l of s) {
          if (n.has(l))
            throw new Error(`Duplicate discriminator value "${String(l)}"`);
          n.set(l, a);
        }
      }
      return n;
    });
    e._zod.parse = (t, n) => {
      let a = t.value;
      if (!Ie(a))
        return (
          t.issues.push({
            code: "invalid_type",
            expected: "object",
            input: a,
            inst: e,
          }),
          t
        );
      let s = i.value.get(a?.[r.discriminator]);
      return s
        ? s._zod.run(t, n)
        : r.unionFallback
          ? o(t, n)
          : (t.issues.push({
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              input: a,
              path: [r.discriminator],
              inst: e,
            }),
            t);
    };
  }),
  Zo = c("$ZodIntersection", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let { value: t } = o,
          n = r.left._zod.run({ value: t, issues: [] }, i),
          a = r.right._zod.run({ value: t, issues: [] }, i);
        return n instanceof Promise || a instanceof Promise
          ? Promise.all([n, a]).then(([l, u]) => es(o, l, u))
          : es(o, n, a);
      }));
  });
function eo(e, r) {
  if (e === r) return { valid: !0, data: e };
  if (e instanceof Date && r instanceof Date && +e == +r)
    return { valid: !0, data: e };
  if (Ke(e) && Ke(r)) {
    let o = Object.keys(r),
      i = Object.keys(e).filter((n) => o.indexOf(n) !== -1),
      t = { ...e, ...r };
    for (let n of i) {
      let a = eo(e[n], r[n]);
      if (!a.valid)
        return { valid: !1, mergeErrorPath: [n, ...a.mergeErrorPath] };
      t[n] = a.data;
    }
    return { valid: !0, data: t };
  }
  if (Array.isArray(e) && Array.isArray(r)) {
    if (e.length !== r.length) return { valid: !1, mergeErrorPath: [] };
    let o = [];
    for (let i = 0; i < e.length; i++) {
      let t = e[i],
        n = r[i],
        a = eo(t, n);
      if (!a.valid)
        return { valid: !1, mergeErrorPath: [i, ...a.mergeErrorPath] };
      o.push(a.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function es(e, r, o) {
  if (
    (r.issues.length && e.issues.push(...r.issues),
    o.issues.length && e.issues.push(...o.issues),
    he(e))
  )
    return e;
  let i = eo(r.value, o.value);
  if (!i.valid)
    throw new Error(
      `Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`,
    );
  return ((e.value = i.data), e);
}
var be = c("$ZodTuple", (e, r) => {
  k.init(e, r);
  let o = r.items,
    i =
      o.length - [...o].reverse().findIndex((t) => t._zod.optin !== "optional");
  e._zod.parse = (t, n) => {
    let a = t.value;
    if (!Array.isArray(a))
      return (
        t.issues.push({
          input: a,
          inst: e,
          expected: "tuple",
          code: "invalid_type",
        }),
        t
      );
    t.value = [];
    let s = [];
    if (!r.rest) {
      let u = a.length > o.length,
        m = a.length < i - 1;
      if (u || m)
        return (
          t.issues.push({
            input: a,
            inst: e,
            origin: "array",
            ...(u
              ? { code: "too_big", maximum: o.length }
              : { code: "too_small", minimum: o.length }),
          }),
          t
        );
    }
    let l = -1;
    for (let u of o) {
      if ((l++, l >= a.length && l >= i)) continue;
      let m = u._zod.run({ value: a[l], issues: [] }, n);
      m instanceof Promise ? s.push(m.then((p) => Vt(p, t, l))) : Vt(m, t, l);
    }
    if (r.rest) {
      let u = a.slice(o.length);
      for (let m of u) {
        l++;
        let p = r.rest._zod.run({ value: m, issues: [] }, n);
        p instanceof Promise ? s.push(p.then((g) => Vt(g, t, l))) : Vt(p, t, l);
      }
    }
    return s.length ? Promise.all(s).then(() => t) : t;
  };
});
function Vt(e, r, o) {
  (e.issues.length && r.issues.push(...V(o, e.issues)), (r.value[o] = e.value));
}
var Ro = c("$ZodRecord", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        if (!Ke(t))
          return (
            o.issues.push({
              expected: "record",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
            o
          );
        let n = [];
        if (r.keyType._zod.values) {
          let a = r.keyType._zod.values;
          o.value = {};
          for (let l of a)
            if (
              typeof l == "string" ||
              typeof l == "number" ||
              typeof l == "symbol"
            ) {
              let u = r.valueType._zod.run({ value: t[l], issues: [] }, i);
              u instanceof Promise
                ? n.push(
                    u.then((m) => {
                      (m.issues.length && o.issues.push(...V(l, m.issues)),
                        (o.value[l] = m.value));
                    }),
                  )
                : (u.issues.length && o.issues.push(...V(l, u.issues)),
                  (o.value[l] = u.value));
            }
          let s;
          for (let l in t) a.has(l) || ((s = s ?? []), s.push(l));
          s &&
            s.length > 0 &&
            o.issues.push({
              code: "unrecognized_keys",
              input: t,
              inst: e,
              keys: s,
            });
        } else {
          o.value = {};
          for (let a of Reflect.ownKeys(t)) {
            if (a === "__proto__") continue;
            let s = r.keyType._zod.run({ value: a, issues: [] }, i);
            if (s instanceof Promise)
              throw new Error(
                "Async schemas not supported in object keys currently",
              );
            if (s.issues.length) {
              (o.issues.push({
                origin: "record",
                code: "invalid_key",
                issues: s.issues.map((u) => B(u, i, Z())),
                input: a,
                path: [a],
                inst: e,
              }),
                (o.value[s.value] = s.value));
              continue;
            }
            let l = r.valueType._zod.run({ value: t[a], issues: [] }, i);
            l instanceof Promise
              ? n.push(
                  l.then((u) => {
                    (u.issues.length && o.issues.push(...V(a, u.issues)),
                      (o.value[s.value] = u.value));
                  }),
                )
              : (l.issues.length && o.issues.push(...V(a, l.issues)),
                (o.value[s.value] = l.value));
          }
        }
        return n.length ? Promise.all(n).then(() => o) : o;
      }));
  }),
  Mo = c("$ZodMap", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        if (!(t instanceof Map))
          return (
            o.issues.push({
              expected: "map",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
            o
          );
        let n = [];
        o.value = new Map();
        for (let [a, s] of t) {
          let l = r.keyType._zod.run({ value: a, issues: [] }, i),
            u = r.valueType._zod.run({ value: s, issues: [] }, i);
          l instanceof Promise || u instanceof Promise
            ? n.push(
                Promise.all([l, u]).then(([m, p]) => {
                  ts(m, p, o, a, t, e, i);
                }),
              )
            : ts(l, u, o, a, t, e, i);
        }
        return n.length ? Promise.all(n).then(() => o) : o;
      }));
  });
function ts(e, r, o, i, t, n, a) {
  (e.issues.length &&
    (Ye.has(typeof i)
      ? o.issues.push(...V(i, e.issues))
      : o.issues.push({
          origin: "map",
          code: "invalid_key",
          input: t,
          inst: n,
          issues: e.issues.map((s) => B(s, a, Z())),
        })),
    r.issues.length &&
      (Ye.has(typeof i)
        ? o.issues.push(...V(i, r.issues))
        : o.issues.push({
            origin: "map",
            code: "invalid_element",
            input: t,
            inst: n,
            key: i,
            issues: r.issues.map((s) => B(s, a, Z())),
          })),
    o.value.set(e.value, r.value));
}
var Co = c("$ZodSet", (e, r) => {
  (k.init(e, r),
    (e._zod.parse = (o, i) => {
      let t = o.value;
      if (!(t instanceof Set))
        return (
          o.issues.push({
            input: t,
            inst: e,
            expected: "set",
            code: "invalid_type",
          }),
          o
        );
      let n = [];
      o.value = new Set();
      for (let a of t) {
        let s = r.valueType._zod.run({ value: a, issues: [] }, i);
        s instanceof Promise ? n.push(s.then((l) => rs(l, o))) : rs(s, o);
      }
      return n.length ? Promise.all(n).then(() => o) : o;
    }));
});
function rs(e, r) {
  (e.issues.length && r.issues.push(...e.issues), r.value.add(e.value));
}
var Lo = c("$ZodEnum", (e, r) => {
    k.init(e, r);
    let o = He(r.entries);
    ((e._zod.values = new Set(o)),
      (e._zod.pattern = new RegExp(
        `^(${o
          .filter((i) => Ye.has(typeof i))
          .map((i) => (typeof i == "string" ? oe(i) : i.toString()))
          .join("|")})$`,
      )),
      (e._zod.parse = (i, t) => {
        let n = i.value;
        return (
          e._zod.values.has(n) ||
            i.issues.push({
              code: "invalid_value",
              values: o,
              input: n,
              inst: e,
            }),
          i
        );
      }));
  }),
  Vo = c("$ZodLiteral", (e, r) => {
    (k.init(e, r),
      (e._zod.values = new Set(r.values)),
      (e._zod.pattern = new RegExp(
        `^(${r.values.map((o) => (typeof o == "string" ? oe(o) : o ? o.toString() : String(o))).join("|")})$`,
      )),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        return (
          e._zod.values.has(t) ||
            o.issues.push({
              code: "invalid_value",
              values: r.values,
              input: t,
              inst: e,
            }),
          o
        );
      }));
  }),
  qo = c("$ZodFile", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = o.value;
        return (
          t instanceof File ||
            o.issues.push({
              expected: "file",
              code: "invalid_type",
              input: t,
              inst: e,
            }),
          o
        );
      }));
  }),
  Fo = c("$ZodTransform", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = r.transform(o.value, o);
        if (i.async)
          return (t instanceof Promise ? t : Promise.resolve(t)).then(
            (a) => ((o.value = a), o),
          );
        if (t instanceof Promise) throw new re();
        return ((o.value = t), o);
      }));
  }),
  Ho = c("$ZodOptional", (e, r) => {
    (k.init(e, r),
      (e._zod.optin = "optional"),
      (e._zod.optout = "optional"),
      T(e._zod, "values", () =>
        r.innerType._zod.values
          ? new Set([...r.innerType._zod.values, void 0])
          : void 0,
      ),
      T(e._zod, "pattern", () => {
        let o = r.innerType._zod.pattern;
        return o ? new RegExp(`^(${Be(o.source)})?$`) : void 0;
      }),
      (e._zod.parse = (o, i) =>
        o.value === void 0 ? o : r.innerType._zod.run(o, i)));
  }),
  Wo = c("$ZodNullable", (e, r) => {
    (k.init(e, r),
      T(e._zod, "optin", () => r.innerType._zod.optin),
      T(e._zod, "optout", () => r.innerType._zod.optout),
      T(e._zod, "pattern", () => {
        let o = r.innerType._zod.pattern;
        return o ? new RegExp(`^(${Be(o.source)}|null)$`) : void 0;
      }),
      T(e._zod, "values", () =>
        r.innerType._zod.values
          ? new Set([...r.innerType._zod.values, null])
          : void 0,
      ),
      (e._zod.parse = (o, i) =>
        o.value === null ? o : r.innerType._zod.run(o, i)));
  }),
  Bo = c("$ZodDefault", (e, r) => {
    (k.init(e, r),
      (e._zod.optin = "optional"),
      T(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => {
        if (o.value === void 0) return ((o.value = r.defaultValue), o);
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => ns(n, r)) : ns(t, r);
      }));
  });
function ns(e, r) {
  return (e.value === void 0 && (e.value = r.defaultValue), e);
}
var Ko = c("$ZodPrefault", (e, r) => {
    (k.init(e, r),
      (e._zod.optin = "optional"),
      T(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => (
        o.value === void 0 && (o.value = r.defaultValue),
        r.innerType._zod.run(o, i)
      )));
  }),
  Yo = c("$ZodNonOptional", (e, r) => {
    (k.init(e, r),
      T(e._zod, "values", () => {
        let o = r.innerType._zod.values;
        return o ? new Set([...o].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => os(n, e)) : os(t, e);
      }));
  });
function os(e, r) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: e.value,
        inst: r,
      }),
    e
  );
}
var Jo = c("$ZodSuccess", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise
          ? t.then((n) => ((o.value = n.issues.length === 0), o))
          : ((o.value = t.issues.length === 0), o);
      }));
  }),
  Go = c("$ZodCatch", (e, r) => {
    (k.init(e, r),
      T(e._zod, "optin", () => r.innerType._zod.optin),
      T(e._zod, "optout", () => r.innerType._zod.optout),
      T(e._zod, "values", () => r.innerType._zod.values),
      (e._zod.parse = (o, i) => {
        let t = r.innerType._zod.run(o, i);
        return t instanceof Promise
          ? t.then(
              (n) => (
                (o.value = n.value),
                n.issues.length &&
                  ((o.value = r.catchValue({
                    ...o,
                    error: { issues: n.issues.map((a) => B(a, i, Z())) },
                    input: o.value,
                  })),
                  (o.issues = [])),
                o
              ),
            )
          : ((o.value = t.value),
            t.issues.length &&
              ((o.value = r.catchValue({
                ...o,
                error: { issues: t.issues.map((n) => B(n, i, Z())) },
                input: o.value,
              })),
              (o.issues = [])),
            o);
      }));
  }),
  Xo = c("$ZodNaN", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) => (
        (typeof o.value != "number" || !Number.isNaN(o.value)) &&
          o.issues.push({
            input: o.value,
            inst: e,
            expected: "nan",
            code: "invalid_type",
          }),
        o
      )));
  }),
  it = c("$ZodPipe", (e, r) => {
    (k.init(e, r),
      T(e._zod, "values", () => r.in._zod.values),
      T(e._zod, "optin", () => r.in._zod.optin),
      T(e._zod, "optout", () => r.out._zod.optout),
      (e._zod.parse = (o, i) => {
        let t = r.in._zod.run(o, i);
        return t instanceof Promise ? t.then((n) => is(n, r, i)) : is(t, r, i);
      }));
  });
function is(e, r, o) {
  return he(e) ? e : r.out._zod.run({ value: e.value, issues: e.issues }, o);
}
var Qo = c("$ZodReadonly", (e, r) => {
  (k.init(e, r),
    T(e._zod, "propValues", () => r.innerType._zod.propValues),
    T(e._zod, "optin", () => r.innerType._zod.optin),
    T(e._zod, "optout", () => r.innerType._zod.optout),
    (e._zod.parse = (o, i) => {
      let t = r.innerType._zod.run(o, i);
      return t instanceof Promise ? t.then(as) : as(t);
    }));
});
function as(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
var ei = c("$ZodTemplateLiteral", (e, r) => {
    k.init(e, r);
    let o = [];
    for (let i of r.parts)
      if (i instanceof k) {
        if (!i._zod.pattern)
          throw new Error(
            `Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`,
          );
        let t =
          i._zod.pattern instanceof RegExp
            ? i._zod.pattern.source
            : i._zod.pattern;
        if (!t)
          throw new Error(`Invalid template literal part: ${i._zod.traits}`);
        let n = t.startsWith("^") ? 1 : 0,
          a = t.endsWith("$") ? t.length - 1 : t.length;
        o.push(t.slice(n, a));
      } else if (i === null || Jr.has(typeof i)) o.push(oe(`${i}`));
      else throw new Error(`Invalid template literal part: ${i}`);
    ((e._zod.pattern = new RegExp(`^${o.join("")}$`)),
      (e._zod.parse = (i, t) =>
        typeof i.value != "string"
          ? (i.issues.push({
              input: i.value,
              inst: e,
              expected: "template_literal",
              code: "invalid_type",
            }),
            i)
          : ((e._zod.pattern.lastIndex = 0),
            e._zod.pattern.test(i.value) ||
              i.issues.push({
                input: i.value,
                inst: e,
                code: "invalid_format",
                format: "template_literal",
                pattern: e._zod.pattern.source,
              }),
            i)));
  }),
  ti = c("$ZodPromise", (e, r) => {
    (k.init(e, r),
      (e._zod.parse = (o, i) =>
        Promise.resolve(o.value).then((t) =>
          r.innerType._zod.run({ value: t, issues: [] }, i),
        )));
  }),
  ri = c("$ZodLazy", (e, r) => {
    (k.init(e, r),
      T(e._zod, "innerType", () => r.getter()),
      T(e._zod, "pattern", () => e._zod.innerType._zod.pattern),
      T(e._zod, "propValues", () => e._zod.innerType._zod.propValues),
      T(e._zod, "optin", () => e._zod.innerType._zod.optin),
      T(e._zod, "optout", () => e._zod.innerType._zod.optout),
      (e._zod.parse = (o, i) => e._zod.innerType._zod.run(o, i)));
  }),
  ni = c("$ZodCustom", (e, r) => {
    (U.init(e, r),
      k.init(e, r),
      (e._zod.parse = (o, i) => o),
      (e._zod.check = (o) => {
        let i = o.value,
          t = r.fn(i);
        if (t instanceof Promise) return t.then((n) => ss(n, o, i, e));
        ss(t, o, i, e);
      }));
  });
function ss(e, r, o, i) {
  if (!e) {
    let t = {
      code: "custom",
      input: o,
      inst: i,
      path: [...(i._zod.def.path ?? [])],
      continue: !i._zod.def.abort,
    };
    (i._zod.def.params && (t.params = i._zod.def.params), r.issues.push(en(t)));
  }
}
var at = {};
pe(at, {
  ar: () => ds,
  az: () => _s,
  be: () => ps,
  ca: () => fs,
  cs: () => gs,
  de: () => hs,
  en: () => Wt,
  es: () => vs,
  fa: () => ys,
  fi: () => bs,
  fr: () => ws,
  frCA: () => xs,
  he: () => $s,
  hu: () => ks,
  id: () => zs,
  it: () => Ss,
  ja: () => Is,
  kh: () => Ds,
  ko: () => As,
  mk: () => Ps,
  ms: () => js,
  nl: () => Os,
  no: () => Ts,
  ota: () => Ns,
  pl: () => Es,
  pt: () => Us,
  ru: () => Rs,
  sl: () => Ms,
  sv: () => Cs,
  ta: () => Ls,
  th: () => Vs,
  tr: () => qs,
  ua: () => Fs,
  ur: () => Hs,
  vi: () => Ws,
  zhCN: () => Bs,
  zhTW: () => Ks,
});
var Ml = () => {
  let e = {
    string: {
      unit: "\u062D\u0631\u0641",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    file: {
      unit: "\u0628\u0627\u064A\u062A",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    array: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
    set: {
      unit: "\u0639\u0646\u0635\u0631",
      verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0645\u062F\u062E\u0644",
      email:
        "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      url: "\u0631\u0627\u0628\u0637",
      emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
      ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
      cidrv4:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
      cidrv6:
        "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
      base64:
        "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
      base64url:
        "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
      json_string:
        "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
      e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
      jwt: "JWT",
      template_literal: "\u0645\u062F\u062E\u0644",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${t.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${b(t.values[0])}`
          : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${n} ${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"}`
          : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${n} ${t.minimum.toString()} ${a.unit}`
          : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${n} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${t.prefix}"`
          : n.format === "ends_with"
            ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${n.suffix}"`
            : n.format === "includes"
              ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${n.includes}"`
              : n.format === "regex"
                ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${n.pattern}`
                : `${i[n.format] ?? t.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${t.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${t.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${t.keys.length > 1 ? "\u0629" : ""}: ${_(t.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function ds() {
  return { localeError: Ml() };
}
var Cl = () => {
  let e = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${t.expected}, daxil olan ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${b(t.values[0])}`
          : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${n}${t.maximum.toString()} ${a.unit ?? "element"}`
          : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${n}${t.minimum.toString()} ${a.unit}`
          : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Yanl\u0131\u015F m\u0259tn: "${n.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
          : n.format === "ends_with"
            ? `Yanl\u0131\u015F m\u0259tn: "${n.suffix}" il\u0259 bitm\u0259lidir`
            : n.format === "includes"
              ? `Yanl\u0131\u015F m\u0259tn: "${n.includes}" daxil olmal\u0131d\u0131r`
              : n.format === "regex"
                ? `Yanl\u0131\u015F m\u0259tn: ${n.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                : `Yanl\u0131\u015F ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${t.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${t.keys.length > 1 ? "lar" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${t.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return "Yanl\u0131\u015F d\u0259y\u0259r";
    }
  };
};
function _s() {
  return { localeError: Cl() };
}
function ms(e, r, o, i) {
  let t = Math.abs(e),
    n = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : n === 1 ? r : n >= 2 && n <= 4 ? o : i;
}
var Ll = () => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E",
      },
      verb: "\u043C\u0435\u0446\u044C",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u043B\u0456\u043A";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0456\u045E";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0443\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0430\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0447\u0430\u0441",
      duration:
        "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
      cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
      base64url:
        "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
      json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
      e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0443\u0432\u043E\u0434",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${t.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${b(t.values[0])}`
          : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        if (a) {
          let s = Number(t.maximum),
            l = ms(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${n}${t.maximum.toString()} ${l}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        if (a) {
          let s = Number(t.minimum),
            l = ms(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${a.verb} ${n}${t.minimum.toString()} ${l}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${n.suffix}"`
            : n.format === "includes"
              ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${n.includes}"`
              : n.format === "regex"
                ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n.pattern}`
                : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${t.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${t.origin}`;
      default:
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
    }
  };
};
function ps() {
  return { localeError: Ll() };
}
var Vl = () => {
  let e = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "entrada",
      email: "adre\xE7a electr\xF2nica",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "durada ISO",
      ipv4: "adre\xE7a IPv4",
      ipv6: "adre\xE7a IPv6",
      cidrv4: "rang IPv4",
      cidrv6: "rang IPv6",
      base64: "cadena codificada en base64",
      base64url: "cadena codificada en base64url",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Tipus inv\xE0lid: s'esperava ${t.expected}, s'ha rebut ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Valor inv\xE0lid: s'esperava ${b(t.values[0])}`
          : `Opci\xF3 inv\xE0lida: s'esperava una de ${_(t.values, " o ")}`;
      case "too_big": {
        let n = t.inclusive ? "com a m\xE0xim" : "menys de",
          a = r(t.origin);
        return a
          ? `Massa gran: s'esperava que ${t.origin ?? "el valor"} contingu\xE9s ${n} ${t.maximum.toString()} ${a.unit ?? "elements"}`
          : `Massa gran: s'esperava que ${t.origin ?? "el valor"} fos ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? "com a m\xEDnim" : "m\xE9s de",
          a = r(t.origin);
        return a
          ? `Massa petit: s'esperava que ${t.origin} contingu\xE9s ${n} ${t.minimum.toString()} ${a.unit}`
          : `Massa petit: s'esperava que ${t.origin} fos ${n} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Format inv\xE0lid: ha de comen\xE7ar amb "${n.prefix}"`
          : n.format === "ends_with"
            ? `Format inv\xE0lid: ha d'acabar amb "${n.suffix}"`
            : n.format === "includes"
              ? `Format inv\xE0lid: ha d'incloure "${n.includes}"`
              : n.format === "regex"
                ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${n.pattern}`
                : `Format inv\xE0lid per a ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Clau${t.keys.length > 1 ? "s" : ""} no reconeguda${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      case "invalid_element":
        return `Element inv\xE0lid a ${t.origin}`;
      default:
        return "Entrada inv\xE0lida";
    }
  };
};
function fs() {
  return { localeError: Vl() };
}
var ql = () => {
  let e = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u010D\xEDslo";
        case "string":
          return "\u0159et\u011Bzec";
        case "boolean":
          return "boolean";
        case "bigint":
          return "bigint";
        case "function":
          return "funkce";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
        case "object": {
          if (Array.isArray(t)) return "pole";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "regul\xE1rn\xED v\xFDraz",
      email: "e-mailov\xE1 adresa",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "datum a \u010Das ve form\xE1tu ISO",
      date: "datum ve form\xE1tu ISO",
      time: "\u010Das ve form\xE1tu ISO",
      duration: "doba trv\xE1n\xED ISO",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "rozsah IPv4",
      cidrv6: "rozsah IPv6",
      base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
      base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
      json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
      e164: "\u010D\xEDslo E.164",
      jwt: "JWT",
      template_literal: "vstup",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${t.expected}, obdr\u017Eeno ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${b(t.values[0])}`
          : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${n}${t.maximum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${n}${t.minimum.toString()} ${a.unit ?? "prvk\u016F"}`
          : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${n.prefix}"`
          : n.format === "ends_with"
            ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${n.suffix}"`
            : n.format === "includes"
              ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${n.includes}"`
              : n.format === "regex"
                ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${n.pattern}`
                : `Neplatn\xFD form\xE1t ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${t.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${t.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${t.origin}`;
      default:
        return "Neplatn\xFD vstup";
    }
  };
};
function gs() {
  return { localeError: ql() };
}
var Fl = () => {
  let e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "Zahl";
        case "object": {
          if (Array.isArray(t)) return "Array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "Eingabe",
      email: "E-Mail-Adresse",
      url: "URL",
      emoji: "Emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-Datum und -Uhrzeit",
      date: "ISO-Datum",
      time: "ISO-Uhrzeit",
      duration: "ISO-Dauer",
      ipv4: "IPv4-Adresse",
      ipv6: "IPv6-Adresse",
      cidrv4: "IPv4-Bereich",
      cidrv6: "IPv6-Bereich",
      base64: "Base64-codierter String",
      base64url: "Base64-URL-codierter String",
      json_string: "JSON-String",
      e164: "E.164-Nummer",
      jwt: "JWT",
      template_literal: "Eingabe",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ung\xFCltige Eingabe: erwartet ${t.expected}, erhalten ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ung\xFCltige Eingabe: erwartet ${b(t.values[0])}`
          : `Ung\xFCltige Option: erwartet eine von ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${n}${t.maximum.toString()} ${a.unit ?? "Elemente"} hat`
          : `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${n}${t.maximum.toString()} ist`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Zu klein: erwartet, dass ${t.origin} ${n}${t.minimum.toString()} ${a.unit} hat`
          : `Zu klein: erwartet, dass ${t.origin} ${n}${t.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Ung\xFCltiger String: muss mit "${n.prefix}" beginnen`
          : n.format === "ends_with"
            ? `Ung\xFCltiger String: muss mit "${n.suffix}" enden`
            : n.format === "includes"
              ? `Ung\xFCltiger String: muss "${n.includes}" enthalten`
              : n.format === "regex"
                ? `Ung\xFCltiger String: muss dem Muster ${n.pattern} entsprechen`
                : `Ung\xFCltig: ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${t.divisor} sein`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${t.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${t.origin}`;
      default:
        return "Ung\xFCltige Eingabe";
    }
  };
};
function hs() {
  return { localeError: Fl() };
}
var Hl = (e) => {
    let r = typeof e;
    switch (r) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return r;
  },
  Wl = () => {
    let e = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
    };
    function r(i) {
      return e[i] ?? null;
    }
    let o = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input",
    };
    return (i) => {
      switch (i.code) {
        case "invalid_type":
          return `Invalid input: expected ${i.expected}, received ${Hl(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Invalid input: expected ${b(i.values[0])}`
            : `Invalid option: expected one of ${_(i.values, "|")}`;
        case "too_big": {
          let t = i.inclusive ? "<=" : "<",
            n = r(i.origin);
          return n
            ? `Too big: expected ${i.origin ?? "value"} to have ${t}${i.maximum.toString()} ${n.unit ?? "elements"}`
            : `Too big: expected ${i.origin ?? "value"} to be ${t}${i.maximum.toString()}`;
        }
        case "too_small": {
          let t = i.inclusive ? ">=" : ">",
            n = r(i.origin);
          return n
            ? `Too small: expected ${i.origin} to have ${t}${i.minimum.toString()} ${n.unit}`
            : `Too small: expected ${i.origin} to be ${t}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let t = i;
          return t.format === "starts_with"
            ? `Invalid string: must start with "${t.prefix}"`
            : t.format === "ends_with"
              ? `Invalid string: must end with "${t.suffix}"`
              : t.format === "includes"
                ? `Invalid string: must include "${t.includes}"`
                : t.format === "regex"
                  ? `Invalid string: must match pattern ${t.pattern}`
                  : `Invalid ${o[t.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${i.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${_(i.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${i.origin}`;
        case "invalid_union":
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${i.origin}`;
        default:
          return "Invalid input";
      }
    };
  };
function Wt() {
  return { localeError: Wl() };
}
var Bl = () => {
  let e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(t)) return "arreglo";
          if (t === null) return "nulo";
          if (Object.getPrototypeOf(t) !== Object.prototype)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "entrada",
      email: "direcci\xF3n de correo electr\xF3nico",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "fecha y hora ISO",
      date: "fecha ISO",
      time: "hora ISO",
      duration: "duraci\xF3n ISO",
      ipv4: "direcci\xF3n IPv4",
      ipv6: "direcci\xF3n IPv6",
      cidrv4: "rango IPv4",
      cidrv6: "rango IPv6",
      base64: "cadena codificada en base64",
      base64url: "URL codificada en base64",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entrada inv\xE1lida: se esperaba ${t.expected}, recibido ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entrada inv\xE1lida: se esperaba ${b(t.values[0])}`
          : `Opci\xF3n inv\xE1lida: se esperaba una de ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Demasiado grande: se esperaba que ${t.origin ?? "valor"} tuviera ${n}${t.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Demasiado grande: se esperaba que ${t.origin ?? "valor"} fuera ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Demasiado peque\xF1o: se esperaba que ${t.origin} tuviera ${n}${t.minimum.toString()} ${a.unit}`
          : `Demasiado peque\xF1o: se esperaba que ${t.origin} fuera ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Cadena inv\xE1lida: debe comenzar con "${n.prefix}"`
          : n.format === "ends_with"
            ? `Cadena inv\xE1lida: debe terminar en "${n.suffix}"`
            : n.format === "includes"
              ? `Cadena inv\xE1lida: debe incluir "${n.includes}"`
              : n.format === "regex"
                ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${n.pattern}`
                : `Inv\xE1lido ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Llave${t.keys.length > 1 ? "s" : ""} desconocida${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${t.origin}`;
      default:
        return "Entrada inv\xE1lida";
    }
  };
};
function vs() {
  return { localeError: Bl() };
}
var Kl = () => {
  let e = {
    string: {
      unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    file: {
      unit: "\u0628\u0627\u06CC\u062A",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    array: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
    set: {
      unit: "\u0622\u06CC\u062A\u0645",
      verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0639\u062F\u062F";
        case "object": {
          if (Array.isArray(t)) return "\u0622\u0631\u0627\u06CC\u0647";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0648\u0631\u0648\u062F\u06CC",
      email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
      url: "URL",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
      time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      duration:
        "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      ipv4: "IPv4 \u0622\u062F\u0631\u0633",
      ipv6: "IPv6 \u0622\u062F\u0631\u0633",
      cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
      cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
      base64: "base64-encoded \u0631\u0634\u062A\u0647",
      base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
      json_string: "JSON \u0631\u0634\u062A\u0647",
      e164: "E.164 \u0639\u062F\u062F",
      jwt: "JWT",
      template_literal: "\u0648\u0631\u0648\u062F\u06CC",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${t.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${o(t.input)} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${b(t.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
          : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${_(t.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${n}${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${n}${t.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${n}${t.minimum.toString()} ${a.unit} \u0628\u0627\u0634\u062F`
          : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${n}${t.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${n.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
          : n.format === "ends_with"
            ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${n.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
            : n.format === "includes"
              ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${n.includes}" \u0628\u0627\u0634\u062F`
              : n.format === "regex"
                ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${n.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                : `${i[n.format] ?? t.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${t.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${t.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${t.origin}`;
      case "invalid_union":
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${t.origin}`;
      default:
        return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
    }
  };
};
function ys() {
  return { localeError: Kl() };
}
var Yl = () => {
  let e = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "s\xE4\xE4nn\xF6llinen lauseke",
      email: "s\xE4hk\xF6postiosoite",
      url: "URL-osoite",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-aikaleima",
      date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
      time: "ISO-aika",
      duration: "ISO-kesto",
      ipv4: "IPv4-osoite",
      ipv6: "IPv6-osoite",
      cidrv4: "IPv4-alue",
      cidrv6: "IPv6-alue",
      base64: "base64-koodattu merkkijono",
      base64url: "base64url-koodattu merkkijono",
      json_string: "JSON-merkkijono",
      e164: "E.164-luku",
      jwt: "JWT",
      template_literal: "templaattimerkkijono",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${t.expected}, oli ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${b(t.values[0])}`
          : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Liian suuri: ${a.subject} t\xE4ytyy olla ${n}${t.maximum.toString()} ${a.unit}`.trim()
          : `Liian suuri: arvon t\xE4ytyy olla ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Liian pieni: ${a.subject} t\xE4ytyy olla ${n}${t.minimum.toString()} ${a.unit}`.trim()
          : `Liian pieni: arvon t\xE4ytyy olla ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${n.prefix}"`
          : n.format === "ends_with"
            ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${n.suffix}"`
            : n.format === "includes"
              ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${n.includes}"`
              : n.format === "regex"
                ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${n.pattern}`
                : `Virheellinen ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${t.divisor} monikerta`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen sy\xF6te";
    }
  };
};
function bs() {
  return { localeError: Yl() };
}
var Jl = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "nombre";
        case "object": {
          if (Array.isArray(t)) return "tableau";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "entr\xE9e",
      email: "adresse e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date et heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : ${t.expected} attendu, ${o(t.input)} re\xE7u`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entr\xE9e invalide : ${b(t.values[0])} attendu`
          : `Option invalide : une valeur parmi ${_(t.values, "|")} attendue`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Trop grand : ${t.origin ?? "valeur"} doit ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "\xE9l\xE9ment(s)"}`
          : `Trop grand : ${t.origin ?? "valeur"} doit \xEAtre ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Trop petit : ${t.origin} doit ${a.verb} ${n}${t.minimum.toString()} ${a.unit}`
          : `Trop petit : ${t.origin} doit \xEAtre ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${n.prefix}"`
          : n.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${n.suffix}"`
            : n.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${n.includes}"`
              : n.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${n.pattern}`
                : `${i[n.format] ?? t.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${t.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${t.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function ws() {
  return { localeError: Jl() };
}
var Gl = () => {
  let e = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "entr\xE9e",
      email: "adresse courriel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date-heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Entr\xE9e invalide : attendu ${t.expected}, re\xE7u ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entr\xE9e invalide : attendu ${b(t.values[0])}`
          : `Option invalide : attendu l'une des valeurs suivantes ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "\u2264" : "<",
          a = r(t.origin);
        return a
          ? `Trop grand : attendu que ${t.origin ?? "la valeur"} ait ${n}${t.maximum.toString()} ${a.unit}`
          : `Trop grand : attendu que ${t.origin ?? "la valeur"} soit ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? "\u2265" : ">",
          a = r(t.origin);
        return a
          ? `Trop petit : attendu que ${t.origin} ait ${n}${t.minimum.toString()} ${a.unit}`
          : `Trop petit : attendu que ${t.origin} soit ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Cha\xEEne invalide : doit commencer par "${n.prefix}"`
          : n.format === "ends_with"
            ? `Cha\xEEne invalide : doit se terminer par "${n.suffix}"`
            : n.format === "includes"
              ? `Cha\xEEne invalide : doit inclure "${n.includes}"`
              : n.format === "regex"
                ? `Cha\xEEne invalide : doit correspondre au motif ${n.pattern}`
                : `${i[n.format] ?? t.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${t.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${t.origin}`;
      default:
        return "Entr\xE9e invalide";
    }
  };
};
function xs() {
  return { localeError: Gl() };
}
var Xl = () => {
  let e = {
    string: {
      unit: "\u05D0\u05D5\u05EA\u05D9\u05D5\u05EA",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    file: {
      unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    array: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
    set: {
      unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
      verb: "\u05DC\u05DB\u05DC\u05D5\u05DC",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u05E7\u05DC\u05D8",
      email:
        "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
      url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
      emoji: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
      date: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
      time: "\u05D6\u05DE\u05DF ISO",
      duration: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
      ipv4: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
      ipv6: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
      cidrv4: "\u05D8\u05D5\u05D5\u05D7 IPv4",
      cidrv6: "\u05D8\u05D5\u05D5\u05D7 IPv6",
      base64:
        "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
      base64url:
        "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
      json_string: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
      e164: "\u05DE\u05E1\u05E4\u05E8 E.164",
      jwt: "JWT",
      template_literal: "\u05E7\u05DC\u05D8",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${t.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA ${b(t.values[0])}`
          : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05D0\u05D7\u05EA \u05DE\u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA  ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${t.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.maximum.toString()} ${a.unit ?? "elements"}`
          : `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${t.origin ?? "value"} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${t.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.minimum.toString()} ${a.unit}`
          : `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${t.origin} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1"${n.prefix}"`
          : n.format === "ends_with"
            ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${n.suffix}"`
            : n.format === "includes"
              ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${n.includes}"`
              : n.format === "regex"
                ? `\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4: \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${n.pattern}`
                : `${i[n.format] ?? t.format} \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${t.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${t.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${t.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u05DE\u05E4\u05EA\u05D7 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${t.origin}`;
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element":
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${t.origin}`;
      default:
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
    }
  };
};
function $s() {
  return { localeError: Xl() };
}
var Ql = () => {
  let e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "sz\xE1m";
        case "object": {
          if (Array.isArray(t)) return "t\xF6mb";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "bemenet",
      email: "email c\xEDm",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO id\u0151b\xE9lyeg",
      date: "ISO d\xE1tum",
      time: "ISO id\u0151",
      duration: "ISO id\u0151intervallum",
      ipv4: "IPv4 c\xEDm",
      ipv6: "IPv6 c\xEDm",
      cidrv4: "IPv4 tartom\xE1ny",
      cidrv6: "IPv6 tartom\xE1ny",
      base64: "base64-k\xF3dolt string",
      base64url: "base64url-k\xF3dolt string",
      json_string: "JSON string",
      e164: "E.164 sz\xE1m",
      jwt: "JWT",
      template_literal: "bemenet",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${t.expected}, a kapott \xE9rt\xE9k ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${b(t.values[0])}`
          : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `T\xFAl nagy: ${t.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${n}${t.maximum.toString()} ${a.unit ?? "elem"}`
          : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${t.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} m\xE9rete t\xFAl kicsi ${n}${t.minimum.toString()} ${a.unit}`
          : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} t\xFAl kicsi ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\xC9rv\xE9nytelen string: "${n.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
          : n.format === "ends_with"
            ? `\xC9rv\xE9nytelen string: "${n.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
            : n.format === "includes"
              ? `\xC9rv\xE9nytelen string: "${n.includes}" \xE9rt\xE9ket kell tartalmaznia`
              : n.format === "regex"
                ? `\xC9rv\xE9nytelen string: ${n.pattern} mint\xE1nak kell megfelelnie`
                : `\xC9rv\xE9nytelen ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${t.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${t.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${t.origin}`;
      default:
        return "\xC9rv\xE9nytelen bemenet";
    }
  };
};
function ks() {
  return { localeError: Ql() };
}
var ec = () => {
  let e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "alamat email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tanggal dan waktu format ISO",
      date: "tanggal format ISO",
      time: "jam format ISO",
      duration: "durasi format ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "rentang alamat IPv4",
      cidrv6: "rentang alamat IPv6",
      base64: "string dengan enkode base64",
      base64url: "string dengan enkode base64url",
      json_string: "string JSON",
      e164: "angka E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${t.expected}, diterima ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input tidak valid: diharapkan ${b(t.values[0])}`
          : `Pilihan tidak valid: diharapkan salah satu dari ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Terlalu besar: diharapkan ${t.origin ?? "value"} memiliki ${n}${t.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: diharapkan ${t.origin ?? "value"} menjadi ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Terlalu kecil: diharapkan ${t.origin} memiliki ${n}${t.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: diharapkan ${t.origin} menjadi ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `String tidak valid: harus dimulai dengan "${n.prefix}"`
          : n.format === "ends_with"
            ? `String tidak valid: harus berakhir dengan "${n.suffix}"`
            : n.format === "includes"
              ? `String tidak valid: harus menyertakan "${n.includes}"`
              : n.format === "regex"
                ? `String tidak valid: harus sesuai pola ${n.pattern}`
                : `${i[n.format] ?? t.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${t.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${t.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${t.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function zs() {
  return { localeError: ec() };
}
var tc = () => {
  let e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "numero";
        case "object": {
          if (Array.isArray(t)) return "vettore";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "indirizzo email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e ora ISO",
      date: "data ISO",
      time: "ora ISO",
      duration: "durata ISO",
      ipv4: "indirizzo IPv4",
      ipv6: "indirizzo IPv6",
      cidrv4: "intervallo IPv4",
      cidrv6: "intervallo IPv6",
      base64: "stringa codificata in base64",
      base64url: "URL codificata in base64",
      json_string: "stringa JSON",
      e164: "numero E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input non valido: atteso ${t.expected}, ricevuto ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input non valido: atteso ${b(t.values[0])}`
          : `Opzione non valida: atteso uno tra ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Troppo grande: ${t.origin ?? "valore"} deve avere ${n}${t.maximum.toString()} ${a.unit ?? "elementi"}`
          : `Troppo grande: ${t.origin ?? "valore"} deve essere ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Troppo piccolo: ${t.origin} deve avere ${n}${t.minimum.toString()} ${a.unit}`
          : `Troppo piccolo: ${t.origin} deve essere ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Stringa non valida: deve iniziare con "${n.prefix}"`
          : n.format === "ends_with"
            ? `Stringa non valida: deve terminare con "${n.suffix}"`
            : n.format === "includes"
              ? `Stringa non valida: deve includere "${n.includes}"`
              : n.format === "regex"
                ? `Stringa non valida: deve corrispondere al pattern ${n.pattern}`
                : `Invalid ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${t.divisor}`;
      case "unrecognized_keys":
        return `Chiav${t.keys.length > 1 ? "i" : "e"} non riconosciut${t.keys.length > 1 ? "e" : "a"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${t.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${t.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function Ss() {
  return { localeError: tc() };
}
var rc = () => {
  let e = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u6570\u5024";
        case "object": {
          if (Array.isArray(t)) return "\u914D\u5217";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u5165\u529B\u5024",
      email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
      url: "URL",
      emoji: "\u7D75\u6587\u5B57",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u6642",
      date: "ISO\u65E5\u4ED8",
      time: "ISO\u6642\u523B",
      duration: "ISO\u671F\u9593",
      ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
      ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
      cidrv4: "IPv4\u7BC4\u56F2",
      cidrv6: "IPv6\u7BC4\u56F2",
      base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      json_string: "JSON\u6587\u5B57\u5217",
      e164: "E.164\u756A\u53F7",
      jwt: "JWT",
      template_literal: "\u5165\u529B\u5024",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u7121\u52B9\u306A\u5165\u529B: ${t.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${o(t.input)}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u7121\u52B9\u306A\u5165\u529B: ${b(t.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
          : `\u7121\u52B9\u306A\u9078\u629E: ${_(t.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${a.unit ?? "\u8981\u7D20"}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${a.unit}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${n}\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
          : n.format === "ends_with"
            ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
            : n.format === "includes"
              ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
              : n.format === "regex"
                ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${n.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                : `\u7121\u52B9\u306A${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${t.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${t.keys.length > 1 ? "\u7FA4" : ""}: ${_(t.keys, "\u3001")}`;
      case "invalid_key":
        return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return "\u7121\u52B9\u306A\u5165\u529B";
    }
  };
};
function Is() {
  return { localeError: rc() };
}
var nc = () => {
  let e = {
    string: {
      unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    file: {
      unit: "\u1794\u17C3",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    array: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
    set: {
      unit: "\u1792\u17B6\u178F\u17BB",
      verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t)
            ? "\u1798\u17B7\u1793\u1798\u17C2\u1793\u1787\u17B6\u179B\u17C1\u1781 (NaN)"
            : "\u179B\u17C1\u1781";
        case "object": {
          if (Array.isArray(t)) return "\u17A2\u17B6\u179A\u17C1 (Array)";
          if (t === null)
            return "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
      email:
        "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
      url: "URL",
      emoji:
        "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
      date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
      time: "\u1798\u17C9\u17C4\u1784 ISO",
      duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
      ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      cidrv4:
        "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      cidrv6:
        "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      base64:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
      base64url:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
      json_string:
        "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
      e164: "\u179B\u17C1\u1781 E.164",
      jwt: "JWT",
      template_literal:
        "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${b(t.values[0])}`
          : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${n} ${t.maximum.toString()} ${a.unit ?? "\u1792\u17B6\u178F\u17BB"}`
          : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${n} ${t.minimum.toString()} ${a.unit}`
          : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${n} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${n.suffix}"`
            : n.format === "includes"
              ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${n.includes}"`
              : n.format === "regex"
                ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${n.pattern}`
                : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${t.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
      case "invalid_union":
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
      default:
        return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
    }
  };
};
function Ds() {
  return { localeError: nc() };
}
var oc = () => {
  let e = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\uC785\uB825",
      email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
      url: "URL",
      emoji: "\uC774\uBAA8\uC9C0",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
      date: "ISO \uB0A0\uC9DC",
      time: "ISO \uC2DC\uAC04",
      duration: "ISO \uAE30\uAC04",
      ipv4: "IPv4 \uC8FC\uC18C",
      ipv6: "IPv6 \uC8FC\uC18C",
      cidrv4: "IPv4 \uBC94\uC704",
      cidrv6: "IPv6 \uBC94\uC704",
      base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      json_string: "JSON \uBB38\uC790\uC5F4",
      e164: "E.164 \uBC88\uD638",
      jwt: "JWT",
      template_literal: "\uC785\uB825",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${t.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${o(t.input)}\uC785\uB2C8\uB2E4`;
      case "invalid_value":
        return t.values.length === 1
          ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${b(t.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
          : `\uC798\uBABB\uB41C \uC635\uC158: ${_(t.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        let n = t.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
          a =
            n === "\uBBF8\uB9CC"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = r(t.origin),
          l = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()}${l} ${n}${a}`
          : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()} ${n}${a}`;
      }
      case "too_small": {
        let n = t.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
          a =
            n === "\uC774\uC0C1"
              ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
              : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
          s = r(t.origin),
          l = s?.unit ?? "\uC694\uC18C";
        return s
          ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()}${l} ${n}${a}`
          : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()} ${n}${a}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
          : n.format === "ends_with"
            ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
            : n.format === "includes"
              ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
              : n.format === "regex"
                ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${n.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                : `\uC798\uBABB\uB41C ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${t.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${t.origin}`;
      case "invalid_union":
        return "\uC798\uBABB\uB41C \uC785\uB825";
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${t.origin}`;
      default:
        return "\uC798\uBABB\uB41C \uC785\uB825";
    }
  };
};
function As() {
  return { localeError: oc() };
}
var ic = () => {
  let e = {
    string: {
      unit: "\u0437\u043D\u0430\u0446\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    file: {
      unit: "\u0431\u0430\u0458\u0442\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    array: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
    set: {
      unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
      verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0431\u0440\u043E\u0458";
        case "object": {
          if (Array.isArray(t)) return "\u043D\u0438\u0437\u0430";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0432\u043D\u0435\u0441",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u045F\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
      date: "ISO \u0434\u0430\u0442\u0443\u043C",
      time: "ISO \u0432\u0440\u0435\u043C\u0435",
      duration:
        "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
      cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
      cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
      base64:
        "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      base64url:
        "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      json_string: "JSON \u043D\u0438\u0437\u0430",
      e164: "E.164 \u0431\u0440\u043E\u0458",
      jwt: "JWT",
      template_literal: "\u0432\u043D\u0435\u0441",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Invalid input: expected ${b(t.values[0])}`
          : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${n}${t.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0438\u043C\u0430 ${n}${t.minimum.toString()} ${a.unit}`
          : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${n.suffix}"`
            : n.format === "includes"
              ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${n.includes}"`
              : n.format === "regex"
                ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${n.pattern}`
                : `Invalid ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${t.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${t.origin}`;
      default:
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
    }
  };
};
function Ps() {
  return { localeError: ic() };
}
var ac = () => {
  let e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "nombor";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "alamat e-mel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tarikh masa ISO",
      date: "tarikh ISO",
      time: "masa ISO",
      duration: "tempoh ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "julat IPv4",
      cidrv6: "julat IPv6",
      base64: "string dikodkan base64",
      base64url: "string dikodkan base64url",
      json_string: "string JSON",
      e164: "nombor E.164",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${t.expected}, diterima ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Input tidak sah: dijangka ${b(t.values[0])}`
          : `Pilihan tidak sah: dijangka salah satu daripada ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Terlalu besar: dijangka ${t.origin ?? "nilai"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "elemen"}`
          : `Terlalu besar: dijangka ${t.origin ?? "nilai"} adalah ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Terlalu kecil: dijangka ${t.origin} ${a.verb} ${n}${t.minimum.toString()} ${a.unit}`
          : `Terlalu kecil: dijangka ${t.origin} adalah ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `String tidak sah: mesti bermula dengan "${n.prefix}"`
          : n.format === "ends_with"
            ? `String tidak sah: mesti berakhir dengan "${n.suffix}"`
            : n.format === "includes"
              ? `String tidak sah: mesti mengandungi "${n.includes}"`
              : n.format === "regex"
                ? `String tidak sah: mesti sepadan dengan corak ${n.pattern}`
                : `${i[n.format] ?? t.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${t.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${t.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${t.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function js() {
  return { localeError: ac() };
}
var sc = () => {
  let e = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "getal";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "invoer",
      email: "emailadres",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum en tijd",
      date: "ISO datum",
      time: "ISO tijd",
      duration: "ISO duur",
      ipv4: "IPv4-adres",
      ipv6: "IPv6-adres",
      cidrv4: "IPv4-bereik",
      cidrv6: "IPv6-bereik",
      base64: "base64-gecodeerde tekst",
      base64url: "base64 URL-gecodeerde tekst",
      json_string: "JSON string",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "invoer",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${t.expected}, ontving ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ongeldige invoer: verwacht ${b(t.values[0])}`
          : `Ongeldige optie: verwacht \xE9\xE9n van ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Te lang: verwacht dat ${t.origin ?? "waarde"} ${n}${t.maximum.toString()} ${a.unit ?? "elementen"} bevat`
          : `Te lang: verwacht dat ${t.origin ?? "waarde"} ${n}${t.maximum.toString()} is`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Te kort: verwacht dat ${t.origin} ${n}${t.minimum.toString()} ${a.unit} bevat`
          : `Te kort: verwacht dat ${t.origin} ${n}${t.minimum.toString()} is`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Ongeldige tekst: moet met "${n.prefix}" beginnen`
          : n.format === "ends_with"
            ? `Ongeldige tekst: moet op "${n.suffix}" eindigen`
            : n.format === "includes"
              ? `Ongeldige tekst: moet "${n.includes}" bevatten`
              : n.format === "regex"
                ? `Ongeldige tekst: moet overeenkomen met patroon ${n.pattern}`
                : `Ongeldig: ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${t.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${t.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function Os() {
  return { localeError: sc() };
}
var uc = () => {
  let e = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "tall";
        case "object": {
          if (Array.isArray(t)) return "liste";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "input",
      email: "e-postadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkeslett",
      date: "ISO-dato",
      time: "ISO-klokkeslett",
      duration: "ISO-varighet",
      ipv4: "IPv4-omr\xE5de",
      ipv6: "IPv6-omr\xE5de",
      cidrv4: "IPv4-spekter",
      cidrv6: "IPv6-spekter",
      base64: "base64-enkodet streng",
      base64url: "base64url-enkodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${t.expected}, fikk ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ugyldig verdi: forventet ${b(t.values[0])}`
          : `Ugyldig valg: forventet en av ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${n}${t.maximum.toString()} ${a.unit ?? "elementer"}`
          : `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `For lite(n): forventet ${t.origin} til \xE5 ha ${n}${t.minimum.toString()} ${a.unit}`
          : `For lite(n): forventet ${t.origin} til \xE5 ha ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Ugyldig streng: m\xE5 starte med "${n.prefix}"`
          : n.format === "ends_with"
            ? `Ugyldig streng: m\xE5 ende med "${n.suffix}"`
            : n.format === "includes"
              ? `Ugyldig streng: m\xE5 inneholde "${n.includes}"`
              : n.format === "regex"
                ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${n.pattern}`
                : `Ugyldig ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${t.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${t.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function Ts() {
  return { localeError: uc() };
}
var lc = () => {
  let e = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "numara";
        case "object": {
          if (Array.isArray(t)) return "saf";
          if (t === null) return "gayb";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "giren",
      email: "epostag\xE2h",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO heng\xE2m\u0131",
      date: "ISO tarihi",
      time: "ISO zaman\u0131",
      duration: "ISO m\xFCddeti",
      ipv4: "IPv4 ni\u015F\xE2n\u0131",
      ipv6: "IPv6 ni\u015F\xE2n\u0131",
      cidrv4: "IPv4 menzili",
      cidrv6: "IPv6 menzili",
      base64: "base64-\u015Fifreli metin",
      base64url: "base64url-\u015Fifreli metin",
      json_string: "JSON metin",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "giren",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `F\xE2sit giren: umulan ${t.expected}, al\u0131nan ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `F\xE2sit giren: umulan ${b(t.values[0])}`
          : `F\xE2sit tercih: m\xFBteberler ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${n}${t.maximum.toString()} ${a.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
          : `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${n}${t.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${n}${t.minimum.toString()} ${a.unit} sahip olmal\u0131yd\u0131.`
          : `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${n}${t.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `F\xE2sit metin: "${n.prefix}" ile ba\u015Flamal\u0131.`
          : n.format === "ends_with"
            ? `F\xE2sit metin: "${n.suffix}" ile bitmeli.`
            : n.format === "includes"
              ? `F\xE2sit metin: "${n.includes}" ihtiv\xE2 etmeli.`
              : n.format === "regex"
                ? `F\xE2sit metin: ${n.pattern} nak\u015F\u0131na uymal\u0131.`
                : `F\xE2sit ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${t.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${t.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return "K\u0131ymet tan\u0131namad\u0131.";
    }
  };
};
function Ns() {
  return { localeError: lc() };
}
var cc = () => {
  let e = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "liczba";
        case "object": {
          if (Array.isArray(t)) return "tablica";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "wyra\u017Cenie",
      email: "adres email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i godzina w formacie ISO",
      date: "data w formacie ISO",
      time: "godzina w formacie ISO",
      duration: "czas trwania ISO",
      ipv4: "adres IPv4",
      ipv6: "adres IPv6",
      cidrv4: "zakres IPv4",
      cidrv6: "zakres IPv6",
      base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
      base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
      json_string: "ci\u0105g znak\xF3w w formacie JSON",
      e164: "liczba E.164",
      jwt: "JWT",
      template_literal: "wej\u015Bcie",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${t.expected}, otrzymano ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${b(t.values[0])}`
          : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${n}${t.maximum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${n}${t.minimum.toString()} ${a.unit ?? "element\xF3w"}`
          : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${n.prefix}"`
          : n.format === "ends_with"
            ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${n.suffix}"`
            : n.format === "includes"
              ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${n.includes}"`
              : n.format === "regex"
                ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${n.pattern}`
                : `Nieprawid\u0142ow(y/a/e) ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${t.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${t.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${t.origin}`;
      default:
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
    }
  };
};
function Es() {
  return { localeError: cc() };
}
var dc = () => {
  let e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "n\xFAmero";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "nulo";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "padr\xE3o",
      email: "endere\xE7o de e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "dura\xE7\xE3o ISO",
      ipv4: "endere\xE7o IPv4",
      ipv6: "endere\xE7o IPv6",
      cidrv4: "faixa de IPv4",
      cidrv6: "faixa de IPv6",
      base64: "texto codificado em base64",
      base64url: "URL codificada em base64",
      json_string: "texto JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Tipo inv\xE1lido: esperado ${t.expected}, recebido ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Entrada inv\xE1lida: esperado ${b(t.values[0])}`
          : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Muito grande: esperado que ${t.origin ?? "valor"} tivesse ${n}${t.maximum.toString()} ${a.unit ?? "elementos"}`
          : `Muito grande: esperado que ${t.origin ?? "valor"} fosse ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Muito pequeno: esperado que ${t.origin} tivesse ${n}${t.minimum.toString()} ${a.unit}`
          : `Muito pequeno: esperado que ${t.origin} fosse ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Texto inv\xE1lido: deve come\xE7ar com "${n.prefix}"`
          : n.format === "ends_with"
            ? `Texto inv\xE1lido: deve terminar com "${n.suffix}"`
            : n.format === "includes"
              ? `Texto inv\xE1lido: deve incluir "${n.includes}"`
              : n.format === "regex"
                ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${n.pattern}`
                : `${i[n.format] ?? t.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Chave${t.keys.length > 1 ? "s" : ""} desconhecida${t.keys.length > 1 ? "s" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${t.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${t.origin}`;
      default:
        return "Campo inv\xE1lido";
    }
  };
};
function Us() {
  return { localeError: dc() };
}
function Zs(e, r, o, i) {
  let t = Math.abs(e),
    n = t % 10,
    a = t % 100;
  return a >= 11 && a <= 19 ? i : n === 1 ? r : n >= 2 && n <= 4 ? o : i;
}
var _c = () => {
  let e = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
      },
      verb: "\u0438\u043C\u0435\u0442\u044C",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0441\u0438\u0432";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0432\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0435\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0432\u0440\u0435\u043C\u044F",
      duration:
        "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
      cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      base64:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
      base64url:
        "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
      json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0432\u0432\u043E\u0434",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${t.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${b(t.values[0])}`
          : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        if (a) {
          let s = Number(t.maximum),
            l = Zs(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${n}${t.maximum.toString()} ${l}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        if (a) {
          let s = Number(t.minimum),
            l = Zs(s, a.unit.one, a.unit.few, a.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${n}${t.minimum.toString()} ${l}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${n.suffix}"`
            : n.format === "includes"
              ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${n.includes}"`
              : n.format === "regex"
                ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n.pattern}`
                : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${t.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0438" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${t.origin}`;
      default:
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
    }
  };
};
function Rs() {
  return { localeError: _c() };
}
var mc = () => {
  let e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0161tevilo";
        case "object": {
          if (Array.isArray(t)) return "tabela";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "vnos",
      email: "e-po\u0161tni naslov",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum in \u010Das",
      date: "ISO datum",
      time: "ISO \u010Das",
      duration: "ISO trajanje",
      ipv4: "IPv4 naslov",
      ipv6: "IPv6 naslov",
      cidrv4: "obseg IPv4",
      cidrv6: "obseg IPv6",
      base64: "base64 kodiran niz",
      base64url: "base64url kodiran niz",
      json_string: "JSON niz",
      e164: "E.164 \u0161tevilka",
      jwt: "JWT",
      template_literal: "vnos",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Neveljaven vnos: pri\u010Dakovano ${t.expected}, prejeto ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Neveljaven vnos: pri\u010Dakovano ${b(t.values[0])}`
          : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} imelo ${n}${t.maximum.toString()} ${a.unit ?? "elementov"}`
          : `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Premajhno: pri\u010Dakovano, da bo ${t.origin} imelo ${n}${t.minimum.toString()} ${a.unit}`
          : `Premajhno: pri\u010Dakovano, da bo ${t.origin} ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Neveljaven niz: mora se za\u010Deti z "${n.prefix}"`
          : n.format === "ends_with"
            ? `Neveljaven niz: mora se kon\u010Dati z "${n.suffix}"`
            : n.format === "includes"
              ? `Neveljaven niz: mora vsebovati "${n.includes}"`
              : n.format === "regex"
                ? `Neveljaven niz: mora ustrezati vzorcu ${n.pattern}`
                : `Neveljaven ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${t.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${t.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${t.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${t.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function Ms() {
  return { localeError: mc() };
}
var pc = () => {
  let e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "antal";
        case "object": {
          if (Array.isArray(t)) return "lista";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "regulj\xE4rt uttryck",
      email: "e-postadress",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datum och tid",
      date: "ISO-datum",
      time: "ISO-tid",
      duration: "ISO-varaktighet",
      ipv4: "IPv4-intervall",
      ipv6: "IPv6-intervall",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodad str\xE4ng",
      base64url: "base64url-kodad str\xE4ng",
      json_string: "JSON-str\xE4ng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "mall-literal",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${t.expected}, fick ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${b(t.values[0])}`
          : `Ogiltigt val: f\xF6rv\xE4ntade en av ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.maximum.toString()} ${a.unit ?? "element"}`
          : `F\xF6r stor(t): f\xF6rv\xE4ntat ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.minimum.toString()} ${a.unit}`
          : `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${n.prefix}"`
          : n.format === "ends_with"
            ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${n.suffix}"`
            : n.format === "includes"
              ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${n.includes}"`
              : n.format === "regex"
                ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${n.pattern}"`
                : `Ogiltig(t) ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${t.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${t.origin ?? "v\xE4rdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function Cs() {
  return { localeError: pc() };
}
var fc = () => {
  let e = {
    string: {
      unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    file: {
      unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    array: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
    set: {
      unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
      verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t)
            ? "\u0B8E\u0BA3\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BBE\u0BA4\u0BA4\u0BC1"
            : "\u0B8E\u0BA3\u0BCD";
        case "object": {
          if (Array.isArray(t)) return "\u0B85\u0BA3\u0BBF";
          if (t === null) return "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
      email:
        "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
      time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
      ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
      e164: "E.164 \u0B8E\u0BA3\u0BCD",
      jwt: "JWT",
      template_literal: "input",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${b(t.values[0])}`
          : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_(t.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${n}${t.maximum.toString()} ${a.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${n}${t.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${n}${t.minimum.toString()} ${a.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${n}${t.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
          : n.format === "ends_with"
            ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
            : n.format === "includes"
              ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
              : n.format === "regex"
                ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${n.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${t.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${t.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
    }
  };
};
function Ls() {
  return { localeError: fc() };
}
var gc = () => {
  let e = {
    string: {
      unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    file: {
      unit: "\u0E44\u0E1A\u0E15\u0E4C",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    array: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
    set: {
      unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
      verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t)
            ? "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 (NaN)"
            : "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02";
        case "object": {
          if (Array.isArray(t))
            return "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)";
          if (t === null)
            return "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
      email:
        "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
      url: "URL",
      emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime:
        "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
      time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      duration:
        "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
      ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
      cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
      cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
      base64:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
      base64url:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
      json_string:
        "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
      e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
      jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
      template_literal:
        "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${t.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${b(t.values[0])}`
          : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive
            ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
            : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
          a = r(t.origin);
        return a
          ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.maximum.toString()} ${a.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
          : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive
            ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
            : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
          a = r(t.origin);
        return a
          ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.minimum.toString()} ${a.unit}`
          : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${n} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${n.suffix}"`
            : n.format === "includes"
              ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${n.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
              : n.format === "regex"
                ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${n.pattern}`
                : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${t.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
      default:
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
    }
  };
};
function Vs() {
  return { localeError: gc() };
}
var hc = (e) => {
    let r = typeof e;
    switch (r) {
      case "number":
        return Number.isNaN(e) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(e)) return "array";
        if (e === null) return "null";
        if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
          return e.constructor.name;
      }
    }
    return r;
  },
  vc = () => {
    let e = {
      string: { unit: "karakter", verb: "olmal\u0131" },
      file: { unit: "bayt", verb: "olmal\u0131" },
      array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    };
    function r(i) {
      return e[i] ?? null;
    }
    let o = {
      regex: "girdi",
      email: "e-posta adresi",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO tarih ve saat",
      date: "ISO tarih",
      time: "ISO saat",
      duration: "ISO s\xFCre",
      ipv4: "IPv4 adresi",
      ipv6: "IPv6 adresi",
      cidrv4: "IPv4 aral\u0131\u011F\u0131",
      cidrv6: "IPv6 aral\u0131\u011F\u0131",
      base64: "base64 ile \u015Fifrelenmi\u015F metin",
      base64url: "base64url ile \u015Fifrelenmi\u015F metin",
      json_string: "JSON dizesi",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "\u015Eablon dizesi",
    };
    return (i) => {
      switch (i.code) {
        case "invalid_type":
          return `Ge\xE7ersiz de\u011Fer: beklenen ${i.expected}, al\u0131nan ${hc(i.input)}`;
        case "invalid_value":
          return i.values.length === 1
            ? `Ge\xE7ersiz de\u011Fer: beklenen ${b(i.values[0])}`
            : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${_(i.values, "|")}`;
        case "too_big": {
          let t = i.inclusive ? "<=" : "<",
            n = r(i.origin);
          return n
            ? `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${t}${i.maximum.toString()} ${n.unit ?? "\xF6\u011Fe"}`
            : `\xC7ok b\xFCy\xFCk: beklenen ${i.origin ?? "de\u011Fer"} ${t}${i.maximum.toString()}`;
        }
        case "too_small": {
          let t = i.inclusive ? ">=" : ">",
            n = r(i.origin);
          return n
            ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${t}${i.minimum.toString()} ${n.unit}`
            : `\xC7ok k\xFC\xE7\xFCk: beklenen ${i.origin} ${t}${i.minimum.toString()}`;
        }
        case "invalid_format": {
          let t = i;
          return t.format === "starts_with"
            ? `Ge\xE7ersiz metin: "${t.prefix}" ile ba\u015Flamal\u0131`
            : t.format === "ends_with"
              ? `Ge\xE7ersiz metin: "${t.suffix}" ile bitmeli`
              : t.format === "includes"
                ? `Ge\xE7ersiz metin: "${t.includes}" i\xE7ermeli`
                : t.format === "regex"
                  ? `Ge\xE7ersiz metin: ${t.pattern} desenine uymal\u0131`
                  : `Ge\xE7ersiz ${o[t.format] ?? i.format}`;
        }
        case "not_multiple_of":
          return `Ge\xE7ersiz say\u0131: ${i.divisor} ile tam b\xF6l\xFCnebilmeli`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${_(i.keys, ", ")}`;
        case "invalid_key":
          return `${i.origin} i\xE7inde ge\xE7ersiz anahtar`;
        case "invalid_union":
          return "Ge\xE7ersiz de\u011Fer";
        case "invalid_element":
          return `${i.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
        default:
          return "Ge\xE7ersiz de\u011Fer";
      }
    };
  };
function qs() {
  return { localeError: vc() };
}
var yc = () => {
  let e = {
    string: {
      unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    file: {
      unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    array: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
    set: {
      unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
      verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0447\u0438\u0441\u043B\u043E";
        case "object": {
          if (Array.isArray(t)) return "\u043C\u0430\u0441\u0438\u0432";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
      email:
        "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
      date: "\u0434\u0430\u0442\u0430 ISO",
      time: "\u0447\u0430\u0441 ISO",
      duration:
        "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
      ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
      ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
      cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
      cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
      base64:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
      base64url:
        "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
      json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal:
        "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${t.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${b(t.values[0])}`
          : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} ${a.verb} ${n}${t.minimum.toString()} ${a.unit}`
          : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} \u0431\u0443\u0434\u0435 ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${n.prefix}"`
          : n.format === "ends_with"
            ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${n.suffix}"`
            : n.format === "includes"
              ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${n.includes}"`
              : n.format === "regex"
                ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n.pattern}`
                : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${t.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0456" : ""}: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${t.origin}`;
      default:
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
    }
  };
};
function Fs() {
  return { localeError: yc() };
}
var bc = () => {
  let e = {
    string: {
      unit: "\u062D\u0631\u0648\u0641",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    file: {
      unit: "\u0628\u0627\u0626\u0679\u0633",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    array: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627",
    },
    set: {
      unit: "\u0622\u0626\u0679\u0645\u0632",
      verb: "\u06C1\u0648\u0646\u0627",
    },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "\u0646\u0645\u0628\u0631";
        case "object": {
          if (Array.isArray(t)) return "\u0622\u0631\u06D2";
          if (t === null) return "\u0646\u0644";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0627\u0646 \u067E\u0679",
      email:
        "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      uuidv4:
        "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
      uuidv6:
        "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
      nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
      ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
      xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
      ksuid:
        "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      datetime:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
      date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
      time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
      duration:
        "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
      ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      cidrv4:
        "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
      cidrv6:
        "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
      base64:
        "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      base64url:
        "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      json_string:
        "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
      e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
      jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
      template_literal: "\u0627\u0646 \u067E\u0679",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${t.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${o(t.input)} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${b(t.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
          : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${_(t.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${n}${t.maximum.toString()} ${a.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${n}${t.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u06D2 ${n}${t.minimum.toString()} ${a.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
          : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u0627 ${n}${t.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
          : n.format === "ends_with"
            ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
            : n.format === "includes"
              ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
              : n.format === "regex"
                ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${n.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                : `\u063A\u0644\u0637 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${t.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${t.keys.length > 1 ? "\u0632" : ""}: ${_(t.keys, "\u060C ")}`;
      case "invalid_key":
        return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
    }
  };
};
function Hs() {
  return { localeError: bc() };
}
var wc = () => {
  let e = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "s\u1ED1";
        case "object": {
          if (Array.isArray(t)) return "m\u1EA3ng";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u0111\u1EA7u v\xE0o",
      email: "\u0111\u1ECBa ch\u1EC9 email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ng\xE0y gi\u1EDD ISO",
      date: "ng\xE0y ISO",
      time: "gi\u1EDD ISO",
      duration: "kho\u1EA3ng th\u1EDDi gian ISO",
      ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
      ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
      cidrv4: "d\u1EA3i IPv4",
      cidrv6: "d\u1EA3i IPv6",
      base64: "chu\u1ED7i m\xE3 h\xF3a base64",
      base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
      json_string: "chu\u1ED7i JSON",
      e164: "s\u1ED1 E.164",
      jwt: "JWT",
      template_literal: "\u0111\u1EA7u v\xE0o",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${t.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${b(t.values[0])}`
          : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${a.verb} ${n}${t.maximum.toString()} ${a.unit ?? "ph\u1EA7n t\u1EED"}`
          : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${a.verb} ${n}${t.minimum.toString()} ${a.unit}`
          : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${n.prefix}"`
          : n.format === "ends_with"
            ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${n.suffix}"`
            : n.format === "includes"
              ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${n.includes}"`
              : n.format === "regex"
                ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${n.pattern}`
                : `${i[n.format] ?? t.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${t.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
      default:
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
    }
  };
};
function Ws() {
  return { localeError: wc() };
}
var xc = () => {
  let e = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "\u975E\u6570\u5B57(NaN)" : "\u6570\u5B57";
        case "object": {
          if (Array.isArray(t)) return "\u6570\u7EC4";
          if (t === null) return "\u7A7A\u503C(null)";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u8F93\u5165",
      email: "\u7535\u5B50\u90AE\u4EF6",
      url: "URL",
      emoji: "\u8868\u60C5\u7B26\u53F7",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u671F\u65F6\u95F4",
      date: "ISO\u65E5\u671F",
      time: "ISO\u65F6\u95F4",
      duration: "ISO\u65F6\u957F",
      ipv4: "IPv4\u5730\u5740",
      ipv6: "IPv6\u5730\u5740",
      cidrv4: "IPv4\u7F51\u6BB5",
      cidrv6: "IPv6\u7F51\u6BB5",
      base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
      base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
      json_string: "JSON\u5B57\u7B26\u4E32",
      e164: "E.164\u53F7\u7801",
      jwt: "JWT",
      template_literal: "\u8F93\u5165",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${t.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${b(t.values[0])}`
          : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${n}${t.maximum.toString()} ${a.unit ?? "\u4E2A\u5143\u7D20"}`
          : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${n}${t.minimum.toString()} ${a.unit}`
          : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${n.prefix}" \u5F00\u5934`
          : n.format === "ends_with"
            ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${n.suffix}" \u7ED3\u5C3E`
            : n.format === "includes"
              ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${n.includes}"`
              : n.format === "regex"
                ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${n.pattern}`
                : `\u65E0\u6548${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${t.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${_(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${t.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return "\u65E0\u6548\u8F93\u5165";
    }
  };
};
function Bs() {
  return { localeError: xc() };
}
var $c = () => {
  let e = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
  };
  function r(t) {
    return e[t] ?? null;
  }
  let o = (t) => {
      let n = typeof t;
      switch (n) {
        case "number":
          return Number.isNaN(t) ? "NaN" : "number";
        case "object": {
          if (Array.isArray(t)) return "array";
          if (t === null) return "null";
          if (Object.getPrototypeOf(t) !== Object.prototype && t.constructor)
            return t.constructor.name;
        }
      }
      return n;
    },
    i = {
      regex: "\u8F38\u5165",
      email: "\u90F5\u4EF6\u5730\u5740",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u65E5\u671F\u6642\u9593",
      date: "ISO \u65E5\u671F",
      time: "ISO \u6642\u9593",
      duration: "ISO \u671F\u9593",
      ipv4: "IPv4 \u4F4D\u5740",
      ipv6: "IPv6 \u4F4D\u5740",
      cidrv4: "IPv4 \u7BC4\u570D",
      cidrv6: "IPv6 \u7BC4\u570D",
      base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
      base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
      json_string: "JSON \u5B57\u4E32",
      e164: "E.164 \u6578\u503C",
      jwt: "JWT",
      template_literal: "\u8F38\u5165",
    };
  return (t) => {
    switch (t.code) {
      case "invalid_type":
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${t.expected}\uFF0C\u4F46\u6536\u5230 ${o(t.input)}`;
      case "invalid_value":
        return t.values.length === 1
          ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${b(t.values[0])}`
          : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${_(t.values, "|")}`;
      case "too_big": {
        let n = t.inclusive ? "<=" : "<",
          a = r(t.origin);
        return a
          ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${n}${t.maximum.toString()} ${a.unit ?? "\u500B\u5143\u7D20"}`
          : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${n}${t.maximum.toString()}`;
      }
      case "too_small": {
        let n = t.inclusive ? ">=" : ">",
          a = r(t.origin);
        return a
          ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${n}${t.minimum.toString()} ${a.unit}`
          : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${n}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let n = t;
        return n.format === "starts_with"
          ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${n.prefix}" \u958B\u982D`
          : n.format === "ends_with"
            ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${n.suffix}" \u7D50\u5C3E`
            : n.format === "includes"
              ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${n.includes}"`
              : n.format === "regex"
                ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${n.pattern}`
                : `\u7121\u6548\u7684 ${i[n.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${t.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${t.keys.length > 1 ? "\u5011" : ""}\uFF1A${_(t.keys, "\u3001")}`;
      case "invalid_key":
        return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
    }
  };
};
function Ks() {
  return { localeError: $c() };
}
var oi = Symbol("ZodOutput"),
  ii = Symbol("ZodInput"),
  Pe = class {
    constructor() {
      ((this._map = new WeakMap()), (this._idmap = new Map()));
    }
    add(r, ...o) {
      let i = o[0];
      if ((this._map.set(r, i), i && typeof i == "object" && "id" in i)) {
        if (this._idmap.has(i.id))
          throw new Error(`ID ${i.id} already exists in the registry`);
        this._idmap.set(i.id, r);
      }
      return this;
    }
    remove(r) {
      return (this._map.delete(r), this);
    }
    get(r) {
      let o = r._zod.parent;
      if (o) {
        let i = { ...(this.get(o) ?? {}) };
        return (delete i.id, { ...i, ...this._map.get(r) });
      }
      return this._map.get(r);
    }
    has(r) {
      return this._map.has(r);
    }
  };
function Bt() {
  return new Pe();
}
var ne = Bt();
function ai(e, r) {
  return new e({ type: "string", ...h(r) });
}
function si(e, r) {
  return new e({ type: "string", coerce: !0, ...h(r) });
}
function Kt(e, r) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function st(e, r) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function Yt(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function Jt(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...h(r),
  });
}
function Gt(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...h(r),
  });
}
function Xt(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...h(r),
  });
}
function Qt(e, r) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function er(e, r) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function tr(e, r) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function rr(e, r) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function nr(e, r) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function or(e, r) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function ir(e, r) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function ar(e, r) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function sr(e, r) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function ur(e, r) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function lr(e, r) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function cr(e, r) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function dr(e, r) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function _r(e, r) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function mr(e, r) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function pr(e, r) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...h(r),
  });
}
function ui(e, r) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...h(r),
  });
}
function li(e, r) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...h(r),
  });
}
function ci(e, r) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...h(r),
  });
}
function di(e, r) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...h(r),
  });
}
function _i(e, r) {
  return new e({ type: "number", checks: [], ...h(r) });
}
function mi(e, r) {
  return new e({ type: "number", coerce: !0, checks: [], ...h(r) });
}
function pi(e, r) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...h(r),
  });
}
function fi(e, r) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...h(r),
  });
}
function gi(e, r) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...h(r),
  });
}
function hi(e, r) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...h(r),
  });
}
function vi(e, r) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...h(r),
  });
}
function yi(e, r) {
  return new e({ type: "boolean", ...h(r) });
}
function bi(e, r) {
  return new e({ type: "boolean", coerce: !0, ...h(r) });
}
function wi(e, r) {
  return new e({ type: "bigint", ...h(r) });
}
function xi(e, r) {
  return new e({ type: "bigint", coerce: !0, ...h(r) });
}
function $i(e, r) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...h(r),
  });
}
function ki(e, r) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...h(r),
  });
}
function zi(e, r) {
  return new e({ type: "symbol", ...h(r) });
}
function Si(e, r) {
  return new e({ type: "undefined", ...h(r) });
}
function Ii(e, r) {
  return new e({ type: "null", ...h(r) });
}
function Di(e) {
  return new e({ type: "any" });
}
function je(e) {
  return new e({ type: "unknown" });
}
function Ai(e, r) {
  return new e({ type: "never", ...h(r) });
}
function Pi(e, r) {
  return new e({ type: "void", ...h(r) });
}
function ji(e, r) {
  return new e({ type: "date", ...h(r) });
}
function Oi(e, r) {
  return new e({ type: "date", coerce: !0, ...h(r) });
}
function Ti(e, r) {
  return new e({ type: "nan", ...h(r) });
}
function ie(e, r) {
  return new Mt({ check: "less_than", ...h(r), value: e, inclusive: !1 });
}
function G(e, r) {
  return new Mt({ check: "less_than", ...h(r), value: e, inclusive: !0 });
}
function ae(e, r) {
  return new Ct({ check: "greater_than", ...h(r), value: e, inclusive: !1 });
}
function q(e, r) {
  return new Ct({ check: "greater_than", ...h(r), value: e, inclusive: !0 });
}
function Ni(e) {
  return ae(0, e);
}
function Ei(e) {
  return ie(0, e);
}
function Ui(e) {
  return G(0, e);
}
function Zi(e) {
  return q(0, e);
}
function we(e, r) {
  return new En({ check: "multiple_of", ...h(r), value: e });
}
function Oe(e, r) {
  return new Rn({ check: "max_size", ...h(r), maximum: e });
}
function xe(e, r) {
  return new Mn({ check: "min_size", ...h(r), minimum: e });
}
function ut(e, r) {
  return new Cn({ check: "size_equals", ...h(r), size: e });
}
function Te(e, r) {
  return new Ln({ check: "max_length", ...h(r), maximum: e });
}
function me(e, r) {
  return new Vn({ check: "min_length", ...h(r), minimum: e });
}
function Ne(e, r) {
  return new qn({ check: "length_equals", ...h(r), length: e });
}
function lt(e, r) {
  return new Fn({
    check: "string_format",
    format: "regex",
    ...h(r),
    pattern: e,
  });
}
function ct(e) {
  return new Hn({ check: "string_format", format: "lowercase", ...h(e) });
}
function dt(e) {
  return new Wn({ check: "string_format", format: "uppercase", ...h(e) });
}
function _t(e, r) {
  return new Bn({
    check: "string_format",
    format: "includes",
    ...h(r),
    includes: e,
  });
}
function mt(e, r) {
  return new Kn({
    check: "string_format",
    format: "starts_with",
    ...h(r),
    prefix: e,
  });
}
function pt(e, r) {
  return new Yn({
    check: "string_format",
    format: "ends_with",
    ...h(r),
    suffix: e,
  });
}
function Ri(e, r, o) {
  return new Jn({ check: "property", property: e, schema: r, ...h(o) });
}
function ft(e, r) {
  return new Gn({ check: "mime_type", mime: e, ...h(r) });
}
function se(e) {
  return new Xn({ check: "overwrite", tx: e });
}
function gt(e) {
  return se((r) => r.normalize(e));
}
function ht() {
  return se((e) => e.trim());
}
function vt() {
  return se((e) => e.toLowerCase());
}
function yt() {
  return se((e) => e.toUpperCase());
}
function bt(e, r, o) {
  return new e({ type: "array", element: r, ...h(o) });
}
function kc(e, r, o) {
  return new e({ type: "union", options: r, ...h(o) });
}
function zc(e, r, o, i) {
  return new e({ type: "union", options: o, discriminator: r, ...h(i) });
}
function Sc(e, r, o) {
  return new e({ type: "intersection", left: r, right: o });
}
function Mi(e, r, o, i) {
  let t = o instanceof k,
    n = t ? i : o,
    a = t ? o : null;
  return new e({ type: "tuple", items: r, rest: a, ...h(n) });
}
function Ic(e, r, o, i) {
  return new e({ type: "record", keyType: r, valueType: o, ...h(i) });
}
function Dc(e, r, o, i) {
  return new e({ type: "map", keyType: r, valueType: o, ...h(i) });
}
function Ac(e, r, o) {
  return new e({ type: "set", valueType: r, ...h(o) });
}
function Pc(e, r, o) {
  let i = Array.isArray(r) ? Object.fromEntries(r.map((t) => [t, t])) : r;
  return new e({ type: "enum", entries: i, ...h(o) });
}
function jc(e, r, o) {
  return new e({ type: "enum", entries: r, ...h(o) });
}
function Oc(e, r, o) {
  return new e({
    type: "literal",
    values: Array.isArray(r) ? r : [r],
    ...h(o),
  });
}
function Ci(e, r) {
  return new e({ type: "file", ...h(r) });
}
function Tc(e, r) {
  return new e({ type: "transform", transform: r });
}
function Nc(e, r) {
  return new e({ type: "optional", innerType: r });
}
function Ec(e, r) {
  return new e({ type: "nullable", innerType: r });
}
function Uc(e, r, o) {
  return new e({
    type: "default",
    innerType: r,
    get defaultValue() {
      return typeof o == "function" ? o() : o;
    },
  });
}
function Zc(e, r, o) {
  return new e({ type: "nonoptional", innerType: r, ...h(o) });
}
function Rc(e, r) {
  return new e({ type: "success", innerType: r });
}
function Mc(e, r, o) {
  return new e({
    type: "catch",
    innerType: r,
    catchValue: typeof o == "function" ? o : () => o,
  });
}
function Cc(e, r, o) {
  return new e({ type: "pipe", in: r, out: o });
}
function Lc(e, r) {
  return new e({ type: "readonly", innerType: r });
}
function Vc(e, r, o) {
  return new e({ type: "template_literal", parts: r, ...h(o) });
}
function qc(e, r) {
  return new e({ type: "lazy", getter: r });
}
function Fc(e, r) {
  return new e({ type: "promise", innerType: r });
}
function Li(e, r, o) {
  let i = h(o);
  return (
    i.abort ?? (i.abort = !0),
    new e({ type: "custom", check: "custom", fn: r, ...i })
  );
}
function Vi(e, r, o) {
  return new e({ type: "custom", check: "custom", fn: r, ...h(o) });
}
function qi(e, r) {
  let { case: o, error: i, truthy: t, falsy: n } = h(r),
    a = new Set(t ?? ["true", "1", "yes", "on", "y", "enabled"]),
    s = new Set(n ?? ["false", "0", "no", "off", "n", "disabled"]),
    l = e.Pipe ?? it,
    u = e.Boolean ?? nt,
    m = e.Unknown ?? _e,
    p = new m({
      type: "unknown",
      checks: [
        {
          _zod: {
            check: (g) => {
              if (typeof g.value == "string") {
                let d = g.value;
                (o !== "sensitive" && (d = d.toLowerCase()),
                  a.has(d)
                    ? (g.value = !0)
                    : s.has(d)
                      ? (g.value = !1)
                      : g.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...a, ...s],
                          input: g.value,
                          inst: p,
                        }));
              } else
                g.issues.push({
                  code: "invalid_type",
                  expected: "string",
                  input: g.value,
                });
            },
            def: { check: "custom" },
            onattach: [],
          },
        },
      ],
      error: i,
    });
  return new l({
    type: "pipe",
    in: p,
    out: new u({ type: "boolean", error: i }),
    error: i,
  });
}
var fr = class {
  constructor(r) {
    ((this._def = r), (this.def = r));
  }
  implement(r) {
    if (typeof r != "function")
      throw new Error("implement() must be called with a function");
    let o = (...i) => {
      let t = this._def.input
        ? Tt(this._def.input, i, void 0, { callee: o })
        : i;
      if (!Array.isArray(t))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema.",
        );
      let n = r(...t);
      return this._def.output
        ? Tt(this._def.output, n, void 0, { callee: o })
        : n;
    };
    return o;
  }
  implementAsync(r) {
    if (typeof r != "function")
      throw new Error("implement() must be called with a function");
    let o = async (...i) => {
      let t = this._def.input
        ? await Et(this._def.input, i, void 0, { callee: o })
        : i;
      if (!Array.isArray(t))
        throw new Error(
          "Invalid arguments schema: not an array or tuple schema.",
        );
      let n = await r(...t);
      return this._def.output
        ? Et(this._def.output, n, void 0, { callee: o })
        : n;
    };
    return o;
  }
  input(...r) {
    let o = this.constructor;
    return Array.isArray(r[0])
      ? new o({
          type: "function",
          input: new be({ type: "tuple", items: r[0], rest: r[1] }),
          output: this._def.output,
        })
      : new o({ type: "function", input: r[0], output: this._def.output });
  }
  output(r) {
    let o = this.constructor;
    return new o({ type: "function", input: this._def.input, output: r });
  }
};
function Fi(e) {
  return new fr({
    type: "function",
    input: Array.isArray(e?.input)
      ? Mi(be, e?.input)
      : (e?.input ?? bt(ot, je(_e))),
    output: e?.output ?? je(_e),
  });
}
var wt = class {
  constructor(r) {
    ((this.counter = 0),
      (this.metadataRegistry = r?.metadata ?? ne),
      (this.target = r?.target ?? "draft-2020-12"),
      (this.unrepresentable = r?.unrepresentable ?? "throw"),
      (this.override = r?.override ?? (() => {})),
      (this.io = r?.io ?? "output"),
      (this.seen = new Map()));
  }
  process(r, o = { path: [], schemaPath: [] }) {
    var i;
    let t = r._zod.def,
      n = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: "",
      },
      a = this.seen.get(r);
    if (a)
      return (
        a.count++,
        o.schemaPath.includes(r) && (a.cycle = o.path),
        a.schema
      );
    let s = { schema: {}, count: 1, cycle: void 0 };
    (this.seen.set(r, s),
      r._zod.toJSONSchema && (s.schema = r._zod.toJSONSchema()));
    let l = { ...o, schemaPath: [...o.schemaPath, r], path: o.path },
      u = r._zod.parent;
    if (u) ((s.ref = u), this.process(u, l), (this.seen.get(u).isParent = !0));
    else {
      let g = s.schema;
      switch (t.type) {
        case "string": {
          let d = g;
          d.type = "string";
          let {
            minimum: v,
            maximum: x,
            format: P,
            patterns: j,
            contentEncoding: I,
          } = r._zod.bag;
          if (
            (typeof v == "number" && (d.minLength = v),
            typeof x == "number" && (d.maxLength = x),
            P && ((d.format = n[P] ?? P), d.format === "" && delete d.format),
            I && (d.contentEncoding = I),
            j && j.size > 0)
          ) {
            let S = [...j];
            S.length === 1
              ? (d.pattern = S[0].source)
              : S.length > 1 &&
                (s.schema.allOf = [
                  ...S.map((w) => ({
                    ...(this.target === "draft-7" ? { type: "string" } : {}),
                    pattern: w.source,
                  })),
                ]);
          }
          break;
        }
        case "number": {
          let d = g,
            {
              minimum: v,
              maximum: x,
              format: P,
              multipleOf: j,
              exclusiveMaximum: I,
              exclusiveMinimum: S,
            } = r._zod.bag;
          (typeof P == "string" && P.includes("int")
            ? (d.type = "integer")
            : (d.type = "number"),
            typeof S == "number" && (d.exclusiveMinimum = S),
            typeof v == "number" &&
              ((d.minimum = v),
              typeof S == "number" &&
                (S >= v ? delete d.minimum : delete d.exclusiveMinimum)),
            typeof I == "number" && (d.exclusiveMaximum = I),
            typeof x == "number" &&
              ((d.maximum = x),
              typeof I == "number" &&
                (I <= x ? delete d.maximum : delete d.exclusiveMaximum)),
            typeof j == "number" && (d.multipleOf = j));
          break;
        }
        case "boolean": {
          let d = g;
          d.type = "boolean";
          break;
        }
        case "bigint": {
          if (this.unrepresentable === "throw")
            throw new Error("BigInt cannot be represented in JSON Schema");
          break;
        }
        case "symbol": {
          if (this.unrepresentable === "throw")
            throw new Error("Symbols cannot be represented in JSON Schema");
          break;
        }
        case "undefined": {
          let d = g;
          d.type = "null";
          break;
        }
        case "null": {
          g.type = "null";
          break;
        }
        case "any":
          break;
        case "unknown":
          break;
        case "never": {
          g.not = {};
          break;
        }
        case "void": {
          if (this.unrepresentable === "throw")
            throw new Error("Void cannot be represented in JSON Schema");
          break;
        }
        case "date": {
          if (this.unrepresentable === "throw")
            throw new Error("Date cannot be represented in JSON Schema");
          break;
        }
        case "array": {
          let d = g,
            { minimum: v, maximum: x } = r._zod.bag;
          (typeof v == "number" && (d.minItems = v),
            typeof x == "number" && (d.maxItems = x),
            (d.type = "array"),
            (d.items = this.process(t.element, {
              ...l,
              path: [...l.path, "items"],
            })));
          break;
        }
        case "object": {
          let d = g;
          ((d.type = "object"), (d.properties = {}));
          let v = t.shape;
          for (let j in v)
            d.properties[j] = this.process(v[j], {
              ...l,
              path: [...l.path, "properties", j],
            });
          let x = new Set(Object.keys(v)),
            P = new Set(
              [...x].filter((j) => {
                let I = t.shape[j]._zod;
                return this.io === "input"
                  ? I.optin === void 0
                  : I.optout === void 0;
              }),
            );
          (P.size > 0 && (d.required = Array.from(P)),
            t.catchall?._zod.def.type === "never"
              ? (d.additionalProperties = !1)
              : t.catchall
                ? t.catchall &&
                  (d.additionalProperties = this.process(t.catchall, {
                    ...l,
                    path: [...l.path, "additionalProperties"],
                  }))
                : this.io === "output" && (d.additionalProperties = !1));
          break;
        }
        case "union": {
          let d = g;
          d.anyOf = t.options.map((v, x) =>
            this.process(v, { ...l, path: [...l.path, "anyOf", x] }),
          );
          break;
        }
        case "intersection": {
          let d = g,
            v = this.process(t.left, { ...l, path: [...l.path, "allOf", 0] }),
            x = this.process(t.right, { ...l, path: [...l.path, "allOf", 1] }),
            P = (I) => "allOf" in I && Object.keys(I).length === 1,
            j = [...(P(v) ? v.allOf : [v]), ...(P(x) ? x.allOf : [x])];
          d.allOf = j;
          break;
        }
        case "tuple": {
          let d = g;
          d.type = "array";
          let v = t.items.map((j, I) =>
            this.process(j, { ...l, path: [...l.path, "prefixItems", I] }),
          );
          if (
            (this.target === "draft-2020-12"
              ? (d.prefixItems = v)
              : (d.items = v),
            t.rest)
          ) {
            let j = this.process(t.rest, { ...l, path: [...l.path, "items"] });
            this.target === "draft-2020-12"
              ? (d.items = j)
              : (d.additionalItems = j);
          }
          t.rest &&
            (d.items = this.process(t.rest, {
              ...l,
              path: [...l.path, "items"],
            }));
          let { minimum: x, maximum: P } = r._zod.bag;
          (typeof x == "number" && (d.minItems = x),
            typeof P == "number" && (d.maxItems = P));
          break;
        }
        case "record": {
          let d = g;
          ((d.type = "object"),
            (d.propertyNames = this.process(t.keyType, {
              ...l,
              path: [...l.path, "propertyNames"],
            })),
            (d.additionalProperties = this.process(t.valueType, {
              ...l,
              path: [...l.path, "additionalProperties"],
            })));
          break;
        }
        case "map": {
          if (this.unrepresentable === "throw")
            throw new Error("Map cannot be represented in JSON Schema");
          break;
        }
        case "set": {
          if (this.unrepresentable === "throw")
            throw new Error("Set cannot be represented in JSON Schema");
          break;
        }
        case "enum": {
          let d = g,
            v = He(t.entries);
          (v.every((x) => typeof x == "number") && (d.type = "number"),
            v.every((x) => typeof x == "string") && (d.type = "string"),
            (d.enum = v));
          break;
        }
        case "literal": {
          let d = g,
            v = [];
          for (let x of t.values)
            if (x === void 0) {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "Literal `undefined` cannot be represented in JSON Schema",
                );
            } else if (typeof x == "bigint") {
              if (this.unrepresentable === "throw")
                throw new Error(
                  "BigInt literals cannot be represented in JSON Schema",
                );
              v.push(Number(x));
            } else v.push(x);
          if (v.length !== 0)
            if (v.length === 1) {
              let x = v[0];
              ((d.type = x === null ? "null" : typeof x), (d.const = x));
            } else
              (v.every((x) => typeof x == "number") && (d.type = "number"),
                v.every((x) => typeof x == "string") && (d.type = "string"),
                v.every((x) => typeof x == "boolean") && (d.type = "string"),
                v.every((x) => x === null) && (d.type = "null"),
                (d.enum = v));
          break;
        }
        case "file": {
          let d = g,
            v = { type: "string", format: "binary", contentEncoding: "binary" },
            { minimum: x, maximum: P, mime: j } = r._zod.bag;
          (x !== void 0 && (v.minLength = x),
            P !== void 0 && (v.maxLength = P),
            j
              ? j.length === 1
                ? ((v.contentMediaType = j[0]), Object.assign(d, v))
                : (d.anyOf = j.map((I) => ({ ...v, contentMediaType: I })))
              : Object.assign(d, v));
          break;
        }
        case "transform": {
          if (this.unrepresentable === "throw")
            throw new Error("Transforms cannot be represented in JSON Schema");
          break;
        }
        case "nullable": {
          let d = this.process(t.innerType, l);
          g.anyOf = [d, { type: "null" }];
          break;
        }
        case "nonoptional": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "success": {
          let d = g;
          d.type = "boolean";
          break;
        }
        case "default": {
          (this.process(t.innerType, l),
            (s.ref = t.innerType),
            (g.default = t.defaultValue));
          break;
        }
        case "prefault": {
          (this.process(t.innerType, l),
            (s.ref = t.innerType),
            this.io === "input" && (g._prefault = t.defaultValue));
          break;
        }
        case "catch": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          let d;
          try {
            d = t.catchValue(void 0);
          } catch {
            throw new Error(
              "Dynamic catch values are not supported in JSON Schema",
            );
          }
          g.default = d;
          break;
        }
        case "nan": {
          if (this.unrepresentable === "throw")
            throw new Error("NaN cannot be represented in JSON Schema");
          break;
        }
        case "template_literal": {
          let d = g,
            v = r._zod.pattern;
          if (!v) throw new Error("Pattern not found in template literal");
          ((d.type = "string"), (d.pattern = v.source));
          break;
        }
        case "pipe": {
          let d =
            this.io === "input"
              ? t.in._zod.def.type === "transform"
                ? t.out
                : t.in
              : t.out;
          (this.process(d, l), (s.ref = d));
          break;
        }
        case "readonly": {
          (this.process(t.innerType, l),
            (s.ref = t.innerType),
            (g.readOnly = !0));
          break;
        }
        case "promise": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "optional": {
          (this.process(t.innerType, l), (s.ref = t.innerType));
          break;
        }
        case "lazy": {
          let d = r._zod.innerType;
          (this.process(d, l), (s.ref = d));
          break;
        }
        case "custom": {
          if (this.unrepresentable === "throw")
            throw new Error(
              "Custom types cannot be represented in JSON Schema",
            );
          break;
        }
        default:
      }
    }
    let m = this.metadataRegistry.get(r);
    return (
      m && Object.assign(s.schema, m),
      this.io === "input" &&
        M(r) &&
        (delete s.schema.examples, delete s.schema.default),
      this.io === "input" &&
        s.schema._prefault &&
        ((i = s.schema).default ?? (i.default = s.schema._prefault)),
      delete s.schema._prefault,
      this.seen.get(r).schema
    );
  }
  emit(r, o) {
    let i = {
        cycles: o?.cycles ?? "ref",
        reused: o?.reused ?? "inline",
        external: o?.external ?? void 0,
      },
      t = this.seen.get(r);
    if (!t) throw new Error("Unprocessed schema. This is a bug in Zod.");
    let n = (m) => {
        let p = this.target === "draft-2020-12" ? "$defs" : "definitions";
        if (i.external) {
          let x = i.external.registry.get(m[0])?.id;
          if (x) return { ref: i.external.uri(x) };
          let P = m[1].defId ?? m[1].schema.id ?? `schema${this.counter++}`;
          return (
            (m[1].defId = P),
            { defId: P, ref: `${i.external.uri("__shared")}#/${p}/${P}` }
          );
        }
        if (m[1] === t) return { ref: "#" };
        let d = `#/${p}/`,
          v = m[1].schema.id ?? `__schema${this.counter++}`;
        return { defId: v, ref: d + v };
      },
      a = (m) => {
        if (m[1].schema.$ref) return;
        let p = m[1],
          { ref: g, defId: d } = n(m);
        ((p.def = { ...p.schema }), d && (p.defId = d));
        let v = p.schema;
        for (let x in v) delete v[x];
        v.$ref = g;
      };
    for (let m of this.seen.entries()) {
      let p = m[1];
      if (r === m[0]) {
        a(m);
        continue;
      }
      if (i.external) {
        let d = i.external.registry.get(m[0])?.id;
        if (r !== m[0] && d) {
          a(m);
          continue;
        }
      }
      if (this.metadataRegistry.get(m[0])?.id) {
        a(m);
        continue;
      }
      if (p.cycle) {
        if (i.cycles === "throw")
          throw new Error(`Cycle detected: #/${p.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        i.cycles === "ref" && a(m);
        continue;
      }
      if (p.count > 1 && i.reused === "ref") {
        a(m);
        continue;
      }
    }
    let s = (m, p) => {
      let g = this.seen.get(m),
        d = g.def ?? g.schema,
        v = { ...d };
      if (g.ref === null) return;
      let x = g.ref;
      if (((g.ref = null), x)) {
        s(x, p);
        let P = this.seen.get(x).schema;
        P.$ref && p.target === "draft-7"
          ? ((d.allOf = d.allOf ?? []), d.allOf.push(P))
          : (Object.assign(d, P), Object.assign(d, v));
      }
      g.isParent || this.override({ zodSchema: m, jsonSchema: d });
    };
    for (let m of [...this.seen.entries()].reverse())
      s(m[0], { target: this.target });
    let l = {};
    (this.target === "draft-2020-12"
      ? (l.$schema = "https://json-schema.org/draft/2020-12/schema")
      : this.target === "draft-7"
        ? (l.$schema = "http://json-schema.org/draft-07/schema#")
        : console.warn(`Invalid target: ${this.target}`),
      Object.assign(l, t.def));
    let u = i.external?.defs ?? {};
    for (let m of this.seen.entries()) {
      let p = m[1];
      p.def && p.defId && (u[p.defId] = p.def);
    }
    !i.external &&
      Object.keys(u).length > 0 &&
      (this.target === "draft-2020-12" ? (l.$defs = u) : (l.definitions = u));
    try {
      return JSON.parse(JSON.stringify(l));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function Hi(e, r) {
  if (e instanceof Pe) {
    let i = new wt(r),
      t = {};
    for (let s of e._idmap.entries()) {
      let [l, u] = s;
      i.process(u);
    }
    let n = {},
      a = { registry: e, uri: r?.uri || ((s) => s), defs: t };
    for (let s of e._idmap.entries()) {
      let [l, u] = s;
      n[l] = i.emit(u, { ...r, external: a });
    }
    if (Object.keys(t).length > 0) {
      let s = i.target === "draft-2020-12" ? "$defs" : "definitions";
      n.__shared = { [s]: t };
    }
    return { schemas: n };
  }
  let o = new wt(r);
  return (o.process(e), o.emit(e, r));
}
function M(e, r) {
  let o = r ?? { seen: new Set() };
  if (o.seen.has(e)) return !1;
  o.seen.add(e);
  let t = e._zod.def;
  switch (t.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return M(t.element, o);
    case "object": {
      for (let n in t.shape) if (M(t.shape[n], o)) return !0;
      return !1;
    }
    case "union": {
      for (let n of t.options) if (M(n, o)) return !0;
      return !1;
    }
    case "intersection":
      return M(t.left, o) || M(t.right, o);
    case "tuple": {
      for (let n of t.items) if (M(n, o)) return !0;
      return !!(t.rest && M(t.rest, o));
    }
    case "record":
      return M(t.keyType, o) || M(t.valueType, o);
    case "map":
      return M(t.keyType, o) || M(t.valueType, o);
    case "set":
      return M(t.valueType, o);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return M(t.innerType, o);
    case "lazy":
      return M(t.getter(), o);
    case "default":
      return M(t.innerType, o);
    case "prefault":
      return M(t.innerType, o);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return M(t.in, o) || M(t.out, o);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${t.type}`);
}
var Ys = {};
var br = {};
pe(br, {
  ZodISODate: () => hr,
  ZodISODateTime: () => gr,
  ZodISODuration: () => yr,
  ZodISOTime: () => vr,
  date: () => Bi,
  datetime: () => Wi,
  duration: () => Yi,
  time: () => Ki,
});
var gr = c("ZodISODateTime", (e, r) => {
  (mo.init(e, r), E.init(e, r));
});
function Wi(e) {
  return ui(gr, e);
}
var hr = c("ZodISODate", (e, r) => {
  (po.init(e, r), E.init(e, r));
});
function Bi(e) {
  return li(hr, e);
}
var vr = c("ZodISOTime", (e, r) => {
  (fo.init(e, r), E.init(e, r));
});
function Ki(e) {
  return ci(vr, e);
}
var yr = c("ZodISODuration", (e, r) => {
  (go.init(e, r), E.init(e, r));
});
function Yi(e) {
  return di(yr, e);
}
var Gs = (e, r) => {
    (Xe.init(e, r),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (o) => et(e, o) },
        flatten: { value: (o) => Qe(e, o) },
        addIssue: { value: (o) => e.issues.push(o) },
        addIssues: { value: (o) => e.issues.push(...o) },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  Wc = c("ZodError", Gs),
  Ee = c("ZodError", Gs, { Parent: Error });
var Ji = Ot(Ee),
  Gi = Nt(Ee),
  Xi = Ut(Ee),
  Qi = Zt(Ee);
var z = c(
    "ZodType",
    (e, r) => (
      k.init(e, r),
      (e.def = r),
      Object.defineProperty(e, "_def", { value: r }),
      (e.check = (...o) =>
        e.clone({
          ...r,
          checks: [
            ...(r.checks ?? []),
            ...o.map((i) =>
              typeof i == "function"
                ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } }
                : i,
            ),
          ],
        })),
      (e.clone = (o, i) => W(e, o, i)),
      (e.brand = () => e),
      (e.register = (o, i) => (o.add(e, i), e)),
      (e.parse = (o, i) => Ji(e, o, i, { callee: e.parse })),
      (e.safeParse = (o, i) => Xi(e, o, i)),
      (e.parseAsync = async (o, i) => Gi(e, o, i, { callee: e.parseAsync })),
      (e.safeParseAsync = async (o, i) => Qi(e, o, i)),
      (e.spa = e.safeParseAsync),
      (e.refine = (o, i) => e.check(Zu(o, i))),
      (e.superRefine = (o) => e.check(Ru(o))),
      (e.overwrite = (o) => e.check(se(o))),
      (e.optional = () => $r(e)),
      (e.nullable = () => kr(e)),
      (e.nullish = () => $r(kr(e))),
      (e.nonoptional = (o) => zu(e, o)),
      (e.array = () => xa(e)),
      (e.or = (o) => Pr([e, o])),
      (e.and = (o) => cu(e, o)),
      (e.transform = (o) => zr(e, za(o))),
      (e.default = (o) => xu(e, o)),
      (e.prefault = (o) => ku(e, o)),
      (e.catch = (o) => Du(e, o)),
      (e.pipe = (o) => zr(e, o)),
      (e.readonly = () => ju(e)),
      (e.describe = (o) => {
        let i = e.clone();
        return (ne.add(i, { description: o }), i);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return ne.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...o) => {
        if (o.length === 0) return ne.get(e);
        let i = e.clone();
        return (ne.add(i, o[0]), i);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      e
    ),
  ),
  ra = c("_ZodString", (e, r) => {
    (rt.init(e, r), z.init(e, r));
    let o = e._zod.bag;
    ((e.format = o.format ?? null),
      (e.minLength = o.minimum ?? null),
      (e.maxLength = o.maximum ?? null),
      (e.regex = (...i) => e.check(lt(...i))),
      (e.includes = (...i) => e.check(_t(...i))),
      (e.startsWith = (...i) => e.check(mt(...i))),
      (e.endsWith = (...i) => e.check(pt(...i))),
      (e.min = (...i) => e.check(me(...i))),
      (e.max = (...i) => e.check(Te(...i))),
      (e.length = (...i) => e.check(Ne(...i))),
      (e.nonempty = (...i) => e.check(me(1, ...i))),
      (e.lowercase = (i) => e.check(ct(i))),
      (e.uppercase = (i) => e.check(dt(i))),
      (e.trim = () => e.check(ht())),
      (e.normalize = (...i) => e.check(gt(...i))),
      (e.toLowerCase = () => e.check(vt())),
      (e.toUpperCase = () => e.check(yt())));
  }),
  Sr = c("ZodString", (e, r) => {
    (rt.init(e, r),
      ra.init(e, r),
      (e.email = (o) => e.check(Kt(na, o))),
      (e.url = (o) => e.check(Qt(oa, o))),
      (e.jwt = (o) => e.check(pr(ya, o))),
      (e.emoji = (o) => e.check(er(ia, o))),
      (e.guid = (o) => e.check(st(wr, o))),
      (e.uuid = (o) => e.check(Yt(le, o))),
      (e.uuidv4 = (o) => e.check(Jt(le, o))),
      (e.uuidv6 = (o) => e.check(Gt(le, o))),
      (e.uuidv7 = (o) => e.check(Xt(le, o))),
      (e.nanoid = (o) => e.check(tr(aa, o))),
      (e.guid = (o) => e.check(st(wr, o))),
      (e.cuid = (o) => e.check(rr(sa, o))),
      (e.cuid2 = (o) => e.check(nr(ua, o))),
      (e.ulid = (o) => e.check(or(la, o))),
      (e.base64 = (o) => e.check(dr(ga, o))),
      (e.base64url = (o) => e.check(_r(ha, o))),
      (e.xid = (o) => e.check(ir(ca, o))),
      (e.ksuid = (o) => e.check(ar(da, o))),
      (e.ipv4 = (o) => e.check(sr(_a, o))),
      (e.ipv6 = (o) => e.check(ur(ma, o))),
      (e.cidrv4 = (o) => e.check(lr(pa, o))),
      (e.cidrv6 = (o) => e.check(cr(fa, o))),
      (e.e164 = (o) => e.check(mr(va, o))),
      (e.datetime = (o) => e.check(Wi(o))),
      (e.date = (o) => e.check(Bi(o))),
      (e.time = (o) => e.check(Ki(o))),
      (e.duration = (o) => e.check(Yi(o))));
  });
function ea(e) {
  return ai(Sr, e);
}
var E = c("ZodStringFormat", (e, r) => {
    (N.init(e, r), ra.init(e, r));
  }),
  na = c("ZodEmail", (e, r) => {
    (no.init(e, r), E.init(e, r));
  });
function Kc(e) {
  return Kt(na, e);
}
var wr = c("ZodGUID", (e, r) => {
  (to.init(e, r), E.init(e, r));
});
function Yc(e) {
  return st(wr, e);
}
var le = c("ZodUUID", (e, r) => {
  (ro.init(e, r), E.init(e, r));
});
function Jc(e) {
  return Yt(le, e);
}
function Gc(e) {
  return Jt(le, e);
}
function Xc(e) {
  return Gt(le, e);
}
function Qc(e) {
  return Xt(le, e);
}
var oa = c("ZodURL", (e, r) => {
  (oo.init(e, r), E.init(e, r));
});
function ed(e) {
  return Qt(oa, e);
}
var ia = c("ZodEmoji", (e, r) => {
  (io.init(e, r), E.init(e, r));
});
function td(e) {
  return er(ia, e);
}
var aa = c("ZodNanoID", (e, r) => {
  (ao.init(e, r), E.init(e, r));
});
function rd(e) {
  return tr(aa, e);
}
var sa = c("ZodCUID", (e, r) => {
  (so.init(e, r), E.init(e, r));
});
function nd(e) {
  return rr(sa, e);
}
var ua = c("ZodCUID2", (e, r) => {
  (uo.init(e, r), E.init(e, r));
});
function od(e) {
  return nr(ua, e);
}
var la = c("ZodULID", (e, r) => {
  (lo.init(e, r), E.init(e, r));
});
function id(e) {
  return or(la, e);
}
var ca = c("ZodXID", (e, r) => {
  (co.init(e, r), E.init(e, r));
});
function ad(e) {
  return ir(ca, e);
}
var da = c("ZodKSUID", (e, r) => {
  (_o.init(e, r), E.init(e, r));
});
function sd(e) {
  return ar(da, e);
}
var _a = c("ZodIPv4", (e, r) => {
  (ho.init(e, r), E.init(e, r));
});
function ud(e) {
  return sr(_a, e);
}
var ma = c("ZodIPv6", (e, r) => {
  (vo.init(e, r), E.init(e, r));
});
function ld(e) {
  return ur(ma, e);
}
var pa = c("ZodCIDRv4", (e, r) => {
  (yo.init(e, r), E.init(e, r));
});
function cd(e) {
  return lr(pa, e);
}
var fa = c("ZodCIDRv6", (e, r) => {
  (bo.init(e, r), E.init(e, r));
});
function dd(e) {
  return cr(fa, e);
}
var ga = c("ZodBase64", (e, r) => {
  (xo.init(e, r), E.init(e, r));
});
function _d(e) {
  return dr(ga, e);
}
var ha = c("ZodBase64URL", (e, r) => {
  ($o.init(e, r), E.init(e, r));
});
function md(e) {
  return _r(ha, e);
}
var va = c("ZodE164", (e, r) => {
  (ko.init(e, r), E.init(e, r));
});
function pd(e) {
  return mr(va, e);
}
var ya = c("ZodJWT", (e, r) => {
  (zo.init(e, r), E.init(e, r));
});
function fd(e) {
  return pr(ya, e);
}
var $t = c("ZodNumber", (e, r) => {
  (qt.init(e, r),
    z.init(e, r),
    (e.gt = (i, t) => e.check(ae(i, t))),
    (e.gte = (i, t) => e.check(q(i, t))),
    (e.min = (i, t) => e.check(q(i, t))),
    (e.lt = (i, t) => e.check(ie(i, t))),
    (e.lte = (i, t) => e.check(G(i, t))),
    (e.max = (i, t) => e.check(G(i, t))),
    (e.int = (i) => e.check(ta(i))),
    (e.safe = (i) => e.check(ta(i))),
    (e.positive = (i) => e.check(ae(0, i))),
    (e.nonnegative = (i) => e.check(q(0, i))),
    (e.negative = (i) => e.check(ie(0, i))),
    (e.nonpositive = (i) => e.check(G(0, i))),
    (e.multipleOf = (i, t) => e.check(we(i, t))),
    (e.step = (i, t) => e.check(we(i, t))),
    (e.finite = () => e));
  let o = e._zod.bag;
  ((e.minValue =
    Math.max(
      o.minimum ?? Number.NEGATIVE_INFINITY,
      o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
    ) ?? null),
    (e.maxValue =
      Math.min(
        o.maximum ?? Number.POSITIVE_INFINITY,
        o.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
      ) ?? null),
    (e.isInt =
      (o.format ?? "").includes("int") ||
      Number.isSafeInteger(o.multipleOf ?? 0.5)),
    (e.isFinite = !0),
    (e.format = o.format ?? null));
});
function Xs(e) {
  return _i($t, e);
}
var Ue = c("ZodNumberFormat", (e, r) => {
  (So.init(e, r), $t.init(e, r));
});
function ta(e) {
  return pi(Ue, e);
}
function gd(e) {
  return fi(Ue, e);
}
function hd(e) {
  return gi(Ue, e);
}
function vd(e) {
  return hi(Ue, e);
}
function yd(e) {
  return vi(Ue, e);
}
var kt = c("ZodBoolean", (e, r) => {
  (nt.init(e, r), z.init(e, r));
});
function Qs(e) {
  return yi(kt, e);
}
var zt = c("ZodBigInt", (e, r) => {
  (Ft.init(e, r),
    z.init(e, r),
    (e.gte = (i, t) => e.check(q(i, t))),
    (e.min = (i, t) => e.check(q(i, t))),
    (e.gt = (i, t) => e.check(ae(i, t))),
    (e.gte = (i, t) => e.check(q(i, t))),
    (e.min = (i, t) => e.check(q(i, t))),
    (e.lt = (i, t) => e.check(ie(i, t))),
    (e.lte = (i, t) => e.check(G(i, t))),
    (e.max = (i, t) => e.check(G(i, t))),
    (e.positive = (i) => e.check(ae(BigInt(0), i))),
    (e.negative = (i) => e.check(ie(BigInt(0), i))),
    (e.nonpositive = (i) => e.check(G(BigInt(0), i))),
    (e.nonnegative = (i) => e.check(q(BigInt(0), i))),
    (e.multipleOf = (i, t) => e.check(we(i, t))));
  let o = e._zod.bag;
  ((e.minValue = o.minimum ?? null),
    (e.maxValue = o.maximum ?? null),
    (e.format = o.format ?? null));
});
function bd(e) {
  return wi(zt, e);
}
var ba = c("ZodBigIntFormat", (e, r) => {
  (Io.init(e, r), zt.init(e, r));
});
function wd(e) {
  return $i(ba, e);
}
function xd(e) {
  return ki(ba, e);
}
var eu = c("ZodSymbol", (e, r) => {
  (Do.init(e, r), z.init(e, r));
});
function $d(e) {
  return zi(eu, e);
}
var tu = c("ZodUndefined", (e, r) => {
  (Ao.init(e, r), z.init(e, r));
});
function kd(e) {
  return Si(tu, e);
}
var ru = c("ZodNull", (e, r) => {
  (Po.init(e, r), z.init(e, r));
});
function nu(e) {
  return Ii(ru, e);
}
var ou = c("ZodAny", (e, r) => {
  (jo.init(e, r), z.init(e, r));
});
function zd() {
  return Di(ou);
}
var wa = c("ZodUnknown", (e, r) => {
  (_e.init(e, r), z.init(e, r));
});
function xr() {
  return je(wa);
}
var iu = c("ZodNever", (e, r) => {
  (Oo.init(e, r), z.init(e, r));
});
function Ir(e) {
  return Ai(iu, e);
}
var au = c("ZodVoid", (e, r) => {
  (To.init(e, r), z.init(e, r));
});
function Sd(e) {
  return Pi(au, e);
}
var Dr = c("ZodDate", (e, r) => {
  (No.init(e, r),
    z.init(e, r),
    (e.min = (i, t) => e.check(q(i, t))),
    (e.max = (i, t) => e.check(G(i, t))));
  let o = e._zod.bag;
  ((e.minDate = o.minimum ? new Date(o.minimum) : null),
    (e.maxDate = o.maximum ? new Date(o.maximum) : null));
});
function Id(e) {
  return ji(Dr, e);
}
var su = c("ZodArray", (e, r) => {
  (ot.init(e, r),
    z.init(e, r),
    (e.element = r.element),
    (e.min = (o, i) => e.check(me(o, i))),
    (e.nonempty = (o) => e.check(me(1, o))),
    (e.max = (o, i) => e.check(Te(o, i))),
    (e.length = (o, i) => e.check(Ne(o, i))),
    (e.unwrap = () => e.element));
});
function xa(e, r) {
  return bt(su, e, r);
}
function Dd(e) {
  let r = e._zod.def.shape;
  return hu(Object.keys(r));
}
var Ar = c("ZodObject", (e, r) => {
  (Eo.init(e, r),
    z.init(e, r),
    y.defineLazy(e, "shape", () =>
      Object.fromEntries(Object.entries(e._zod.def.shape)),
    ),
    (e.keyof = () => fu(Object.keys(e._zod.def.shape))),
    (e.catchall = (o) => e.clone({ ...e._zod.def, catchall: o })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: xr() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: xr() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: Ir() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (o) => y.extend(e, o)),
    (e.merge = (o) => y.merge(e, o)),
    (e.pick = (o) => y.pick(e, o)),
    (e.omit = (o) => y.omit(e, o)),
    (e.partial = (...o) => y.partial(Sa, e, o[0])),
    (e.required = (...o) => y.required(Ia, e, o[0])));
});
function Ad(e, r) {
  let o = {
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    ...y.normalizeParams(r),
  };
  return new Ar(o);
}
function Pd(e, r) {
  return new Ar({
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: Ir(),
    ...y.normalizeParams(r),
  });
}
function jd(e, r) {
  return new Ar({
    type: "object",
    get shape() {
      return (y.assignProp(this, "shape", { ...e }), this.shape);
    },
    catchall: xr(),
    ...y.normalizeParams(r),
  });
}
var $a = c("ZodUnion", (e, r) => {
  (Ht.init(e, r), z.init(e, r), (e.options = r.options));
});
function Pr(e, r) {
  return new $a({ type: "union", options: e, ...y.normalizeParams(r) });
}
var uu = c("ZodDiscriminatedUnion", (e, r) => {
  ($a.init(e, r), Uo.init(e, r));
});
function Od(e, r, o) {
  return new uu({
    type: "union",
    options: r,
    discriminator: e,
    ...y.normalizeParams(o),
  });
}
var lu = c("ZodIntersection", (e, r) => {
  (Zo.init(e, r), z.init(e, r));
});
function cu(e, r) {
  return new lu({ type: "intersection", left: e, right: r });
}
var du = c("ZodTuple", (e, r) => {
  (be.init(e, r),
    z.init(e, r),
    (e.rest = (o) => e.clone({ ...e._zod.def, rest: o })));
});
function Td(e, r, o) {
  let i = r instanceof k,
    t = i ? o : r,
    n = i ? r : null;
  return new du({ type: "tuple", items: e, rest: n, ...y.normalizeParams(t) });
}
var ka = c("ZodRecord", (e, r) => {
  (Ro.init(e, r),
    z.init(e, r),
    (e.keyType = r.keyType),
    (e.valueType = r.valueType));
});
function _u(e, r, o) {
  return new ka({
    type: "record",
    keyType: e,
    valueType: r,
    ...y.normalizeParams(o),
  });
}
function Nd(e, r, o) {
  return new ka({
    type: "record",
    keyType: Pr([e, Ir()]),
    valueType: r,
    ...y.normalizeParams(o),
  });
}
var mu = c("ZodMap", (e, r) => {
  (Mo.init(e, r),
    z.init(e, r),
    (e.keyType = r.keyType),
    (e.valueType = r.valueType));
});
function Ed(e, r, o) {
  return new mu({
    type: "map",
    keyType: e,
    valueType: r,
    ...y.normalizeParams(o),
  });
}
var pu = c("ZodSet", (e, r) => {
  (Co.init(e, r),
    z.init(e, r),
    (e.min = (...o) => e.check(xe(...o))),
    (e.nonempty = (o) => e.check(xe(1, o))),
    (e.max = (...o) => e.check(Oe(...o))),
    (e.size = (...o) => e.check(ut(...o))));
});
function Ud(e, r) {
  return new pu({ type: "set", valueType: e, ...y.normalizeParams(r) });
}
var xt = c("ZodEnum", (e, r) => {
  (Lo.init(e, r),
    z.init(e, r),
    (e.enum = r.entries),
    (e.options = Object.values(r.entries)));
  let o = new Set(Object.keys(r.entries));
  ((e.extract = (i, t) => {
    let n = {};
    for (let a of i)
      if (o.has(a)) n[a] = r.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
    return new xt({ ...r, checks: [], ...y.normalizeParams(t), entries: n });
  }),
    (e.exclude = (i, t) => {
      let n = { ...r.entries };
      for (let a of i)
        if (o.has(a)) delete n[a];
        else throw new Error(`Key ${a} not found in enum`);
      return new xt({ ...r, checks: [], ...y.normalizeParams(t), entries: n });
    }));
});
function fu(e, r) {
  let o = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new xt({ type: "enum", entries: o, ...y.normalizeParams(r) });
}
function Zd(e, r) {
  return new xt({ type: "enum", entries: e, ...y.normalizeParams(r) });
}
var gu = c("ZodLiteral", (e, r) => {
  (Vo.init(e, r),
    z.init(e, r),
    (e.values = new Set(r.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (r.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead.",
          );
        return r.values[0];
      },
    }));
});
function hu(e, r) {
  return new gu({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...y.normalizeParams(r),
  });
}
var vu = c("ZodFile", (e, r) => {
  (qo.init(e, r),
    z.init(e, r),
    (e.min = (o, i) => e.check(xe(o, i))),
    (e.max = (o, i) => e.check(Oe(o, i))),
    (e.mime = (o, i) => e.check(ft(Array.isArray(o) ? o : [o], i))));
});
function Rd(e) {
  return Ci(vu, e);
}
var yu = c("ZodTransform", (e, r) => {
  (Fo.init(e, r),
    z.init(e, r),
    (e._zod.parse = (o, i) => {
      o.addIssue = (n) => {
        if (typeof n == "string") o.issues.push(y.issue(n, o.value, r));
        else {
          let a = n;
          (a.fatal && (a.continue = !1),
            a.code ?? (a.code = "custom"),
            a.input ?? (a.input = o.value),
            a.inst ?? (a.inst = e),
            a.continue ?? (a.continue = !0),
            o.issues.push(y.issue(a)));
        }
      };
      let t = r.transform(o.value, o);
      return t instanceof Promise
        ? t.then((n) => ((o.value = n), o))
        : ((o.value = t), o);
    }));
});
function za(e) {
  return new yu({ type: "transform", transform: e });
}
var Sa = c("ZodOptional", (e, r) => {
  (Ho.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function $r(e) {
  return new Sa({ type: "optional", innerType: e });
}
var bu = c("ZodNullable", (e, r) => {
  (Wo.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function kr(e) {
  return new bu({ type: "nullable", innerType: e });
}
function Md(e) {
  return $r(kr(e));
}
var wu = c("ZodDefault", (e, r) => {
  (Bo.init(e, r),
    z.init(e, r),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function xu(e, r) {
  return new wu({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    },
  });
}
var $u = c("ZodPrefault", (e, r) => {
  (Ko.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function ku(e, r) {
  return new $u({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    },
  });
}
var Ia = c("ZodNonOptional", (e, r) => {
  (Yo.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function zu(e, r) {
  return new Ia({ type: "nonoptional", innerType: e, ...y.normalizeParams(r) });
}
var Su = c("ZodSuccess", (e, r) => {
  (Jo.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function Cd(e) {
  return new Su({ type: "success", innerType: e });
}
var Iu = c("ZodCatch", (e, r) => {
  (Go.init(e, r),
    z.init(e, r),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function Du(e, r) {
  return new Iu({
    type: "catch",
    innerType: e,
    catchValue: typeof r == "function" ? r : () => r,
  });
}
var Au = c("ZodNaN", (e, r) => {
  (Xo.init(e, r), z.init(e, r));
});
function Ld(e) {
  return Ti(Au, e);
}
var Da = c("ZodPipe", (e, r) => {
  (it.init(e, r), z.init(e, r), (e.in = r.in), (e.out = r.out));
});
function zr(e, r) {
  return new Da({ type: "pipe", in: e, out: r });
}
var Pu = c("ZodReadonly", (e, r) => {
  (Qo.init(e, r), z.init(e, r));
});
function ju(e) {
  return new Pu({ type: "readonly", innerType: e });
}
var Ou = c("ZodTemplateLiteral", (e, r) => {
  (ei.init(e, r), z.init(e, r));
});
function Vd(e, r) {
  return new Ou({
    type: "template_literal",
    parts: e,
    ...y.normalizeParams(r),
  });
}
var Tu = c("ZodLazy", (e, r) => {
  (ri.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.getter()));
});
function Nu(e) {
  return new Tu({ type: "lazy", getter: e });
}
var Eu = c("ZodPromise", (e, r) => {
  (ti.init(e, r), z.init(e, r), (e.unwrap = () => e._zod.def.innerType));
});
function qd(e) {
  return new Eu({ type: "promise", innerType: e });
}
var jr = c("ZodCustom", (e, r) => {
  (ni.init(e, r), z.init(e, r));
});
function Uu(e, r) {
  let o = new U({ check: "custom", ...y.normalizeParams(r) });
  return ((o._zod.check = e), o);
}
function Fd(e, r) {
  return Li(jr, e ?? (() => !0), r);
}
function Zu(e, r = {}) {
  return Vi(jr, e, r);
}
function Ru(e, r) {
  let o = Uu(
    (i) => (
      (i.addIssue = (t) => {
        if (typeof t == "string")
          i.issues.push(y.issue(t, i.value, o._zod.def));
        else {
          let n = t;
          (n.fatal && (n.continue = !1),
            n.code ?? (n.code = "custom"),
            n.input ?? (n.input = i.value),
            n.inst ?? (n.inst = o),
            n.continue ?? (n.continue = !o._zod.def.abort),
            i.issues.push(y.issue(n)));
        }
      }),
      e(i.value, i)
    ),
    r,
  );
  return o;
}
function Hd(e, r = { error: `Input not instance of ${e.name}` }) {
  let o = new jr({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...y.normalizeParams(r),
  });
  return ((o._zod.bag.Class = e), o);
}
var Wd = (...e) => qi({ Pipe: Da, Boolean: kt, Unknown: wa }, ...e);
function Bd(e) {
  let r = Nu(() => Pr([ea(e), Xs(), Qs(), nu(), xa(r), _u(ea(), r)]));
  return r;
}
function Kd(e, r) {
  return zr(za(e), r);
}
var Yd = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
  },
  Jd = Object.freeze({ status: "aborted" }),
  Gd = Jd;
function Xd(e) {
  Z({ customError: e });
}
function Qd() {
  return Z().customError;
}
var Aa = {};
pe(Aa, {
  bigint: () => n_,
  boolean: () => r_,
  date: () => o_,
  number: () => t_,
  string: () => e_,
});
function e_(e) {
  return si(Sr, e);
}
function t_(e) {
  return mi($t, e);
}
function r_(e) {
  return bi(kt, e);
}
function n_(e) {
  return xi(zt, e);
}
function o_(e) {
  return Oi(Dr, e);
}
Z(Wt());
qr && f.config({ jitless: !0 });
var i_ = new Set(Va),
  a_ = f.enum(fe),
  s_ = f.enum(Se),
  Mu = f.map(a_, f.string()),
  Cu = f.map(s_, f.string()),
  Yf = new Set(fe);
function Pa(e) {
  return i_.has(e);
}
var g_ = It(Me(), 1);
var Oa = "";
function qu() {
  return { default_: { max_length: 64, template: "%title" }, rules: [] };
}
var Hu = f.templateLiteral(["ded_", f.string()]),
  h_ = f.templateLiteral(["media_hash_", f.number()]),
  Fu = f.enum(["download", "download_as", "download_audio", "copy"]),
  v_ = f.enum(["popup", "sidebar"]),
  Na = f.string().brand("directorypath"),
  y_ = f.strictObject({
    downloaded_id: Hu,
    media_hash: h_,
    path: f.string(),
    browser_download_id: f.number(),
    download_timestamp: f.number(),
    origin_url: f.nullable(f.url()),
    origin_favicon_url: f.nullable(f.url()),
    has_drm: f.boolean(),
    subdir: f.optional(Na),
  }),
  b_ = f.enum(["SUBSCRIPTION", "LIFETIME", "GOLDEN"]),
  w_ = f.object({
    iat: f.optional(f.number()),
    user_id: f.number(),
    store: f.string().max(256),
    jti: f.string().max(512),
    valid_until: f.number(),
    exp: f.number(),
    developer: f.boolean().optional(),
    entitlement_type: b_.optional(),
  }),
  x_ = w_.extend({ raw: f.string() }),
  $_ = f.enum(["original", "user_language"]),
  k_ = f.enum(["none", "video", "image"]),
  z_ = f.enum(["system", "light", "dark"]),
  S_ = f.enum(["big", "medium", "small"]),
  I_ = f.enum(["verylarge", "large", "default"]),
  D_ = f.strictObject({
    max_length: f.number(),
    template: f.string(),
    force_doc_title: f.optional(f.boolean()),
  }),
  A_ = f.strictObject({
    template: f.string(),
    url: f.string(),
    max_length: f.nullable(f.number()),
    selector: f.nullable(f.string()),
    subdir: f.optional(Na),
    force_doc_title: f.optional(f.boolean()),
    replace: f.optional(
      f.array(f.strictObject({ from: f.string(), to: f.string() })),
    ),
  }),
  P_ = f.enum(["SMART", "OLDEST", "NEWEST"]),
  Ta = f.strictObject({
    version: f.number(),
    default_action: Fu,
    default_action_per_hostname: f.map(f.string(), Fu),
    downloaded: f.map(Hu, y_),
    jwt: f.nullable(x_),
    lsd: f.number(),
    dockmode: v_,
    download_directory: Na,
    youtube_throttle: f.boolean(),
    youtube_audio_strategy: $_,
    max_concurrent_downloads: f.number(),
    show_desktop_notifications: f.boolean(),
    show_desktop_notifications_private: f.boolean(),
    history_days: f.number(),
    show_transient_history: f.boolean(),
    ui_theme: z_,
    use_context_menu: f.boolean(),
    dont_ask_for_user_review: f.boolean(),
    successful_downloads_count: f.number(),
    prefered_quality: f.nullable(f.number()),
    prefered_av_muxer: f.enum(["mp4", "mkv"]),
    hide_nomedia_box: f.boolean(),
    popup_size: S_,
    font_size: I_,
    prefered_discovered_media_order: P_,
    smartnaming: f.strictObject({
      source: f.nullable(f.string()),
      compiled: f.strictObject({ default_: D_, rules: f.array(A_) }),
    }),
    preview_mode: k_,
    last_migration_request: f.number(),
    custom_strings: f.strictObject({ web: Cu, addon: Mu }),
  }),
  Rg = Ta.readonly();
function Wu(e) {
  let r = Ea();
  if (e && typeof e == "object")
    for (let o of Object.keys(Ta.shape)) {
      let i = Ta.shape[o];
      if (o in e) {
        let t = e[o],
          n = i.safeParse(t);
        if (n.success) r[o] = n.data;
        else {
          for (let a of n.error.issues)
            (console.warn("Zod issue"),
              console.warn(a.path.join(".")),
              console.warn(a.message));
          (console.warn(n.error.issues),
            console.warn(n.error.type),
            console.warn(n.error.message),
            console.warn(
              `Failed to import past persitent state field: ${o}. Fallback to default. Value was:`,
              t,
            ));
        }
      }
    }
  return r;
}
var j_ = 1710169438e3;
function Ea() {
  return {
    version: 1,
    default_action_per_hostname: new Map(),
    downloaded: new Map(),
    jwt: null,
    lsd: j_,
    default_action: "download",
    hide_nomedia_box: !0,
    dont_ask_for_user_review: !1,
    dockmode: "popup",
    download_directory: Oa,
    youtube_throttle: !0,
    youtube_audio_strategy: "original",
    max_concurrent_downloads: 6,
    show_desktop_notifications: !0,
    show_desktop_notifications_private: !1,
    history_days: 0,
    show_transient_history: !0,
    ui_theme: "system",
    use_context_menu: !0,
    prefered_quality: 1080,
    prefered_av_muxer: "mp4",
    popup_size: "medium",
    font_size: "default",
    prefered_discovered_media_order: "SMART",
    successful_downloads_count: 0,
    smartnaming: { source: null, compiled: qu() },
    preview_mode: "video",
    last_migration_request: 0,
    custom_strings: { addon: new Map(), web: new Map() },
  };
}
var Ua = "global_persistent_state";
async function Za() {
  let e = await Bu.storage.local.get(Ua);
  if (Ua in e) {
    let r = e[Ua];
    return Wu(te(r));
  }
  return Ea();
}
function Ku(e) {
  e.removeAttribute("hidden");
}
function Yu(e) {
  e.setAttribute("hidden", "true");
}
function Ju(e, r) {
  r ? Ku(e) : r === !1 ? Yu(e) : e.hasAttribute("hidden") ? Ku(e) : Yu(e);
}
var Gu = It(Me(), 1);
var Xg = new BroadcastChannel("worker_service");
var Ra = {
  FromInjectedToService: 0,
  FromContentToService: 1,
  FromServiceToWorker: 2,
  FromWorkerToService: 3,
  FromUntrustedInjectedToTrusted: 4,
  FromTrustedInjectedToUntrusted: 5,
  FromServiceToContent: 6,
  FromServiceToInjected: 7,
  FromServiceToService: 8,
};
async function U_(e, r) {
  await Gu.default.runtime.sendMessage({ msg: e, channel: r });
}
async function Or(e) {
  let r = Ra.FromContentToService;
  try {
    return (await U_(e, r), !0);
  } catch {
    return !1;
  }
}
var Ma = (await Za()).custom_strings,
  Qu = document.querySelector("#checkbox_hide_translated"),
  Ca = document.querySelector("#input_filter"),
  Ze,
  Nr = document.querySelector("#strings_container"),
  R_ = document.querySelector("#button_export"),
  M_ = document.querySelector("#entry");
function C_() {
  let [e, r] = Er.default.i18n.getUILanguage().split("-");
  e || (e = "en");
  let o = `${e}-${r}`;
  return Pa(o) ? J(o) : Pa(e) ? J(e) : X;
}
{
  let e = C_();
  if (e.isNone())
    throw (
      window.alert("Your locale is not supported. Sorry."),
      window.close(),
      ""
    );
  Ze = e.value;
}
el();
function el() {
  let e = document.querySelector("#button_reset");
  ((e.onclick = () => {
    window.confirm(
      "Are you sure? You will lose all your existing translation.",
    ) &&
      ([...Nr.childNodes].forEach((r) => r.remove()),
      (Ca.value = ""),
      Or({ name: "rm-custom-strings", data: null }),
      Ma.addon.clear(),
      Ma.web.clear(),
      Tr());
  }),
    (Qu.onclick = () => Tr()),
    (Ca.oninput = () => Tr()),
    (R_.onclick = async () => {
      let r = (await Za()).custom_strings,
        o = `# ${Ze}.toml - v${Er.default.runtime.getManifest().version}
`;
      o += `[addon]
`;
      for (let n of fe) {
        let a = ze[Ze]?.addon?.[n],
          s = r.addon.get(n);
        s
          ? (o += `${n} = '''${s}'''
`)
          : a &&
            (o += `${n} = '''${a}'''
`);
      }
      o += `
[web]
`;
      for (let n of Se) {
        let a = ze[Ze]?.web?.[n],
          s = r.web.get(n);
        s
          ? (o += `${n} = '''${s}'''
`)
          : a &&
            (o += `${n} = '''${a}'''
`);
      }
      let i = new Blob([o], { type: "text/plain;charset=utf-8" }),
        t = URL.createObjectURL(i);
      (await Er.default.downloads.download({
        url: t,
        filename: `${Ze}.txt`,
        saveAs: !0,
        conflictAction: "uniquify",
      }),
        URL.revokeObjectURL(t));
    }),
    Tr());
}
el();
function Xu(e, r) {
  let o = M_.content.cloneNode(!0),
    i = o.querySelector(".p_vbox");
  ((i.dataset.key = e), (i.dataset.ref = ze.en[r][e]));
  let t = i.querySelector(".p_key"),
    n = i.querySelector(".p_english"),
    a = i.querySelector(".span_status"),
    s = i.querySelector("input"),
    l = i.querySelector(".button_reset");
  t.textContent = e;
  let u = ze[Ze]?.[r]?.[e],
    m = Ma[r].get(e),
    p = () => {
      s.value.length == 0
        ? a.setAttribute("status", "not_translated")
        : s.value != u
          ? a.setAttribute("status", "changed")
          : a.setAttribute("status", "translated");
    };
  return (
    m
      ? ((s.value = m), u || (i.dataset.isTranslated = "no"))
      : u
        ? ((s.value = u), (i.dataset.isTranslated = "yes"))
        : ((s.value = ""), (i.dataset.isTranslated = "no")),
    p(),
    (l.onclick = () => {
      (u ? (s.value = u) : (s.value = ""), p());
    }),
    (s.oninput = () => {
      (r == "addon"
        ? Or({
            name: "update-custom-addon-string",
            data: { value: s.value, key: e },
          })
        : Or({
            name: "update-custom-web-string",
            data: { value: s.value, key: e },
          }),
        p());
    }),
    (n.textContent = `English: ${ze.en[r][e]}`),
    o
  );
}
function Tr() {
  if (Nr.childNodes.length == 0) {
    let o = new DocumentFragment();
    for (let i of fe) {
      let t = Xu(i, "addon");
      o.appendChild(t);
    }
    for (let i of Se) {
      let t = Xu(i, "web");
      o.appendChild(t);
    }
    Nr.append(o);
  }
  let e = Qu.checked,
    r = Ca.value.toLowerCase();
  for (let o of [...Nr.querySelectorAll("vbox")]) {
    let i = o,
      t = i.querySelector("input"),
      n = (
        i.dataset.key +
        i.dataset.ref +
        i.textContent +
        t.value
      ).toLowerCase(),
      a = r.length > 0 && !n.includes(r),
      s = e && i.dataset.isTranslated == "yes";
    Ju(i, !(a || s));
  }
}
