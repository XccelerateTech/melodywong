/*Once the user hovers over the 4 icons, they should increase in size by 40%, 
once the users mouse leaves the icons their size should decrease to normal again*/

window.onload = function() {
    
    var resize=document.getElementsByClassName("icon");
   
    [...resize].forEach(function(resize){

    resize.addEventListener("mouseenter", function(){
        resize.style.height="70px";
    });

    resize.addEventListener("mouseleave", function(){
        resize.style.height="50px";
    });
    }
    )
 

    var button=document.getElementById("learnbutton");
    var mainbg=document.getElementsByClassName("main");
    console.log(mainbg);

    button.addEventListener("click", function(){
        button.innerHTML="buy flowers";
        button.style.backgroundColor="red";
        mainbg[0].style.backgroundImage="url('images/flowershop.jpg')";
    });



   }
