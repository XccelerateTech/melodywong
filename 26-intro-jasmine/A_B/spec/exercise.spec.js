describe("Exercise B",function(){
    it("block 5 should fail",function(){
        console.log("I am the it block 5 but I fail!");
        throw new Error();
    });
    it("1",function(){
        console.log('I am the it block 1!')
    });
    it("2",function(){
        console.log('I am the it block 2!')
    });
    it("3",function(){
        console.log('I am the it block 3!')
    });
    it("4",function(){
        console.log('I am the it block 4!')
    });
  
});