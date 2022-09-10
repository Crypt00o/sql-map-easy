import { sqlFilterAndPrepare } from "./sqlFilterAndPrepare";
import { make32CharTmp } from "./make32CharTmp";
const sqlParser=(line:string,args:Array<any>):string=>{
    const tmp=make32CharTmp()
    for (let i=args.length;i>0;--i){
        
         line=line.replace(RegExp(`\\$${i}`,'g'),sqlFilterAndPrepare( args[i-1]))
         if(typeof args[i-1]=='string'){
            args[i-1]=args[i-1].replace(RegExp('\\$','g'),tmp)
        }
     }
     line=line.replace(RegExp(tmp,'g'),'$')
     return line;

    

    

}
export {sqlParser}