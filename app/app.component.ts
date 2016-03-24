import {Component} from 'angular2/core';
import {Http} from "angular2/http";
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Cloth} from "./cloth";
import {ClothDetailComponent} from "./cloth-detail.component";
import {ClothService} from "./cloth.service";

/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 23/03/16
 */

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
    directives: [ClothDetailComponent],
    providers: [ClothService]
})
export class AppComponent {
    public title = 'ClothesAi';
    clothes:Cloth[];
    selectedCloth:Cloth;

    constructor(private _clothService:ClothService) {
    }

    getClothes() {
        this._clothService.getClothes().then(clothes => this.clothes = clothes);
    }

    ngOnInit() {
        this.getClothes();
    }

    onSelect(cloth:Cloth) {
        this.selectedCloth = cloth;
    }
}
//console.log('clothes: ' + this.clothes);
