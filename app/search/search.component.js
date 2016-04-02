System.register(["angular2/core", "angular2/http", "rxjs/Subject", "./search.service"], function(exports_1, context_1) {
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
    var core_1, http_1, Subject_1, search_service_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(_searchService) {
                    var _this = this;
                    this._searchService = _searchService;
                    this._searchTermStream = new Subject_1.Subject();
                    this.clothes = this._searchTermStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this._searchService.search(term); });
                }
                SearchComponent.prototype.search = function (term) {
                    if (!term.replace(/\s/g, '').length) {
                        return;
                    }
                    this._searchTermStream.next(term);
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search-selector',
                        template: "\n    <h1>Search</h1>\n    <p><i>Fetches when typing stops</i></p>\n\n    <input #term (keyup)=\"search(term.value)\" />\n\n    <ul>\n        <li *ngFor=\"#cloth of clothes | async\">{{cloth.name}}</li>\n    </ul>\n    ",
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            search_service_1.SearchService
                        ]
                    }), 
                    __metadata('design:paramtypes', [search_service_1.SearchService])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map