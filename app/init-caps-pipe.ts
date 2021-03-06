/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 01/04/16
 */
import {Pipe, PipeTransform} from "angular2/core";

@Pipe({name: 'initCaps'})
export class InitCapsPipe implements PipeTransform {
    transform(value:string) {
        return value.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
            return m.toUpperCase();
        });
    }
}
