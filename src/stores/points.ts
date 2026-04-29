import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Point } from '../types'

export const usePointsStore = defineStore('points', () => {
  // Session-only: points are lost on page refresh
  const pointsByRoom = ref<Record<string, Point[]>>({})

  function getPoints(roomId: string): Point[] {
    return pointsByRoom.value[roomId] ?? []
  }

  function addPoint(roomId: string, pose: Point['pose'], anchorSupported = false): Point {
    const point: Point = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      pose,
      anchorSupported,
    }
    if (!pointsByRoom.value[roomId]) {
      pointsByRoom.value[roomId] = []
    }
    pointsByRoom.value[roomId].push(point)
    return point
  }

  function removePoint(roomId: string, pointId: string) {
    if (!pointsByRoom.value[roomId]) return
    pointsByRoom.value[roomId] = pointsByRoom.value[roomId].filter((p) => p.id !== pointId)
  }

  function clearPoints(roomId: string) {
    pointsByRoom.value[roomId] = []
  }

  return { pointsByRoom, getPoints, addPoint, removePoint, clearPoints }
})
