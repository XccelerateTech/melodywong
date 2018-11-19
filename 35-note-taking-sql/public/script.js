let selectedNote=-1;

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

function update(){
    $.ajax( {
        type:'get',
        url:"/api/notes"
    })
    .done(function(data){

        function notes(i,title,text,noteId){
            return `<div id="list${i}" class='noteLink' onclick="loadNote(${i},'${title}','${text}','${noteId}')">${title}</div>`
        }

        $('.allnotes').html('');

        for(var i=0;i<data.length;i++){
           
            
            $('.allnotes').append(notes(i,escapeHtml(data[i].Title),escapeHtml(data[i].Text),(data[i].NoteId)))
                    
        }

        if (selectedNote>=0){
            //change color
            $(`#list${selectedNote}`).css('background-color','#e6eebe');
        }
    })
    .fail(function() {
        alert( "Update List Error" );
    });
}


$('#addNew').on('click',function(){
    selectedNote=-1;
    $(`.noteLink`).css('background-color','#ffffff');
    $('.content').html();
    $('.content').html(`

    <form id='note'>

     <input type="text" id="title" name='title' placeholder="Title">
     <textarea id="text" name='text' placeholder="Input notes"></textarea>

    </form>
    <button class='btn btn-outline-success' onclick="submitNote()" id="noteButton" ><i class="fas fa-save"></i> Save</button>
    
    `)

 })


 function submitNote(e){
    let form=$('#note')

    // $.ajax({
    //     type: 'post',
    //     url: '/api/notes',
    //     data: form.serialize()
    //   }).done(function(data) {
    //     update()
    //   }).fail(function(data) {
    //     alert("Submit Note Error!")
    //   });

    axios.post('/api/notes', {
        title: $('#title').val(),
        text:$('#text').val()
        
    }).then(function(res){
        update();
        $('#title').val('');
        $('#text').val('');
    })


 
 }


 function loadNote(i,title,data,id){
//    alert(id);
    $(`.noteLink`).css('background-color','#ffffff');
    $(`#list${i}`).css('background-color','#e6eebe');
    
                    $('.content').html(`
                    <form id='note'>
                    
                    
                    <input type="text" id="title" name='title' value="${title}">
                    <textarea id="text" name='text' placeholder="Input notes">${data}</textarea>
                    <input type="hidden" name="_method" value="PUT">
                    
                    </form>
                    <div class='saveDeleteButtons'>
                    <button onclick="putNote(${id})"class='btn btn-outline-success' id="noteButton"><i class="fas fa-save"></i> Save</button>
                    <button onclick="deleteNote(${id})" class='btn btn-outline-danger' id="deleteButton" ><i class="fas fa-trash-alt"></i> Delete</button>
                    </div>
                    
                    `)
      
}
    
function putNote(i){
 selectedNote=i;
    let form=$('#note')
    $.ajax({
        type: 'post',
        url: `/api/notes/${i}?_method=PUT`,
        data: form.serialize()
      }).then(function() {
        update();
      }).fail(function() {
        alert("Put Note Error!")
      });
 }

function deleteNote(i){   
    selectedNote=-1;
    $.post( `/api/notes/${i}?_method=DELETE`)
    .done(function(data){
        
        // $.get( "/api/notes")
        // .done(function(data){
            // $('.allnotes').html('');
            // for(var i=0;i<data.length;i++){
                // $('.allnotes').append(`<div class='noteLink' onclick="loadNote(${i},'${data[i].title}','${data[i].text}')">${data[i].title}</div>`)       
                update();
                
                $('.content').html();
                $('.content').html(`
            
                <form id='note'>
            
                 <input type="text" id="title" name='title' placeholder="Title">
                 <textarea id="text" name='text' placeholder="Input notes"></textarea>
            
                </form>
                <button class='btn btn-outline-success' onclick="submitNote()" id="noteButton"><i class="fas fa-save"></i> Save</button>
                
                `)
            
            }
        )
        
    .fail(function() {
        alert( "Delete Note Error" );
    });
// })
}

//prompt login
function promptLogin(){
    $('.container-fluid').append(`
    <div id="promptLogin" style="position:absolute;left:0px;top:0px;z-index:10;height:100vh; width:100vw; background-color:black; opacity:0.6">
    </div> 
    <div id="loginBox"  class="d-flex justify-content-center align-items-center flex-column">
    <h4>Login</h4>
    <form id='loginForm' class="d-flex flex-column">
    Username:
    <input type='text' name='username' id="username"></input>
    Password:
    <input type='password' name='password' id="password"></input>
    </form>
    <button class="btn btn-outline-success">Submit</button>
    </div>
    `)
}

//produce list on load
update();


// promptLogin();

