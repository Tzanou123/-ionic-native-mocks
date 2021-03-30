import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
import { Observable } from 'rxjs/Observable';
export interface IDynamicLink {
    matchType: 'Weak' | 'Strong';
    deepLink: string;
}
export declare class FirebaseDynamicLinksMocks extends FirebaseDynamicLinks {
    /**
      * Registers callback that is triggered on each dynamic link click.
      * @return {Observable<IDynamicLink>} Returns an observable
      */
    onDynamicLink(): Observable<IDynamicLink>;
}
