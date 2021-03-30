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
import { AndroidExoplayer } from '@ionic-native/android-exoplayer';
import { Observable } from 'rxjs/Observable';
var AndroidExoplayerMock = (function (_super) {
    __extends(AndroidExoplayerMock, _super);
    function AndroidExoplayerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show the player.
     * @param parameters {AndroidExoPlayerParams} Parameters
     * @return {Observable<AndroidExoplayerState>}
     */
    AndroidExoplayerMock.prototype.show = function (parameters) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Switch stream without disposing of the player.
     * @param url {string} The url of the new stream.
     * @param controller {AndroidExoPlayerControllerConfig} Configuration of the controller.
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.setStream = function (url, controller) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Will pause if playing and play if paused
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.playPause = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop playing.
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.stop = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Jump to a particular position.
     * @param milliseconds {number} Position in stream in milliseconds
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.seekTo = function (milliseconds) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Jump to a particular time relative to the current position.
     * @param milliseconds {number} Time in milliseconds
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.seekBy = function (milliseconds) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the current player state.
     * @return {Promise<AndroidExoplayerState>}
     */
    AndroidExoplayerMock.prototype.getState = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Show the controller.
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.showController = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Hide the controller.
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.hideController = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Update the controller configuration.
     * @param controller {AndroidExoPlayerControllerConfig} Configuration of the controller.
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.setController = function (controller) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Close and dispose of player, call before destroy.
     * @return {Promise<void>}
     */
    AndroidExoplayerMock.prototype.close = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AndroidExoplayerMock;
}(AndroidExoplayer));
export { AndroidExoplayerMock };
//# sourceMappingURL=index.js.map