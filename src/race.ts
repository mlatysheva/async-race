import { CarInterface, RaceParticipant, WinnerInterface } from "./types";
import { storedInfo, getWinners, stopEngine, pushNewWinnerToServer, updateWinnerOnServer, getAllCars } from "./api";
import { animateSingleCar } from "./animation";
import { FAILED_CAR_TIME, WINNERS_PER_PAGE } from "./constants";
import { renderCarImage, renderWinnersCount } from "./view";
import { updatePagination } from "./pagination";

export async function toggleSortOptions() {
  var waiting = setInterval(async () => {
    const sortBtns = document.querySelectorAll('.table-button');
    if (sortBtns.length > 0) {
      clearInterval(waiting);
      sortBtns.forEach((btn) => {
        
        btn.addEventListener('click', () => {
          if (btn.classList.contains('table-wins')) {
            storedInfo.sortBy = 'wins';
            storedInfo.sortOrder === 'ASC' ? 'DESC' : 'ASC';
            storedInfo.sortOrder === 'DESC' ? storedInfo.sortOrder = 'ASC' : storedInfo.sortOrder = 'DESC';
          }
          if (btn.classList.contains('table-time')) {
            storedInfo.sortBy = 'time';
            storedInfo.sortOrder === 'ASC' ? 'DESC' : 'ASC';
            storedInfo.sortOrder === 'DESC' ? storedInfo.sortOrder = 'ASC' : storedInfo.sortOrder = 'DESC';
          }
          renderSortedWinners(storedInfo.winnersPage);
        })        
      })
    }
  })
}

export async function renderSortedWinners(winnersPage: number) {
  const {items, count } = await getWinners(winnersPage, WINNERS_PER_PAGE, storedInfo.sortBy, storedInfo.sortOrder);
  storedInfo.winners = items;
  if (count != null) {
    storedInfo.winnersCount = parseInt(count);
  }
  // To get information about names and colors of cars on not shown pages:
  await getAllCars();

  let sortedWinnersTable = '';
  const table = document.getElementById('winners-table');
  const rowsToRemove = table?.lastChild;
  if (rowsToRemove != null) {
    rowsToRemove.remove();
  }
  
  const sortedRows = document.createElement('tbody');

  storedInfo.winners.forEach((winner: { id: number; wins: number; time: number; }, index: number) => {
    
    let carObj = storedInfo.allCars.find((car: { id: number; }) => car.id === winner.id);
    let carName = (<CarInterface>carObj).name;
    let carColor = (<CarInterface>carObj).color as string; 
    
    sortedWinnersTable +=
    `
    <tr id="winner-${winner.id}">
      <td>${winner.id}</td>
      <td>${renderCarImage(carColor)}</td>
      <td>${carName}</td>
      <td>${winner.wins}</td>
      <td>${winner.time}</td>
    </tr>
    `
  })
  sortedRows.innerHTML = sortedWinnersTable;
  table?.appendChild(sortedRows);
}

export function resetCars() {
  var waiting = setInterval(() => {
    const resetBtn = document.getElementById('reset');
    const raceBtn = document.getElementById('race');
    if (resetBtn) {
      clearInterval(waiting);
      (<HTMLButtonElement>resetBtn).addEventListener('click', async () => {
        (<HTMLButtonElement>raceBtn).disabled = false;
        const cars = document.querySelectorAll('.car');
        let promisedResets: Promise<void>[] = [];
        cars.forEach((car) => {
          const carID = parseInt(car.id.slice(4));
          const startBtn = document.getElementById(`start-engine-car-${carID}`);
          const stopBtn = document.getElementById(`stop-engine-car-${carID}`);
          (<HTMLDivElement>car).style.left = '120px';
          (<HTMLDivElement>car).style.transition = "0.7s linear";
          (<HTMLDivElement>car).classList.remove('active');    
          (<HTMLButtonElement>stopBtn).disabled = true;
          (<HTMLButtonElement>stopBtn).classList.toggle('enabling', true);
          (<HTMLButtonElement>startBtn).disabled = false;
          (<HTMLButtonElement>startBtn).classList.toggle('enabling', false);       
          promisedResets.push(stopEngine(carID));         
        })
        await Promise.all(promisedResets);
      })
    }
  })
}

export async function race() {

  var waiting = setInterval(() => {
    const raceBtn = document.getElementById('race');
    const resetBtn = document.getElementById('reset');
    var audio = new Audio('./assets/racing-sound.wav');
    audio.volume = 0.1;
    if (raceBtn) {
      clearInterval(waiting);
      (<HTMLButtonElement>raceBtn).addEventListener('click', async () => {
        (<HTMLButtonElement>raceBtn).disabled = true;
        (<HTMLButtonElement>resetBtn).disabled = true;
        const cars = document.querySelectorAll('.car');
        let promisedRaces: Promise<RaceParticipant>[] = [];
        storedInfo.startTime = performance.now();
        audio.play();
        cars.forEach((car) => {
          const carID = parseInt(car.id.slice(4));
          const carName = (<HTMLDivElement>document.getElementById(`car-name-${carID}`)).innerText;
          const startBtn = document.getElementById(`start-engine-car-${carID}`);
          const stopBtn = document.getElementById(`stop-engine-car-${carID}`);
          promisedRaces.push(animateSingleCar(carID, carName));
          (<HTMLButtonElement>stopBtn).disabled = false;
          (<HTMLButtonElement>stopBtn).classList.toggle('enabling', false);
          (<HTMLButtonElement>startBtn).disabled = true;
          (<HTMLButtonElement>startBtn).classList.toggle('enabling', true); 
        })
        // returns the array of race participants' results
        let raceResults = await Promise.all(promisedRaces);
        (<HTMLButtonElement>resetBtn).disabled = false;
        (<HTMLButtonElement>raceBtn).disabled = false;
        audio.pause();
        determineWinner(raceResults);        
      })
    }
  })
}

async function determineWinner(participants: RaceParticipant[]) {

  let winner = participants.reduce((participant1, participant2) => 
    participant1.raceTime < participant2.raceTime ? participant1 : participant2);
  let id = winner.id;
  let winners: WinnerInterface[] = (await getWinners(storedInfo.winnersPage)).items;
  let winnerOnServer = winners.find(obj => {
    return obj.id === id
  })
    
  let winsNo = 1;
  let bestTime = winner.raceTime;
  if (winnerOnServer != null) {
    winsNo = winnerOnServer.wins;
    winsNo++;
    if (winnerOnServer.time < bestTime) {
      bestTime = winnerOnServer.time
    }
    updateWinnerOnServer({wins: winsNo, time: bestTime}, id);
  } else {
    pushNewWinnerToServer (winsNo, winner.raceTime, id);
  }
  storedInfo.currentBestTime = FAILED_CAR_TIME;
  storedInfo.winners.push({ wins: winsNo, time: bestTime, id: id});
  storedInfo.winnersCount = storedInfo.winners.length;
  console.log(`winnersCount is ${storedInfo.winnersCount}`);
  updatePagination();
  renderSortedWinners(storedInfo.winnersPage);
  renderWinnersCount();
}
