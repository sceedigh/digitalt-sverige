// Befolkningsmängd från SCB:
// http://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning/befolkningens-sammansattning/befolkningsstatistik/
// HTTP GET = metadata, HTTP POST = data
var scb_api_url = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101X/NTBE0101";
var scb_folkmangd_aktuell;

var scb_request = {
	"query": [
		{
			"code": "ContentsCode",
			"selection": {
				"filter": "item",
				"values": [
					"000000TD"
				]
			}
		},
		{
			"code": "Tid",
			"selection": {
				"filter": "item",
				"values": [
					"ÅÅÅÅMnn" // ersätts med senaste tid i GET-query
				]
			}
		}
	],
	"response": {
		"format": "json"
	}
};

function fetchSCBData() {
	// Hämta parameter för aktuell år/månad (HTTP GET)
	fetch(scb_api_url)
	  .then(
			function(response) {
			  if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
					  response.status);
					return;
			  }

			  // Examine the text in the response
			  response.json().then(function(data) {

					var scb_tid_array = data.variables["2"].valueTexts;
					var scb_metadata_tid = scb_tid_array[scb_tid_array.length -1];
					// Uppdatera query med parameter för aktuell tid/månad
					scb_request.query[1].selection.values[0] = scb_metadata_tid;

					// Hämta data för aktuell år/månad (HTTP POST)
					fetch(scb_api_url, {
						method: 'POST',
						headers: {'Content-Type':'application/x-www-form-urlencoded'},
						body: JSON.stringify(scb_request)
					}).then(
							function(response) {
							  if (response.status !== 200) {
									console.log('Looks like there was a problem. Status Code: ' +
									  response.status);
									return;
							  }

							  // Parsa JSON-svar från SCB
							  response.json().then(function(scb_data_response) {

									var scb_folkmangd_aktuell = (scb_data_response.data[0].values / 1000000).toFixed(1);

									document.getElementById("stat-befolkning").textContent = scb_folkmangd_aktuell + " miljoner privatpersoner är folkbokförda i Sverige.";
								});
							}
					  )
					  .catch(function(err) {
						console.log('Fetch Error :-S', err);
					});
			  });
			}
	  )
	  .catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
}
