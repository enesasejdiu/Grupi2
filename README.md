# rruga / Taxi booking MVP

Aplikacion React + Vite për rezervim taksie. Klienti zgjedh destinacionin, llojin e veturës (elektrike, benzine ose diesel) dhe preferencën për shoferin. Paneli tregon një hartë vizuale, taksitë aktive, kohën e mbërritjes dhe çmimin e parashikuar.

## Nisja lokale

```bash
npm install
npm run dev
```

Kontrolle para push-it:

```bash
npm run lint
npm run build
```

## Ndarja e punës për 5 anëtarë

1. **Frontend / UX:** ekranet e klientit, responsive design dhe komponentët e formularit.
2. **Backend / API:** autentikimi, përdoruesit, endpoint-et për kërkesë taksie dhe statusin e udhëtimit.
3. **Database:** modelet për users, drivers, vehicles, rides dhe migrations.
4. **Driver app:** paneli i shoferit, pranimi/refuzimi i kërkesës dhe përditësimi i lokacionit.
5. **Company dashboard / QA:** paneli i kompanisë, çmimi/ETA, testet dhe dokumentimi.

## Hapi tjetër teknik

Ky version është frontend MVP me të dhëna demo. Për versionin real duhen backend-i, baza e të dhënave, GPS/maps API, pagesat dhe njoftimet live. Mos ruani API keys në GitHub; përdorni `.env` dhe shtoni `.env` në `.gitignore`.
