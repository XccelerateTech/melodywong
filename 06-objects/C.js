var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

//1.Use .filter() to filter out all of the Barcelona players.
var barcelona=players.filter(function(player){
    return player.club==="FC Barcelona";
})
console.log(barcelona);

//2.Create an array with the names of all the players.
var names=players.map(function(name){
    return name.name;
})
console.log(names);