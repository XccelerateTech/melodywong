const NoteService=require('../notes-service');
const fs=require('fs')

describe('Testing NoteService',function(){
    beforeEach(function(){
        
        if(fs.existsSync('test.json')){
            fs.unlinkSync('test.json'); //delete a file
        }
        fs.writeFileSync('test.json','[]');
        
    })

    
    it('write two new notes using addNote()',function(done){
        const noteService=new NoteService('test.json');
        noteService.addNote({'title':'test-title',"text":"test"})
            .then(()=>{
                noteService.addNote({'title':'test-title',"text":"qq text"})
            })
            .then(()=>{
                return noteService.listNote()
            })
            .then((result)=>{
                expect(result).toEqual([{'title':'test-title',"text":"test"},{'title':'test-title',"text":"qq text"}]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })
    })

   
    it('list second note using listNote()',function(done){ //done:callback for promise
        const noteService=new NoteService('test.json');
        noteService.addNote({'title':'test-title',"text":"test"})
            .then(()=>{
                noteService.addNote({'title':'test-title',"text":"qq text"})
            })
            .then(()=>{
                return noteService.listNote()
            })
            .then((result)=>{
                expect(result).toEqual([{'title':'test-title',"text":"test"},{'title':'test-title',"text":"qq text"}]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })
    })

    it('update first note after two new notes are added',function(done){ //done:callback for promise
        const noteService=new NoteService('test.json');
        noteService.addNote({'title':'test-title',"text":"test"})
            .then(()=>{
                noteService.addNote({'title':'test-title',"text":"qq text"})
            })
            .then(()=>{
                //change content of [0] note
                noteService.updateNote(0,{'title':'test-title-changed',"text":"qq text changed"})
            })
            .then(()=>{
                //list [0] note
                return noteService.listNote()
            })
            .then((result)=>{
                expect(result).toEqual([{"title":"test-title-changed","text":"qq text changed"},{"title":"test-title","text":"qq text"}]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })
    })

    it('update second note after three new notes are added',function(done){ //done:callback for promise
        const noteService=new NoteService('test.json');
        noteService.addNote({'title':'test-title',"text":"test"})
            .then(()=>{
                noteService.addNote({'title':'test-title',"text":"qq text"})
            })
            .then(()=>{
                noteService.addNote({'title':'test-title3',"text":"3 text"})
            })
            .then(()=>{
                //change content of [0] note
                noteService.updateNote(1,{'title':'test-title-changed',"text":"qq text changed"})
            })
            .then(()=>{
                //list [0] note
                return noteService.listNote()
            })
            .then((result)=>{
                expect(result).toEqual([{'title':'test-title',"text":"test"},{'title':'test-title-changed',"text":"qq text changed"},{'title':'test-title3',"text":"3 text"}]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })
    })

    it('delete after new notes are added',function(done){ //done:callback for promise
        const noteService=new NoteService('test.json');
        noteService.addNote({'title':'test-title',"text":"test"})
            .then(()=>{
                noteService.deleteNote(0)
            })
            .then(()=>{
                return noteService.listNote()
            })
            .then((result)=>{
                expect(result).toEqual([]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })
    })

    it('delete after new notes are added',function(done){ //done:callback for promise
        const noteService=new NoteService('test.json');
        noteService.addNote({'title':'test-title',"text":"test"})
            .then(()=>{
                noteService.addNote({'title':'test-title',"text":"qq text"})
            })
            .then(()=>{
                noteService.addNote({'title':'test-title3',"text":"3 text"})
            })
            .then(()=>{
                noteService.deleteNote(0)
            })
            .then(()=>{
                return noteService.listNote()
            })
            .then((result)=>{
                expect(result).toEqual([{"title":"test-title","text":"qq text"},{"title":"test-title3","text":"3 text"}]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })
    })


})