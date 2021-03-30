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
import { AppPreferences } from '@ionic-native/app-preferences';
import { Observable } from 'rxjs/Observable';
var AppPreferencesMock = (function (_super) {
    __extends(AppPreferencesMock, _super);
    function AppPreferencesMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get a preference value
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @return {Promise<any>} Returns a promise
     */
    AppPreferencesMock.prototype.fetch = function (dict, key) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set a preference value
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @param {any} value Value
     * @return {Promise<any>} Returns a promise
     */
    AppPreferencesMock.prototype.store = function (dict, key, value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Remove value from preferences
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @return {Promise<any>} Returns a promise
     */
    AppPreferencesMock.prototype.remove = function (dict, key) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Clear preferences
     *
     * @return {Promise<any>} Returns a promise
     */
    AppPreferencesMock.prototype.clearAll = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show native preferences interface
     *
     * @return {Promise<any>} Returns a promise
     */
    AppPreferencesMock.prototype.show = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show native preferences interface
     *
     * @param {boolean} subscribe true value to subscribe, false - unsubscribe
     * @return {Observable<any>} Returns an observable
     */
    AppPreferencesMock.prototype.watch = function (subscribe) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Return named configuration context
     * In iOS you'll get a suite configuration, on Android — named file
     * Supports: Android, iOS
     * @param {string} suiteName suite name
     * @returns {Object} Custom object, bound to that suite
     */
    AppPreferencesMock.prototype.suite = function (suiteName) { };
    ;
    AppPreferencesMock.prototype.iosSuite = function (suiteName) { };
    ;
    /**
     * Return cloud synchronized configuration context
     * Currently supports Windows and iOS/macOS
     * @returns {Object} Custom object, bound to that suite
     */
    AppPreferencesMock.prototype.cloudSync = function () {
        return new Object;
    };
    ;
    /**
     * Return default configuration context
     * Currently supports Windows and iOS/macOS
     * @returns {Object} Custom Object, bound to that suite
     */
    AppPreferencesMock.prototype.defaults = function () {
        return new Object;
    };
    ;
    return AppPreferencesMock;
}(AppPreferences));
export { AppPreferencesMock };
//# sourceMappingURL=index.js.map