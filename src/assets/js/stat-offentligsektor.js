var myndigheter_antal = 352; // http://www.myndighetsregistret.scb.se/Ar
var kommuner_antal = 290;

var kommuner_api_url = "https://catalog.skl.se/rowstore/dataset/491a181b-4b6d-422e-997c-0fb2fc6bd8bc/json";

// Hämta statistik om kommuner från SKL
function fetchKommuner() {

	fetch(kommuner_api_url)
	  .then(
			function(response) {
			  if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
					  response.status);
					return;
			  }

			  // Examine the text in the response
			  response.json().then(function(data) {

          kommuner_antal = data.resultCount;

					document.getElementById("stat-offentligsektor-kommuner").textContent = kommuner_antal + " kommuner";
			  });
			}
	  )
	  .catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}

document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
  document.getElementById("stat-offentligsektor-myndigheter").textContent = myndigheter_antal + " myndigheter";
	document.getElementById("stat-offentligsektor-kommuner").textContent = kommuner_antal + " kommuner";
});
