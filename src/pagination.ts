import { storedInfo, getCars, getWinners } from "./api";
import { CARS_PER_PAGE, WINNERS_PER_PAGE } from "./constants";
import { deleteCar, updateCar } from "./garageManipulations";
import { updatePageInSS, updateWinnersPageInSS } from "./localStorage";
import { renderGarage, renderWinnersCount } from "./view";
import { renderSortedWinners } from "./race";

async function updateGaragePage() {
  const {items, count } = await getCars(storedInfo.carsPage);
    storedInfo.cars = items;
    if (count != null) {
      storedInfo.carsCount = parseInt(count);
    }

    if (storedInfo.carsPage * CARS_PER_PAGE < storedInfo.carsCount && storedInfo.carsPage > 0) {
      (<HTMLButtonElement>document.getElementById('next')).disabled = false;
    } else {
      (<HTMLButtonElement>document.getElementById('next')).disabled = true;
    }
    if (storedInfo.carsPage > 1) {
      (<HTMLButtonElement>document.getElementById('prev')).disabled = false;
    } else {
      (<HTMLButtonElement>document.getElementById('prev')).disabled = true;
    }
}

async function updateWinnerPage() {
  const { items, count } = await getWinners(storedInfo.winnersPage, WINNERS_PER_PAGE, storedInfo.sortBy, storedInfo.sortOrder);
    storedInfo.winners = items;
    if (count != null) {
      storedInfo.winnersCount = parseInt(count);
      renderWinnersCount();
    }

    if (storedInfo.winnersPage * WINNERS_PER_PAGE < storedInfo.winnersCount && storedInfo.winnersPage > 0) {
      (<HTMLButtonElement>document.getElementById('next')).disabled = false;
    } else {
      (<HTMLButtonElement>document.getElementById('next')).disabled = true;
    }
    if (storedInfo.winnersPage > 1) {
      (<HTMLButtonElement>document.getElementById('prev')).disabled = false;
    } else {
      (<HTMLButtonElement>document.getElementById('prev')).disabled = true;
    }
}

export async function updatePagination() {
  
  if (storedInfo.view === 'garage') {
    await updateGaragePage();
  }
  if (storedInfo.view === 'winners') {
    await updateWinnerPage();
  }
}

export async function viewPrevPage() {
  await updatePagination();

  const prevBtn = <HTMLElement>document.getElementById('prev');  

  prevBtn.addEventListener('click', async () => {
    switch(storedInfo.view) {
      case 'garage': {
        storedInfo.carsPage--;
        updatePageInSS(storedInfo.carsPage)
        await updatePagination();
        (<HTMLElement>document.getElementById('garage')).innerHTML = await renderGarage(storedInfo.carsPage);
        updateCar();
        deleteCar();
        break;
      }
      case 'winners': {
        storedInfo.winnersPage--;
        updateWinnersPageInSS(storedInfo.winnersPage);
        await updatePagination();
        await renderSortedWinners(storedInfo.winnersPage);
        await renderWinnersCount();
        updateCar();
        deleteCar();
        break;
      } 
    }
  })
}

export async function viewNextPage() {

  const nextBtn = <HTMLElement>document.getElementById('next');

  nextBtn.addEventListener('click', async() => {
    switch(storedInfo.view) {
      case 'garage': {
        storedInfo.carsPage++;
        updatePageInSS(storedInfo.carsPage)
        await updatePagination();
        (<HTMLElement>document.getElementById('garage')).innerHTML = await renderGarage(storedInfo.carsPage);
        updateCar();
        deleteCar();
        break;
      }
      case 'winners': {
        storedInfo.winnersPage++;
        updateWinnersPageInSS(storedInfo.winnersPage);
        await updatePagination();
        await renderSortedWinners(storedInfo.winnersPage);
        await renderWinnersCount();
        updateCar();
        deleteCar();
        break;
      }
    }
  })
}
