const express = require("express");


class NotesRouter{

    constructor(notesService){
        this.notesService = notesService;
    }

    router(){
        let router = express.Router();
        router.get("/:id",this.get.bind(this));
        router.post("/",this.post.bind(this));
        router.put("/:id",this.put.bind(this));
        router.delete("/:id",this.delete.bind(this));
        return router;
    }

    get(req,res){
        console.log('getting listnote', req.params.id)

        return this.notesService.listNote(req.params.id)
            .then((data)=>res.json(data))
            .catch((err)=>res.status(500).json(err));
    }

    post(req,res){
        console.log('sending addnote', req.body)
        
        return this.notesService.addNote(req.body)
            // .then((data)=>res.json(data))
            .then(()=>res.status(204).send())
            .catch((err)=>res.status(500).json(err));
    }

    put(req,res){
        console.log('editing note', req.body)

        return this.notesService.updateNote(req.params.id,req.body)
            // .then((data)=>res.json(data))
            .then(()=>res.status(204).send())
            .catch((err)=> res.status(500).json(err));
    }

    delete(req,res){
        console.log('deleting note', req.params.id)
        return this.notesService.deleteNote(req.params.id)
            // .then((data)=>res.json(data))
            .then(()=>res.status(204).send())
            .catch((err)=> res.status(500).json(err));
    }
}

module.exports = NotesRouter;