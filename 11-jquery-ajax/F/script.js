
 $('.form1').submit(function(event){
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting

    var lat = event.target.lat.value;
    var long = event.target.long.value;
    var hkDay=0;

    function hongKong(){  

        //get api
        $(function(){ 
             $.get({
                 url:"https://api.sunrise-sunset.org/json?lat=22.3965&lng=114.1095&formatted=0",
         
             }).done(function(data){
                 //append in result.html 
                 hkDay=data.results.day_length;
                
             }).fail(function(data){
                 console.log("Error");
             })
             
         });

     }

    //get day length and compare
    function compare(lat,long){  
        
        hongKong();
   
        //get api
        $(function(){ 
             $.get({
                 url:`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`,
         
             }).done(function(data){
                var difference=0;

                if(hkDay>data.results.day_length){
                    difference=hkDay-data.results.day_length;
                }else{
                    difference=data.results.day_length-hkDay;
                }
                 console.log(difference);

                 
                 function secondsToHms(d) {
                    d = Number(d);
                    var h = Math.floor(d / 3600);
                    var m = Math.floor(d % 3600 / 60);
                    var s = Math.floor(d % 3600 % 60);
                    return h +":"+ m+":" + s; 
                }
                
                $('.result').append(`<p> The day length difference is ` + secondsToHms(difference));
                
             }).fail(function(data){
                 console.log("Error");
             })
             
         });

     }

     //Hong Kong

     compare(lat,long);




 })
