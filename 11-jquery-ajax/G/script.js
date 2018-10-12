
 $('.form1').submit(function(event){
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting


    var countryLatlng=[];
    //find country latlng
    function informMe(endpoint){  
   
      return $(function(){ 
           $.get({
               url:`https://restcountries.eu/rest/v2/name/${endpoint}?fullText=true`,
           }).done(function(data){
            console.log(data[0].latlng)
           }).fail(function(data){
               console.log("Error");
           })
           
       });
   
   }
   $.when(informMe(event.target.country1.value), informMe(event.target.country2.value)).done(function(val1,val2){
     console.log(val1);
     console.log(val2);
   })
  
  

/*

    var lat = event.target.lat.value;
    var long = event.target.long.value;
    var Rise={};
    var sSet={};
    


    //get sunrise sunset for calculation
    function calculate(lat,long,day){  
        //get api
        $(function(){ 
             $.get({
                 url:`https://api.sunrise-sunset.org/json?lat=${lat}0&lng=${long}&date=${day}&formatted=0`,
         
             }).done(function(data){
                //get time of sunset sunrise
                 Rise= new Date (data.results.sunrise);
                 sSet= new Date (data.results.sunset);
                 var now = Date.now();
                 
                 function msToTime(duration) {
                    var milliseconds = parseInt((duration % 1000) / 100),
                      seconds = parseInt((duration / 1000) % 60),
                      minutes = parseInt((duration / (1000 * 60)) % 60),
                      hours = parseInt((duration / (1000 * 60 * 60)) % 24);
                  
                    hours = (hours < 10) ? "0" + hours : hours;
                    minutes = (minutes < 10) ? "0" + minutes : minutes;
                    seconds = (seconds < 10) ? "0" + seconds : seconds;
                  
                    return hours + ":" + minutes + ":" + seconds
                  }
                  
                  if(day==='yesterday'){
                    $('.result').append(`Time between NOW and yesterday sunrise is `);
                  } else {
                    $('.result').append(`Time between NOW and tomorrow sunrise is `);
                  }

                  if(now>Rise){
                    $('.result').append(msToTime(now-Rise))
                  } else {
                    $('.result').append(msToTime(Rise-now))
                  }

                  
                $('.result').append(` and sunset is `);
                  
                  
                  if(now>sSet){
                    $('.result').append(msToTime(now-sSet)+`</p>`)
                  } else {
                    $('.result').append(msToTime(sSet-now)+`</p>`)
                  }

                
            
             }).fail(function(data){
                $('.result').append("Error");
             })
             
         });

        }

    

    
    
    calculate(lat,long,'yesterday','&formatted=0'); //yesterday sunrise time cal
  
    calculate(lat,long,'tomorrow','&formatted=0'); //today sunrise time cal

*/
 })

 
