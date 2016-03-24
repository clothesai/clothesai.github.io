System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var AppComponent, CLOTHES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'ClothesAi';
                    this.clothes = CLOTHES;
                }
                //constructor(http:Http) {
                //    http.get('http://api.clothesai.app/v1/clothes')
                //        .map(res => res.json())
                //        .subscribe(clothes => this.clothes = clothes);
                //}
                AppComponent.prototype.onSelect = function (cloth) {
                    this.selectedCloth = cloth;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        template: "\n        <h1>{{title}}</h1>\n        <h2>Clothes</h2>\n        <ul class=\"clothes\">\n            <li *ngFor=\"#cloth of clothes\"\n                [class.selected]=\"cloth === selectedCloth\"\n                (click)=\"onSelect(cloth)\">\n                <span class=\"badge\">{{cloth.slug}}</span> {{cloth.name}}\n            </li>\n        </ul>\n        <div *ngIf=\"selectedCloth\">\n            <h2>{{selectedCloth.name}} details</h2>\n            <div><label>slug: </label>{{selectedCloth.slug}}</div>\n            <div>\n                <label>name: </label>\n                <input [(ngModel)]=\"selectedCloth.name\" placeholder=\"name\"/>\n            </div>\n        </div>\n    ",
                        styles: ["\n .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .clothes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .clothes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .clothes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .clothes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .clothes .text {\n      position: relative;\n      top: -3px;\n    }\n    .clothes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            //console.log('clothes: ' + this.clothes);
            CLOTHES = [
                { "slug": "11", "name": "Mr. Nice", "description": "description1" },
                { "slug": "12", "name": "Narco", "description": "description2" },
                { "slug": "13", "name": "Bombasto", "description": "description3" },
                { "slug": "14", "name": "Celeritas", "description": "description4" },
                { "slug": "15", "name": "Magneta", "description": "description5" },
                { "slug": "16", "name": "RubberMan", "description": "description6" },
                { "slug": "17", "name": "Dynama", "description": "description7" },
                { "slug": "18", "name": "Dr IQ", "description": "description8" },
                { "slug": "19", "name": "Magma", "description": "description19" },
                { "slug": "20", "name": "Tornado", "description": "description10" },
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map