

function informMe(endpoint, value, callback){
    // Call the AJAX here, And get the Data

    var http = new XMLHttpRequest();

    http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`,true);

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            let data = JSON.parse(http.responseText);
            console.log(data);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    // onreadystatechange should be before http.send()
    http.send();


    callback(data); // Return the Data by calling callback with the resulting data 
}

informMe('capital','tallinn)





