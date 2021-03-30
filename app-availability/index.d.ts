import { AppAvailability } from '@ionic-native/app-availability';
export declare class AppAvailabilityMock extends AppAvailability {
    /**
     * Checks if an app is available on device
     * @param {string} app Package name on android, or URI scheme on iOS
     * @returns {Promise<boolean>}
     */
    check(app: string): Promise<boolean>;
}
