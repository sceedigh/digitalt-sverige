var myndigheter_antal = 351; // http://www.myndighetsregistret.scb.se/Arsstatistik.aspx
var kommuner_antal = 290; // https://skl.se/tjanster/kommunerlandsting/faktakommunerochlandsting.432.html

document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
  document.getElementById("stat-offentligsektor-myndigheter").textContent = myndigheter_antal + " myndigheter";
	document.getElementById("stat-offentligsektor-kommuner").textContent = kommuner_antal + " kommuner";
});
