//Tic Tac Toe Game with slide animation for each placement 

//take turns to play
var counter=0;
$('.result').fadeIn("slow");


$('.play').on('click','.box',function(e){
    //check if the box is filled
    var x=$(this).html();
    var y=$(this);
    if(x==="o"||x==="X"){
        alert("this box is taken")
    }else{
        if(counter%2==0){//0 and even number
        y.append("o").show();
        $('.who').html("X's turn.");

        }else{
        y.html("X");
        $('.who').html("o's turn.");
        }
        counter=counter+1;

    }


    //check win
    if($('.1').html()===$('.2').html()&&$('.2').html()===$('.3').html()){ //hor row 1
            $('.win').html("Winner: "+$('.1').html())
    }else if($('.4').html()===$('.5').html()&&$('.5').html()===$('.6').html()){ //hor row 2
        $('.win').html("Winner: "+$('.4').html())
    }else if($('.7').html()===$('.8').html()&&$('.8').html()===$('.9').html()){ //hor row 3
        $('.win').html("Winner: "+$('.7').html())
    }else if($('.1').html()===$('.4').html()&&$('.4').html()===$('.7').html()){ //ver row 1
        $('.win').html("Winner: "+$('.7').html())
    }else if($('.2').html()===$('.5').html()&&$('.5').html()===$('.8').html()){ //ver row 2
        $('.win').html("Winner: "+$('.2').html())
    }else if($('.3').html()===$('.6').html()&&$('.6').html()===$('.9').html()){ //ver row 3
        $('.win').html("Winner: "+$('.7').html())
    }else if($('.1').html()===$('.5').html()&&$('.5').html()===$('.9').html()){ //diag row 1
        $('.win').html("Winner: "+$('.1').html())
    }else if($('.3').html()===$('.5').html()&&$('.5').html()===$('.7').html()){ //diag row 2
        $('.win').html("Winner: "+$('.7').html());
    }
})





