# 🏠 Room Scanner 3D + GPS Intérieur - Guide Complet

## 📋 Vue d'ensemble

Ce prototype implémente un **scanner de pièce en temps réel** avec **GPS intérieur** en Vue 3 + Three.js + WebXR.

### Fonctionnalités

✅ **Caméra arrière** - Accès à la caméra environnement du device  
✅ **Scanning 3D** - Accumulation de points pour créer un nuage 3D de la pièce  
✅ **GPS Intérieur** - Minimap 2D avec position utilisateur en temps réel  
✅ **WebXR AR** - Mode AR immersif sur Chrome Android (en développement)  
✅ **Visualisation 3D** - Scene Three.js avec points colorés et repère XYZ  

---

## 🚀 Démarrage

### Développement local

```bash
# Installer dépendances
pnpm install

# Lancer dev server
pnpm run dev

# Ouvrir http://localhost:5173
```

### Build production

```bash
pnpm run build
pnpm run preview
```

---

## 🎮 Mode d'emploi

### 1. **Ouvrir la caméra**
Cliquez sur **"Ouvrir Caméra"** pour demander l'accès à la caméra arrière. Acceptez les permissions.

### 2. **Démarrer le scanning manuel**
Cliquez sur **"Démarrer Scan Manuel"** et déplacez-vous dans la pièce.
- Des points 3D s'accumulent dans la scène
- La minimap affiche votre position en temps réel

### 3. **Voir le GPS intérieur**
Regardez la section **"📍 GPS Intérieur"** :
- **Minimap 2D** - Vue de haut de votre position (point orange)
- **Position (X, Y, Z)** - Coordonnées en mètres
- **Nombre de points** - Compteur du nuage 3D

### 4. **Mode AR WebXR (Android seulement)**
Si vous êtes sur **Chrome Android avec WebXR** :
1. Cliquez **"Démarrer AR (WebXR)"**
2. Le navigateur passera en mode immersive
3. Scannez la pièce en vous déplaçant
4. Les surfaces détectées s'ajouteront au nuage de points

---

## 🔧 Architecture technique

### Composants

```
src/components/
├── RoomScanner.vue          # 🌟 Composant principal
├── RoomViewer3D.vue         # Ancienne version (legacy)
└── ...
```

### Stack

| Couche | Tech |
|--------|------|
| **UI Framework** | Vue 3 + TypeScript |
| **Rendu 3D** | Three.js v0.158 |
| **AR/VR** | WebXR API |
| **Build** | Vite 5 |

### État Global

```typescript
// Refs réactives
const scanPoints: ScanPoint[] = []      // Nuage 3D
const userPosition: UserPosition        // Position utilisateur
const isXRActive: boolean               // Mode AR actif
const isScanning: boolean              // Scan en cours
```

---

## 🌍 Plateformes supportées

| Plateforme | Caméra | Scanning | WebXR | GPS |
|-----------|--------|----------|-------|-----|
| **Chrome Desktop** | ✅ | ✅ | ❌ | ✅ |
| **Chrome Android** | ✅ | ✅ | ✅ | ✅ |
| **Firefox** | ✅ | ✅ | ⚠️ Limited | ✅ |
| **Safari iOS** | ✅ | ✅ | ❌ | ✅ |
| **Edge** | ✅ | ✅ | ✅ | ✅ |

### ⚠️ Limitations importantes

**iOS/Safari :**
- ❌ WebXR **non supporté** (pas d'accès depth-sensing)
- ✅ Caméra et scanning manuel fonctionnent
- 🔄 Pour l'AR full, utiliser **8thWall** (payant) ou une PWA spécialisée

**Desktop :**
- ❌ WebXR immersive-ar nécessite un mobile
- ✅ Scanning manuel et GPS intérieur marchent
- Utile pour debug et simulation

---

## 🔍 API WebXR Détail

### Initialisation XR

```typescript
// Vérifier support
const supported = await navigator.xr?.isSessionSupported('immersive-ar')

// Créer session
const xrSession = await navigator.xr.requestSession('immersive-ar', {
  requiredFeatures: ['hit-test', 'dom-overlay'],
  optionalFeatures: ['depth-sensing'],  // 🔑 Crucial pour surfaces
  domOverlay: { root: document.body }
})

// Obtenir référence de l'espace
const xrReferenceSpace = await xrSession.requestReferenceSpace('local')
```

### Tracking Position Utilisateur

```typescript
// Dans le requestAnimationFrame XR
const pose = xrFrame.getViewerPose(xrReferenceSpace)
if (pose) {
  userPosition = {
    x: pose.transform.position.x,  // Mètres
    y: pose.transform.position.y,
    z: pose.transform.position.z
  }
}
```

### Hit Testing (Placement d'objets)

```typescript
// Créer un hit test source
const hitTestSource = await xrSession.requestHitTestSource({
  space: xrReferenceSpace,
  offsetRay: new XRRay({x: 0, y: 0, z: -1})
})

// Récupérer résultats
const results = xrFrame.getHitTestResults(hitTestSource)
if (results.length > 0) {
  const hit = results[0]
  // Placer objet à la surface
}
```

---

## 📊 Strutures de données

### ScanPoint

```typescript
interface ScanPoint {
  position: THREE.Vector3      // (x, y, z) en mètres
  normal: THREE.Vector3        // Normale de surface
  color: THREE.Color          // Couleur RGB
}
```

### UserPosition

```typescript
interface UserPosition {
  x: number                    // Axe horizontal
  y: number                    // Axe vertical
  z: number                    // Profondeur
}
```

---

## 🎨 UI Components

### Sections principales

1. **Header** - Statut XR et FPS
2. **Viewer 3D** - Canvas Three.js (75% de l'écran)
3. **Minimap** - GPS intérieur 2D (20% right)
4. **Controls** - Boutons d'action (grid réactif)
5. **Debug Info** - Stats (bas de page)

### Responsive Design

- 📱 Mobile (<1024px) : Minimap flottante
- 💻 Desktop : Layout grid 2 colonnes

---

## 🐛 Débogage

### Console

```javascript
// Vérifier XR support
navigator.xr?.isSessionSupported('immersive-ar').then(console.log)

// Inspecter géométrie
scene.children.forEach(obj => console.log(obj.type, obj.userData))

// Stats render
console.log('FPS:', fps.value, 'Points:', scanPoints.value.length)
```

### DevTools

- **Performance** - Vérifier dropped frames
- **Network** - WebGL texture loads
- **Console** - WebXR session logs

---

## 🚦 Roadmap futures améliorations

| Priorité | Feature | Effort |
|----------|---------|--------|
| 🔴 High | Depth sensing intégration | Hard |
| 🟡 Medium | Export nuage 3D (PLY/OBJ) | Medium |
| 🟡 Medium | Surface reconstruction (Poisson) | Hard |
| 🟢 Low | Animation path utilisateur | Easy |
| 🟢 Low | Marques/notes spatiales | Easy |

---

## ⚙️ Configuration

### Vue 3 Compiler Options

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "lib": ["ES2020", "DOM", "DOM.Iterable"]  // ✅ Pour WebXR types
  }
}
```

### Vite Config

```typescript
// vite.config.ts
export default {
  server: {
    https: true  // 🔑 Requis pour mediaDevices sur remote
  }
}
```

---

## 📚 Ressources

- [WebXR Device API Spec](https://immersive-web.github.io/webxr/)
- [MDN WebXR Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
- [Three.js WebXR](https://threejs.org/docs/?q=webxr#api/en/renderers/webxr/WebXRManager)
- [Chrome WebXR Samples](https://github.com/immersive-web/webxr-samples)
- [8thWall Docs](https://www.8thwall.com/docs) (Alternative iOS)

---

## 📝 Licence

MIT - Libre d'usage et modification

---

**Dernier update:** 13 avril 2026  
**Status:** 🟡 Beta - Scanning manuel complet, WebXR en dev
