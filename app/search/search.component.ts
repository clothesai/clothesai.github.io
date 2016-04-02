/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 02/04/16
 */
import {Component} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {ClothService} from "../toc/cloth.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {SearchService} from "./search.service";
import {Cloth} from "../clothes/cloth";

@Component({
    selector: 'search-selector',
    template: `
    <h1>Search</h1>
    <p><i>Fetches when typing stops</i></p>

    <input #term (keyup)="search(term.value)" />

    <ul>
        <li *ngFor="#cloth of clothes | async">{{cloth.name}}</li>
    </ul>
    `,
    providers: [
        HTTP_PROVIDERS,
        SearchService
    ]
})
export class SearchComponent {

    constructor(private _searchService:SearchService) {
    }

    private _searchTermStream = new Subject<string>();

    search(term:string) {
        this._searchTermStream.next(term);
    }

    clothes:Observable<Cloth[]> = this._searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((term:string) => this._searchService.search(term));

}
