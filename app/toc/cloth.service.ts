/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 24/03/16
 */
import {Injectable} from "angular2/core";
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

import {Cloth} from "../clothes/cloth";

@Injectable()
export class ClothService {

    private _clothesUrl = 'http://api-clothesai.herokuapp.com/v1/clothes';

    constructor(private http:Http) {
    }

    getClothes() {
        return this.http.get(this._clothesUrl)
            .map(res => <Cloth[]> res.json().data)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error:Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}