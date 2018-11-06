//A: duel
//at least 8 test cases

let starwars=require('../starwars');


describe('duel testing',function(){

    var timerCallback;

    beforeEach(function(){
        obiwan = new starwars.Jedi("Obiwan Kenobi",70,700);
        anakin = new starwars.Sith("Anakin Skywalker",100,1000);
        duel=starwars.duel;
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    })

    afterEach(function() {
        jasmine.clock().uninstall();
      });

    it("annakin attacked", function() {
        spyOn(anakin,'attack');
        duel(obiwan , anakin);
        expect(anakin.attack).toHaveBeenCalled();
    });

    it("anakin attacked with fake function", function() {
        spyOn(anakin,'attack').and.callFake(function(){
            console.log("Anakin attacks with fake function")
        });
        duel(obiwan , anakin);
        expect(anakin.attack).toHaveBeenCalled();
    });

    it("obiwan attacked", function() {
        spyOn(obiwan,'attack');
        duel(obiwan , anakin);
        expect(obiwan.attack).toHaveBeenCalled();
    });

    it("anakin was injured", function() {
        spyOn(anakin,'injure');
        duel(obiwan , anakin)
        expect(anakin.injure).toHaveBeenCalled();
    });

    
    it("anakin was dead", function() {
        spyOn(anakin,'dead');     
        duel(obiwan , anakin)
        expect(anakin.dead).toHaveBeenCalled();
    });
    
    it("anakin attacks 6 times", function() {
        spyOn(anakin,'attack');
        duel(obiwan , anakin)
        expect(anakin.attack.calls.count()).toEqual(6);
    });

    it("obiwan attacks 6 times", function() {
        spyOn(obiwan,'attack');
        duel(obiwan , anakin)
        expect(obiwan.attack.calls.count()).toEqual(6);
    });

    it("obiwan attacks anakin", function() {
        spyOn(obiwan,'attack');
        duel(obiwan , anakin)
        expect(obiwan.attack.calls.argsFor(1)).toEqual([anakin]);
    });

    it("anakin is rescued", function() {
        //before attack anakin's health is 1000
        expect(anakin.health).toEqual(1000)

        duel(obiwan , anakin)

        setTimeout(function() {
          timerCallback();
        }, 5000);
        
        expect(timerCallback).not.toHaveBeenCalled();
    
        jasmine.clock().tick(5001);
    
        expect(timerCallback).toHaveBeenCalled();

        //after attack anakin's health is 800
        expect(anakin.health).toEqual(800)
      });

})
