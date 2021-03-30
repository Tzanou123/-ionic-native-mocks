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
import { IndexAppContent } from '@ionic-native/index-app-content';
import { Observable } from 'rxjs/Observable';
var IndexAppContentMock = (function (_super) {
    __extends(IndexAppContentMock, _super);
    function IndexAppContentMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The option to index app content might not be available at all due to device limitations or user settings.
     * Therefore it's highly recommended to check upfront if indexing is possible.
     * @return {Promise<boolean>} Returns a promise that resolves with true if indexing is available, false if not
     */
    IndexAppContentMock.prototype.isIndexingAvailable = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Add or change items to spotlight index
     * @param {Array<IndexItem>} Array of items to index
     * @return {Promise<any>} Returns if index set was successfull
     */
    IndexAppContentMock.prototype.setItems = function (items) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * If user taps on a search result in spotlight then the app will be launched.
     * You can register a Javascript handler to get informed when this happens.
     * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
     */
    IndexAppContentMock.prototype.onItemPressed = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Clear all items stored for a given array of domains
     * @param {Array<string>} Array of domains to clear
     * @return {Promise<any>} Resolve if successfull
     */
    IndexAppContentMock.prototype.clearItemsForDomains = function (domains) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Clear all items stored for a given array of identifiers
     * @param {Array<string>} Array of identifiers to clear
     * @return {Promise<any>} Resolve if successfull
     */
    IndexAppContentMock.prototype.clearItemsForIdentifiers = function (identifiers) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * You might want to avoid to update spotlight index too frequently.
     * Without calling this function a subsequent call to manipulate the index is only possible after 1440 minutes (= 24 hours)!
     * @param {number} Numeric value => 0
     */
    IndexAppContentMock.prototype.setIndexingInterval = function (intervalMinutes) { };
    ;
    return IndexAppContentMock;
}(IndexAppContent));
export { IndexAppContentMock };
//# sourceMappingURL=index.js.map