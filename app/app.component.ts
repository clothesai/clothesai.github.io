import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {Cloth} from "./cloth";
import {ClothDetailComponent} from "./cloth-detail.component";
import {ClothService} from "./cloth.service";
import {DashboardComponent} from "./dashboard.component";
import {ClothesComponent} from "./clothes.component";

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
        path: '/details/:slug',
        name: 'ClothDetail',
        component: ClothDetailComponent
    },
    {
        path: '/clothes',
        name: 'ClothesIndex',
        component: ClothesComponent,
    }
])
export class AppComponent {
    title = 'Clothes'
}
