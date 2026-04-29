export interface Room {
  id: string
  name: string
}

export interface Point {
  id: string
  createdAt: number
  pose: {
    position: { x: number; y: number; z: number }
    quaternion: { x: number; y: number; z: number; w: number }
  }
  anchorSupported?: boolean
}
