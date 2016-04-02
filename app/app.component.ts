import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";

import {Cloth} from "./clothes/cloth";
import {ClothDetailComponent} from "./clothes/cloth-detail.component.ts";
import {ClothLocalService} from "./clothes/cloth.service.ts";
import {DashboardComponent} from "./dashboard/dashboard.component.ts";
import {ClothesComponent} from "./clothes/clothes.component.ts";
import {ClothListComponent} from "./toc/cloth-list.component";
import {ClothService} from "./toc/cloth.service";
import {TocComponent} from "./toc.component";

/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 23/03/16
 */
@Component({
    selector: 'app-selector',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['ClothesIndex']">Clothes</a>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['ClothTour']">Tour of Clothes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ClothLocalService, ClothService
    ]
})
@RouteConfig([
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/details/:slug',
        name: 'ClothDetail',
        component: ClothDetailComponent
    },
    {
        path: '/clothes',
        name: 'ClothesIndex',
        component: ClothesComponent,
    },
    {
        path: '/clothes/tour',
        name: 'ClothTour',
        component: TocComponent,
    }
])
export class AppComponent {
    title = 'Clothes'
}
