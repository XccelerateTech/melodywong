/*Adding a contact to the contact list
Name: Peter
telephone: 123456789
email: peter@gmail.com
*/

$('table tbody').append(
    `<tr class='row' id='row4'>
    <td>Peter</td>
    <td>123456789</td>
    <td>peter@gmail.com</td>
    </tr>
    `
    );

//Adding an extra button to the form called Clear
var button = $('<button>',{class:"button"});
$('form #row-submit').append(button);
$('form #row-submit button').html("Clear");


//Change the title of the page to <Your name>'s contact list application
var title = $('<title>',{class:"title"});
$('head').append(title);
$('head title' ).html( "Melody's contact list" );

//Change the color of the text in the contact list.
$('table').css("color","red")