// Innehavare av Mobilt BankID (API saknas):
// https://www.bankid.com/om-oss/statistik
	var mobilt_bankid_data = {
	"innehavare": [
		{"datum": "2016-01", "antal": 4800000},
		{"datum": "2017-01", "antal": 5900000},
		{"datum": "2018-09", "antal": 7000000},
	]
};

document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
	var mobiltbankid_antal = (mobilt_bankid_data.innehavare[2].antal / 1000000).toFixed(1);
  document.getElementById("stat-mobiltbankid").textContent = mobiltbankid_antal + " miljoner privatpersoner har ett Mobilt BankID.";
});
