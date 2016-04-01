System.register(["angular2/core", './../mock-clothes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_clothes_1;
    var ClothLocalService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_clothes_1_1) {
                mock_clothes_1 = mock_clothes_1_1;
            }],
        execute: function() {
            ClothLocalService = (function () {
                function ClothLocalService() {
                    this.apiUrl = 'http://api.clothesai.app/v1/clothes';
                }
                ClothLocalService.prototype.getClothes = function () {
                    return Promise.resolve(mock_clothes_1.CLOTHES);
                };
                ClothLocalService.prototype.getClothesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_clothes_1.CLOTHES); }, 1300);
                    });
                };
                ClothLocalService.prototype.getCloth = function (slug) {
                    return Promise.resolve(mock_clothes_1.CLOTHES).then(function (clothes) { return clothes.filter(function (cloth) { return cloth.slug === slug; })[0]; });
                };
                ClothLocalService.prototype.addCloth = function (name) {
                };
                ClothLocalService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ClothLocalService);
                return ClothLocalService;
            }());
            exports_1("ClothLocalService", ClothLocalService);
        }
    }
});
//# sourceMappingURL=cloth.service.js.map