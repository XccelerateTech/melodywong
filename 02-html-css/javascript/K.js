var number;
var code=''
//decode object
var decode={
    //“a” - 6 “b” - 1 “d” - 7 “e” - 4 “i” - 3 “l” - 2 “m” - 9 “n” - 8 “o” - 0 “t” - 5
    '6':'a',
    '1':'b',
    '7':'d',
    '4':'e',
    '3':'i',
    '2':'l',
    '9':'m',
    '8':'n',
    '0':'o',
    '5':'t',
}
var recode={
    'a':'6',
    'b':'1',
    'd':'7',
    'e':'4',
    'i':'3',
    'l':'2',
    'm':'9',
    'n':'8',
    'o':'0',
    't':'5',
}

function numToWord(number){
    var n=number.toString();
    n=n.split("");
    //now the number is an array of numbers
    var word='';
    for(var i=0;i<n.length;i++){
        word=word+decode[n[i]];
    }
    console.log(word);
}

function wordToNum(code){
    var c='';
    code=code.split("");
    for(var x=0;x<code.length;x++){
        if(recode[code[x]]===undefined){
            c='Error, character not in code list';
            break;
        }
        c=c+recode[code[x]]
    }
    console.log(c);
}

numToWord(17992);
wordToNum('hello');
wordToNum('ello');