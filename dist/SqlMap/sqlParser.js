"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlParser = void 0;
const sqlFilterAndPrepare_1 = require("./sqlFilterAndPrepare");
const make32CharTmp_1 = require("./make32CharTmp");
const sqlParser = (line, args) => {
    const tmp = (0, make32CharTmp_1.make32CharTmp)();
    for (let i = args.length; i > 0; --i) {
        line = line.replace(RegExp(`\\$${i}`, 'g'), (0, sqlFilterAndPrepare_1.sqlFilterAndPrepare)(args[i - 1], tmp));
    }
    line = line.replace(RegExp(tmp, 'g'), '$');
    return line;
};
exports.sqlParser = sqlParser;
//# sourceMappingURL=sqlParser.js.map