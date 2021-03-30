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
import { KeychainTouchId } from '@ionic-native/keychain-touch-id';
var KeychainTouchIdMock = (function (_super) {
    __extends(KeychainTouchIdMock, _super);
    function KeychainTouchIdMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if Touch ID / Fingerprint is supported by the device
     * @return {Promise<any>} Returns a promise that resolves when there is hardware support
     */
    KeychainTouchIdMock.prototype.isAvailable = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Encrypts and Saves a password under the key in the device keychain, which can be retrieved after
     * successful authentication using fingerprint
     * @param key {string} the key you want to store
     * @param password {string} the password you want to encrypt and store
     * @return {Promise<any>} Returns a promise that resolves when there is a result
     */
    KeychainTouchIdMock.prototype.save = function (key, password) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Opens the fingerprint dialog, for the given key, showing an additional message. Promise will resolve
     * with the password stored in keychain or will resolve an error code, where -1 indicated not available.
     * @param key {string} the key you want to retrieve from keychain
     * @param message {string} a message to the user
     * @return {Promise<any>} Returns a promise that resolves when the key value is successfully retrieved or an error
     */
    KeychainTouchIdMock.prototype.verify = function (key, message) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Checks if there is a password stored within the keychain for the given key.
     * @param key {string} the key you want to check from keychain
     * @return {Promise<any>} Returns a promise that resolves with success if the key is available or failure if key is not.
     */
    KeychainTouchIdMock.prototype.has = function (key) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Deletes the password stored under given key from the keychain.
     * @param key {string} the key you want to delete from keychain
     * @return {Promise<any>} Returns a promise that resolves with success if the key is deleted or failure if key is not
     */
    KeychainTouchIdMock.prototype.delete = function (key) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Sets the language of the fingerprint dialog
     * @param locale {string} locale subtag from [this list](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
     */
    KeychainTouchIdMock.prototype.setLocale = function (locale) { };
    ;
    return KeychainTouchIdMock;
}(KeychainTouchId));
export { KeychainTouchIdMock };
//# sourceMappingURL=index.js.map