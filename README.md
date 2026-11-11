# Playwright Sauce Labs Automation

Ein End-to-End-Testautomatisierungsprojekt für die Sauce Labs Demo-Website, erstellt mit Playwright unter Verwendung des Page Object Models (POM). Die Tests decken Kernfunktionen wie Authentifizierung, Produktkatalog, Warenkorb und Checkout ab.

---

## 🚀 Funktionen

- **Authentifizierung & Session-Management:** Login-Tests für verschiedene Benutzertypen.
- **Produktkatalog & Sortierung:** Überprüfung der Produktliste und Sortierfunktionen.
- **Warenkorb-Interaktionen:** Hinzufügen, Entfernen und Aktualisieren von Artikeln.
- **Checkout E2E:** Vollständiger Bestellprozess inklusive Formularvalidierung.
- **Page Object Model:** Wartbare und wiederverwendbare Teststruktur.
- **CI/CD-Integration:** Automatisierte Testausführung über GitHub Actions.

---

## 🛠️ Technologien

- **Playwright** – E2E Test-Framework
- **TypeScript** – Typsichere Testentwicklung
- **GitHub Actions** – CI/CD-Pipeline

---

## 💻 Installation & Ausführung

1. **Repository klonen & Abhängigkeiten installieren:**
   ```bash
   git clone [https://github.com/AminHabdi/playwright-saucelabs-automation.git](https://github.com/AminHabdi/playwright-saucelabs-automation.git)
   cd playwright-saucelabs-automation
   npm install
   npx playwright install