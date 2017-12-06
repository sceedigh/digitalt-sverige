# digitalt-sverige
<p align="center">
  <img width="640" height="360" src="http://www.digitaltsverige.se/img/digitaltsverige-logo-1280.jpg">
</p>

http://digitaltsverige.se

DigitaltSverige.se visar öppna data om digitaliseringen av Sverige utifrån medborgares, företags och offentlig sektors perspektiv. Syftet med tjänsten är att genom öppna data och öppna API:er från aktuella källor visa hur digitaliseringen av Sverige kan beskrivas, mätas och följas upp på ett öppet, kontinuerligt och framtidsinriktat sätt. Tjänsten bidrar därmed till faktabaserade diskussioner om digital valfrihet för både medborgare, företag, myndigheter och kommuner i Sverige.

Mobil e-legitimation och digitala brevlådor för myndighetspost utgör grunden för Sveriges nationella digitala infrastruktur som från och med 2018 samordnas av Digitaliseringsmyndigheten.
          
I nuläget är data om digitala brevlådor tillgängliga via öppet API från Skatteverket och uppdateras därmed automatiskt. Övriga data om befolkningsmängd (SCB), företag (Bolagsverket) och Mobilt BankID (Finansiell ID-Teknik AB) finns ej tillgängliga via öppet API och måste därmed uppdateras manuellt genom kontinuerliga uppdateringar av tjänsten. Genom att visa vilka datakällor som är intressanta för att mäta och följa upp digitaliseringen av Sverige kan tjänsten fungera som underlag för att ställa krav på att tillgängliggöra dessa datakällor via API:er i framtiden.

Tjänsten utgörs av en mycket enkel SPA (Single Page Application) som hämtar data direkt via Javascript från externa öppna API:er via REST/JSON:

https://en.wikipedia.org/wiki/Single-page_application

Tjänstens design har delvis influerats av konceptet Serverless Architectures som har beskrivits av Martin Fowler:

https://martinfowler.com/articles/serverless.html

Eftersom all exekvering sker direkt i webbläsaren mot externa API:er måste dessa API:er ha aktiverat stöd för Cross-Origin Resource Sharing (CORS) vilket normalt sett kan utgöra en säkerhetsrisk för API:er som ej tillhandahåller öppna data:

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

Följande datakällor används i tjänsten:

Befolkningsmängd i Sverige
==========================
  * Källa: SCB
  * API: saknas
  * URL: http://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning/befolkningens-sammansattning/befolkningsstatistik/
  * Uppdateringsfrekvens: Var 3:e månad

Innehavare av Mobilt BankID
===========================
  * Källa: Finansiell ID-Teknik AB
  * API: saknas
  * URL: https://www.bankid.com/om-oss/statistik
  * Uppdateringsfrekvens: Månadsvis

Antal företag i Sverige
=======================
  * Källa: Bolagsverket
  * API: saknas
  * URL: http://www.bolagsverket.se/be/sok/etjanster/statistik/statistik-1.3538
  * Uppdateringsfrekvens: Månadsvis

Antal innehavare av digitala brevlådor för myndighetspost
=========================================================
  * Källa: Skatteverket (Mina meddelanden)
  * API: öppet API (REST/JSON)
  * URL: https://oppnadata.se/dataset/statistik-mina-meddelanden
  * Uppdateringsfrekvens: Veckovis
  * Beskrivning: Antal användare i tjänsten Mina meddelanden fördelat på privatpersoner och företag som har registrerat sig som mottagare i tjänsten och har en aktiv digital brevlåda för myndighetspost
