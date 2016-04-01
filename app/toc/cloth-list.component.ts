/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 01/04/16
 */
import {Component, OnInit} from "angular2/core";

import {Cloth} from "../clothes/cloth";
import {ClothService} from "./cloth.service";

@Component({
    selector: 'clothes-list-selector',
    template: `
    <h3>Clothes:</h3>
    <ul>
        <li *ngFor="#cloth of clothes">
            {{cloth.name}}
        </li>
    </ul>
    <!--New Cloth:-->
    <!--<input #newCloth />-->
    <!--<button (click)="addCloth(newCloth.value); newCloth.value=''">-->
        <!--Add cloth-->
    <!--</button>-->
    <!--<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>-->
    `,
    styles: ['.error {color:red;}']
})
export class ClothListComponent implements OnInit {

    constructor(private _clothService:ClothService) {
    }

    errorMessage:string;
    clothes:Cloth[];

    ngOnInit():any {
        this.getClothes();
    }

    getClothes() {
        this._clothService.getClothes()
            .subscribe(
                clothes => this.clothes = clothes,
                error => this.errorMessage = <any>error);
    }

    //addCloth(name:string) {
    //    if (!name) {
    //        return;
    //    }
    //
    //    this._clothService.addCloth(name)
    //        .subscribe(
    //            cloth => this.clothes.push(cloth),
    //            error => this.errorMessage = <any>error);
    //}
}
