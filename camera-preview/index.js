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
import { CameraPreview } from '@ionic-native/camera-preview';
var CameraPreviewMock = (function (_super) {
    __extends(CameraPreviewMock, _super);
    function CameraPreviewMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts the camera preview instance.
     * @param {CameraPreviewOptions} options
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.startCamera = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stops the camera preview instance. (iOS & Android)
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.stopCamera = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Switch from the rear camera and front camera, if available.
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.switchCamera = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Hide the camera preview box.
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.hide = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show the camera preview box.
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.show = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Take the picture (base64)
     * @param [options] {CameraPreviewPictureOptions} size and quality of the picture to take
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.takePicture = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * Set camera color effect.
     * @static
     * @param {string} effect name : 'none' (iOS & Android), 'aqua' (Android), 'blackboard' (Android), 'mono' (iOS & Android), 'negative' (iOS & Android), 'posterize' (iOS & Android), 'sepia' (iOS & Android), 'solarize' (Android) or 'whiteboard' (Android)
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.setColorEffect = function (effect) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set the zoom (Android)
     * @param [zoom] {number} Zoom value
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.setZoom = function (zoom) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
       * Get the maximum zoom (Android)
       * @return {Promise<any>}
       */
    CameraPreviewMock.prototype.getMaxZoom = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get current zoom (Android)
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getZoom = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set the preview Size
     * @param [dimensions] {CameraPreviewDimensions}
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.setPreviewSize = function (dimensions) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get focus mode
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getFocusMode = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set the focus mode
     * @param [focusMode] {string} 'fixed', 'auto', 'continuous-picture', 'continuous-video' (iOS & Android), 'edof', 'infinity', 'macro' (Android Only)
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.setFocusMode = function (focusMode) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get supported focus modes
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getSupportedFocusModes = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the current flash mode
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getFlashMode = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set the flashmode
     * @param [flashMode] {string} 'off' (iOS & Android), 'on' (iOS & Android), 'auto' (iOS & Android), 'torch' (Android)
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.setFlashMode = function (flashMode) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get supported flash modes
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getSupportedFlashModes = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get supported picture sizes
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getSupportedPictureSizes = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get exposure mode
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getExposureMode = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get exposure modes
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getExposureModes = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set exposure mode
     * @param [lock] {string}
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.setExposureMode = function (lock) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get exposure compensation (Android)
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getExposureCompensation = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set exposure compensation (Android)
     * @param [exposureCompensation] {number}
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.setExposureCompensation = function (exposureCompensation) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get exposure compensation range (Android)
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.getExposureCompensationRange = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set specific focus point. Note, this assumes the camera is full-screen.
     * @param xPoint {number}
     * @param yPoint {number}
     * @return {Promise<any>}
     */
    CameraPreviewMock.prototype.tapToFocus = function (xPoint, yPoint) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return CameraPreviewMock;
}(CameraPreview));
export { CameraPreviewMock };
//# sourceMappingURL=index.js.map