import { sqlFilterAndPrepare } from "./sqlFilterAndPrepare";
import { sqlParser } from "./sqlParser";
declare const SqlMap: {
    sqlParser: (line: string, args: any[]) => string;
    sqlFilterAndPrepare: (row: any, tmp: string) => any;
};
export { SqlMap };
export { sqlParser, sqlFilterAndPrepare };
declare const _default: {
    SqlMap: {
        sqlParser: (line: string, args: any[]) => string;
        sqlFilterAndPrepare: (row: any, tmp: string) => any;
    };
};
export default _default;
