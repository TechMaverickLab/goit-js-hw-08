var e=globalThis,t={},r={},i=e.parcelRequire5a88;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire5a88=i),(0,i.register)("eMXxl",function(t,r){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var i="Expected a function",n=0/0,a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,s=c||m||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return n;if(y(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var i=l.test(e);return i||u.test(e)?f(e.slice(2),i?2:8):o.test(e)?n:+e}t.exports=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw TypeError(i);return y(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,r){var n,a,o,l,u,f,c=0,m=!1,s=!1,d=!0;if("function"!=typeof e)throw TypeError(i);function x(t){var r=n,i=a;return n=a=void 0,c=t,l=e.apply(i,r)}function E(e){var r=e-f,i=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===f||r>=t||r<0||s&&i>=o}function h(){var e,r,i,n=g();if(E(n))return O(n);// Restart the timer.
u=setTimeout(h,(e=n-f,r=n-c,i=t-e,s?p(i,o-r):i))}function O(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(u=void 0,d&&n)?x(e):(n=a=void 0,l))}function S(){var e,r=g(),i=E(r);if(n=arguments,a=this,f=r,i){if(void 0===u)return(// Reset any `maxWait` timer.
c=e=f,// Start the timer for the trailing edge.
u=setTimeout(h,t),m?x(e):l);if(s)return(// Handle invocations in a tight loop.
u=setTimeout(h,t),x(f))}return void 0===u&&(u=setTimeout(h,t)),l}return t=b(t)||0,y(r)&&(m=!!r.leading,o=(s="maxWait"in r)?v(b(r.maxWait)||0,t):o,d="trailing"in r?!!r.trailing:d),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,n=f=a=u=void 0},S.flush=function(){return void 0===u?l:O(g())},S}(e,t,{leading:n,maxWait:t,trailing:a})}});/* global document, localStorage */var n=i("eMXxl");const a={form:document.querySelector(".feedback-form"),email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]')},o="feedback-form-state",l=localStorage.getItem("lastValidEmail")||"";function u(){""===a.email.value&&(a.email.placeholder=l||"you@example.com")}u(),a.form.addEventListener("submit",function(e){if(e.preventDefault(),!a.form.checkValidity()){a.email.reportValidity();return}let t=a.email.value,r=a.message.value;console.log({email:t,message:r}),e.currentTarget.reset(),localStorage.removeItem(o),localStorage.removeItem("lastValidEmail"),u()}),a.form.addEventListener("input",(n&&n.__esModule?n.default:n)(function(){let e=a.email.value,t=a.message.value;localStorage.setItem(o,JSON.stringify({email:e,message:t}))},500)),a.email.addEventListener("focus",u),a.email.addEventListener("blur",function(){a.email.placeholder=""}),a.email.addEventListener("blur",()=>{a.email.removeAttribute("title")}),a.email.addEventListener("keydown",e=>{"Enter"===e.key&&l&&(a.email.value=l,e.preventDefault())}),function(){let e=localStorage.getItem(o);if(e){let t=JSON.parse(e);a.email.value=t.email,a.message.value=t.message}}//# sourceMappingURL=03-feedback.d131b755.js.map
();
//# sourceMappingURL=03-feedback.d131b755.js.map
