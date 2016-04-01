/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 24/03/16
 */
import {Component, OnInit, Input} from "angular2/core";
import {RouteParams} from "angular2/router";

import {Cloth} from './cloth';
import {ClothLocalService} from "./cloth.service.ts";

@Component({
    selector: 'cloth-detail-selector',
    templateUrl: 'app/clothes/cloth-detail.component.html',
    styleUrls: ['app/clothes/cloth-detail.component.css'],
})
export class ClothDetailComponent implements OnInit {
    @Input() cloth:Cloth;

    constructor(private _clothService:ClothLocalService, private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let slug = this._routeParams.get('slug');

        this._clothService.getCloth(slug)
            .then(cloth => this.cloth = cloth);
    }

    goBack() {
        window.history.back();
    }
}
