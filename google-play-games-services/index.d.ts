import { GooglePlayGamesServices } from '@ionic-native/google-play-games-services';
export interface ScoreData {
    /**
     * The score to submit.
     */
    score: number;
    /**
     * The leaderboard ID from Google Play Developer console.
     */
    leaderboardId: string;
}
export interface LeaderboardData {
    /**
     * The leaderboard ID from Goole Play Developer console.
     */
    leaderboardId: string;
}
export interface AchievementData {
    /**
     * The achievement ID from Google Play Developer console.
     */
    achievementId: string;
}
export interface IncrementableAchievementData extends AchievementData {
    /**
     * The amount to increment the achievement by.
     */
    numSteps: number;
}
export interface SignedInResponse {
    /**
     * True or false is the use is signed in.
     */
    isSignedIn: boolean;
}
export interface Player {
    /**
     * The players display name.
     */
    displayName: string;
    /**
     * The ID given to the player by Play Games Services.
     */
    playerId: string;
    /**
     * The title of the player based on their gameplay activity. Not
     * all players have this and it may change over time.
     */
    title: string | null;
    /**
     * Retrieves the URI for loading this player's icon-size profile image.
     * Returns null if the player has no profile image.
     */
    iconImageUrl: string;
    /**
     * Retrieves the URI for loading this player's hi-res profile image. Returns
     * null if the player has no profile image.
     */
    hiResIconImageUrl: string;
}
export declare class GooglePlayGamesServicesMock extends GooglePlayGamesServices {
    /**
     * Initialise native Play Games Service login procedure.
     *
     * @return {Promise<any>} Returns a promise that resolves when the player
     * is authenticated with Play Games Services.
     */
    auth(): Promise<any>;
    /**
     * Sign out of Google Play Games Services.
     *
     * @return {Promise<any>} Returns a promise that resolve when the player
     * successfully signs out.
     */
    signOut(): Promise<any>;
    /**
     * Check if the user is signed in.
     *
     * @return {Promise<SignedInResponse>} Returns a promise that resolves with
     * the signed in response.
     */
    isSignedIn(): Promise<SignedInResponse>;
    /**
     * Show the currently authenticated player.
     *
     * @return {Promise<Player>} Returns a promise that resolves when Play
     * Games Services returns the authenticated player.
     */
    showPlayer(): Promise<Player>;
    /**
     * Submit a score to a leaderboard. You should ensure that you have a
     * successful return from auth() before submitting a score.
     *
     * @param data {ScoreData} The score data you want to submit.
     * @return {Promise<any>} Returns a promise that resolves when the
     * score is submitted.
     */
    submitScore(data: ScoreData): Promise<string>;
    /**
     * Launches the native Play Games leaderboard view controller to show all the
     * leaderboards.
     *
     * @return {Promise<any>} Returns a promise that resolves when the native
     * leaderboards window opens.
     */
    showAllLeaderboards(): Promise<any>;
    /**
     * Launches the native Play Games leaderboard view controll to show the
     * specified leaderboard.
     *
     * @param data {LeaderboardData} The leaderboard you want to show.
     * @return {Promise<any>} Returns a promise that resolves when the native
     * leaderboard window opens.
     */
    showLeaderboard(data: LeaderboardData): Promise<any>;
    /**
     * Unlock an achievement.
     *
     * @param data {AchievementData}
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement is unlocked.
     */
    unlockAchievement(data: AchievementData): Promise<string>;
    /**
     * Increment an achievement.
     *
     * @param data {IncrementableAchievementData}
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement is incremented.
     */
    incrementAchievement(data: IncrementableAchievementData): Promise<string>;
    /**
     * Lauches the native Play Games achievements view controller to show
     * achievements.
     *
     * @return {Promise<any>} Returns a promise that resolves when the
     * achievement window opens.
     */
    showAchievements(): Promise<any>;
}
