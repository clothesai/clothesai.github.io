System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Cloth;
    return {
        setters:[],
        execute: function() {
            /**
             * @author Rizart Dokollari <r.dokollari@gmail.com>
             * @since 24/03/16
             */
            Cloth = (function () {
                function Cloth(slug, name, description) {
                    this.slug = slug;
                    this.name = name;
                    this.description = description;
                    this.slug = slug;
                    this.name = name;
                    this.description = description || '';
                }
                return Cloth;
            }());
            exports_1("Cloth", Cloth);
        }
    }
});
//# sourceMappingURL=cloth.js.map