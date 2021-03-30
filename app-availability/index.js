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
import { AppAvailability } from '@ionic-native/app-availability';
var AppAvailabilityMock = (function (_super) {
    __extends(AppAvailabilityMock, _super);
    function AppAvailabilityMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks if an app is available on device
     * @param {string} app Package name on android, or URI scheme on iOS
     * @returns {Promise<boolean>}
     */
    AppAvailabilityMock.prototype.check = function (app) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return AppAvailabilityMock;
}(AppAvailability));
export { AppAvailabilityMock };
//# sourceMappingURL=index.js.map