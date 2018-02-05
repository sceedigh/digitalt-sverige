// Företagsstatistik från Bolagsverket (API saknas):
// http://www.bolagsverket.se/be/sok/etjanster/statistik/statistik-1.3538
// Aktuella bolagsformer för Mina meddelanden: AB, KB, HB, BRF, EK
  var foretag_data = {
	"foretag": [
	  {"datum": "2016-01", "antal": 631691},
	  {"datum": "2017-01", "antal": 656423},
	  {"datum": "2018-01", "antal": 682279},
	]
};

document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
	var foretag_antal = foretag_data.foretag[2].antal.toLocaleString();
  document.getElementById("stat-foretag").textContent = foretag_antal + " företag är registrerade i Sverige.";
});
