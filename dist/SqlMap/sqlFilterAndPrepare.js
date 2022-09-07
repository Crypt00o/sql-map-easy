"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlFilterAndPrepare = void 0;
const sqlFilterAndPrepare = (row) => {
    if (typeof row === 'object') {
        Object.keys(row).forEach((column) => {
            if (typeof row[column] === "string" && row[column] && row[column].includes(`'`)) {
                row[column] = row[column].replace(/'/g, `\\'`);
                row[column] = `'${row[column]}'`;
            }
        });
        return row;
    }
    else if (typeof row === 'string' && row) {
        row = row.replace(/'/g, `\\'`);
        row = `'${row}'`;
        return row;
    }
    else {
        return row;
    }
};
exports.sqlFilterAndPrepare = sqlFilterAndPrepare;
//# sourceMappingURL=sqlFilterAndPrepare.js.map