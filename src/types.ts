export interface CarInterface {
  name: string,
  color: string,
  id: number
}

export interface WinnerInterface {
  wins: number,
  time: number,
  id: number,
}

export interface CarAnimation {
  id: number,
  animationFrame: number | null,
}

export interface RaceParticipant {
  id: number,
  name: string,
  raceTime: number
}

export interface WinnerForRendering {
  id: number,
  name: string,
  color: string,
  wins: number,
  time: number
}

export interface StorageInterface {
  carsPage: number,
  cars: CarInterface[],
  allCars: CarInterface[],
  carsCount: number,
  winnersPage: number,
  winners: WinnerInterface[],
  winnersCount: number,
  currentBestTime: number,
  startTime: number,
  animation: CarAnimation[],
  view: string,
  sortBy: string,
  sortOrder: string,
}
