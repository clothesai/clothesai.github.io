import {Cloth} from "./cloth";

/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 31/03/16
 */
describe('Cloth', () => {
    it('has name given in the constructor', () => {
        let cloth = new Cloth('red-shirt', 'Red Shirt');
        expect(cloth.name).toEqual('Red Shirt');
    });

    it('has slug given in the constructor', () => {
        let cloth = new Cloth('blue-shirt', 'Blue Shirt');
        expect(cloth.slug).toEqual('blue-shirt');
    });

    it('has description given in the constructor', () => {
        let cloth = new Cloth('blue-shirt', 'Blue Shirt', 'some description');
        expect(cloth.description).toEqual('some description');
    });
});

