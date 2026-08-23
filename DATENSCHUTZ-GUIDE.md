# 🛡️ Guide für eine DSGVO-konforme Datenschutzerklärung

Diese Übersicht fasst die notwendigen Inhalte und technischen Anforderungen für die Datenschutzerklärung zusammen, basierend auf DSGVO und TDDDG.

## 1. Pflichtangaben (Der Standard-Block)

Jede Datenschutzerklärung muss zwingend folgende Punkte enthalten (Art. 13 DSGVO):

*   **Verantwortlicher:** Name und Kontaktdaten (identisch mit Impressum).
*   **Datenschutzbeauftragter:** Falls vorhanden, muss die Funktion (nicht zwingend der Name) und Kontaktmöglichkeit genannt werden.
*   **Rechtsgrundlagen:** Für jede Verarbeitung muss die Rechtsgrundlage genannt werden (z. B. Art. 6 Abs. 1 lit. b DSGVO für Verträge, lit. f für berechtigtes Interesse wie Sicherheit).
*   **Rechte der Nutzer:** Auflistung der Betroffenenrechte:
    *   Auskunft, Berichtigung, Löschung ("Vergessenwerden").
    *   Einschränkung der Verarbeitung, Datenübertragbarkeit.
    *   **Widerspruchsrecht (Art. 21 DSGVO):** Recht, gegen die Verarbeitung (z. B. bei Direktwerbung oder berechtigtem Interesse) zu widersprechen.
    *   Beschwerderecht bei der Aufsichtsbehörde.
*   **Widerrufsrecht:** Klarer Hinweis, dass Einwilligungen (z. B. Cookie-Consent) jederzeit widerrufen werden können.

## 2. Hosting & Technik

*   **SSL/TLS-Verschlüsselung:**
    *   Hinweis, dass die Seite per HTTPS verschlüsselt ist (Stand der Technik: mind. **TLS 1.2** gemäß § 19 TDDDG).
*   **Hoster-Angaben (Febas):**
    *   Da wir standardmäßig Febas nutzen, sind hier die Daten für das Impressum/Datenschutz:
    *   **Anbieter:** Febas - Roman Baumgärtner, Ostlandstraße 5, 49565 Bramsche, Deutschland.
    *   **Datenschutz-Link:** https://www.febas.de/datenschutz/
*   **WICHTIG: AV-Vertrag (Auftragsverarbeitung):**
    *   **Die Konstellation:** Der Kunde hat den Vertrag mit DIR (Alpay Demir Webelona), du hast den Vertrag mit Febas.
    *   **Warum?** Nicht nur Hosting, sondern auch **Webdesign, Wartung und Backups** gelten als Auftragsverarbeitung, sobald Zugriff auf personenbezogene Daten (z. B. IP-Adressen, Kunden-Mails) möglich ist.
    *   **Was im Text stehen muss:**
        *   Der Kunde nennt **DICH** (Alpay Demir Webelona) als seinen Dienstleister (Hosting & Betreuung).
        *   Ergänzend kann stehen: *"Die technische Infrastruktur wird von unserem Partner Febas (Adresse s.o.) bereitgestellt."*
        *   Der Hinweis auf den geschlossenen **AV-Vertrag** bezieht sich auf den Vertrag zwischen dem **Kunden und DIR**. (Dass du einen mit Febas hast, ist deine interne Absicherung).
*   **Server-Logfiles:**
    *   Erklärung, dass technische Daten zur **Sicherheit und Fehlerbehebung** gespeichert werden.
    *   **Daten:** IP-Adresse (ggf. anonymisiert), Browser, Betriebssystem, Referrer-URL, Zeitstempel.
    *   **Wichtig:** Hinweis, dass diese Daten **nicht** für Marketing oder Profilbildung genutzt werden.

## 3. Cookies & Tracking (Die 2-Stufen-Prüfung)

Nicht jede Website braucht ein Banner – nur die, die nicht-notwendige Technologien nutzen.

**Die Unterscheidung (§ 25 TDDDG):**
*   **Technisch notwendig (Einwilligungsfrei):**
    *   Alles, was aus **Nutzersicht** unbedingt erforderlich ist (z. B. Warenkorb, Login-Status, Sicherheit).
    *   *Wichtig:* Wirtschaftliche Interessen (z. B. "Wir brauchen Geld durch Werbung") gelten **nicht** als technisch notwendig!
*   **Nicht notwendig (Einwilligungspflichtig):**
    *   Tracking, Marketing, Reichweitenmessung, Website-Optimierung.
    *   Hier muss **vor** dem Setzen des Cookies/Zugriff die aktive Zustimmung eingeholt werden (Consent-Banner).

**Die 2-Stufen-Prüfung:**
1.  **Zugriff aufs Gerät (TDDDG):** Darf ich speichern/auslesen? (Ja, wenn notwendig / Sonst Consent).
2.  **Datenverarbeitung (DSGVO):** Darf ich die Daten (IP etc.) verarbeiten? (Meist Consent nötig).

*   *To-Do:* Jedes verwendete Tool muss einzeln in der Datenschutzerklärung aufgeführt werden.

## 4. Externe Inhalte & Dienste (Vorsicht Falle!)

*   **Google Fonts (Abmahnfalle!):**
    *   **Problem:** Das Laden von Google-Servern überträgt die IP-Adresse an Google (USA). Das ist ohne Einwilligung verboten (§ 25 Abs. 1 TDDDG).
    *   **Risiko:** Es drohen **Schadenersatzforderungen** (siehe Urteil LG München I, Az. 3 O 17493/20).
    *   ✅ **Lösung:** Schriften herunterladen und **lokal** auf dem eigenen Server speichern. Dann findet keine Datenübertragung an Google statt.
*   **Videos (YouTube/Vimeo):**
    *   **Problem:** Standard-Einbettung überträgt sofort IP-Daten und setzt Cookies (auch Google-Werbenetzwerk/DoubleClick), selbst ohne Klick.
    *   **Erweiterter Datenschutzmodus:** Dieser allein reicht oft **nicht** aus (löst nicht alle Probleme mit DoubleClick/Widerruf).
    *   **Lösung:** Videos müssen durch ein **Consent-Management (Cookie-Banner)** oder eine **2-Klick-Lösung** blockiert werden. Das Video (und damit die Verbindung zu YouTube) darf erst laden, wenn der Nutzer aktiv zugestimmt hat.
*   **Social Media (Facebook, Twitter etc.):**
    *   **Problem:** Standard-Buttons ("Like", "Share") senden Daten schon beim Laden der Seite -> **Verboten!**
    *   **Lösung 1 (Empfohlen): Shariff-Lösung.** Buttons sind statische Links. Erst beim Klick werden Daten übertragen.
    *   **Lösung 2:** 2-Klick-Lösung (Erst aktivieren, dann klicken).
    *   **Lösung 3:** Einfache HTML-Links zu den Profilen.

## 5. Formulare & Kommunikation

*   **Kontaktformular:**
    *   **Datenminimierung:** Nur Felder als "Pflichtfeld" markieren, die wirklich nötig sind (meist Name & E-Mail). Optionale Felder als "freiwillig" kennzeichnen.
    *   **Verschlüsselung:** Muss zwingend über HTTPS (mind. TLS 1.2) laufen.
    *   **Zweck:** Hinweis, dass Daten nur zur Bearbeitung der Anfrage genutzt werden (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO - vorvertragliche Maßnahme).
*   **Online-Handel (Gastzugang):**
    *   **Pflicht:** Es muss zwingend ein **Gastzugang** angeboten werden (Datenminimierung). Kunden dürfen nicht zum Anlegen eines Kundenkontos gezwungen werden (DSK-Beschluss vom 24.03.2022).

## 6. Tracking & Analyse (Google Analytics & Co.)

*   **Reichweitenmessung ist NICHT notwendig:**
    *   Auch Tools wie Matomo oder Google Analytics gelten laut DSK als **nicht technisch notwendig**.
    *   **Folge:** Sie brauchen zwingend eine **Einwilligung** (Consent-Banner) nach § 25 Abs. 1 TDDDG.
*   **Google Analytics Spezial:**
    *   Hier reicht ein AV-Vertrag oft nicht mehr, da Google Daten für eigene Zwecke nutzt ("Joint Controllership").
    *   **Praxistipp:** Einwilligung muss VOR dem Laden des Skripts eingeholt werden. Ohne "Ok" im Banner darf kein Datenverkehr zu Google stattfinden.

## 7. Datenweitergabe & AV-Verträge

*   **Grundsatz:** Datenweitergabe an Dritte (z. B. Cloud-Anbieter, Paketzusteller, Zahlungsdienstleister) braucht eine Rechtsgrundlage:
    *   **Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):** z. B. Adresse an DHL für Versand.
    *   **Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO):** z. B. Bonitätsprüfung (mit Vorab-Info!).
    *   **Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):** Wenn sonst nichts greift (jederzeit widerrufbar).
    *   *Verboten:* Verkauf von Daten (z. B. Adresshandel) ohne explizite Einwilligung.
*   **Auftragsverarbeitung (AV-Verträge):**
    *   Sobald ein externer Dienstleister weisungsgebunden Daten verarbeitet (Hosting, Newsletter-Tool, Cloud-Speicher, Wartung), **MUSS** ein AV-Vertrag geschlossen werden.
    *   **Liste prüfen:** Hast du AV-Verträge mit deinem Hoster, Newsletter-Tool, CRM-Anbieter?

## 8. Platzierung

*   Der Link "Datenschutz" muss von **jeder Unterseite** aus erreichbar sein (idealerweise im Footer neben dem Impressum).
*   Er muss eigenständig sein (nicht im Impressum versteckt).

## 9. Neu ab 2025: KI & Sicherheit (Updates)

*   **EU-KI-Verordnung (AI Act):**
    *   Falls KI-Systeme (z. B. Chatbots, KI-generierte Texte/Bilder) eingesetzt werden, besteht eine **Kennzeichnungspflicht**. Nutzer müssen erkennen, dass sie mit einer KI interagieren oder Inhalte künstlich erzeugt wurden.
*   **Datensicherheit (TOMs):**
    *   Neben SSL/TLS sollte erwähnt werden, dass umfassende **technische und organisatorische Maßnahmen (TOMs)** getroffen werden (z. B. Zugriffskontrollen, Backups, Firewalls), um die Daten gegen Missbrauch und Verlust zu schützen.
*   **Hinweis zu DORA / NIS2:**
    *   Für regulierte Branchen (Finanzen, kritische Infrastruktur) gelten ab 2025 strengere Cybersecurity-Regeln. Für "normale" Webseiten reicht der allgemeine Sicherheitshinweis meist aus.

## 10. Checkliste für Nutzer des Webelona Buchungs-Widgets

Wenn du das **Webelona Terminbuchungs-Widget** auf deiner Webseite einbindest, musst du folgende Punkte für die DSGVO-Konformität beachten:

1.  **Ergänzung der Datenschutzerklärung:**
    *   Du musst deine Nutzer darüber informieren, dass du ein externes Tool zur Terminbuchung nutzt.
    *   **Textbaustein:** *"Für die Online-Terminvergabe nutzen wir die Software 'Webelona Booking Widget'. Die eingegebenen Daten werden zur Durchführung des Termins verarbeitet. Technischer Dienstleister ist Alpay Demir Webelona. Weitere Details zur Datenverarbeitung in diesem Tool findest du hier: [Link zur Webelona-Datenschutzerklärung]."*

2.  **AV-Vertrag (Auftragsverarbeitung):**
    *   Stelle sicher, dass du einen **AV-Vertrag** mit dem Anbieter des Widgets (Alpay Demir Webelona) geschlossen hast. Da das Tool personenbezogene Daten deiner Kunden (Namen, E-Mail) verarbeitet, ist dies gesetzlich Pflicht (Art. 28 DSGVO).

3.  **Cookie-Banner (Consent):**
    *   **Gute Nachricht:** Das Widget selbst setzt **keine Tracking-Cookies** und lädt **keine externen Schriftarten** (Google Fonts). Es nutzt lediglich den "Local Storage" für die technische Funktion (Warenkorb-Prinzip).
    *   **Konsequenz:** Du benötigst für das Widget allein **keine Einwilligung** im Cookie-Banner. Es gilt als "technisch notwendig" (§ 25 Abs. 2 TDDDG).

4.  **Verlinkung:**
    *   Nutze die bereitgestellte Datei `webelona-terminbuchung-datenschutz.html` als Referenz. Du kannst sie entweder auf deinem Server hochladen und verlinken oder direkt den Link nutzen, den dir Webelona zur Verfügung stellt.

---

**Wichtig für die Umsetzung:**
> "Prüfe genau, welche Tools auf der Website aktiv sind. Wenn Google Analytics nicht genutzt wird, darf es nicht in der Erklärung stehen. Wenn es genutzt wird, muss es rein UND im Cookie-Banner blockiert werden, bis die Zustimmung erfolgt."
