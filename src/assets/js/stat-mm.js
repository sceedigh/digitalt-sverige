// Mina meddelanden - antal innehavare av digitala brevlådor för myndighetspost (Öppet API från Skatteverket)
var mm_data_mottagare_url = "https://skatteverket.entryscape.net/rowstore/dataset/2927e831-9075-4bc0-b3a2-3336a992ca4b/json";
var mm_data_avsandare_url = "https://skatteverket.entryscape.net/rowstore/dataset/120b9d9d-e509-4801-836f-c4444cf81fcc/json";

var stat_mm_datum = "2021-04";

var mm_privat_antal = 4438142;
var mm_foretag_antal = 141688;
var mm_myndigheter_antal = 56;
var mm_kommuner_antal = 101;
var mm_regioner_antal = 12;
var mm_foretag_procent;
var mm_myndigheter_procent;
var mm_kommuner_procent;
var mm_regioner_procent;

function fetchMMData() {
	//fetchMMMottagare(); // inaktiverat p.g.a. inaktuell data från Skatteverkets API
	//fetchMMAvsandare(); // inaktiverat p.g.a. inaktuell data från Skatteverkets API
	displayMMMottagare();
	displayMMAvsandare();
}


// Visa statistik om mottagare i Mina meddelanden från statisk data
function displayMMMottagare() {
	mm_privat_antal = (mm_privat_antal / 1000000).toFixed(1);
	mm_foretag_procent = Math.round((mm_foretag_antal/foretag_antal)*100);

	document.getElementById("stat-mm-privat").textContent = mm_privat_antal + " miljoner privatpersoner har en säker digital brevlåda för myndighetspost.";
	document.getElementById("stat-mm-privat-datum").textContent = "(" + stat_mm_datum + ")";
	document.getElementById("stat-mm-foretag").textContent = mm_foretag_antal.toLocaleString() + " företag (" + mm_foretag_procent + " %) har en säker digital brevlåda för myndighetspost.";
	document.getElementById("stat-mm-foretag-datum").textContent = "(" + stat_mm_datum + ")";
}

// Visa statistik om avsändare i Mina meddelanden från statisk data
function displayMMAvsandare() {
	mm_myndigheter_procent = Math.round((mm_myndigheter_antal/myndigheter_antal)*100);
	mm_kommuner_procent = Math.round((mm_kommuner_antal/kommuner_antal)*100);
	mm_regioner_procent = Math.round((mm_regioner_antal/regioner_antal)*100);

	document.getElementById("stat-mm-myndigheter").textContent = mm_myndigheter_procent + " %";
	document.getElementById("stat-mm-myndigheter-datum").textContent = "(" + stat_mm_datum + ")";
	document.getElementById("stat-mm-kommuner").textContent = mm_kommuner_procent + " %";
	document.getElementById("stat-mm-kommuner-datum").textContent = "(" + stat_mm_datum + ")";
	document.getElementById("stat-mm-regioner").textContent = mm_regioner_procent + " %";
	document.getElementById("stat-mm-regioner-datum").textContent = "(" + stat_mm_datum + ")";
}

// Hämta statistik om mottagare i Mina meddelanden från Skatteverkets API
function fetchMMMottagare() {

	fetch(mm_data_mottagare_url)
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

					mm_privat_antal = (parseInt(mm_aktuell.privatpersoner.replace(/\s/g, "")) / 1000000).toFixed(1);
					mm_foretag_antal = parseInt(mm_aktuell.företag.replace(/\s/g, ""));
					mm_foretag_procent = Math.round((mm_foretag_antal/foretag_antal)*100);

					document.getElementById("stat-mm-privat").textContent = mm_privat_antal + " miljoner privatpersoner har en säker digital brevlåda för myndighetspost.";
					document.getElementById("stat-mm-foretag").textContent = mm_foretag_antal.toLocaleString() + " företag (" + mm_foretag_procent + " %) har en säker digital brevlåda för myndighetspost.";
			  });
			}
	  )
	  .catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}

// Hämta statistik om avsändare i Mina meddelanden från Skatteverkets API
function fetchMMAvsandare() {

	fetch(mm_data_avsandare_url)
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

					mm_antal_myndigheter = mm_aktuell.myndigheter;
					mm_antal_kommuner = mm_aktuell.kommuner;

					mm_myndigheter_procent = Math.round((mm_antal_myndigheter/myndigheter_antal)*100);
					mm_kommuner_procent = Math.round((mm_antal_kommuner/kommuner_antal)*100);

					document.getElementById("stat-mm-myndigheter").textContent = mm_myndigheter_procent + " %";
					document.getElementById("stat-mm-kommuner").textContent = mm_kommuner_procent + " %";
			  });
			}
	  )
	  .catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}
