/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 23/03/16
 */
import {Component} from 'angular2/core';

interface Cloth {
    slug: string;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{cloth.name}}</h2>
    <div><label>slug: </label>{{cloth.slug}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="cloth.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
    public title = 'ClothesAi';
    public cloth:Cloth = {
        slug: 'red-shirt',
        name: 'Red Shirt'
    }
}
