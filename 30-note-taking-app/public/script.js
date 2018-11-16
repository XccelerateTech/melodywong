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
        function notes(i,title,text){
            return `<div class='noteLink' onclick="loadNote(${i},'${title}','${text}')">${title}</div>`
        }

        $('.allnotes').html('');

        for(var i=0;i<data.length;i++){
            
            $('.allnotes').append(notes(i,escapeHtml(data[i].title),escapeHtml(data[i].text)))
                    
        }
    })
    .fail(function() {
        alert( "Update List Error" );
    });
}


$('#addNew').on('click',function(){
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


 function loadNote(i,title,data){
    
                    $('.content').html(`
                    <form id='note'>
                    
                    
                    <input type="text" id="title" name='title' value="${title}">
                    <textarea id="text" name='text' placeholder="Input notes">${data}</textarea>
                    <input type="hidden" name="_method" value="PUT">
                    
                    </form>
                    <div class='saveDeleteButtons'>
                    <button onclick="putNote(${i})"class='btn btn-outline-success' id="noteButton"><i class="fas fa-save"></i> Save</button>
                    <button onclick="deleteNote(${i})" class='btn btn-outline-danger' id="deleteButton" ><i class="fas fa-trash-alt"></i> Delete</button>
                    </div>
                    
                    `)
      
}
    
function putNote(i){
    let form=$('#note')

    $.ajax({
        type: 'post',
        url: `/api/notes/${i}?_method=PUT`,
        data: form.serialize()
      }).done(function() {
        update()
      }).fail(function() {
        alert("Put Note Error!")
      });
 }

function deleteNote(i){   
    $.post( `/api/notes/${i}?_method=DELETE`)
    .done(function(data){
        $.get( "/api/notes")
        .done(function(data){
            $('.allnotes').html('');
            for(var i=0;i<data.length;i++){
                $('.allnotes').append(`<div class='noteLink' onclick="loadNote(${i},'${data[i].title}','${data[i].text}')">${data[i].title}</div>`)       
            
                $('.content').html();
                $('.content').html(`
            
                <form id='note'>
            
                 <input type="text" id="title" name='title' placeholder="Title">
                 <textarea id="text" name='text' placeholder="Input notes"></textarea>
            
                </form>
                <button class='btn btn-outline-success' onclick="submitNote()" id="noteButton"><i class="fas fa-save"></i> Save</button>
                
                `)
            
            }
        })
        
    .fail(function() {
        alert( "Delete Note Error" );
    });
})
}

//produce list on load
update();