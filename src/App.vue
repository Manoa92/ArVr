<script setup lang="ts">
import { ref } from 'vue'
import RoomManager from './components/RoomManager.vue'
import ARComponent from './components/ARComponent.vue'
import RoomCapture from './components/RoomCapture.vue'

const currentView = ref<'rooms' | 'ar' | 'capture'>('rooms')
const selectedRoomId = ref<string | null>(null)

const onSelectRoom = (roomId: string) => {
  selectedRoomId.value = roomId
  currentView.value = 'ar'
}

const onStartScan = (roomId: string) => {
  selectedRoomId.value = roomId
  currentView.value = 'capture'
}

const backToRooms = () => {
  currentView.value = 'rooms'
  selectedRoomId.value = null
}
</script>

<template>
  <div v-if="currentView === 'rooms'">
    <RoomManager @selectRoom="onSelectRoom" @startScanRoom="onStartScan" />
  </div>
  <div v-else-if="currentView === 'ar' && selectedRoomId">
    <button @click="backToRooms" class="back-btn">Retour aux Pièces</button>
    <ARComponent :roomId="selectedRoomId" />
  </div>
  <div v-else-if="currentView === 'capture' && selectedRoomId">
    <RoomCapture :roomId="selectedRoomId" @back="backToRooms" />
  </div>
</template>

<style>
.back-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  padding: 10px 20px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
