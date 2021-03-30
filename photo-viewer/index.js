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
import { PhotoViewer } from '@ionic-native/photo-viewer';
var PhotoViewerMock = (function (_super) {
    __extends(PhotoViewerMock, _super);
    function PhotoViewerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {any}
     */
    PhotoViewerMock.prototype.show = function (url, title, options) { };
    ;
    return PhotoViewerMock;
}(PhotoViewer));
export { PhotoViewerMock };
//# sourceMappingURL=index.js.map