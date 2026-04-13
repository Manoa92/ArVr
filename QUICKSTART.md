# 🚀 Quick Start - Room Scanner 3D

## ⚡ 30 secondes pour démarrer

```bash
# 1. Nav au projet
cd c:\z-log\Travs\ol\ArVr

# 2. Lancer le serveur (http://localhost:5173)
pnpm run dev

# 3. Browser auto-ouvre → PRÊT!
```

---

## 🎮 Test dans le navigateur (Desktop)

### Séquence rapide (2 min)

1. **Page charge** → Voir interface verte/bleu
2. **Bouton:** Cliquez **"Ouvrir Caméra"**
   - ✅ Acceptez permission
   - 👀 Vidéo doit apparaître en bas
3. **Bouton:** Cliquez **"Démarrer Scan Manuel"**
   - 🟢 Statut passe à "🔄 En cours"
   - ⚪ Points commencent à s'accumuler dans la scène 3D
4. **Observe:**
   - **Section 3D (75%)** → Nuage de points colorés
   - **Minimap (droite)** → Points s'accumulent + position
   - **Debug (bas)** → Compteur "Scan Points: XXX"

### Résultat attendu

```
✅ Points: 200+
✅ Minimap update: OUI
✅ FPS: 50+
✅ Position: (X: 0.00, Y: 0.50, Z: 0.00)
```

---

## 📱 Test sur Android (Vrai tracking)

### Prérequis

- 🤖 Android phone + Chrome 79+
- 🔐 Même WiFi que PC
- 🔒 HTTPS (certificat auto-signé: voir [MOBILE_TEST_GUIDE.md](MOBILE_TEST_GUIDE.md))

### Étapes

```bash
# 1. Trouver votre IP
ipconfig | findstr IPv4    # Windows
ifconfig | grep inet        # Mac/Linux

# 2. Accès depuis phone
https://192.168.1.X:5173   # Remplacer X

# 3. Scan real
→ Caméra    → Permission
→ Scan      → Se déplacer 2-3m
→ Minimap   → Voir position changer!
```

### 🟢 Si WebXR disponible

```
BONUS: Cliquer "Démarrer AR (WebXR)"
→ Mode immersif (full screen AR)
→ Placer points dans le monde réel
→ Position auto-track (6-DOF)
```

---

## 🛠️ Architecture (30 sec overview)

### Fichier principal

```
src/components/RoomScanner.vue (500+ lines)
├── 🎥 Caméra arrière (getUserMedia)
├── 🌍 WebXR AR sessions
├── 📦 Nuage 3D (Three.js)
├── 🗺️ Minimap 2D (Canvas)
└── 📍 Position tracking (real-time)
```

### State Management

```typescript
scanPoints[]          // Accumulation 3D
userPosition {x,y,z}  // Position real-time
isXRActive: boolean   // Mode AR on/off
isScanning: boolean   // Scan en cours
```

---

## 📚 Documentations

| Doc | Contenu |
|-----|---------|
| **README.md** | Vue d'ensemble + features |
| **ROOM_SCANNER_GUIDE.md** | API détail + roadmap |
| **MOBILE_TEST_GUIDE.md** | Setup HTTPS + troubleshoot |
| **THIS FILE** | Quick start express |

---

## 🎯 Prochaines étapes

### Immediate (1h)
- [ ] Test desktop complet
- [ ] Vérifier minimap update
- [ ] FPS counter stable

### Soon (1-2j)
- [ ] Setup HTTPS + test Android
- [ ] Valider caméra arrière
- [ ] Position tracking sur device

### Future (1-2w)
- [ ] Enable depth-sensing
- [ ] Surface detection
- [ ] Export 3D (PLY/OBJ)

---

## ❓ Questions fréquentes

### "Caméra ne s'ouvre pas"
```
→ Check: Grant camera permission
→ Try: Firefox if Chrome blocked
→ Fallback: Use front camera option
```

### "Minimap vide"
```
→ Check: Is scanning running?
→ Debug: Open DevTools > scanPoints.value.length
→ Fix: Refresh page (F5)
```

### "WebXR dit 'non supporté'"
```
→ Require: Chrome v79+ on Android
→ Check: Install Google Play Services for AR
→ Note: iOS = not supported (need 8thWall)
```

### "Performance lag sur mobile"
```
→ Reduce: Scanning frequency (200ms → 500ms)
→ Limit: Max points to 2000
→ Clear: Press "Effacer Points" button
```

---

## 🎓 Key Concepts

### 📍 GPS Intérieur (Minimap)

```
Minimap = 300×300 canvas
- 50 last scan points displayed
- Orange dot = YOUR position
- Grid = 1m référence marks
```

### 🌐 WebXR Coordinate Space

```
Origin = Device starting position at launch
X = Right/Left
Y = Up/Down
Z = Forward/Backward

All positions relative to origin
```

### 🟡 Scanning Mode

```
Manual (Desktop) = Random points generation
XR (Mobile)      = Depth sensor points
Both            = Real-time position tracking
```

---

## ✨ Pro Tips

1. **Large room?** → Stay in center for better tracking
2. **Phone lag?** → Move slower, let processing catch up
3. **Better points?** → Scan every surface (walls, floor, ceiling)
4. **Export data?** → `console.log(scanPoints.value)` → paste to JSON file
5. **Debug XR?** → DevTools > Drawer > WebXR

---

**Last Update:** 13 avril 2026  
**Status:** 🟢 Ready to test  
**Time to first AR:** ~5 minutes on Android

---

📞 **Need help?** Check [MOBILE_TEST_GUIDE.md](MOBILE_TEST_GUIDE.md) troubleshooting section
