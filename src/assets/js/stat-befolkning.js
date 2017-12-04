// Befolkningsmängd från SCB (API saknas):
// http://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning/befolkningens-sammansattning/befolkningsstatistik/
var scb_data = {
	"befolkning": [
	  {"datum": "2016-01", "antal": 9858855},
	  {"datum": "2017-01", "antal": 10008271},
	  {"datum": "2017-09", "antal": 10093734},
	]
};

document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
	var befolkning_antal = (scb_data.befolkning[2].antal / 1000000).toFixed(1);
  document.getElementById("stat-befolkning").textContent = befolkning_antal + " miljoner personer är folkbokförda i Sverige.";
});
