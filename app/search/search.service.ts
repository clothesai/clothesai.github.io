/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 02/04/16
 */
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {URLSearchParams} from "angular2/http";
import {Cloth} from "../clothes/cloth";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SearchService {

    constructor(private http:Http) {
    }

    search(term:string) {
        let clothesSearchUrl = 'http://api-clothesai.herokuapp.com/v1/clothes/search/' + term;

        return this.http.get(clothesSearchUrl)
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
