"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make32CharTmp = void 0;
function make32CharTmp() {
    let result = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 32; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}
exports.make32CharTmp = make32CharTmp;
//# sourceMappingURL=make32CharTmp.js.map