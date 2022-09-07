# SQL Map
- This is Npm  Package Mady By Eslam Mohamed . 
- Repo : [github/sql-map-easy](https://github.com/Crypt00o/sql-map-easy)
- npm-package : [npm/sql-map-easy](https://www.npmjs.com/package/sql-map-easy) 
### Info and Usage:
this package made to ease query with many parameters while development
- ### Usage :
```
const SqlMap = require("sql-map-easy");`
SqlMap.sqlParser("Query $1 $2 $4 $3 $5",params_in_order[1,2,3,4,5]);
```

- ### Example :

```

const SqlMap = require("sql-map-easy");

const email= "example@example.com";
const username = "eslam_mohamed";
const firstname ="eslam";
const lastname = "mohamed";
const phone = "01000000000";
const password = "somepassword";
const dateOfBirth = "2001-7-7";

let sqlQuery=SqlMap.sqlParser("UPDATE TABLE Users SET email=$1, username=$4 , firstname=$2 , lastname=$3 , phone=$5 , password=$6 , date_of_birth=$7 WHERE username=$4 and email=$1 ; ",[email,firstname,lastname,username,phone,password,dateOfBirth])

//sqlQuery now is "UPDATE Users SET email='example@example.com', username='eslam_mohamed' , firstname='eslam' , lastname='mohamed' , phone='01000000000' , password='somepassword' , date_of_birth='2001-7-7' WHERE username='eslam_mohamed' AND email='example@example.com' ;"



```

- ###  License: MIT
- ### developed by Eslam mohamed moawed '0xCrypt00o'
