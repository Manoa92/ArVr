import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Room } from '../types'

export const useRoomsStore = defineStore('rooms', () => {
  const rooms = ref<Room[]>(loadRooms())
  const activeRoomId = ref<string | null>(null)

  function loadRooms(): Room[] {
    try {
      return JSON.parse(localStorage.getItem('ar-rooms') ?? '[]')
    } catch {
      return []
    }
  }

  function saveRooms() {
    localStorage.setItem('ar-rooms', JSON.stringify(rooms.value))
  }

  function createRoom(name: string): Room {
    const room: Room = { id: crypto.randomUUID(), name: name.trim() }
    rooms.value.push(room)
    saveRooms()
    return room
  }

  function getRoomById(id: string): Room | undefined {
    return rooms.value.find((r) => r.id === id)
  }

  function setActiveRoom(id: string) {
    activeRoomId.value = id
  }

  return { rooms, activeRoomId, createRoom, getRoomById, setActiveRoom }
})
