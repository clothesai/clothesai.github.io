import {Component} from 'angular2/core';
import {Http} from "angular2/http";
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Cloth} from "./cloth";
import {ClothDetailComponent} from "./cloth-detail.component";
import {ClothService} from "./cloth.service";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";
import {RouteConfig} from "angular2/router";

/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 23/03/16
 */

@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Clothes']">Cloth</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ClothService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:slug',
        name: 'ClothDetail',
        component: ClothDetailComponent
    },
    {
        path: '/',
        name: 'Clothes',
        component: ClothesComponent
    }
])
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
