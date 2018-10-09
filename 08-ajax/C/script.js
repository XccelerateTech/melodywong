function whoIsInSpace(callback) {
    var http = new XMLHttpRequest(); // Call the AJAX here, And get the Data
    http.open(
      "GET",
      `http://api.open-notify.org/astros.json`,
      true
    );
   
    http.onreadystatechange = function() {
      if (http.readyState != XMLHttpRequest.DONE) {
        return;
      } else if (http.status == 200) {
        let data = JSON.parse(http.responseText);
        callback(data)
      } else {
        console.log("error occurred" + http.status);
      }
    };
   
   //   callback(data); // Return the Data by calling callback with the resulting data
   
   http.send();
   
   }
   // onreadystatechange should be before http.send()
   
   whoIsInSpace(function(data){
    var arr=[];
    for(var x=0;x<data.people.length;x++){
        arr.push(data.people[x].name)
    }
    console.log(arr)
   });
   