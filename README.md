# Fickminne

Militärt fickminne med mallar för order och rapporter, som webapp. En enda HTML-fil, inget byggsteg.

- Mallar: OBO, OBSLÖSA och 5-punktsorder (order/instruktion), 8S, PEDARS och MIST (rapport), samt SOLO, EOBUSARE, ABCDE, bokstavering och formathjälp för position, vinkel och tid (hjälpmedel). Fler läggs till i `TEMPLATES` överst i skriptet i `index.html`.
- 8S kan utökas i formuläret med SCRIMM (fordon), WEFT (luftfarkost) och A–H (person).
- Varje mall öppnas som en minneslista. "Skapa ny" visar formuläret, och sparade poster nås genom att svepa åt höger eller via "Sparade" i menyn längst ner.
- Allt sparas i webbläsarens `localStorage` på enheten. Inget skickas någonstans.
- Fungerar utan nät efter första besöket (`sw.js`).

## Köra lokalt

Öppna `index.html` direkt, eller starta en lokal server:

    python3 -m http.server 8000

Offline-stödet registreras bara över https, alltså inte lokalt.

## GitHub Pages

Pusha till GitHub och välj under Settings → Pages: *Deploy from a branch*, `main`, `/ (root)`.

## Installera på iPhone

Öppna sidan i Safari → Dela → *Lägg till på hemskärmen*. Appen startar då i helskärm.
Hemskärmsappen har egen lagring, skild från Safari – flytta poster med Exportera/Importera under "⋯".

Byt `CACHE`-namnet i `sw.js` om du lägger till eller byter namn på filer.
