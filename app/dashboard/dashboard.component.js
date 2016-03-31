System.register(["angular2/core", "angular2/router", "./../clothes/cloth.service.ts"], function(exports_1, context_1) {
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
    var core_1, router_1, cloth_service_ts_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cloth_service_ts_1_1) {
                cloth_service_ts_1 = cloth_service_ts_1_1;
            }],
        execute: function() {
            /**
             * @author Rizart Dokollari <r.dokollari@gmail.com>
             * @since 24/03/16
             */
            DashboardComponent = (function () {
                function DashboardComponent(_clothService, _router) {
                    this._clothService = _clothService;
                    this._router = _router;
                    this.clothes = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._clothService.getClothes()
                        .then(function (clothes) { return _this.clothes = clothes.slice(1, 5); });
                };
                DashboardComponent.prototype.goToDetail = function (cloth) {
                    var link = ['ClothDetail', { slug: cloth.slug }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-selector',
                        templateUrl: 'app/dashboard/dashboard.component.html',
                        styleUrls: ['app/dashboard/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [cloth_service_ts_1.ClothService, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map