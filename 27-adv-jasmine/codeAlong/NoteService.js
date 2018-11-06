const fs=require('fs')

class NoteService{
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
                this.notes.push(note);
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

    deleteNote(){

    }
}



module.exports=NoteService;