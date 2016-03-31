/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 24/03/16
 */
import {Injectable} from "angular2/core";

import {Cloth} from "./cloth";
import {CLOTHES} from './../mock-clothes'

@Injectable()
export class ClothService {
    apiUrl = 'http://api.clothesai.app/v1/clothes';

    getClothes() {
        return Promise.resolve(CLOTHES);
    }

    getClothesSlowly() {
        return new Promise<Cloth[]>(resolve =>
            setTimeout(() => resolve(CLOTHES), 1300));
    }

    getCloth(slug:string) {
        return Promise.resolve(CLOTHES).then(clothes => clothes.filter(
            cloth => cloth.slug === slug)[0]
        );
    }
}