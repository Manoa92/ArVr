# Application AR Vue.js avec Tags Spatiaux

Cette application utilise Vue.js, Three.js et WebXR pour créer une expérience de réalité augmentée où vous pouvez placer des tags dans l'espace 3D qui restent ancrés à leur position même lorsque vous bougez la caméra.

## Fonctionnalités

- Ouvrir la caméra AR de l'appareil
- Placer des tags personnalisés en cliquant sur l'écran (avec nom saisi)
- Les tags restent à leur position dans le monde réel, même si vous bougez
- Tags avec texte sur fond semi-transparent, toujours orientés vers la caméra
- Utilise SLAM et hit-test pour l'ancrage spatial

## Prérequis

- Navigateur supportant WebXR (Chrome Android, Samsung Internet, etc.)
- Appareil avec ARCore (Android) ou ARKit (iOS)
- HTTPS requis pour WebXR

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

Ouvrez l'URL affichée dans un navigateur compatible, sur un appareil mobile.

## Utilisation

1. Cliquez sur "Démarrer AR"
2. Autorisez l'accès à la caméra
3. Saisissez le nom du tag dans le champ de texte
4. Cliquez sur "Placer Tag" pour activer le mode placement
5. Pointez vers une surface plane (le reticle apparaît)
6. Cliquez sur l'écran pour placer le tag à cette position
7. Bougez la caméra : le tag reste en place et s'oriente vers vous

## Limitations

- Build de production peut avoir des problèmes avec les dépendances natives (bug npm)
- Support WebXR limité aux navigateurs modernes
- Nécessite un appareil compatible AR

## Technologies

- Vue 3
- Three.js
- WebXR API
- Vite
