import { sqlFilterAndPrepare } from "./sqlFilterAndPrepare";
const sqlParser=(line:string,args:Array<any>):string=>{
    for (let i=args.length;i>0;--i){
         line=line.replace(RegExp(`\\$${i}`,'g'),sqlFilterAndPrepare( args[i-1]))
     }
     return line;
    

    

}
export{sqlParser}