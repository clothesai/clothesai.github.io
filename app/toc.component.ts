/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 01/04/16
 */
import {Component} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";

import {Cloth} from "./clothes/cloth";
import {ClothListComponent} from "./toc/cloth-list.component";
import {ClothService} from "./toc/cloth.service";

@Component({
    selector: 'toc-selector',
    template: `
        <h1>Tour of Clothes</h1>
        <clothes-list-selector></clothes-list-selector>
    `,
    directives: [ClothListComponent],
    providers: [
        HTTP_PROVIDERS,
        ClothService
    ]
})
export class TocComponent {
}
