
 $('.form1').submit(function(event){
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting

    var lat = event.target.lat.value;
    var long = event.target.long.value;
    var data =[];

    sunrise(lat,long);

    //get sunrise sunset
    function sunrise(lat,long){  
   
   
        //get api
        $(function(){ 
             $.get({
                 url:`https://api.sunrise-sunset.org/json?lat=${lat}0&lng=${long}`,
         
             }).done(function(data){
                 //append in result.html 
                
                $('.result').append(`<p> The sunrise time is ` + data.results.sunrise);
                $('.result').append(`<p> The sunrise time is ` + data.results.sunset);
             }).fail(function(data){
                 console.log("Error");
             })
             
         });

     }
     




 })
