$( document ).ready(function() {
    $.get( "/room1", function( data ) {
        
        for(var i=0;i<data.length;i++){
            let message=data[i];
            message=JSON.parse(message)
            $('#messages').append(`<p>${message.id} : ${message.msg}`); 
        }
       
      });
    
});

$(function () {
    let socket = io()
    $( document ).ready(function() {
        var room='room1';
        socket.emit('room', room);
    });

    // $('#roomSelect').change(function(){
    //     var room = $('#roomSelect').val();
    //     console.log("changeing room")
    //     socket.emit('room', room);
    // })
      $('#messageForm').submit(function(){
        socket.emit('chat message', $('#messageField').val());
        $('#messageField').val('');
        return false;
      });
      socket.on('chat message', function(msg){
          console.log(msg)
        $('#messages').append($('<p>').text(msg));
        });
    });
