import {sqlFilterAndPrepare} from "./sqlFilterAndPrepare"
import{sqlParser} from "./sqlParser"
const SqlMap={sqlParser:sqlParser,sqlFilterAndPrepare:sqlFilterAndPrepare}
export {SqlMap}
export {sqlParser,sqlFilterAndPrepare}
export default {SqlMap}