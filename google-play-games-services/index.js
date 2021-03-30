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
import { GooglePlayGamesServices } from '@ionic-native/google-play-games-services';
var GooglePlayGamesServicesMock = (function (_super) {
    __extends(GooglePlayGamesServicesMock, _super);
    function GooglePlayGamesServicesMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initialise native Play Games Service login procedure.
     *
     * @return {Promise<any>} Returns a promise that resolves when the player
     * is authenticated with Play Games Services.
     */
    GooglePlayGamesServicesMock.prototype.auth = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sign out of Google Play Games Services.
     *
     * @return {Promise<any>} Returns a promise that resolve when the player
     * successfully signs out.
     */
    GooglePlayGamesServicesMock.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Check if the user is signed in.
     *
     * @return {Promise<SignedInResponse>} Returns a promise that resolves with
     * the signed in response.
     */
    GooglePlayGamesServicesMock.prototype.isSignedIn = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Show the currently authenticated player.
     *
     * @return {Promise<Player>} Returns a promise that resolves when Play
     * Games Services returns the authenticated player.
     */
    GooglePlayGamesServicesMock.prototype.showPlayer = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Submit a score to a leaderboard. You should ensure that you have a
     * successful return from auth() before submitting a score.
     *
     * @param data {ScoreData} The score data you want to submit.
     * @return {Promise<any>} Returns a promise that resolves when the
     * score is submitted.
     */
    GooglePlayGamesServicesMock.prototype.submitScore = function (data) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Launches the native Play Games leaderboard view controller to show all the
     * leaderboards.
     *
     * @return {Promise<any>} Returns a promise that resolves when the native
     * leaderboards window opens.
     */
    GooglePlayGamesServicesMock.prototype.showAllLeaderboards = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Launches the native Play Games leaderboard view controll to show the
     * specified leaderboard.
     *
     * @param data {LeaderboardData} The leaderboard you want to show.
     * @return {Promise<any>} Returns a promise that resolves when the native
     * leaderboard window opens.
     */
    GooglePlayGamesServicesMock.prototype.showLeaderboard = function (data) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Unlock an achievement.
     *
     * @param data {AchievementData}
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement is unlocked.
     */
    GooglePlayGamesServicesMock.prototype.unlockAchievement = function (data) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Increment an achievement.
     *
     * @param data {IncrementableAchievementData}
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement is incremented.
     */
    GooglePlayGamesServicesMock.prototype.incrementAchievement = function (data) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Lauches the native Play Games achievements view controller to show
     * achievements.
     *
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement window opens.
     */
    GooglePlayGamesServicesMock.prototype.showAchievements = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return GooglePlayGamesServicesMock;
}(GooglePlayGamesServices));
export { GooglePlayGamesServicesMock };
//# sourceMappingURL=index.js.map