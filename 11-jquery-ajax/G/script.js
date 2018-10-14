var countryLatlng=[];

function informMe(endpoint){
 
  return $.get({
      url:`https://restcountries.eu/rest/v2/name/${endpoint}?fullText=true`,
  })

}
 
 
 $('.form1').submit(function(event){
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting
    var country1=event.target.country1.value;
    var country2=event.target.country2.value;

    $.when(informMe(country1), informMe(country2)).then(function (countryData1, countryData2) { //when the two iterations of the function getCountryData are finished. Assign value of returned to two callbacks, countryData1 and countryData2

      console.log(countryData1[0][0].latlng)
      console.log(countryData2[0][0].latlng)

      var country1=countryData1[0][0].latlng;
      var country2=countryData2[0][0].latlng;

    //get sunrise sunset for calculation
    function calculate(lat,long){  
      //get api
      $(function(){ 
           $.get({
               url:`https://api.sunrise-sunset.org/json?lat=${lat}0&lng=${long}&formatted=0`,
       
           }).done(function(data){
              //get time of sunset sunrise
               Rise= new Date (data.results.sunrise);
               //sSet= new Date (data.results.sunset);
             

               
               /*function msToTime(duration) {
                  var 
                    seconds = parseInt((duration / 1000) % 60),
                    minutes = parseInt((duration / (1000 * 60)) % 60),
                    hours = parseInt((duration / (1000 * 60 * 60)) % 24);
                
                  hours = (hours < 10) ? "0" + hours : hours;
                  minutes = (minutes < 10) ? "0" + minutes : minutes;
                  seconds = (seconds < 10) ? "0" + seconds : seconds;
                
                  return hours + ":" + minutes + ":" + seconds
                }*/
          
          
              return (Rise)
          
           }).fail(function(data){
              $('.result').append("Error");
           })
           
       });

      }
      //end of function 
      $.when(calculate(country1[0],country1[1]), calculate(country2[0],country2[1])).then(function (countryData1, countryData2) { 
        console.log(countryData1);

      })



    })
  })
  

  
     

  
  

/*

    var lat = event.target.lat.value;
    var long = event.target.long.value;
    var Rise={};
    var sSet={};
    


    
    

    
    
    calculate(lat,long,'yesterday','&formatted=0'); //yesterday sunrise time cal
  
    calculate(lat,long,'tomorrow','&formatted=0'); //today sunrise time cal

*/
