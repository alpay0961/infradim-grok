# Cookie-Richtlinien & DSGVO Leitfaden

Dieser Leitfaden basiert auf der aktuellen Rechtslage (TTDSG § 25, DSGVO) und einer Analyse der DGS Dienstleistungen Webseite.

## 1. Was sind Cookies?
Cookies sind kleine Textdateien, die beim Besuch einer Webseite auf dem Endgerät des Nutzers gespeichert werden. Sie dienen dazu, den Nutzer wiederzuerkennen (z.B. Login-Status, Warenkorb) oder das Nutzerverhalten zu analysieren.

## 2. Rechtslage: Wann ist eine Einwilligung nötig?
Gemäß **§ 25 TTDSG** ist für das Speichern von Informationen auf dem Endgerät (Cookies) oder den Zugriff darauf (z.B. LocalStorage) grundsätzlich eine **echte, informierte und freiwillige Einwilligung** erforderlich.

### Unterscheidung der Kategorien:
*   **Technisch notwendige Cookies:** Keine Einwilligung erforderlich. (z.B. Warenkorb, Login-Session, Sicherheit).
*   **Analyse- & Marketing-Cookies:** Zwingend einwilligungspflichtig. (z.B. Google Analytics, Facebook Pixel, YouTube Embeds).

## 3. Anforderungen an den Cookie-Banner
Falls ein Banner verwendet wird (wenn nicht-notwendige Cookies eingesetzt werden), muss er folgende Kriterien erfüllen (Urteil OLG Köln, 19.01.2024):

1.  **Gleichwertigkeit:** Die Buttons "Alles akzeptieren" und "Alles ablehnen" müssen optisch gleichwertig sein.
2.  **Keine "Dark Patterns":** Der Nutzer darf nicht durch Farben oder versteckte Menüs zur Einwilligung gedrängt werden.
3.  **Drei Optionen:**
    *   ✅ Alle akzeptieren
    *   ❌ Ablehnen (nur notwendige)
    *   ⚙️ Einstellungen (detaillierte Auswahl)

## 4. Status Quo: DGS Dienstleistungen Webseite
**Aktuelle Bewertung (Stand: Jan 2026):**

Auf der aktuellen Webseite werden **keine einwilligungspflichtigen Cookies** gesetzt.

*   **Tracking:** Es wird kein Google Analytics, Matomo oder Facebook Pixel verwendet.
*   **Externe Dienste:** Google Fonts werden lokal geladen (DSGVO-konform).
*   **Kontaktformular:** Nutzt `fetch` (AJAX) ohne Cookies zu setzen.
*   **Karten/Medien:** Es sind keine interaktiven Google Maps oder YouTube-Videos eingebunden, die automatisch Daten übertragen.

### Fazit für dieses Projekt
**Es ist aktuell kein Cookie-Banner erforderlich.**

Um diesen Status zu behalten, wurden folgende Empfehlungen gegeben:
*   Externe Bilder (z.B. von Unsplash oder texture-Seiten) lokal speichern, um die Übertragung der IP-Adresse an Dritte zu verhindern.
*   Datenschutzerklärung sauber halten (keine Klauseln für Dienste, die nicht genutzt werden).

Sollten in Zukunft Marketing-Tools hinzugefügt werden, muss zwingend ein Consent-Tool (Banner) integriert werden.
