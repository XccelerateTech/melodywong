//B: jedi
//at least 8 test cases

let starwars=require('../starwars');


describe('jedi testing',function(){

    beforeEach(function(){
        obiwan = new starwars.Jedi("Obiwan Kenobi",70,700);
        anakin = new starwars.Sith("Anakin Skywalker",100,1000);
        duel=starwars.duel;
    })

    it("obiwan health is deducted", function() {
    
        duel(obiwan , anakin);
        expect(obiwan.health).toBeLessThan(700);


    });

    

})
