
 function informMe(endpoint,value){  
   
   $(function(){ 
        $.ajax({
            url:`https://restcountries.eu/rest/v2/${endpoint}/${value}`,
    
            type: "GET",
           /* data: {
                attr1: "value1",
                attr2: 10
            }*/
        }).done(function(data){
            console.log(data);
        }).fail(function(data){
            console.log("Error");
        })
        
    });

}

informMe('lang', 's');