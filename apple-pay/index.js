var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ApplePay } from '@ionic-native/apple-pay';
import { Observable } from 'rxjs/Observable';
var ApplePayMock = (function (_super) {
    __extends(ApplePayMock, _super);
    function ApplePayMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Detects if the current device supports Apple Pay and has any capable cards registered.
     * @return {Promise<IMakePayments>} Returns a promise
     *
     * @usage
     * try {
     *   const message = await this.applePay.canMakePayments();
     *   // Apple Pay is enabled and a supported card is setup. Expect:
     *   // 'This device can make payments and has a supported card'
     * } catch (message) {
     *   // There is an issue, examine the message to see the details, will be:
     *   // 'This device cannot make payments.''
     *   // 'This device can make payments but has no supported cards'
     * }
     */
    ApplePayMock.prototype.canMakePayments = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Starts listening for shipping contact selection changes
     * Any time the user selects shipping contact, this callback will fire.
     * You *must* call `updateItemsAndShippingMethods` in response or else the
     * user will not be able to process payment.
     * @return {Observable<ISelectedShippingContact>} emits with shipping contact information on
     *   shipping contact selection changes
     */
    ApplePayMock.prototype.startListeningForShippingContactSelection = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Stops listening for shipping contact selection changes
     * @return {Promise} whether stop listening was successful. This should
     *   really only fail if this is called without starting listening
     */
    ApplePayMock.prototype.stopListeningForShippingContactSelection = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Update the list of pay sheet items and shipping methods in response to
     * a shipping contact selection event. This *must* be called in response to
     * any shipping contact selection event or else the user will not be able
     * to complete a transaction on the pay sheet. Do not call without
     * subscribing to shipping contact selection events first
     * @returns {Promise}
     *
     * @param {Object} including `items` and `shippingMethods` properties.
     *
     * @usage
     * this.applePay.startListeningForShippingContactSelection().pluck('shippingAddressState').subscribe(shippingAddressState => {
     *   let shippingMethods;
     *   if ('AK' === shippingAddressState) {
     *     shippingMethods = [{
     *         identifier: 'Alaska',
     *         label: 'Alaska',
     *         detail: 'For shipping to Alaska',
     *         amount: 9.99
     *     },];
     *   } else {
     *     shippingMethods = [{
     *         identifier: 'Continental',
     *         label: 'Continental',
     *         detail: 'For shipping Continentally',
     *         amount: 5.99
     *     }];
     *   }
     *   this.paySheetItems.shippingCost = {
     *      label: 'Shipping Cost',
     *      amount: shippingMethod[0].amount
     *   };
     *   this.applePay.updateItemsAndShippingMethods(this.paySheetItems, shippingMethods);
     * });
     */
    ApplePayMock.prototype.updateItemsAndShippingMethods = function (list) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Request a payment with Apple Pay
     * @return {Promise<IPaymentResponse>} Returns a promise that resolves when something happens
     *
     * @param order {IOrder}
     *
     * @usage
     * try {
     *   const paymentResponse = this.applePay.makePaymentRequest({
     *     items: [
     *       {
     *         label: '3 x Basket Items',
     *         amount: 49.99
     *       },
     *       {
     *         label: 'Next Day Delivery',
     *         amount: 3.99
     *       },
     *       {
     *         label: 'My Fashion Company',
     *         amount: 53.98
     *       }
     *     ],
     *     shippingMethods: [
     *       {
     *         identifier: 'NextDay',
     *         label: 'NextDay',
     *         detail: 'Arrives tomorrow by 5pm.',
     *         amount: 3.99
     *       },
     *       {
     *         identifier: 'Standard',
     *         label: 'Standard',
     *         detail: 'Arrive by Friday.',
     *         amount: 4.99
     *       },
     *       {
     *         identifier: 'SaturdayDelivery',
     *         label: 'Saturday',
     *         detail: 'Arrive by 5pm this Saturday.',
     *         amount: 6.99
     *       }
     *     ],
     *     merchantIdentifier: 'merchant.apple.test',
     *     currencyCode: 'GBP',
     *     countryCode: 'GB',
     *     billingAddressRequirement: 'none',
     *     shippingAddressRequirement: 'none',
     *     shippingType: 'shipping',
     *   });
     *
     *   // The user has authorized the payment.
     *
     *   // Handle the token, asynchronously, i.e. pass to your merchant bank to
     *   // action the payment, then once finished, depending on the outcome:
     *
     *   // Here is an example implementation:
     *
     *   const captureStatus = await MyPaymentProvider.authorizeApplePayToken(paymentResponse.paymentData);
     *   await this.applePay.completeLastTransaction('success');
     * }
     * catch (err) {
     *   if (isPaymentAuthError(err)) {
     *     this.completeLastTransaction('failure');
     *   }
     *   else {
     *     // Failed to open pay sheet or user canceled payment
     *   }
     * }
     */
    ApplePayMock.prototype.makePaymentRequest = function (order) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Once the makePaymentRequest has been resolved successfully, the device will be waiting for a completion event.
     * This means, that the application must proceed with the token authorisation and return a success, failure,
     * or other validation error. Once this has been passed back, the Apple Pay sheet will be dismissed via an animation.
     * @return {Promise<ICompleteTransaction>} Returns a promise that resolves after confirmation of payment authorization completion
     *
     * @param complete {ITransactionStatus}
     *
     */
    ApplePayMock.prototype.completeLastTransaction = function (complete) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return ApplePayMock;
}(ApplePay));
export { ApplePayMock };
//# sourceMappingURL=index.js.map