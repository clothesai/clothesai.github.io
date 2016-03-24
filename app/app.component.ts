/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 23/03/16
 */
import {Component} from 'angular2/core';
import {Http} from "angular2/http";
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Cloth} from "./cloth";
import {ClothDetailComponent} from "./cloth-detail.component";

@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    template: `
        <h1>{{title}}</h1>
        <h2>Clothes</h2>
        <ul class="clothes">
            <li *ngFor="#cloth of clothes"
                [class.selected]="cloth === selectedCloth"
                (click)="onSelect(cloth)">
                <span class="badge">{{cloth.slug}}</span> {{cloth.name}}
            </li>
        </ul>
        <cloth-detail [cloth]="selectedCloth"></cloth-detail>
    `,
    styles: [`
 .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .clothes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .clothes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .clothes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .clothes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .clothes .text {
      position: relative;
      top: -3px;
    }
    .clothes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
    directives: [ClothDetailComponent]
})
export class AppComponent {
    public title = 'ClothesAi';
    clothes = CLOTHES;
    selectedCloth:Cloth;

    //constructor(http:Http) {
    //    http.get('http://api.clothesai.app/v1/clothes')
    //        .map(res => res.json())
    //        .subscribe(clothes => this.clothes = clothes);
    //}

    onSelect(cloth:Cloth) {
        this.selectedCloth = cloth;
    }
}
//console.log('clothes: ' + this.clothes);

var CLOTHES:Cloth[] = [
    {"slug": "11", "name": "Mr. Nice", "description": "description1"},
    {"slug": "12", "name": "Narco", "description": "description2"},
    {"slug": "13", "name": "Bombasto", "description": "description3"},
    {"slug": "14", "name": "Celeritas", "description": "description4"},
    {"slug": "15", "name": "Magneta", "description": "description5"},
    {"slug": "16", "name": "RubberMan", "description": "description6"},
    {"slug": "17", "name": "Dynama", "description": "description7"},
    {"slug": "18", "name": "Dr IQ", "description": "description8"},
    {"slug": "19", "name": "Magma", "description": "description19"},
    {"slug": "20", "name": "Tornado", "description": "description10"},
];
