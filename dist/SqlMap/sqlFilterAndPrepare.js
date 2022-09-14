"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlFilterAndPrepare = void 0;
const sqlFilterAndPrepare = (row, tmp) => {
    if (typeof row === 'object' && row != null) {
        Object.keys(row).forEach((column) => {
            if (typeof row[column] === "string" && row[column] && row[column].includes(`'`)) {
                row[column] = row[column].replace(/'/g, `\\'`);
                row[column] = `'${row[column]}'`;
            }
        });
        return row;
    }
    else if (typeof row === 'string' && row) {
        row = row.replace(RegExp('\\$', 'g'), tmp);
        row = row.replace(/'/g, `\\'`);
        row = `'${row}'`;
        return row;
    }
    else if (row === null) {
        return null;
    }
    else if (typeof row === 'undefined') {
        return null;
    }
    else if (typeof row === 'number' && row === NaN) {
        return null;
    }
    else {
        return row;
    }
};
exports.sqlFilterAndPrepare = sqlFilterAndPrepare;
//# sourceMappingURL=sqlFilterAndPrepare.js.map