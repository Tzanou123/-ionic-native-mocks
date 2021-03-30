import { DNS } from '@ionic-native/dns';
export declare class DNSMock extends DNS {
    /**
     * Resolve hostnames into an underlying network address.
     * @param hostname
     * @returns {Promise<string>} Returns a promise that resolves with the resolution.
     */
    resolve(hostname: string): Promise<string>;
}
