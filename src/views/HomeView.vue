<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoomsStore } from '../stores/rooms'

const router = useRouter()
const roomsStore = useRoomsStore()

const newRoomName = ref('')

function createRoom() {
  const name = newRoomName.value.trim()
  if (!name) return
  const room = roomsStore.createRoom(name)
  newRoomName.value = ''
  router.push(`/rooms/${room.id}`)
}

function openRoom(id: string) {
  router.push(`/rooms/${id}`)
}
</script>

<template>
  <div class="home">
    <h1>Mes Pièces</h1>

    <div class="create-room">
      <input
        v-model="newRoomName"
        placeholder="Nom de la pièce"
        @keyup.enter="createRoom"
        maxlength="50"
      />
      <button @click="createRoom" :disabled="!newRoomName.trim()">Créer</button>
    </div>

    <div class="room-list" v-if="roomsStore.rooms.length > 0">
      <div v-for="room in roomsStore.rooms" :key="room.id" class="room-item">
        <span class="room-name">{{ room.name }}</span>
        <button @click="openRoom(room.id)">Ouvrir</button>
      </div>
    </div>

    <p v-else class="empty">Aucune pièce. Créez-en une pour commencer.</p>
  </div>
</template>

<style scoped>
.home {
  max-width: 480px;
  margin: 0 auto;
  padding: 24px 16px;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 24px;
}

.create-room {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.create-room input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #444;
  border-radius: 8px;
  background: #1e1e1e;
  color: #fff;
  font-size: 1rem;
}

.create-room input:focus {
  outline: none;
  border-color: #4caf50;
}

.room-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.room-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: #1e1e1e;
  border-radius: 10px;
  border: 1px solid #333;
}

.room-name {
  font-size: 1rem;
}

.empty {
  color: #888;
  text-align: center;
  margin-top: 32px;
}

button {
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: #4caf50;
  color: #fff;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
}

button:disabled {
  background: #444;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  background: #43a047;
}
</style>
