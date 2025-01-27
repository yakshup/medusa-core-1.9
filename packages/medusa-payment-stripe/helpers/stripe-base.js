"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _medusa = require("@medusajs/medusa");

var _stripe = _interopRequireDefault(require("stripe"));

var _dist = require("@medusajs/medusa/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && _instanceof(outerFn.prototype, Generator) ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StripeBase = /*#__PURE__*/function (_AbstractPaymentServi) {
  _inherits(StripeBase, _AbstractPaymentServi);

  var _super = _createSuper(StripeBase);

  function StripeBase(_, options) {
    var _this;

    _classCallCheck(this, StripeBase);

    _this = _super.call(this, _, options);
    /**
     * Required Stripe options:
     *  {
     *    api_key: "stripe_secret_key", REQUIRED
     *    webhook_secret: "stripe_webhook_secret", REQUIRED
     *    // Use this flag to capture payment immediately (default is false)
     *    capture: true
     *  }
     */

    _this.options_ = options;
    /** @private @const {Stripe} */

    _this.stripe_ = (0, _stripe["default"])(options.api_key);
    return _this;
  }

  _createClass(StripeBase, [{
    key: "getPaymentIntentOptions",
    value: function getPaymentIntentOptions() {
      var _this$paymentIntentOp, _this$paymentIntentOp2, _this$paymentIntentOp3;

      var options = {};

      if (this !== null && this !== void 0 && (_this$paymentIntentOp = this.paymentIntentOptions) !== null && _this$paymentIntentOp !== void 0 && _this$paymentIntentOp.capture_method) {
        options.capture_method = this.paymentIntentOptions.capture_method;
      }

      if (this !== null && this !== void 0 && (_this$paymentIntentOp2 = this.paymentIntentOptions) !== null && _this$paymentIntentOp2 !== void 0 && _this$paymentIntentOp2.setup_future_usage) {
        options.setup_future_usage = this.paymentIntentOptions.setup_future_usage;
      }

      if (this !== null && this !== void 0 && (_this$paymentIntentOp3 = this.paymentIntentOptions) !== null && _this$paymentIntentOp3 !== void 0 && _this$paymentIntentOp3.payment_method_types) {
        options.payment_method_types = this.paymentIntentOptions.payment_method_types;
      }

      return options;
    }
    /**
    * Get payment session status
    * statuses.
    * @param {PaymentSessionData} paymentData - the data stored with the payment session
    * @return {Promise<PaymentSessionStatus>} the status of the order
    */

  }, {
    key: "getStatus",
    value: function () {
      var _getStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(paymentData) {
        var id, paymentIntent;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = paymentData.id;
                _context.next = 3;
                return this.stripe_.paymentIntents.retrieve(id);

              case 3:
                paymentIntent = _context.sent;
                _context.t0 = paymentIntent.status;
                _context.next = _context.t0 === "requires_payment_method" ? 7 : _context.t0 === "requires_confirmation" ? 7 : _context.t0 === "processing" ? 7 : _context.t0 === "requires_action" ? 8 : _context.t0 === "canceled" ? 9 : _context.t0 === "requires_capture" ? 10 : _context.t0 === "succeeded" ? 10 : 11;
                break;

              case 7:
                return _context.abrupt("return", _dist.PaymentSessionStatus.PENDING);

              case 8:
                return _context.abrupt("return", _dist.PaymentSessionStatus.REQUIRES_MORE);

              case 9:
                return _context.abrupt("return", _dist.PaymentSessionStatus.CANCELED);

              case 10:
                return _context.abrupt("return", _dist.PaymentSessionStatus.AUTHORIZED);

              case 11:
                return _context.abrupt("return", _dist.PaymentSessionStatus.PENDING);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getStatus(_x) {
        return _getStatus.apply(this, arguments);
      }

      return getStatus;
    }()
    /**
     * Fetches a customers saved payment methods if registered in Stripe.
     * @param {Customer} customer - customer to fetch saved cards for
     * @return {Promise<Data[]>} saved payments methods
     */

  }, {
    key: "retrieveSavedMethods",
    value: function () {
      var _retrieveSavedMethods = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(customer) {
        var methods;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(customer.metadata && customer.metadata.stripe_id)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return this.stripe_.paymentMethods.list({
                  customer: customer.metadata.stripe_id,
                  type: "card"
                });

              case 3:
                methods = _context2.sent;
                return _context2.abrupt("return", methods.data);

              case 5:
                return _context2.abrupt("return", []);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function retrieveSavedMethods(_x2) {
        return _retrieveSavedMethods.apply(this, arguments);
      }

      return retrieveSavedMethods;
    }()
    /**
     * Fetches a Stripe customer
     * @param {string} customerId - Stripe customer id
     * @return {Promise<object>} Stripe customer
     */

  }, {
    key: "retrieveCustomer",
    value: function () {
      var _retrieveCustomer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(customerId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (customerId) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.stripe_.customers.retrieve(customerId);

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function retrieveCustomer(_x3) {
        return _retrieveCustomer.apply(this, arguments);
      }

      return retrieveCustomer;
    }()
    /**
     * Creates a Stripe payment intent.
     * If customer is not registered in Stripe, we do so.
     * @param {Cart & PaymentContext} context - context to use to create a payment for
     * @return {Promise<PaymentSessionResponse>} Stripe payment intent
     */

  }, {
    key: "createPayment",
    value: function () {
      var _createPayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(context) {
        var _cart_context$payment, _this$options_, _this$options_2, _customer$metadata, _customer$metadata3;

        var intentRequestData, cart_id, email, cart_context, currency_code, amount, resource_id, customer, intentRequest, _customer$metadata2, stripeCustomer, session_data;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                intentRequestData = this.getPaymentIntentOptions();
                cart_id = context.id, email = context.email, cart_context = context.context, currency_code = context.currency_code, amount = context.amount, resource_id = context.resource_id, customer = context.customer;
                intentRequest = _objectSpread({
                  description: (_cart_context$payment = cart_context.payment_description) !== null && _cart_context$payment !== void 0 ? _cart_context$payment : (_this$options_ = this.options_) === null || _this$options_ === void 0 ? void 0 : _this$options_.payment_description,
                  amount: Math.round(amount),
                  currency: currency_code,
                  metadata: {
                    cart_id: cart_id,
                    resource_id: resource_id
                  },
                  capture_method: this.options_.capture ? "automatic" : "manual"
                }, intentRequestData);

                if ((_this$options_2 = this.options_) !== null && _this$options_2 !== void 0 && _this$options_2.automatic_payment_methods) {
                  intentRequest.automatic_payment_methods = {
                    enabled: true
                  };
                }

                if (!(customer !== null && customer !== void 0 && (_customer$metadata = customer.metadata) !== null && _customer$metadata !== void 0 && _customer$metadata.stripe_id)) {
                  _context4.next = 8;
                  break;
                }

                intentRequest.customer = customer === null || customer === void 0 ? void 0 : (_customer$metadata2 = customer.metadata) === null || _customer$metadata2 === void 0 ? void 0 : _customer$metadata2.stripe_id;
                _context4.next = 12;
                break;

              case 8:
                _context4.next = 10;
                return this.stripe_.customers.create({
                  email: email
                });

              case 10:
                stripeCustomer = _context4.sent;
                intentRequest.customer = stripeCustomer.id;

              case 12:
                _context4.next = 14;
                return this.stripe_.paymentIntents.create(intentRequest);

              case 14:
                session_data = _context4.sent;
                return _context4.abrupt("return", {
                  session_data: session_data,
                  update_requests: customer !== null && customer !== void 0 && (_customer$metadata3 = customer.metadata) !== null && _customer$metadata3 !== void 0 && _customer$metadata3.stripe_id ? undefined : {
                    customer_metadata: {
                      stripe_id: intentRequest.customer
                    }
                  }
                });

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createPayment(_x4) {
        return _createPayment.apply(this, arguments);
      }

      return createPayment;
    }()
    /**
     * Retrieves Stripe payment intent.
     * @param {PaymentData} data - the data of the payment to retrieve
     * @return {Promise<Data>} Stripe payment intent
     */

  }, {
    key: "retrievePayment",
    value: function () {
      var _retrievePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.stripe_.paymentIntents.retrieve(data.id);

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function retrievePayment(_x5) {
        return _retrievePayment.apply(this, arguments);
      }

      return retrievePayment;
    }()
    /**
     * Gets a Stripe payment intent and returns it.
     * @param {PaymentSession} paymentSession - the data of the payment to retrieve
     * @return {Promise<PaymentData>} Stripe payment intent
     */

  }, {
    key: "getPaymentData",
    value: function () {
      var _getPaymentData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(paymentSession) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.stripe_.paymentIntents.retrieve(paymentSession.data.id);

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getPaymentData(_x6) {
        return _getPaymentData.apply(this, arguments);
      }

      return getPaymentData;
    }()
    /**
     * Authorizes Stripe payment intent by simply returning
     * the status for the payment intent in use.
     * @param {PaymentSession} paymentSession - payment session data
     * @param {Data} context - properties relevant to current context
     * @return {Promise<{ data: PaymentSessionData; status: PaymentSessionStatus }>} result with data and status
     */

  }, {
    key: "authorizePayment",
    value: function () {
      var _authorizePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(paymentSession) {
        var context,
            stat,
            _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                context = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
                _context7.next = 3;
                return this.getStatus(paymentSession.data);

              case 3:
                stat = _context7.sent;
                return _context7.abrupt("return", {
                  data: paymentSession.data,
                  status: stat
                });

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function authorizePayment(_x7) {
        return _authorizePayment.apply(this, arguments);
      }

      return authorizePayment;
    }()
  }, {
    key: "updatePaymentData",
    value: function () {
      var _updatePaymentData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(sessionData, update) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.stripe_.paymentIntents.update(sessionData.id, _objectSpread({}, update.data));

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updatePaymentData(_x8, _x9) {
        return _updatePaymentData.apply(this, arguments);
      }

      return updatePaymentData;
    }()
    /**
     * Updates Stripe payment intent.
     * @param {PaymentSessionData} paymentSessionData - payment session data.
     * @param {Cart & PaymentContext} context
     * @return {Promise<PaymentSessionData>} Stripe payment intent
     */

  }, {
    key: "updatePayment",
    value: function () {
      var _updatePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(paymentSessionData, context) {
        var _customer$metadata4;

        var amount, customer, stripeId;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                amount = context.amount, customer = context.customer;
                stripeId = (customer === null || customer === void 0 ? void 0 : (_customer$metadata4 = customer.metadata) === null || _customer$metadata4 === void 0 ? void 0 : _customer$metadata4.stripe_id) || undefined;

                if (!(stripeId !== paymentSessionData.customer)) {
                  _context9.next = 8;
                  break;
                }

                _context9.next = 5;
                return this.createPayment(context);

              case 5:
                return _context9.abrupt("return", _context9.sent);

              case 8:
                if (!(amount && paymentSessionData.amount === Math.round(amount))) {
                  _context9.next = 10;
                  break;
                }

                return _context9.abrupt("return", paymentSessionData);

              case 10:
                _context9.next = 12;
                return this.stripe_.paymentIntents.update(paymentSessionData.id, {
                  amount: Math.round(amount)
                });

              case 12:
                return _context9.abrupt("return", _context9.sent);

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function updatePayment(_x10, _x11) {
        return _updatePayment.apply(this, arguments);
      }

      return updatePayment;
    }()
  }, {
    key: "deletePayment",
    value: function () {
      var _deletePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(payment) {
        var id;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                id = payment.data.id;
                return _context10.abrupt("return", this.stripe_.paymentIntents.cancel(id)["catch"](function (err) {
                  if (err.statusCode === 400) {
                    return;
                  }

                  throw err;
                }));

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function deletePayment(_x12) {
        return _deletePayment.apply(this, arguments);
      }

      return deletePayment;
    }()
    /**
     * Updates customer of Stripe payment intent.
     * @param {string} paymentIntentId - id of payment intent to update
     * @param {string} customerId - id of \ Stripe customer
     * @return {object} Stripe payment intent
     */

  }, {
    key: "updatePaymentIntentCustomer",
    value: function () {
      var _updatePaymentIntentCustomer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(paymentIntentId, customerId) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.stripe_.paymentIntents.update(paymentIntentId, {
                  customer: customerId
                });

              case 2:
                return _context11.abrupt("return", _context11.sent);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function updatePaymentIntentCustomer(_x13, _x14) {
        return _updatePaymentIntentCustomer.apply(this, arguments);
      }

      return updatePaymentIntentCustomer;
    }()
    /**
     * Captures payment for Stripe payment intent.
     * @param {Payment} payment - payment method data from cart
     * @return {Promise<PaymentData>} Stripe payment intent
     */

  }, {
    key: "capturePayment",
    value: function () {
      var _capturePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(payment) {
        var id, intent;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                id = payment.data.id;
                _context12.prev = 1;
                _context12.next = 4;
                return this.stripe_.paymentIntents.capture(id);

              case 4:
                intent = _context12.sent;
                return _context12.abrupt("return", intent);

              case 8:
                _context12.prev = 8;
                _context12.t0 = _context12["catch"](1);

                if (!(_context12.t0.code === "payment_intent_unexpected_state")) {
                  _context12.next = 13;
                  break;
                }

                if (!(_context12.t0.payment_intent.status === "succeeded")) {
                  _context12.next = 13;
                  break;
                }

                return _context12.abrupt("return", _context12.t0.payment_intent);

              case 13:
                throw _context12.t0;

              case 14:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[1, 8]]);
      }));

      function capturePayment(_x15) {
        return _capturePayment.apply(this, arguments);
      }

      return capturePayment;
    }()
    /**
     * Refunds payment for Stripe payment intent.
     * @param {Payment} payment - payment method data from cart
     * @param {number} refundAmount - amount to refund
     * @return {Promise<PaymentData>} refunded payment intent
     */

  }, {
    key: "refundPayment",
    value: function () {
      var _refundPayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(payment, amountToRefund) {
        var id;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                id = payment.data.id;
                _context13.next = 3;
                return this.stripe_.refunds.create({
                  amount: Math.round(amountToRefund),
                  payment_intent: id
                });

              case 3:
                return _context13.abrupt("return", payment.data);

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function refundPayment(_x16, _x17) {
        return _refundPayment.apply(this, arguments);
      }

      return refundPayment;
    }()
    /**
     * Cancels payment for Stripe payment intent.
     * @param {Payment} payment - payment method data from cart
     * @return {Promise<PaymentData>} canceled payment intent
     */

  }, {
    key: "cancelPayment",
    value: function () {
      var _cancelPayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(payment) {
        var id;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                id = payment.data.id;
                _context14.prev = 1;
                _context14.next = 4;
                return this.stripe_.paymentIntents.cancel(id);

              case 4:
                return _context14.abrupt("return", _context14.sent);

              case 7:
                _context14.prev = 7;
                _context14.t0 = _context14["catch"](1);

                if (!(_context14.t0.payment_intent.status === "canceled")) {
                  _context14.next = 11;
                  break;
                }

                return _context14.abrupt("return", _context14.t0.payment_intent);

              case 11:
                throw _context14.t0;

              case 12:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[1, 7]]);
      }));

      function cancelPayment(_x18) {
        return _cancelPayment.apply(this, arguments);
      }

      return cancelPayment;
    }()
    /**
     * Constructs Stripe Webhook event
     * @param {object} data - the data of the webhook request: req.body
     * @param {object} signature - the Stripe signature on the event, that
     *    ensures integrity of the webhook event
     * @return {object} Stripe Webhook event
     */

  }, {
    key: "constructWebhookEvent",
    value: function constructWebhookEvent(data, signature) {
      return this.stripe_.webhooks.constructEvent(data, signature, this.options_.webhook_secret);
    }
  }]);

  return StripeBase;
}(_medusa.AbstractPaymentService);

_defineProperty(StripeBase, "identifier", null);

var _default = StripeBase;
exports["default"] = _default;