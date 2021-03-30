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
import { Contacts } from '@ionic-native/contacts';
/**
 * @hidden
 */
var Contact = (function () {
    function Contact() {
    }
    Contact.prototype.clone = function () { return new Contact(); };
    ;
    Contact.prototype.remove = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ;
    Contact.prototype.save = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    return Contact;
}());
export { Contact };
/**
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * @usage
 *
 * ```typescript
 * import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
 *
 * constructor(private contacts: Contacts) { }
 *
 * let contact: Contact = this.contacts.create();
 *
 * contact.name = new ContactName(null, 'Smith', 'John');
 * contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
 * contact.save().then(
 *   () => console.log('Contact saved!', contact),
 *   (error: any) => console.error('Error saving contact.', error)
 * );
 *
 * ```
 * @classes
 * Contact
 * @interfaces
 * IContactProperties
 * IContactError
 * IContactName
 * IContactField
 * IContactAddress
 * IContactOrganization
 * IContactFindOptions
 */
var ContactsMocks = (function (_super) {
    __extends(ContactsMocks, _super);
    function ContactsMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    ContactsMocks.prototype.create = function () {
        var newContact = new Contact();
        return (newContact);
    };
    ;
    /**
     * Search for contacts in the Contacts list.
     * @param {ContactFieldType[]} fields Contact fields to be used as a search qualifier
     * @param {IContactFindOptions} [options] Optional options for the query
     * @returns {Promise<Contact[]>} Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    ContactsMocks.prototype.find = function (fields, options) {
        var theContact = new Contact();
        theContact.displayName = 'Max Lynch';
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Select a single Contact.
     * @returns {Promise<Contact>} Returns a Promise that resolves with the selected Contact
     */
    ContactsMocks.prototype.pickContact = function () {
        var theContact = new Contact();
        theContact.displayName = 'Max Lynch';
        return new Promise(function (resolve, reject) {
            resolve(theContact);
        });
    };
    ;
    return ContactsMocks;
}(Contacts));
export { ContactsMocks };
//# sourceMappingURL=index.js.map