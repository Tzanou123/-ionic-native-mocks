import { AndroidFullScreen } from '@ionic-native/android-full-screen';
export declare class AndroidFullScreenMock extends AndroidFullScreen {
    /**
     * Is this plugin supported?
     * @return {Promise<void>}
     */
    isSupported(): Promise<any>;
    /**
     * Is immersive mode supported?
     * @return {Promise<void>}
     */
    isImmersiveModeSupported(): Promise<any>;
    /**
     * The width of the screen in immersive mode.
     * @return {Promise<number>}
     */
    immersiveWidth(): Promise<number>;
    /**
     * The height of the screen in immersive mode.
     * @return {Promise<number>}
     */
    immersiveHeight(): Promise<number>;
    /**
     * Hide system UI until user interacts.
     * @return {Promise<void>}
     */
    leanMode(): Promise<any>;
    /**
     * Show system UI.
     * @return {Promise<void>}
     */
    showSystemUI(): Promise<any>;
    /**
     * Extend your app underneath the status bar (Android 4.4+ only).
     * @return {Promise<void>}
     */
    showUnderStatusBar(): Promise<any>;
    /**
     * Extend your app underneath the system UI (Android 4.4+ only).
     * @return {Promise<void>}
     */
    showUnderSystemUI(): Promise<any>;
    /**
     * Hide system UI and keep it hidden (Android 4.4+ only).
     * @return {Promise<void>}
     */
    immersiveMode(): Promise<any>;
}
