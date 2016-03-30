/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 26/03/16
 */
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {ClothDetailComponent} from "./cloth-detail.component";
import {Cloth} from "./cloth";
import {Router} from "angular2/router";
import {ClothService} from "./cloth.service";

@Component({
    selector: 'clothes-selector',
    templateUrl: 'app/clothes.component.html',
    styleUrls: ['app/clothes.component.css'],
    directives: [ClothDetailComponent]
})

export class ClothesComponent implements OnInit {
    clothes:Cloth[];
    selectedCloth:Cloth;

    constructor(private _router:Router, private _clothService:ClothService) {
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