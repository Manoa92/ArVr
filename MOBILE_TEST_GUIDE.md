# 📱 Guide de test sur Mobile + WebXR

## 🎯 Prérequis

- **Device:** Android avec Chrome 79+
- **Navigateur:** Chrome v79+ ou Edge v79+
- **Permission:** Caméra + Capteurs d'accélération
- **HTTPS:** Obligatoire (même localhost avec mkcert)
- **Réseau:** Même WiFi que le PC dev

---

## ⚡ Quick Start

### 1. Générer certificat SSL local

```bash
# Installer mkcert
npm install -g mkcert

# Créer certificat
mkcert localhost 192.168.1.X  # Remplacer X par votre IP

# Copier dans le projet
cp localhost+1-key.pem vite-server.key
cp localhost+1.pem vite-server.crt
```

### 2. Configurer Vite pour HTTPS

**vite.config.ts :**
```typescript
import fs from 'fs'

export default {
  server: {
    https: {
      key: fs.readFileSync('./vite-server.key'),
      cert: fs.readFileSync('./vite-server.crt')
    },
    host: '0.0.0.0',  // Écouter sur toutes les interfaces
    port: 5173
  }
}
```

### 3. Lancer le serveur dev

```bash
pnpm run dev
```

Output:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   https://localhost:5173/
  ➜  Network: https://192.168.1.X:5173/
```

### 4. Accéder depuis téléphone

Ouvrir Chrome Android → `https://192.168.1.X:5173`

---

## 🧪 Scénarios de test

### ✅ Test 1 : Caméra arrière

1. Cliquer **"Ouvrir Caméra"**
2. Autoriser la permission
3. Vérifier le flux vidéo en direct

**✓ Réussi si:** Vidéo s'affiche dans la preview

---

### ✅ Test 2 : Scanning manuel

1. Démarrer la caméra
2. Cliquer **"Démarrer Scan Manuel"**
3. Se déplacer dans la pièce (2-3 mètres en tous sens)
4. Observer le nuage de points 3D

**✓ Réussi si:**
- Points s'accumulent (50+)
- Couleurs variées
- Minimap montre la position

**Debug:** Vérifier console `scanPoints.length`

---

### ✅ Test 3 : GPS Intérieur (Minimap)

1. Pendant un scan en cours
2. Observer la section **"📍 GPS Intérieur"**
3. Se déplacer → Voir le point orange bouger
4. Vérifier position (X, Y, Z)

**✓ Réussi si:**
- Position change en temps réel
- Minimap affiche 300×300px
- Grille visible

---

### ✅ Test 4 : WebXR AR (Chrome Android 79+)

**⚠️ Avant : Vérifier support**
```javascript
// Dans la console du navigateur
navigator.xr?.isSessionSupported('immersive-ar').then(s => console.log('AR:', s))
```

**Procédure:**

1. Cliquer **"Démarrer AR (WebXR)"**
2. Autoriser Réalité Augmentée
3. Navigateur passe en mode immersif
4. **Pointer caméra vers surface** (mur, sol)
5. Voir points 3D placés relativement au monde réel

**✓ Réussi si:**
- Session démarre sans erreur
- Nuage 3D visible en AR
- Déplacement = position updated

**❌ Si ça échoue:**
```
Error: "DOMException: Immersive AR is not supported"
→ Update Chrome ou essayer Edge Canary

Error: null session
→ Vérifier HTTPS, permissions, device support
```

---

## 🔌 Performance Mobile

### Monitoring FPS

Coin haut-droit : **"FPS: XX"**

| FPS | Status |
|-----|--------|
| 50-60 | ✅ Excellent |
| 30-50 | 🟡 OK |
| <30 | 🔴 Lag |

### Optimisation

Si FPS bas:
1. Réduire `scanPoints.length` : **Menu → "Effacer Points"**
2. Diminuer fréquence scan : Modifier `setInterval(fn, 200)` → `500`
3. Réduire taille minimap : `canvas{ width: 250 height: 250 }`

---

## 🐛 Troubleshooting

### ❌ "Caméra indisponible"

```
Error: NotAllowedError: Permission denied
```

**Solution:**
- Grant camera permissions
- Sur Chrome Android : Settings → Apps → Chrome → Permissions → Camera

**Fallback:**
- Essayer caméra avant (si arrière échoue)
- Utiliser Firefox si Chrome bloque

---

### ❌ "WebXR non supporté"

```
AR not supported
```

**Checklist:**
- [ ] Chrome v79+ (minimum)
- [ ] Android 7+ (minimum)
- [ ] HTTPS obligatoire
- [ ] Device supporte ARCore (Pixel, Samsung Galaxy 8+, etc)

**Vérifier ARCore:**
```bash
# Sur device, installer Google Play Services for AR
# https://play.google.com/store/apps/details?id=com.google.android.gms
```

**Alternative:**
- Utiliser 8thWall pour iOS/Safari
- Utiliser AR.js pour fallback plus large

---

### ❌ Position toujours (0,0,0)

```
Position: (0.0, 0.0, 0.0) ne change pas
```

**Cause:** Position non updatée en app non-XR

**Solution:**
- Actuellement = **mode manuel** (position statique au démarrage)
- WebXR AR = **auto-update** position
- Features futures : IMU tracking, visual odometry

---

### ⚠️ Minimap blank/not updating

```
FPS: 60 mais minimap vide
```

**Debug:**
```javascript
console.log('Canvas context:', minimapCtx)
console.log('Points count:', scanPoints.length)
```

**Solution:**
- Vérifier if canvas ref existe : `minimapCanvas.value`
- Forcer redraw : F5 (refresh)

---

## 📊 Test Results Template

Créer rapport de test :

```markdown
# Test Report - Room Scanner

**Device:** [Model]  
**OS:** Android [Version]  
**Browser:** Chrome [Version]  
**Date:** YYYY-MM-DD  

## Tests Passed ✅

- [ ] Caméra arrière
- [ ] Scanning manuel
- [ ] GPS intérieur
- [ ] Minimap update
- [ ] FPS stable (>30)

## Tests Failed ❌

- [ ] WebXR (reason: ___)
- [ ] Performance issue (FPS: __)

## Notes

[Any additional findings]
```

---

## 🔧 Advanced Debugging

### Activer Chrome WebXR DevTools

1. Chrome → DevTools (F12)
2. **Drawer** → More tools → WebXR
3. Voir: Session info, Reference spaces, Hit test results

### Logs WebXR

```typescript
// Dans RoomScanner.vue
const onXRFrame = (frame: XRFrame) => {
  const pose = frame.getViewerPose(xrReferenceSpace)
  console.log('XR Pose:', {
    position: [pose.transform.position.x, .y, .z],
    orientation: [pose.transform.orientation.x, .y, .z, .w]
  })
}
```

### Profil Memory

- DevTools → Memory
- Snapshot pendant scan
- Vérifier leak (géométries disposées?)

---

## 🌐 Réseau

### Optimiser WiFi

```bash
# Depuis PC dev
ipconfig getifaddr en0  # Mac
ipconfig (Windows)

# Depuis phone  
https://192.168.1.X:5173 # Utiliser IP, pas localhost
```

### Possible Lags

- Signal WiFi faible → Utiliser 5GHz
- Too many devices → Disconnect others
- AP trop loin → Move closer

---

## ✨ Bonus : TLS Certificate sur téléphone

Si certificat auto-signé rejeté :

```bash
# 1. Exporter certificat
openssl x509 -in localhost+1.pem -out localhost.cer

# 2. ADB push vers device
adb push localhost.cer /sdcard/Download/

# 3. Device : Settings → Security → Install certificate
```

---

**Status:** 🟢 Production-Ready pour Android  
**Next:** iOS support via 8thWall ou mobile WebKit update
