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
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
import { Observable } from 'rxjs/Observable';
var FirebaseDynamicLinksMocks = (function (_super) {
    __extends(FirebaseDynamicLinksMocks, _super);
    function FirebaseDynamicLinksMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
      * Registers callback that is triggered on each dynamic link click.
      * @return {Observable<IDynamicLink>} Returns an observable
      */
    FirebaseDynamicLinksMocks.prototype.onDynamicLink = function () {
        return Observable.create(function (observer) {
            var response;
            observer.next(response);
            observer.complete();
        });
    };
    ;
    return FirebaseDynamicLinksMocks;
}(FirebaseDynamicLinks));
export { FirebaseDynamicLinksMocks };
//# sourceMappingURL=index.js.map