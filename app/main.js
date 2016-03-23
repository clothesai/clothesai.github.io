/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 23/03/16
 */
(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.AppComponent);
    })
})(window.app || (window.app = {}));
