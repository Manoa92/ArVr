<template>
  <div class="room-manager">
    <h1>Gestion des Pièces</h1>
    <button @click="addRoom" class="add-room-btn">Ajouter une Pièce</button>
    <div v-if="isAddingRoom" class="add-room-form">
      <input v-model="newRoomName" @keydown.enter="confirmAddRoom" placeholder="Nom de la pièce" />
      <button @click="confirmAddRoom">Confirmer</button>
      <button @click="cancelAddRoom">Annuler</button>
    </div>
    <ul class="room-list">
      <li v-for="room in rooms" :key="room.id" class="room-item">
        <span>{{ room.name }}</span>
        <button @click="selectRoom(room.id)" class="select-btn">Sélectionner</button>
        <button @click="deleteRoom(room.id)" class="delete-btn">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Room {
  id: string
  name: string
}

const rooms = ref<Room[]>([])
const isAddingRoom = ref(false)
const newRoomName = ref('')

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
  padding: 20px;
}

.add-room-btn {
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-room-form {
  margin-bottom: 20px;
}

.add-room-form input {
  padding: 8px;
  margin-right: 10px;
}

.room-list {
  list-style: none;
  padding: 0;
}

.room-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;
}

.select-btn {
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.delete-btn {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;
}
</style>