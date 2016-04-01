System.register(["angular2/core", "angular2/router", './cloth', "./cloth.service.ts"], function(exports_1, context_1) {
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
    var core_1, router_1, cloth_1, cloth_service_ts_1;
    var ClothDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cloth_1_1) {
                cloth_1 = cloth_1_1;
            },
            function (cloth_service_ts_1_1) {
                cloth_service_ts_1 = cloth_service_ts_1_1;
            }],
        execute: function() {
            ClothDetailComponent = (function () {
                function ClothDetailComponent(_clothService, _routeParams) {
                    this._clothService = _clothService;
                    this._routeParams = _routeParams;
                }
                ClothDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var slug = this._routeParams.get('slug');
                    this._clothService.getCloth(slug)
                        .then(function (cloth) { return _this.cloth = cloth; });
                };
                ClothDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', cloth_1.Cloth)
                ], ClothDetailComponent.prototype, "cloth", void 0);
                ClothDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'cloth-detail-selector',
                        templateUrl: 'app/clothes/cloth-detail.component.html',
                        styleUrls: ['app/clothes/cloth-detail.component.css'],
                    }), 
                    __metadata('design:paramtypes', [cloth_service_ts_1.ClothLocalService, router_1.RouteParams])
                ], ClothDetailComponent);
                return ClothDetailComponent;
            }());
            exports_1("ClothDetailComponent", ClothDetailComponent);
        }
    }
});
//# sourceMappingURL=cloth-detail.component.js.map