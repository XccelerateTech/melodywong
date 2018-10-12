
 function informMe(endpoint,value){  
   
   $(function(){ 
        $.get({
            url:`https://restcountries.eu/rest/v2/${endpoint}/${value}`,
    
        }).done(function(data){
            console.log(data);
        }).fail(function(data){
            console.log("Error");
        })
        
    });

}

informMe('lang', 'es');