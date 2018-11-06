const NoteService=require('../NoteService')
const fs=require('fs')

describe('Testing NoteService',function(){

    beforeEach(function(){
        
        if(fs.existsSync('test.json')){
            fs.unlinkSync('test.json'); //delete a file
        }
        fs.writeFileSync('test.json','[]');
        
    })

    it('list our notes using listNote()',function(done){ //done:callback for promise
            const noteService=new NoteService('test.json');
            noteService.listNote()
                .then((result)=>{
                   expect(result).toEqual([]);
                   done();
                }).catch((err)=>{
                    console.log(err);
            })
        })

    it('add a note using addNote()',function(done){
        const noteService=new NoteService('test.json');
        noteService.addNote('test')
            .then(()=>{
                return noteService.listNote()
            })
            .then((result)=>{
                expect(result).toEqual(["test"]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })

    })

    it('should be able to write more than one note using addNote()',function(done){
        //create a new noteServoce instatnce        
        const noteService=new NoteService('test.json');

         //add one note
        noteService.addNote('test')
            //then, add another note
            .then(()=>{
                return noteService.addNote('hello')
            })
            .then(()=>{
                //then list the notes, here we expect two notes
                return noteService.listNote()
            })
            .then((result)=>{
                expect(result).toEqual(["test","hello"]);
                done();
            })
            .catch((err)=>{
                done.fail(err)
            })
    })

    it('add notes before listing notes, while having the previous notes',function(done){
        const noteService=new NoteService('test.json');
        noteService.addNote('test')
        .then(()=>{
            const noteService2=new NoteService('test.json');
            return noteService2.addNote('test 2')
                .then(()=>{
                    return noteService2.listNote();
                })
                .then((result)=>{
                    expect(result).toEqual(['test','test 2'])
                    done();
                })
                .catch((err)=>{
                    done.fail(err)
                })

            })
            .catch((err)=>{
                done.fail(err)
            })
    })
})