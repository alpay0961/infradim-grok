# 🚀 Ultimativer SEO-Guide: Technik & Struktur

Dieser Guide fasst die wichtigsten technischen und strukturellen Maßnahmen zusammen, um deine Website für Google (und KI-Suchmaschinen) zu optimieren.

---

## 1. Semantisches HTML (Die Struktur verstehen)
Google liest den Code, nicht das visuelle Design. Wenn du nur `<div>`-Container verwendest, weiß Google nicht, was wichtig ist.

### HTML5 Tags nutzen
Verwende spezifische Tags statt nur `<div>`:
*   `<nav>`: Für Navigation (sagt Google: "Hier sind Links").
*   `<header>` & `<footer>`: Rahmenwerk, nicht der Hauptinhalt.
*   `<article>` oder `<main>`: Der eigentliche Content (sagt Google: "Hier liegt das Keyword-Gold").
*   `<aside>`: Für die Sidebar (sagt Google: "Das ist weniger wichtig").

### Hierarchie der Überschriften (H-Tags)
*   **Pro Seite genau eine `<h1>`**.
*   **Logische Abfolge:** `<h2>`, darunter `<h3>`, etc.
*   **Regel:** Niemals eine Hierarchie überspringen (z.B. von H2 direkt auf H4), nur weil es optisch besser aussieht. Das verwirrt den Bot.

---

## 2. Core Web Vitals & Performance
Geschwindigkeit ist wichtig, aber die *gefühlte* Geschwindigkeit und visuelle Stabilität sind entscheidend für das Ranking.

### LCP Optimierung (Preloading)
Das "Largest Contentful Paint" (meist das Hauptbild) muss sofort da sein.
*   **Der Trick:** Zwinge den Browser, das wichtigste Bild zuerst zu laden.
*   **Code (im `<head>`):**
    ```html
    <link rel="preload" as="image" href="dein-hauptbild.jpg">
    ```

### CLS (Cumulative Layout Shift) verhindern
Vermeide, dass Text springt, wenn Bilder nachladen.
*   **Der Trick:** Gib Bildern und Videos im HTML immer `width` und `height` Attribute mit (Aspect Ratio).
*   **Code:**
    ```html
    <img src="bild.jpg" width="800" height="600" alt="...">
    ```

### Native Lazy Loading
Lade Bilder erst, wenn der Nutzer zu ihnen scrollt.
*   **Code:**
    ```html
    <img src="bild.jpg" loading="lazy" alt="...">
    ```

### Next-Gen Bildformate
Verwende `.webp` oder `.avif` statt `.jpg` oder `.png`. Diese sind bei gleicher Qualität oft 30-50% kleiner.

---

## 3. Crawling & Indexierung steuern
Du willst nicht, dass Google alles indexiert (z.B. Impressum, Admin-Login), da dies dein "Crawl Budget" verschwendet.

### Meta Robots Tag
Setze unwichtige Seiten auf "noindex".
*   **Code (im `<head>`):**
    ```html
    <meta name="robots" content="noindex, follow">
    ```

### Canonical Tags (Gegen "Kannibalisierung")
Wenn du zwei sehr ähnliche Seiten hast (z.B. "Rote Schuhe" und "Rote Sneaker"), weiß Google nicht, welche ranken soll.
*   **Der Trick:** Sag Google, wer der "Chef" ist.
*   **Umsetzung:** Füge auf der *unwichtigeren* Seite diesen Tag ein:
    ```html
    <link rel="canonical" href="https://deine-seite.de/wichtige-seite" />
    ```
*   Dies überträgt die Ranking-Power auf die Hauptseite.

### Sitemap.xml & Robots.txt
Stelle sicher, dass deine `sitemap.xml` in der `robots.txt` verlinkt ist. Das ist die Landkarte für den Bot.

---

## 4. Strukturierte Daten (Schema Markup)
Das ist der stärkste rein technische Hebel aktuell. Du fütterst Google mit maschinenlesbaren Daten (JSON-LD).

*   **BreadcrumbList:** Zeigt in den Suchergebnissen den Pfad an (Startseite > Schuhe > Nike).
*   **Product Schema:** Zeigt Preis, Verfügbarkeit und Sternebewertung direkt in Google an.
*   **Organization Schema:** Verknüpft deine Social-Media-Profile und dein Logo fest mit deiner Marke.
*   **FAQPage:** (Nur noch für Behörden/Gesundheit relevant für Rich Snippets, hilft aber dem Verständnis).

---

## 5. Optimierung für "Zero-Click" & KI-Antworten
Viele Nutzer wollen die Antwort sofort. Um in den "AI Overviews" zu landen, musst du deine Antwort strukturieren.

### Die "Definition-First"-Methode
Beginne deinen Artikel oder Absatz sofort mit der harten Antwort.

*   **Beispiel:**
    > "Die Kosten für eine SEO-Analyse liegen 2026 zwischen 800 € und 2.500 €. Der Preis hängt ab von..."
    > (Erst danach kommen die Details).

---

## 6. Meta-Daten & URLs
Auch wenn Meta-Beschreibungen kein direkter Rankingfaktor mehr sind, beeinflussen sie die Klickrate (CTR).

### Title Tag
*   Das wichtigste Keyword muss so weit wie möglich am Anfang stehen.
*   Maximal 60 Zeichen.

### Meta Description
*   Sollte eine "Call-to-Action" enthalten (z.B. "Jetzt informieren", "Hier klicken").

### Viewport Meta Tag
Essenziell für Mobile SEO. Ohne diesen Tag rankt Google dich mobil schlecht.
*   **Code:**
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ```

### URL-Struktur
*   **Sprechende URLs:** `domain.de/leistungen/seo-beratung` (statt `p=123`).
*   **Bindestriche:** `seo-tricks` (statt `seo_tricks`).
*   **Kleinschreibung:** Immer Kleinschreibung erzwingen.

---

## 7. Sicherheit (HTTPS)
Ein Hygienefaktor. Ohne SSL (`https`) zeigt Chrome "Nicht sicher" an. Das zerstört Nutzersignale und Ranking.

---

## Zusammenfassung: Die Technik-Checkliste

| Bereich | Maßnahme | HTML/Code Beispiel |
| :--- | :--- | :--- |
| **Struktur** | Semantische Tags nutzen | `<article>`, `<nav>`, `<aside>` |
| **Performance** | Layout Shift verhindern | `<img ... width="500" height="300">` |
| **Performance** | Bilder faul laden | `loading="lazy"` |
| **Performance** | LCP Preload | `<link rel="preload" ...>` |
| **Duplikate** | Originalseite definieren | `<link rel="canonical" ...>` |
| **Rich Snippets** | Schema Markup einbauen | `<script type="application/ld+json">...` |
| **Mobile** | Viewport Tag | `<meta name="viewport" ...>` |

---

## Bonus: Das perfekte HTML-Boilerplate
Hier ist eine Vorlage, in der die wichtigsten Tags bereits korrekt eingebaut sind:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta property="og:type" content="website">
<meta property="og:url" content="https://www.yoursite.com/">
<meta property="og:title" content="Page Title - Brand Name">
<meta property="og:description" content="A compelling summary of your page.">
<meta property="og:image" content="https://www.yoursite.com/og-image.jpg">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.yoursite.com/">
<meta property="twitter:title" content="Page Title - Brand Name">
<meta property="twitter:description" content="A compelling summary of your page.">
<meta property="twitter:image" content="https://www.yoursite.com/og-image.jpg">
    <!-- SEO Meta Tags -->
    <title>Dein Haupt-Keyword am Anfang | Marke</title>
    <meta name="description" content="Hier steht die klickstarke Beschreibung mit Call-to-Action.">
    <meta name="robots" content="index, follow">
    
    <!-- Canonical (Der Chef) -->
    <link rel="canonical" href="https://deine-website.de/diese-seite">
    
    <!-- Performance: Preload LCP Image -->
    <link rel="preload" as="image" href="img/hero-bild.webp">

    <!-- Styles -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Semantische Struktur: Header & Nav -->
    <header>
        <nav>
            <!-- Navigation Links -->
        </nav>
    </header>

    <!-- Hauptinhalt -->
    <main>
        <article>
            <h1>Hauptüberschrift (H1) - Nur einmal pro Seite!</h1>
            
            <!-- Definition-First für KI -->
            <p>Hier steht die direkte Antwort auf die Suchintention (Zero-Click Optimierung).</p>

            <h2>Unterüberschrift (H2)</h2>
            <p>Weiterer Inhalt...</p>

            <!-- Bild mit CLS-Schutz und Lazy Loading -->
            <img src="img/bild.webp" width="800" height="600" loading="lazy" alt="Beschreibender Alt-Text">
        </article>
        
        <!-- Sidebar (weniger wichtig) -->
        <aside>
            <h3>Weitere Infos</h3>
        </aside>
    </main>

    <!-- Footer -->
    <footer>
        <!-- Copyright, Links -->
    </footer>

    <!-- Schema Markup (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Deine Marke",
      "url": "https://deine-website.de"
    }
    </script>

</body>
</html>
```