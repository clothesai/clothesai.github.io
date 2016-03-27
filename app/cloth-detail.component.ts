/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 24/03/16
 */
import {Component, Input, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {Cloth} from './cloth';
import {ClothService} from "./cloth.service";

@Component({
    selector: 'cloth-detail-selector',
    template: 'app/cloth-detail.component.html',
})
export class ClothDetailComponent implements OnInit {
    @Input() cloth:Cloth;

    constructor(private _clothService:ClothService, private _routeParams:RouteParams) {
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
