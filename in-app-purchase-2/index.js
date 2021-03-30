var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d, b) {
          d.__proto__ = b
        }) ||
      function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
      }
    return function (d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx'
var InAppPurchase2Mock = (function (_super) {
  __extends(InAppPurchase2Mock, _super)
  function InAppPurchase2Mock() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  /**
   * Get product by id or alias
   * @param idOrAlias
   */
  InAppPurchase2Mock.prototype.get = function (idOrAlias) {
    var response
    return response
  }
  /**
   * Register error handler
   * @param onError {Function} function to call on error
   */
  InAppPurchase2Mock.prototype.error = function (onError) {}
  /**
   * Add or register a product
   * @param product {IAPProductOptions}
   */
  InAppPurchase2Mock.prototype.register = function (product) {}
  /**
   *
   * @param query
   * @param event
   * @param callback
   * @return {IAPProductEvents}
   */
  InAppPurchase2Mock.prototype.when = function (query, event, callback) {
    var response
    return response
  }
  /**
   * Identical to `when`, but the callback will be called only once. After being called, the callback will be unregistered.
   * @param query {string | IAPProduct}
   * @param [event] {event}
   * @param [callback] {IAPQueryCallback}
   * @return {IAPProductEvents}
   */
  InAppPurchase2Mock.prototype.once = function (query, event, callback) {
    var response
    return response
  }
  /**
   * Unregister a callback. Works for callbacks registered with ready, when, once and error.
   * @param callback {Function}
   */
  InAppPurchase2Mock.prototype.off = function (callback) {}
  // order(product: string | IAPProduct, additionalData?: any): Promise<any> {
  //     return new Promise((resolve, reject) => {
  //         resolve().error();
  //     }).then();
  //     //  then: Function;
  //     //  error: Function;
  // };
  InAppPurchase2Mock.prototype.order = function (product, additionalData) {
    return
  }
  /**
   *
   * @return {Promise<any>} returns a promise that resolves when the store is ready
   */
  InAppPurchase2Mock.prototype.ready = function () {
    return new Promise(function (resolve, reject) {
      resolve()
    })
  }
  InAppPurchase2Mock.prototype.refresh = function () {}
  return InAppPurchase2Mock
})(InAppPurchase2)
export { InAppPurchase2Mock }
//# sourceMappingURL=index.js.map
