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
import { Badge } from '@ionic-native/badge';
var BadgeMOck = (function (_super) {
    __extends(BadgeMOck, _super);
    function BadgeMOck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Clear the badge of the app icon.
     * @returns {Promise<boolean>}
     */
    BadgeMOck.prototype.clear = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Set the badge of the app icon.
     * @param {number} badgeNumber  The new badge number.
     * @returns {Promise<any>}
     */
    BadgeMOck.prototype.set = function (badgeNumber) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the badge of the app icon.
     * @returns {Promise<any>}
     */
    BadgeMOck.prototype.get = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Increase the badge number.
     * @param {number} increaseBy  Count to add to the current badge number
     * @returns {Promise<any>}
     */
    BadgeMOck.prototype.increase = function (increaseBy) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Decrease the badge number.
     * @param {number} decreaseBy  Count to subtract from the current badge number
     * @returns {Promise<any>}
     */
    BadgeMOck.prototype.decrease = function (decreaseBy) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Determine if the app has permission to show badges.
     * @returns {Promise<any>}
     */
    BadgeMOck.prototype.hasPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Register permission to set badge notifications
     * @returns {Promise<any>}
     */
    BadgeMOck.prototype.registerPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return BadgeMOck;
}(Badge));
export { BadgeMOck };
//# sourceMappingURL=index.js.map