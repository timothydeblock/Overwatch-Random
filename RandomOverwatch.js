var getDieRoll = function() {
    var result = Math.ceil(23 * Math.random());
    return result;
};

var roll = getDieRoll();

//if (roll === 1) {
//    console.log("Tracer")
//} else if (roll === 2) {
//    console.log("Reaper")
//} 
    
var characters = [0, 
	"Genji",
	"Mcree",
	"Pharah",
	"Reaper",
	"Soldier 76",
	"Tracer", 
	"Bastion",
	"Hanzo",
	"Junkrat",
	"Mei",
	"Torbjörn",
	"Widowmaker",
	"D.va",
	"Reinhardt",
	"Roadhog",
	"Winston",
	"Zaryz",
	"Ana",
	"Lúcio",
	"Mercy",
	"Symmetra",
	"Zenyatta"
	 ]
	
for(var i = 0; i < roll; i = roll) {
    console.log(characters[roll]);
};
