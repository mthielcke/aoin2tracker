# AION 2 Tracker

Charakterplanung mit abhakbaren Buildguides und einer einfachen Todo-Liste für AION 2. Alle Daten bleiben im Browser (localStorage); über **Export/Import** lassen sie sich als JSON sichern.

**Online:** https://mthielcke.github.io/aoin2tracker/

Stack: Vite, TypeScript, Lit, Shoelace (Web Components).

## Lokal starten

```bash
npm install
npm run dev
```

## Deployment (GitHub Pages)

Jeder Push auf `main` baut die App über `.github/workflows/deploy.yml` und veröffentlicht sie auf GitHub Pages.

Einmalig im Repo einstellen: **Settings → Pages → Build and deployment → Source: „GitHub Actions“**. Danach im Tab **Actions** den Workflow „Deploy to GitHub Pages“ neu starten, falls der erste Lauf vorher fehlgeschlagen ist.

Browser-Daten gelten pro Adresse: Fortschritt von `localhost` erst lokal **exportieren** und auf der Online-Version **importieren**.

## Guide-Daten

- `src/data/common.ts` – Phasen für alle Klassen (Leveling 1–45, Endgame-Grundlagen). Fortschritt bleibt beim Build-Wechsel erhalten.
- `src/data/classes/<klasse>.ts` – Klasse mit Buildvarianten → Phasen → Abschnitte → Punkte.
- `src/data/sources.ts` – Quellen; Punkte verweisen per ID darauf.

**Neue Klasse:** Datei in `src/data/classes/` anlegen und in `src/data/classes/index.ts` in `CLASSES` eintragen.
**Neue Buildvariante (z. B. PvP):** weiteren Eintrag in `builds` mit `mode: 'pvp'`.

Fortschritt wird über `buildId.phaseId.sectionId.itemId` gespeichert – IDs vorhandener Punkte daher nicht umbenennen, sonst geht der Haken verloren. `uncertain: true` markiert Punkte, die im Spiel geprüft werden sollten.
