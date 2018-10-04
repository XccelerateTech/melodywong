//finish the function
var result;
function uefaEuro2016(teams, score) {
    //determine win or draw
  
    if (score[0]==score[1]){
        result='teams played draw.';
    }else if(score[0]>score[1]){
        result=(teams[0])+' won!';
    }else{
        result=(teams[1])+' won!';
    }

    console.log('At match '+teams[0]+' - '+teams[1]+', '+result);
}

// the function should result in
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."