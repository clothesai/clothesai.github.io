/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 23/03/16
 */
import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

interface Cloth {
    name: string;
    description: string;
}

@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    template: `
    <h1>{{title}}</h1>
    <h2>Clothes</h2>
    <ul class="clothes">
        <li *ngFor="#cloth of clothes"
            [class.selected]="cloth === selectedCloth"
            (click)="onSelect(cloth">
            <span class="badge">{{cloth.name}}</span> {{
        </li>
    </ul>
    <div><label>Description: </label>{{cloth.description}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="cloth.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
    public title = 'ClothesAi';
    clothes;
    selectedCloth:Cloth;

    constructor(http:Http) {
        http.get('http://api-clothesai.herokuapp.com/v1/clothes')
            .map(res => res.json())
            .subscribe(clothes => this.clothes = clothes);
    }

    onSelect(cloth:Cloth) {
        this.selectedCloth = cloth;
    }
}

//var CLOTHES: Cloth[] = http.get('people.json').observer({next: (value) => this.people = value});
