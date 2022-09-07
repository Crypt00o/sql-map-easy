const sqlFilterAndPrepare = (row:any):any=>{
    if(typeof row==='object'){
    Object.keys(row).forEach((column:any)=>{
          if (typeof row[column]==="string" && row[column] && row[column].includes(`'`)){
            row[column]=row[column].replace(/'/g,`\\'`)
            row[column]=`'${row[column]}'`} 
          }
    ) 
    return row       
        }
        else if(typeof row==='string' && row){
            row=row.replace(/'/g,`\\'`)
            row= `'${row}'`
            return row
        }
        else{
            return row
        }
}
export{sqlFilterAndPrepare}