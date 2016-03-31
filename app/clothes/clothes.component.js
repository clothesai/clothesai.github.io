System.register(["angular2/core", "angular2/router", "./cloth-detail.component.ts", "./cloth.service.ts"], function(exports_1, context_1) {
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
    var core_1, router_1, cloth_detail_component_ts_1, cloth_service_ts_1;
    var ClothesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cloth_detail_component_ts_1_1) {
                cloth_detail_component_ts_1 = cloth_detail_component_ts_1_1;
            },
            function (cloth_service_ts_1_1) {
                cloth_service_ts_1 = cloth_service_ts_1_1;
            }],
        execute: function() {
            ClothesComponent = (function () {
                function ClothesComponent(_router, _clothService) {
                    this._router = _router;
                    this._clothService = _clothService;
                }
                ClothesComponent.prototype.getClothes = function () {
                    var _this = this;
                    this._clothService.getClothes()
                        .then(function (clothes) { return _this.clothes = clothes; });
                };
                ClothesComponent.prototype.ngOnInit = function () {
                    this.getClothes();
                };
                ClothesComponent.prototype.onSelect = function (cloth) {
                    this.selectedCloth = cloth;
                };
                ClothesComponent.prototype.goToDetail = function () {
                    this._router.navigate(['ClothDetail', { slug: this.selectedCloth.slug }]);
                };
                ClothesComponent = __decorate([
                    core_1.Component({
                        selector: 'clothes-selector',
                        templateUrl: 'app/clothes/clothes.component.html',
                        styleUrls: ['app/clothes/clothes.component.css'],
                        directives: [cloth_detail_component_ts_1.ClothDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, cloth_service_ts_1.ClothService])
                ], ClothesComponent);
                return ClothesComponent;
            }());
            exports_1("ClothesComponent", ClothesComponent);
        }
    }
});
//# sourceMappingURL=clothes.component.js.map