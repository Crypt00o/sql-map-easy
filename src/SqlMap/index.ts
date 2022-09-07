import {sqlFilterAndPrepare} from "./sqlFilterAndPrepare"
import{sqlParser} from "./sqlParser"
const SqlMap={sqlParser:sqlParser,sqlFilterAndPrepare:sqlFilterAndPrepare}
export {SqlMap}
export default {SqlMap}