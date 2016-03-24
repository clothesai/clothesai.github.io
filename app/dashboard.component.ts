import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Cloth} from "./cloth";
import {Router} from "angular2/router";
import {ClothService} from "./cloth.service";
/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 24/03/16
 */

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    clothes:Cloth[];

    constructor(private _router:Router, private _clothService:ClothService) {
    }

)
}
