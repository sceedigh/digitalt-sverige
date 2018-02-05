// Mina meddelanden - antal innehavare av digitala brevlådor för myndighetspost (Öppet API från Skatteverket)
var mm_data_mottagare_url = "https://skatteverket.entryscape.net/rowstore/dataset/2927e831-9075-4bc0-b3a2-3336a992ca4b/json";
var mm_data_avsandare_url = "https://skatteverket.entryscape.net/rowstore/dataset/120b9d9d-e509-4801-836f-c4444cf81fcc/json";
var mm_antal_privat;
var mm_antal_foretag;
var mm_myndigheter;
var mm_kommuner;
var mm_myndigheter_procent;
var mm_kommuner_procent;

function fetchMMData() {
	fetchMMMottagare();
	fetchMMAvsandare();
}

// Hämta statistik om mottagare i Mina meddelanden
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

					mm_antal_privat = (parseInt(mm_aktuell.privatpersoner.replace(/\s/g, "")) / 1000000).toFixed(1);
					mm_antal_foretag = parseInt(mm_aktuell.företag.replace(/\s/g, "")).toLocaleString();

					document.getElementById("stat-mm-privat").textContent = mm_antal_privat + " miljoner privatpersoner har en säker digital brevlåda för myndighetspost.";
					document.getElementById("stat-mm-foretag").textContent = mm_antal_foretag + " företag har en säker digital brevlåda för myndighetspost.";
			  });
			}
	  )
	  .catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}

// Hämta statistik om avsändare i Mina meddelanden
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

					mm_myndigheter = mm_aktuell.myndigheter;
					mm_kommuner = mm_aktuell.kommuner;

					mm_myndigheter_procent = Math.round((mm_myndigheter/myndigheter_antal)*100);
					mm_kommuner_procent = Math.round((mm_kommuner/kommuner_antal)*100);

					document.getElementById("stat-mm-myndigheter").textContent = mm_myndigheter_procent + " %";
					document.getElementById("stat-mm-kommuner").textContent = mm_kommuner_procent + " %";
			  });
			}
	  )
	  .catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}
