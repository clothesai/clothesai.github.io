/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 24/03/16
 */
import {Component} from 'angular2/core';
import {Cloth} from './cloth';

@Component({
    selector: 'cloth-detail',
    template: `
        <div *ngIf="cloth">
            <h2>{{cloth.name}} details</h2>
            <div><label>slug: </label>{{cloth.slug}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="cloth.name" placeholder="name"/>
            </div>
        </div>
  `,
    inputs: ['cloth']
})
export class ClothDetailComponent {
    cloth:Cloth;
}
