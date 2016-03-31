System.register(["./cloth"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var cloth_1;
    return {
        setters:[
            function (cloth_1_1) {
                cloth_1 = cloth_1_1;
            }],
        execute: function() {
            /**
             * @author Rizart Dokollari <r.dokollari@gmail.com>
             * @since 31/03/16
             */
            describe('Cloth', function () {
                it('has name given in the constructor', function () {
                    var cloth = new cloth_1.Cloth('red-shirt', 'Red Shirt');
                    expect(cloth.name).toEqual('Red Shirt');
                });
                it('has slug given in the constructor', function () {
                    var cloth = new cloth_1.Cloth('blue-shirt', 'Blue Shirt');
                    expect(cloth.slug).toEqual('blue-shirt');
                });
                it('has description given in the constructor', function () {
                    var cloth = new cloth_1.Cloth('blue-shirt', 'Blue Shirt', 'some description');
                    expect(cloth.description).toEqual('some description');
                });
            });
        }
    }
});
//# sourceMappingURL=cloth.spec.js.map