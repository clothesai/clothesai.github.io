/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 26/03/16
 */
import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";

import {Cloth} from "./cloth";
import {ClothDetailComponent} from "./cloth-detail.component.ts";
import {ClothLocalService} from "./cloth.service.ts";

@Component({
    selector: 'clothes-selector',
    templateUrl: 'app/clothes/clothes.component.html',
    styleUrls: ['app/clothes/clothes.component.css'],
    directives: [ClothDetailComponent],
})
export class ClothesComponent implements OnInit {

    clothes:Cloth[];
    selectedCloth:Cloth;

    constructor(private _router:Router, private _clothService:ClothLocalService) {
    }

    getClothes() {
        this._clothService.getClothes()
            .then(clothes => this.clothes = clothes);
    }

    ngOnInit() {
        this.getClothes();
    }

    onSelect(cloth:Cloth) {
        this.selectedCloth = cloth;
    }

    goToDetail() {
        this._router.navigate(['ClothDetail', {slug: this.selectedCloth.slug}]);
    }
}