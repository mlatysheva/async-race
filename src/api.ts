import { CARS_PER_PAGE, FAILED_CAR_TIME, WINNERS_PER_PAGE } from "./constants";
import { getPageFromSS, getViewFromSS, getWinnersPageFromSS } from "./localStorage";
import { CarInterface, StorageInterface, WinnerInterface } from "./types";

// const base = 'http://localhost:3000';
const base = 'https://async-cars-backend.herokuapp.com';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

let storedInfo: StorageInterface = {
  carsPage: getPageFromSS(),
  cars: [],
  allCars: [],
  carsCount: 0,
  winnersPage: getWinnersPageFromSS(),
  winners: [],
  winnersCount: 0,
  currentBestTime: FAILED_CAR_TIME,
  startTime: 0,
  animation: [],
  view: getViewFromSS(),
  sortBy: '',
  sortOrder: '',
}

export async function getCar (id: number): Promise<CarInterface> {
  return (await fetch (`${garage}/${id}`)).json();
}

export async function getCars (page: number, limit: number = CARS_PER_PAGE) {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  let cars = {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  }
  if (cars.count != null) {
    storedInfo.carsCount = parseInt(cars.count);
  }
  storedInfo.cars = cars.items;  
  return cars;
}

export async function getAllCars () {
  const response = await fetch(`${garage}`);
  let allCars = {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  }
  storedInfo.allCars = allCars.items;  
  return allCars;
}

export async function pushNewCarToServer (name: string, color: string, id: number) {
  let body = { name, color };
  (await fetch(garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  })).json();
}

export async function deleteCarFromServer (id: number) {
  (await fetch (`${garage}/${id}`, { 
    method: 'DELETE'
  })).json();

  let doesExist = (id: number) => storedInfo.winners.some(winner => winner.id === id);

  if (doesExist(id)) {
    (await fetch(`${winners}/${id}`, {
      method: 'DELETE'
    })).json();
  }
}

export async function updateCarOnServer(id: number, body: {name: string, color: string}) {
  (await fetch (`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json'
    }
  })).json();
}

export async function getWinner (id: number): Promise<WinnerInterface> {
  return (await fetch (`${winners}/${id}`)).json();
}

export async function getWinners (page: number, limit: number = WINNERS_PER_PAGE, sort=storedInfo.sortBy, order=storedInfo.sortOrder) {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  let winningCars = {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  }
  if (winningCars.count != null) {
    storedInfo.winnersCount = parseInt(winningCars.count);
  }
  storedInfo.winners = winningCars.items;
  return winningCars;
}

export async function pushNewWinnerToServer (wins: number, time: number, id: number) {
  let body = { wins, time, id };
  (await fetch(winners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  })).json();
}

export async function updateWinnerOnServer(body: {wins: number, time: number}, id: number) {
  (await fetch (`${winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json'
    }
  })).json();
}

export async function startEngine (id: number) { 

  const response = await fetch(`${engine}?id=${id}&status=started`, {
    method: 'PATCH',
  });
  return response.json();
}

export async function stopEngine (id: number) {
  (await fetch (`${engine}?id=${id}&status=stopped`, {
    method: 'PATCH',
  })).json();
}

function handleDriveError(status: number) {
  switch(status) {
    case(500): 
      console.log('Car has stopped suddenly. Its engine broke down.');
      break;
    case(404):
      console.log('Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?');
      break;
    case(429):
      console.log('Drive already in progress. You can\'t run drive for the same car twice while it\'s not stopped.');
      break;
    default:
      console.log(`Error with status ${status} has occurred`);
      break;
  }
}

export async function drive (id: number) {

  try {
    const response = await fetch(`${engine}?id=${id}&status=drive`, {
      method: 'PATCH',
    })
    
    if (response.status !== 200) {
      handleDriveError(response.status);
      return false;
    } else {
        return await response.json();
    }
  } catch (err) {
    console.log(`in catch the error is ${err}`);
    return false;
  }
}

export { storedInfo }
