import { create } from 'zustand'

export type Background =
  | 'transition'
  | 'dark'
  | 'room-and-rain'
  | 'train-and-rain'
  | 'waterfall'
  | 'static'
  | 'camping-fire'

interface BackgroundStore {
  background: Background
  setBackground: (newBackground: Background) => void
}

export const useBackgroundStore = create<BackgroundStore>(set => ({
  background: 'transition',
  setBackground: newBackground => set(() => ({ background: newBackground }))
}))
