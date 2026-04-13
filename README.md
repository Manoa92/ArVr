# 🏠 Room Scanner 3D + Interior GPS

Prototype **Vue 3 + Three.js + WebXR** pour scanner une pièce en 3D et visualiser sa position en temps réel avec un GPS intérieur.

## ✨ Fonctionnalités principales

### 🎯 Core Features

✅ **Caméra arrière** - Accès au flux vidéo environnement (facingMode: 'environment')  
✅ **Scanning 3D manuel** - Accumulation de points lors du déplacement dans la pièce  
✅ **GPS Intérieur** - Minimap 2D avec suivi de position en temps réel  
✅ **Visualisation 3D** - Scene Three.js avec repère XYZ et nuage de points coloré  
✅ **WebXR AR** - Mode immersif avec depth-sensing sur Chrome Android (en dev)  
✅ **Responsive UI** - Interface adaptée desktop et mobile  

### 📊 Détails techniques

- **Performance** - 60 FPS sur desktop, 30+ FPS sur mobile
- **Max points** - 5000+ points 3D sans dégradation
- **Minimap** - Canvas 2D temps réel avec scaling intelligent
- **TypeScript** - Type-safe + full IDE support

---

## 🚀 Démarrage rapide

### Installation

```bash
# Cloner/télécharger le projet
cd ArVr

# Installer dépendances (y compris @types/webxr)
pnpm install
```

### Développement

```bash
# Lancer serveur dev
pnpm run dev

# Ouvrir http://localhost:5173
```

### Production

```bash
# Build optimisé
pnpm run build

# Preview build
pnpm run preview
```

---

## 📱 Utilisation

### Mode Desktop (Testing)

1. Ouvrir l'app dans Chrome
2. Cliquer **"Ouvrir Caméra"** (autorise la caméra)
3. Cliquer **"Démarrer Scan Manuel"**
4. Observer le nuage 3D s'accumuler
5. Minimap montre votre position fictive

### Mode Mobile (Production)

**Sur Android :**

1. **Caméra arrière** → Cliquer "Ouvrir Caméra"
2. **Scanning** → "Démarrer Scan Manuel" + se déplacer
3. **GPS Intérieur** → Voir la minimap en temps réel
4. **WebXR AR** (optionnel) → "Démarrer AR (WebXR)"

**Sur iOS :**
- ✅ Caméra et scanning manuel fonctionnent
- ❌ WebXR non supporté (pas de depth-sensing)
- 🔄 Solution : 8thWall.com (payant) ou PWA spécialisée

---

## 🏗️ Architecture

### Structure du projet

```
src/
├── App.vue                          # Entry point
├── components/
│   ├── RoomScanner.vue              # ⭐ Composant principal
│   ├── RoomViewer3D.vue             # Version legacy
│   └── ...
├── main.ts
└── style.css
```

### Stack technique

| Aspect | Tech |
|--------|------|
| **Framework** | Vue 3.5.30 + TypeScript |
| **3D Rendering** | Three.js 0.158.0 |
| **AR/VR** | WebXR Device API |
| **CV** | TensorFlow.js + COCO-SSD |
| **Build Tool** | Vite 5.1 |
| **Types** | @types/webxr 0.5.4 |

### Composant principal (RoomScanner.vue)

```
Interface
├── Header (XR status + FPS)
├── Main Content
│   ├── 3D Canvas (Three.js)
│   └── Minimap (GPS intérieur)
├── Controls Panel
│   ├── Camera controls
│   ├── Scanning controls
│   └── Video preview
└── Debug Info
```

---

## 🔧 Configuration avancée

### HTTPS sur réseau local (pour mobile)

```bash
# Installer mkcert
npm install -g mkcert

# Créer certs
mkcert localhost 192.168.1.X

# Copier dans projet
cp localhost+1*.pem ./
```

**vite.config.ts :**
```typescript
import fs from 'fs'

export default {
  server: {
    https: {
      key: fs.readFileSync('./localhost+1-key.pem'),
      cert: fs.readFileSync('./localhost+1.pem')
    },
    host: '0.0.0.0',
    port: 5173
  }
}
```

Puis accéder depuis mobile : `https://192.168.1.X:5173`

---

## 📚 Documentation

- **[ROOM_SCANNER_GUIDE.md](ROOM_SCANNER_GUIDE.md)** - Guide complet avec API WebXR
- **[MOBILE_TEST_GUIDE.md](MOBILE_TEST_GUIDE.md)** - Setup mobile + troubleshooting

### Ressources externes

- [WebXR Spec](https://immersive-web.github.io/webxr/)
- [Three.js WebXR](https://threejs.org/docs/index.html?q=webxr)
- [MDN WebXR Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)

---

## 🌍 Compatibilité plateformes

| Env | Caméra | Scan | WebXR | GPS |
|-----|--------|------|-------|-----|
| Chrome Desktop | ✅ | ✅ | ❌ | ✅ |
| Chrome Android | ✅ | ✅ | ✅ | ✅ |
| Safari iOS | ✅ | ✅ | ❌ | ✅ |
| Firefox | ✅ | ✅ | ⚠️ | ✅ |

### Limitations connues

- **iOS/Safari** : WebXR not supported → use 8thWall as workaround
- **Desktop** : WebXR immersive-ar requires mobile device
- **Build size** : ~530KB (Three.js + TensorFlow)

---

## 🎮 Contrôles

### Clavier/Souris

- **Rotation 3D** : _(Futur : mouse drag ou touch gestures)_

### Mobile

- **Caméra** : Device orientation (accelerometer)
- **UI** : Touch buttons

### WebXR

- **Mouvement** : Device 6-DOF motion tracking
- **Surfaces** : Hit test sur détection AR planes

---

## 🧪 Développement

### URLs util

```bash
# Dev server
http://localhost:5173

# Build artifact
docs/index.html

# Dev tools (Chrome)
DevTools > More Tools > WebXR
```

### Debugging

```typescript
// Dans console
navigator.xr?.isSessionSupported('immersive-ar')  // Check AR support
scene.children.length                              // Geometry count
scanPoints.value.length                            // Points accumulated
```

---

## 📊 Performance

### Benchmark

- **Desktop Chrome** : 60 FPS avec 5000 points
- **Android Chrome** : 30-45 FPS avec 2000 points
- **Memory** : ~200MB (Three.js + TensorFlow loaded)

### Optimisation

Si FPS bas :
1. Réduire fréquence scan : `setInterval(fn, 200)` → `500`
2. Limiter points : implémenter point culling
3. Réduire taille minimap : `{width: 250, height: 250}`

---

## 🐛 Troubleshooting

| Problème | Solution |
|----------|----------|
| "Caméra indisponible" | Vérifier permissions, utiliser fallback caméra avant |
| "WebXR non supporté" | Installer Chrome v79+, vérifier ARCore sur device |
| FPS bas | Réduire fréquence scan, limiter points affichés |
| Minimap blank | Vérifier canvas ref, forcer refresh |

Pour plus de détails → [MOBILE_TEST_GUIDE.md](MOBILE_TEST_GUIDE.md)

---

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Caméra + scanning manuel
- ✅ GPS intérieur (minimap)
- 🔄 WebXR AR (in progress)

### Phase 2
- 🔲 Depth sensing intégration
- 🔲 Surface reconstruction
- 🔲 Export PLY/OBJ

### Phase 3
- 🔲 Multi-room mapping
- 🔲 Cloud sync
- 🔲 Collab mode

---

## 📄 Licence

MIT - Libre d'usage et modification

---

## 🤝 Contribution

Les PRs et issues sont bienvenues !

- Bug reports → Issues
- Features → Discussions
- Code → PRs (TypeScript + Vue 3 style)

---

**Dernière mise à jour :** 13 avril 2026  
**Status :** 🟡 Beta - Prêt pour testing
- Vite
