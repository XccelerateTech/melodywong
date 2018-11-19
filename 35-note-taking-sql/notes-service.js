const fs=require('fs')
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "notes",
        user: "postgres",
        password: "password"
    }
});

class NotesService{
    constructor(filename){
        this.filename=filename;
        this.notes=[];
        // this.listNotePromise=this.listNote(); //storing the listNote()

    }

    listNote(){
        return new Promise((resolve,reject)=>{
            

            let query = knex.select("*").from("notes_list").orderBy("NoteId");

            query.then((rows)=>{
                console.log("knex list");
                resolve(rows);
            }).catch((error)=>{
                console.log(error);
                reject(err);
            });
           

        })
    }

    addNote(note){
      
        return new Promise((resolve,reject)=>{
            

            let query = knex("notes_list").insert({"UserId":'1',"Title":`${note.title}`,"Text":`${note.text}`})


            query.then((rows)=>{
                console.log("knex added");
                resolve();
            }).catch((error)=>{
                console.log(error);
                reject(err);
            });
       
        })
    }

    updateNote(id,note){

        return new Promise((resolve,reject)=>{
            console.log("updating notes")
            
            let query = knex("notes_list").update({"UserId":'1',"Title":`${note.title}`,"Text":`${note.text}`}).where("NoteId",id)


            query.then((rows)=>{
                console.log("knex edited");
                resolve();
            }).catch((error)=>{
                console.log(error);
                reject(err);
            });


    })
}

    deleteNote(id){

        return new Promise((resolve,reject)=>{
       
            let query = knex("notes_list").where("NoteId",id).delete();


            query.then((rows)=>{
                console.log("knex deleted");
                resolve();
            }).catch((error)=>{
                console.log(error);
                reject(err);
            });

        })

    }
    
}



module.exports=NotesService;