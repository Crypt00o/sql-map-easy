import { sqlFilterAndPrepare } from "./sqlFilterAndPrepare";
import { sqlParser } from "./sqlParser";
declare const SqlMap: {
    sqlParser: (line: string, args: any[]) => string;
    sqlFilterAndPrepare: (row: any) => any;
};
export { SqlMap };
export { sqlParser, sqlFilterAndPrepare };
declare const _default: {
    SqlMap: {
        sqlParser: (line: string, args: any[]) => string;
        sqlFilterAndPrepare: (row: any) => any;
    };
};
export default _default;
