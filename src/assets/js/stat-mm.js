// Mina meddelanden - antal innehavare av digitala brevlådor för myndighetspost (Öppet API från Skatteverket)
var mm_data_url = "https://skatteverket.entryscape.net/rowstore/dataset/23fb9225-4eb6-4ae4-9835-5dc721c75717/json";
var mm_antal_privat;
var mm_antal_foretag;
var mm_myndigheter = 17; // http://www.minameddelanden.se/mm/digitalpostfranmyndigheter.html
var mm_kommuner = 17; // http://www.minameddelanden.se/mm/digitalpostfranmyndigheter.html
var mm_myndigheter_procent = Math.round((mm_myndigheter/myndigheter_antal)*100);
var mm_kommuner_procent = Math.round((mm_kommuner/kommuner_antal)*100);

function fetchMMData() {

	// Hämta data om Mina meddelanden
	fetch(mm_data_url)
	  .then(
			function(response) {
			  if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
					  response.status);
					return;
			  }

			  // Examine the text in the response
			  response.json().then(function(data) {

					var mm_aktuell = data.results["0"];

					mm_antal_privat = (parseInt(mm_aktuell.privatpersoner.replace(/\s/g, "")) / 1000000).toFixed(1);
					mm_antal_foretag = parseInt(mm_aktuell.företag.replace(/\s/g, ""));

					document.getElementById("stat-mm-medborgare").textContent = mm_antal_privat + " miljoner svenskar har en säker digital brevlåda för myndighetspost.";
					document.getElementById("stat-mm-foretag").textContent = mm_antal_foretag + " företag har en säker digital brevlåda för myndighetspost.";
					document.getElementById("stat-mm-myndigheter").textContent = mm_myndigheter_procent + " %";
					document.getElementById("stat-mm-kommuner").textContent = mm_kommuner_procent + " %";
			  });
			}
	  )
	  .catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}
