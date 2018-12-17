const index=require('../index');
// const fs=require('fs') 
const pg=require('pg');

const io = require('socket.io');
let socket = io()

var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});


describe('Testing chatroom Index',function(){
    beforeEach(function(){
        
    })

    
    it('add notes into redis list',function(done){

        io.onsocket.emit('chat message', 'hello')
            .then(()=>{
                return client.lrange('room1',0,1)
            })
            .then(function(result){
                console.log(result)
                expect(result).toEqual({
                    roomNumber:'room1',
                    id:1,
                    msg:'hello'
                });
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })


    })

    afterEach(function(){
        client.del('testList')
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