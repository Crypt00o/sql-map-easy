"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlParser = void 0;
const sqlFilterAndPrepare_1 = require("./sqlFilterAndPrepare");
const sqlParser = (line, args) => {
    for (let i = args.length; i > 0; --i) {
        line = line.replace(RegExp(`\\$${i}`, 'g'), (0, sqlFilterAndPrepare_1.sqlFilterAndPrepare)(args[i - 1]));
    }
    return line;
};
exports.sqlParser = sqlParser;
//# sourceMappingURL=sqlParser.js.map