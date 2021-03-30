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
import { NativeKeyboard } from '@ionic-native/native-keyboard';
var NativeKeyboarMock = (function (_super) {
    __extends(NativeKeyboarMock, _super);
    function NativeKeyboarMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show messenger
     * @param options {NativeKeyboardOptions}
     */
    NativeKeyboarMock.prototype.showMessenger = function (options) { };
    ;
    /**
     * Hide messenger
     * @param options {NativeKeyboardOptions}
     */
    NativeKeyboarMock.prototype.hideMessenger = function (options) { };
    ;
    /**
     * Programmatically pop up the keyboard again if the user dismissed it.
     * @return {Promise<any>}
     */
    NativeKeyboarMock.prototype.showMessengerKeyboard = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Programmatically hide the keyboard (but not the messenger bar)
     */
    NativeKeyboarMock.prototype.hideMessengerKeyboard = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Manipulate the messenger while it's open. For instance if you want to update the text programmatically based on what the user typed.
     * @param options
     */
    NativeKeyboarMock.prototype.updateMessenger = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return NativeKeyboarMock;
}(NativeKeyboard));
export { NativeKeyboarMock };
//# sourceMappingURL=index.js.map