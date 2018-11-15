const fs=require('fs')

class NotesService{
    constructor(filename){
        this.filename=filename;
        this.notes=[];
        this.listNotePromise=this.listNote(); //storing the listNote()

    }

    listNote(){
        return new Promise((resolve,reject)=>{
            fs.readFile(this.filename,'utf8',(err,data)=>{
                if(err){
                    reject(err);
                    return;
                }
                this.notes=JSON.parse(data);
                resolve(this.notes); 
            })

        })
    }

    addNote(note){
      
        return new Promise((resolve,reject)=>{

            this.listNotePromise.then(()=>{
                var object={
                    'title':note.title,
                    'text':note.text
                }
                this.notes.push(object);
                fs.writeFile(this.filename, JSON.stringify(this.notes),(err)=>{
                    if(err){
                        reject(err);
                        return
                    }
                    resolve();
                })
            })
        })
    }

    updateNote(id,note){

        return new Promise((resolve,reject)=>{

                var object={
                    'title':note.title,
                    'text':note.text
                }
                this.notes.splice(id,1,object);
                fs.writeFile(this.filename, JSON.stringify(this.notes),(err)=>{
                    if(err){
                        reject(err);
                        return
                    }
                    resolve();
                })
            })

    }

    deleteNote(id){

        return new Promise((resolve,reject)=>{
            this.notes.splice(id,1);

            fs.truncate(this.filename, 0, function(){console.log('done')})

            fs.writeFile(this.filename, JSON.stringify(this.notes),(err)=>{
                if(err){
                    reject(err);
                    return
                }
                
                resolve();
            })
        })

    }
}



module.exports=NotesService;