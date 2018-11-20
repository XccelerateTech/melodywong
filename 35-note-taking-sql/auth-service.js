const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "notes",
        user: "postgres",
        password: "password"
    }
});

class AuthService{
    constructor(){
    }

    check(data){
        return new Promise((resolve,reject)=>{
            console.log("auth-service checking",data)
        
            let query=knex.select("*").from("users").where("Username",data.username);

            query.then((rows)=>{
                let checked=false;
                let userID;
                let username;

                if (rows[0]===undefined){
                    checked=false;
                }else if (rows[0].Password===data.password){
                    checked=true;
                    userID=rows[0].UserId
                    username=rows[0].Username
                };
                let object={
                    status: checked,
                    id: userID,
                    username: username
                }
                console.log("knex list",object);
                resolve(object);
            }).catch((error)=>{
                console.log(error);
                reject(err);
            });
           

        })
    }

    newUser(data){
      
        return new Promise((resolve,reject)=>{
            console.log("service new",data)
            

            let query = knex("users").insert({"Username":`${data.username}`,"Password":`${data.password}`})


            query
            .then(()=>{
                let query2=knex("users").select("*").where("Username",`${data.username}`)
                query2.then(function(rows){
                    console.log("rows",rows)
                    resolve(rows)
                })
               
 
            }).catch((error)=>{
                console.log(error);
                reject(err);
            });
       
        })
    }

    
   
    
}



module.exports=AuthService;