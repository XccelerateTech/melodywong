//Adding an extra button to the form called Clear

$('form ').append(`<button class='clear'> Clear </button>`);

$('#form1').submit(function(event){
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting

    //1. Validate using JQuery the name should be less than 50 characters
    var name = event.target.name.value;
    if(name.length>50){
        //4. When the input field is invalid, the border of the corresponding input should be changed to red
        $('#form1 #row-name input').css("border-color","red");
        alert("Name should be less than 50 characters.");
    }

    //2. Validate phone number should be between 6 numbers to 16 numbers
    var phone = event.target.phone.value;
    if(phone.length>16||phone.length<6){
        //4. When the input field is invalid, the border of the corresponding input should be changed to red
        $('#form1 #row-phone input').css("border-color","red");
        alert("Phone number should be between 6 numbers to 16 numbers.")
    }
});

//3. The Clear button should remove all the value input to the text box.
$('.clear').on("click",function(){
    $('form #row-name input').val("")
    $('form #row-phone input').val("")
    $('form #row-email input').val("")
});
//$('.clear').trigger("click");

//5.Add a Update Contacts list section for the page which has the same validation as the create contact list.

//6. When I click on the row of the contact list, the values of the contact list should be filled in to the update form.
var rowNumber=0;
  $('#contact-list').on('click','.row',function(e){
        var listItem = $(this);
        rowNumber= $( ".row" ).index( listItem ) ;
       
        var rowElements = $(this).children(); //rowElements is an object

        var formElements=$('#update-form input');//formElemnrs is an object

        for(var i=0;i<rowElements.length;i++){
        $(formElements.eq(i)).val(rowElements.eq(i).html())//.html to use eq(i) but not rowElemnts[1]
        }
       
  }
  )

$('#form2').submit(function(event){
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting

    //Validate using JQuery the name should be less than 50 characters
    var name = event.target.name.value;
    if(name.length>50){
        //When the input field is invalid, the border of the corresponding input should be changed to red
        $('#form2 #row-name input').css("border-color","red");
        alert("Name should be less than 50 characters.");
    }

    //Validate phone number should be between 6 numbers to 16 numbers
    var phone = event.target.phone.value;
    if(phone.length>16||phone.length<6){
        //When the input field is invalid, the border of the corresponding input should be changed to red
        $('#form2 #row-phone input').css("border-color","red");
        alert("Phone number should be between 6 numbers to 16 numbers.")
    }

    //7. Alert the input of name , phone number and email after both forms are submitted and validated.
    if(name.length<=50 && phone.length>=6 && phone.length<=16){
        var tableElement = $('tbody').children();

        var formElement=$('#update-form input');

        for (var i=0;i<tableElement.length;i++){
        tableElement.eq(rowNumber).children().eq(i).html(formElement.eq(i).val());
        }
        
    }

});
