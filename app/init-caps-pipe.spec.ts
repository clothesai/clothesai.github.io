import {InitCapsPipe} from "./init-caps-pipe";
/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 01/04/16
 */
describe('InitCapsPipe', () => {
    let pipe:InitCapsPipe;

    beforeEach(() => {
        pipe = new InitCapsPipe();
    });

    it('transforms "abc def" to "Abc Def"', () => {
        expect(pipe.transform('abc def')).toEqual('Abc Def');
    });

    it('leaves "Abc Def" unchanged', () => {
        expect(pipe.transform('Abc Def')).toEqual('Abc Def');
    });
});
