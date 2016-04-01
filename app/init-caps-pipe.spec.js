System.register(["./init-caps-pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var init_caps_pipe_1;
    return {
        setters:[
            function (init_caps_pipe_1_1) {
                init_caps_pipe_1 = init_caps_pipe_1_1;
            }],
        execute: function() {
            /**
             * @author Rizart Dokollari <r.dokollari@gmail.com>
             * @since 01/04/16
             */
            describe('InitCapsPipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new init_caps_pipe_1.InitCapsPipe();
                });
                it('transforms "abc def" to "Abc Def"', function () {
                    expect(pipe.transform('abc def')).toEqual('Abc Def');
                });
                it('leaves "Abc Def" unchanged', function () {
                    expect(pipe.transform('Abc Def')).toEqual('Abc Def');
                });
            });
        }
    }
});
//# sourceMappingURL=init-caps-pipe.spec.js.map