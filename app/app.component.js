System.register(['angular2/core', "angular2/router", "./clothes/cloth-detail.component.ts", "./clothes/cloth.service.ts", "./dashboard/dashboard.component.ts", "./clothes/clothes.component.ts", "./toc/cloth.service", "./toc.component"], function(exports_1, context_1) {
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
    var core_1, router_1, cloth_detail_component_ts_1, cloth_service_ts_1, dashboard_component_ts_1, clothes_component_ts_1, cloth_service_1, toc_component_1;
    var AppComponent;
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
            },
            function (dashboard_component_ts_1_1) {
                dashboard_component_ts_1 = dashboard_component_ts_1_1;
            },
            function (clothes_component_ts_1_1) {
                clothes_component_ts_1 = clothes_component_ts_1_1;
            },
            function (cloth_service_1_1) {
                cloth_service_1 = cloth_service_1_1;
            },
            function (toc_component_1_1) {
                toc_component_1 = toc_component_1_1;
            }],
        execute: function() {
            /**
             * @author Rizart Dokollari <r.dokollari@gmail.com>
             * @since 23/03/16
             */
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Clothes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-selector',
                        template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['ClothesIndex']\">Clothes</a>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['ClothTour']\">Tour of Clothes</a>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            cloth_service_ts_1.ClothLocalService, cloth_service_1.ClothService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_ts_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/details/:slug',
                            name: 'ClothDetail',
                            component: cloth_detail_component_ts_1.ClothDetailComponent
                        },
                        {
                            path: '/clothes',
                            name: 'ClothesIndex',
                            component: clothes_component_ts_1.ClothesComponent,
                        },
                        {
                            path: '/clothes/tour',
                            name: 'ClothTour',
                            component: toc_component_1.TocComponent,
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map