declare const SqlMap: {
    sqlParser: (line: string, args: any[]) => string;
    sqlFilterAndPrepare: (row: any) => any;
};
export { SqlMap };
declare const _default: {
    SqlMap: {
        sqlParser: (line: string, args: any[]) => string;
        sqlFilterAndPrepare: (row: any) => any;
    };
};
export default _default;
