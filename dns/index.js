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
import { DNS } from '@ionic-native/dns';
var DNSMock = (function (_super) {
    __extends(DNSMock, _super);
    function DNSMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Resolve hostnames into an underlying network address.
     * @param hostname
     * @returns {Promise<string>} Returns a promise that resolves with the resolution.
     */
    DNSMock.prototype.resolve = function (hostname) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return DNSMock;
}(DNS));
export { DNSMock };
//# sourceMappingURL=index.js.map