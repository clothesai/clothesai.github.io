System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    var _this = this;
                    this.title = 'ClothesAi';
                    http.get('http://api-clothesai.herokuapp.com/v1/clothes')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (clothes) { return _this.clothes = clothes; });
                }
                AppComponent.prototype.onSelect = function (cloth) {
                    this.selectedCloth = cloth;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        template: "\n    <h1>{{title}}</h1>\n    <h2>Clothes</h2>\n    <ul class=\"clothes\">\n        <li *ngFor=\"#cloth of clothes\"\n            [class.selected]=\"cloth === selectedCloth\"\n            (click)=\"onSelect(cloth\">\n            <span class=\"badge\">{{cloth.name}}</span> {{\n        </li>\n    </ul>\n    <div><label>Description: </label>{{cloth.description}}</div>\n    <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"cloth.name\" placeholder=\"name\">\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//var CLOTHES: Cloth[] = http.get('people.json').observer({next: (value) => this.people = value});
//# sourceMappingURL=app.component.js.map