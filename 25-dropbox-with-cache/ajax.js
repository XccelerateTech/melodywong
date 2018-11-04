$('#update').on('click', 

$(function(){
    $.get('allfiles/'
    ).done(function(data){
        console.log("This function will be run if the ajax is successful");
    }).fail(function(data){
        console.log("This function will be run if the ajax if failed");
    }).always(function(data){
        console.log("This function runs no matter success or fail.");
    });

});





)




// $('#uploaded').append