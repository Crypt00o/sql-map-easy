import { sqlFilterAndPrepare } from "./sqlFilterAndPrepare";
const sqlParser=(line:string,args:Array<any>):string=>{
    for (let i=args.length;i>0;){
        if(line.indexOf(`$${i}`) == -1){
            --i;
         }
         else{
         line=line.replace(`$${i}`,sqlFilterAndPrepare( args[i-1]))
         }
     }
     return line;
    

    

}
export{sqlParser}