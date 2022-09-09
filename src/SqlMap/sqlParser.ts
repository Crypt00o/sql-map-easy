import { sqlFilterAndPrepare } from "./sqlFilterAndPrepare";
import { make32CharTmp } from "./make32CharTmp";
const sqlParser=(line:string,args:Array<any>):string=>{
    const tmp=make32CharTmp()
    for (let i=args.length;i>0;--i){
         line=line.replace(RegExp(`\\$${i}`,'g'),sqlFilterAndPrepare( args[i-1].replace(RegExp('\\$'),tmp)))
     }
     line=line.replace(RegExp(tmp),'$')
     return line;

    

    

}
export {sqlParser}