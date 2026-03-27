<template>
  <div class="room-manager">
    <div class="header">
      <h1>🏠 Gestion des Pièces</h1>
      <p>Gérez vos espaces AR/VR</p>
    </div>

    <div class="add-section">
      <button @click="addRoom" class="add-room-btn">
        <span class="btn-icon">➕</span>
        Ajouter une Pièce
      </button>

      <div v-if="isAddingRoom" class="add-room-form">
        <div class="form-card">
          <h3>Nouvelle Pièce</h3>
          <div class="input-group">
            <input
              v-model="newRoomName"
              @keydown.enter="confirmAddRoom"
              placeholder="Entrez le nom de la pièce"
              class="room-input"
              ref="roomInput"
              autofocus
            />
          </div>
          <div class="form-actions">
            <button @click="confirmAddRoom" class="confirm-btn">
              <span class="btn-icon">✅</span>
              Créer
            </button>
            <button @click="cancelAddRoom" class="cancel-btn">
              <span class="btn-icon">❌</span>
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="rooms-section">
      <h2 v-if="rooms.length > 0">Vos Pièces</h2>
      <div v-if="rooms.length === 0" class="empty-state">
        <div class="empty-icon">🏢</div>
        <h3>Aucune pièce créée</h3>
        <p>Commencez par ajouter votre première pièce pour explorer l'AR/VR</p>
      </div>

      <div class="room-grid">
        <div v-for="room in rooms" :key="room.id" class="room-card">
          <div class="room-header">
            <div class="room-icon">🏠</div>
            <h3 class="room-name">{{ room.name }}</h3>
          </div>
          <div class="room-actions">
            <button @click="selectRoom(room.id)" class="select-btn">
              <span class="btn-icon">🎯</span>
              Explorer en AR
            </button>
            <button @click="deleteRoom(room.id)" class="delete-btn">
              <span class="btn-icon">🗑️</span>
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface Room {
  id: string
  name: string
}

const rooms = ref<Room[]>([])
const isAddingRoom = ref(false)
const newRoomName = ref('')
const roomInput = ref<HTMLInputElement>()

const emit = defineEmits<{
  selectRoom: [roomId: string]
}>()

const saveRooms = () => {
  sessionStorage.setItem('rooms', JSON.stringify(rooms.value))
}

const loadRooms = () => {
  const stored = sessionStorage.getItem('rooms')
  if (stored) {
    try {
      rooms.value = JSON.parse(stored)
    } catch (e) {
      console.error('Failed to load rooms:', e)
    }
  }
}

const addRoom = () => {
  isAddingRoom.value = true
  newRoomName.value = ''
  nextTick(() => {
    roomInput.value?.focus()
  })
}

const confirmAddRoom = () => {
  const name = newRoomName.value.trim()
  if (name) {
    const id = Date.now().toString() // Simple ID
    rooms.value.push({ id, name })
    saveRooms()
    isAddingRoom.value = false
    newRoomName.value = ''
  }
}

const cancelAddRoom = () => {
  isAddingRoom.value = false
  newRoomName.value = ''
}

const selectRoom = (roomId: string) => {
  emit('selectRoom', roomId)
}

const deleteRoom = (roomId: string) => {
  rooms.value = rooms.value.filter(r => r.id !== roomId)
  saveRooms()
  // Optionally, remove associated tags
  sessionStorage.removeItem(`arTags_${roomId}`)
}

onMounted(() => {
  loadRooms()
})
</script>

<style scoped>
.room-manager {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  color: white;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.header p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

.add-section {
  max-width: 600px;
  margin: 0 auto 40px;
}

.add-room-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 15px 30px;
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.add-room-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.btn-icon {
  font-size: 1.2rem;
}

.add-room-form {
  margin-top: 20px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-card h3 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 1.3rem;
  text-align: center;
}

.input-group {
  margin-bottom: 20px;
}

.room-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.room-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.confirm-btn, .cancel-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
}

.confirm-btn {
  background: linear-gradient(45deg, #4ecdc4, #44a08d);
  color: white;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
}

.confirm-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(78, 205, 196, 0.4);
}

.cancel-btn {
  background: #f8f9fa;
  color: #6c757d;
  border: 1px solid #dee2e6;
}

.cancel-btn:hover {
  background: #e9ecef;
  transform: translateY(-1px);
}

.rooms-section {
  max-width: 1000px;
  margin: 0 auto;
}

.rooms-section h2 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 25px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.empty-state {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 500px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-state h3 {
  color: #333;
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

.empty-state p {
  color: #666;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.room-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.room-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.room-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.room-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.room-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.room-icon {
  font-size: 2rem;
  margin-right: 15px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.room-name {
  margin: 0;
  color: #333;
  font-size: 1.3rem;
  font-weight: 600;
}

.room-actions {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.select-btn, .delete-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
}

.select-btn {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.select-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.delete-btn {
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.delete-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

@media (max-width: 768px) {
  .room-manager {
    padding: 15px;
  }

  .header h1 {
    font-size: 2rem;
  }

  .room-grid {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
  }

  .room-actions {
    flex-direction: row;
  }
}
</style>