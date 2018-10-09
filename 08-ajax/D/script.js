//Create a class called User.   The class should be initialized with first name, last name, email, date of birth. 

class User{
    constructor(options){
        this.first=options.first;
        this.last=options.last;
        this.email=options.email;
        this.birthdate=options.birthdate;
    }
}

function randomUser(callback) {
    var http = new XMLHttpRequest(); // Call the AJAX here, And get the Data
    http.open(
      "GET",
      `https://randomuser.me/api/`,
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

for (var i=0;i<5;i++){
   
  randomUser(function(data){
        var user=new User({first:data.results[0].name.first, last:data.results[0].name.last, email:data.results[0].email,birthdate:data.results[0].dob.date})
        console.log(user)
   });

}