const NoteService=require('../notes-service');
// const fs=require('fs') 
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "notes",
        user: "postgres",
        password: "password"
    }
});

describe('Testing NoteService',function(){
    beforeEach(function(){
        var Promise = require('bluebird');

        // let query = knex("notes").delete();


        //     query.then((rows)=>{
        //         console.log("knex deleted");
        //         resolve();
        //     }).catch((error)=>{
        //         console.log(error);
        //         reject(err);
        //     });
    })

    
    it('write two new notes using addNote()',function(done){
        const noteService=new NoteService(knex);

        
        knex.transaction(function(trx) {
            noteService.addNote({userID:'test',title:"test-title1",text:"test-title1"})
            knex('books').transacting(trx).insert({name: 'Old Books'})
        .then(function(resp) {
            var id = resp[0];
            return someExternalMethod(id, trx);
            })
        .then(trx.rollback)
        .catch(trx.rollback);
        })








        noteService.addNote({userID:'test',title:"test-title1",text:"test-title1"})
            .then(()=>{
                noteService.addNote({userID:'test',title:"test-title2",text:"test-title2"})
            })
            .then(()=>{
                return noteService.listNote('test')
            })
            .then((result)=>{
                expect(result).toEqual([{'title':'test-title',"text":"test"},{'title':'test-title',"text":"qq text"}]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })
    })

   
    // it('list second note using listNote()',function(done){ //done:callback for promise
    //     const noteService=new NoteService('test.json');
    //     noteService.addNote({'title':'test-title',"text":"test"})
    //         .then(()=>{
    //             noteService.addNote({'title':'test-title',"text":"qq text"})
    //         })
    //         .then(()=>{
    //             return noteService.listNote()
    //         })
    //         .then((result)=>{
    //             expect(result).toEqual([{'title':'test-title',"text":"test"},{'title':'test-title',"text":"qq text"}]);
    //             done();
    //         })
    //         .catch((err)=>{
    //             done.fail(err)
    //         })
    // })

    // it('update first note after two new notes are added',function(done){ //done:callback for promise
    //     const noteService=new NoteService('test.json');
    //     noteService.addNote({'title':'test-title',"text":"test"})
    //         .then(()=>{
    //             noteService.addNote({'title':'test-title',"text":"qq text"})
    //         })
    //         .then(()=>{
    //             //change content of [0] note
    //             noteService.updateNote(0,{'title':'test-title-changed',"text":"qq text changed"})
    //         })
    //         .then(()=>{
    //             //list [0] note
    //             return noteService.listNote()
    //         })
    //         .then((result)=>{
    //             expect(result).toEqual([{"title":"test-title-changed","text":"qq text changed"},{"title":"test-title","text":"qq text"}]);
    //             done();
    //         })
    //         .catch((err)=>{
    //             done.fail(err)
    //         })
    // })

    // it('update second note after three new notes are added',function(done){ //done:callback for promise
    //     const noteService=new NoteService('test.json');
    //     noteService.addNote({'title':'test-title',"text":"test"})
    //         .then(()=>{
    //             noteService.addNote({'title':'test-title',"text":"qq text"})
    //         })
    //         .then(()=>{
    //             noteService.addNote({'title':'test-title3',"text":"3 text"})
    //         })
    //         .then(()=>{
    //             //change content of [0] note
    //             noteService.updateNote(1,{'title':'test-title-changed',"text":"qq text changed"})
    //         })
    //         .then(()=>{
    //             //list [0] note
    //             return noteService.listNote()
    //         })
    //         .then((result)=>{
    //             expect(result).toEqual([{'title':'test-title',"text":"test"},{'title':'test-title-changed',"text":"qq text changed"},{'title':'test-title3',"text":"3 text"}]);
    //             done();
    //         })
    //         .catch((err)=>{
    //             done.fail(err)
    //         })
    // })

    // it('delete after new notes are added',function(done){ //done:callback for promise
    //     const noteService=new NoteService('test.json');
    //     noteService.addNote({'title':'test-title',"text":"test"})
    //         .then(()=>{
    //             noteService.deleteNote(0)
    //         })
    //         .then(()=>{
    //             return noteService.listNote()
    //         })
    //         .then((result)=>{
    //             expect(result).toEqual([]);
    //             done();
    //         })
    //         .catch((err)=>{
    //             done.fail(err)
    //         })
    // })

    // it('delete after new notes are added',function(done){ //done:callback for promise
    //     const noteService=new NoteService('test.json');
    //     noteService.addNote({'title':'test-title',"text":"test"})
    //         .then(()=>{
    //             noteService.addNote({'title':'test-title',"text":"qq text"})
    //         })
    //         .then(()=>{
    //             noteService.addNote({'title':'test-title3',"text":"3 text"})
    //         })
    //         .then(()=>{
    //             noteService.deleteNote(0)
    //         })
    //         .then(()=>{
    //             return noteService.listNote()
    //         })
    //         .then((result)=>{
    //             expect(result).toEqual([{"title":"test-title","text":"qq text"},{"title":"test-title3","text":"3 text"}]);
    //             done();
    //         })
    //         .catch((err)=>{
    //             done.fail(err)
    //         })
    // })


})