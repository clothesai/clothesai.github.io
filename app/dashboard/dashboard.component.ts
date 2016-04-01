/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 24/03/16
 */
import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";

import {Cloth} from "./../clothes/cloth";
import {ClothLocalService} from "./../clothes/cloth.service.ts";

@Component({
    selector: 'dashboard-selector',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    clothes:Cloth[] = [];

    constructor(private _clothService:ClothLocalService, private _router:Router) {
    }

    ngOnInit() {
        this._clothService.getClothes()
            .then(clothes => this.clothes = clothes.slice(1, 5))
    }

    goToDetail(cloth:Cloth) {
        let link = ['ClothDetail', {slug: cloth.slug}];
        this._router.navigate(link);
    }
}
