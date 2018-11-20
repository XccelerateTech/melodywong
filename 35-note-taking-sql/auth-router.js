const express = require("express");


class AuthRouter{

    constructor(authService){
        this.authService = authService;
    }

    router(){
        let router = express.Router();
        router.post("/",this.post.bind(this));
        router.put("/:id",this.put.bind(this));
        return router;
    }


    post(req,res){
        console.log('checking user', req.body)
        
        return this.authService.check(req.body)
            .then((data)=>res.json(data))
            // .then(()=>res.status(204).send())
            .catch((err)=>res.status(500).json(err));
    }

    put(req,res){
        console.log('creating new user', req.body)

        return this.authService.newUser(req.body)
            .then(function(data){
                console.log('returning new user', data)
                res.json(data)
            })
            // .then(()=>res.status(204).send())
            .catch((err)=> res.status(500).json(err));
    }

}

module.exports = AuthRouter;