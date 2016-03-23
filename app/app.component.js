/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 23/03/16
 */
(function (app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                template: '<h1>Search</h1>'
            })
            .Class({
                constructor: function () {
                }
            });
})(window.app || (window.app = {}));
