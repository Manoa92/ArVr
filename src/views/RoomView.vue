<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRoomsStore } from '../stores/rooms'
import { usePointsStore } from '../stores/points'

const route = useRoute()
const router = useRouter()
const roomsStore = useRoomsStore()
const pointsStore = usePointsStore()

const roomId = computed(() => route.params.id as string)
const room = computed(() => roomsStore.getRoomById(roomId.value))
const points = computed(() => pointsStore.getPoints(roomId.value))

onMounted(() => {
  if (!room.value) {
    router.replace('/')
  }
})

function startAR() {
  router.push(`/rooms/${roomId.value}/ar`)
}

function removePoint(pointId: string) {
  pointsStore.removePoint(roomId.value, pointId)
}

function clearAll() {
  pointsStore.clearPoints(roomId.value)
}
</script>

<template>
  <div class="room-page" v-if="room">
    <header class="room-header">
      <button class="back-btn" @click="router.push('/')">← Retour</button>
      <h1>{{ room.name }}</h1>
    </header>

    <button class="ar-btn" @click="startAR">▶ Démarrer AR</button>

    <section class="points-section">
      <div class="points-header">
        <h2>Points ({{ points.length }})</h2>
        <button v-if="points.length > 0" class="danger-btn" @click="clearAll">
          Supprimer tout
        </button>
      </div>

      <div v-if="points.length === 0" class="empty">
        Aucun point. Lancez une session AR pour en placer.
      </div>

      <ul v-else class="point-list">
        <li v-for="point in points" :key="point.id" class="point-item">
          <div class="point-info">
            <span class="point-label">Point</span>
            <span class="point-coords">
              x={{ point.pose.position.x.toFixed(2) }}
              y={{ point.pose.position.y.toFixed(2) }}
              z={{ point.pose.position.z.toFixed(2) }}
            </span>
          </div>
          <button class="danger-btn small" @click="removePoint(point.id)">Supprimer</button>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.room-page {
  max-width: 480px;
  margin: 0 auto;
  padding: 16px;
}

.room-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.room-header h1 {
  font-size: 1.5rem;
  margin: 0;
}

.back-btn {
  background: transparent;
  border: 1px solid #555;
  color: #ccc;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.back-btn:hover {
  background: #2a2a2a;
}

.ar-btn {
  width: 100%;
  padding: 16px;
  font-size: 1.1rem;
  background: #2196f3;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 28px;
  transition: background 0.2s;
}

.ar-btn:hover {
  background: #1e88e5;
}

.points-section {
  background: #1a1a1a;
  border-radius: 12px;
  padding: 16px;
}

.points-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.points-header h2 {
  margin: 0;
  font-size: 1.1rem;
  color: #ccc;
}

.point-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.point-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: #252525;
  border-radius: 8px;
  border: 1px solid #333;
}

.point-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.point-label {
  font-size: 0.85rem;
  color: #aaa;
}

.point-coords {
  font-size: 0.8rem;
  color: #666;
  font-family: monospace;
}

.empty {
  color: #666;
  font-size: 0.9rem;
  text-align: center;
  padding: 24px 0;
}

.danger-btn {
  background: #c62828;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.2s;
}

.danger-btn:hover {
  background: #b71c1c;
}

.danger-btn.small {
  padding: 6px 10px;
  font-size: 0.8rem;
}
</style>
