let selectedNote=-1;
let userID;

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

function update(){
    console.log("User ID: ",userID);
 
 
    $.ajax( {
        type:'get',
        url:`/api/notes/${userID}`,
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
        text:$('#text').val(),
        userID:userID,
        
    }).then(function(res){
        update();
        $('#title').val('');
        $('#text').val('');
    })


 
 }


 function loadNote(i,title,data,id){
    selectedNote=i;
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
    <h4>Welcome to Note.app</h4>
    <form id='loginForm' class="d-flex flex-column">
    Username:
    <input type='text' name='username' id="username"></input>
    Password:
    <input type='password' name='password' id="password"></input>
    </form>
    <div id="loginError"></div>
    <div class="d-flex">
    <button id="checkLoginButton" class="btn btn-outline-success" onclick="checkLogin()">Login</button>
    <button class="btn btn-outline-primary" onclick="newUser()">Create account</button>
    </div>
    </div>
    `)
}

function checkLogin(){
    $.ajax( {
        type:'post',
        url:"/api/auth",
        data: $('#loginForm').serialize()
    })
    .done(function(data){
        console.log('check data', data)
        if (data.status===true){
            userID=data.id;
            $('#promptLogin').remove();
            $('#loginBox').remove();
            $('#welcome').html(`<h5>Welcome back ${data.username}!</h5>`)
            update();

        } else{
            $('#loginError').html(`<p style="color:red">Wrong username or password.`)
        }
        
    })
    .fail(function() {
        alert( "Check Login Error" );
    });
}

function newUser(){
    let newUserName=$('#username').val()
    $.ajax( {
        type:'post',
        url: `/api/auth/0?_method=PUT`,
        data: $('#loginForm').serialize()
    })
    .done(function(data){
        console.log(data[0].UserId)
        userID=data[0].UserId;
     
            $('#promptLogin').remove();
            $('#loginBox').remove();
            $('#welcome').html(`<h5>Welcome back ${newUserName}!</h5>`)
            update();

    })
    .fail(function(err) {
        alert(err );
    });
}



//produce list on load



promptLogin();

