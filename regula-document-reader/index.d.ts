import { RegulaDocumentReader } from '@ionic-native/regula-document-reader';
export declare class RegulaDocumentReaderMock extends RegulaDocumentReader {
    /**
     * Initialize the scanner
     * @param license {any} License data
     */
    initReader(license: any): void;
    /**
     * Run the scanner
     * @return {Promise<string[]>} Returns a promise that resolves when results was got, and fails when not
     */
    scanDocument(): Promise<string[]>;
}
