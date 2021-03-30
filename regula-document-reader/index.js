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
import { RegulaDocumentReader } from '@ionic-native/regula-document-reader';
var RegulaDocumentReaderMock = (function (_super) {
    __extends(RegulaDocumentReaderMock, _super);
    function RegulaDocumentReaderMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initialize the scanner
     * @param license {any} License data
     */
    RegulaDocumentReaderMock.prototype.initReader = function (license) { };
    ;
    /**
     * Run the scanner
     * @return {Promise<string[]>} Returns a promise that resolves when results was got, and fails when not
     */
    RegulaDocumentReaderMock.prototype.scanDocument = function () {
        var response = [''];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return RegulaDocumentReaderMock;
}(RegulaDocumentReader));
export { RegulaDocumentReaderMock };
//# sourceMappingURL=index.js.map