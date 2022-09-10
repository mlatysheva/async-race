import { deleteCarFromServer, pushNewCarToServer, storedInfo, updateCarOnServer } from './api';
import { RANDOM_CAR_NUMBER } from './constants';
import { CarInterface, StorageInterface } from './types';
import { renderCar, renderGarage } from './view';
import { carBrands } from './brands-cars';
import { carModels } from './models-cars';

function findLargestID(array: StorageInterface) {
  return Math.max(...array.cars.map(car => car.id));
}

export function updateGarageCount() {
  const countElement = document.getElementById('garage-count');
  (<HTMLElement>countElement).innerText = storedInfo.carsCount.toString();
}

export function updateWinnersCount() {
  const countElement = document.getElementById('winners-count');
  (<HTMLElement>countElement).innerText = storedInfo.winnersCount.toString();
}

export function createCar() {

  var waiting = setInterval(() => {

    const createBtn = document.getElementById('create-submit');
    
    if (createBtn) {
      clearInterval(waiting);
      createBtn?.addEventListener('click', () => {    
        const name = (<HTMLInputElement>document.getElementById('create-name')).value;
        const color = (<HTMLInputElement>document.getElementById('create-color')).value;

        let id = findLargestID(storedInfo)+1;
        let html = renderCar (id, name, color, false);

        const parentDiv = document.getElementById('garage');
        const carElement = document.createElement('div');
        carElement.classList.add('car-section');
        carElement.classList.add(`car-${id}`);
        carElement.innerHTML = html;
        (<HTMLElement>parentDiv).appendChild(carElement);
        storedInfo.cars.push( {name, color, id});
        storedInfo.carsCount++;
        pushNewCarToServer (name, color, id);  
      })
    }
  })
}

export function deleteCar() {

  var waiting = setInterval(() => {

    const deleteBtns = document.querySelectorAll('.delete-button');

    if (deleteBtns.length > 0) {
      clearInterval(waiting);
      [...deleteBtns].forEach((btn) => {

        btn.addEventListener('click', async () => {
          let id = parseInt(btn.id.slice(14));
          const carSection = document.getElementById(`car-section-${id}`);
          const winnerDiv = document.getElementById(`winner-${id}`);
          if (carSection) {
            carSection.remove();
          }
          if (winnerDiv) {
            winnerDiv.remove();
            storedInfo.winnersCount--;
            updateWinnersCount();
          }
          await deleteCarFromServer(id);
          storedInfo.carsCount--;          
          updateGarageCount();          
        })        
      })      
    }    
  })  
} 
  

export function updateCar() {

  var waiting = setInterval(() => {

    const selectBtns = document.querySelectorAll('.select-button');
    if (selectBtns.length > 0) {
      clearInterval(waiting);
      
      [...selectBtns].forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.id.slice(11));
          let carObj = storedInfo.cars.find((car: { id: number; }) => car.id === id);
          let carName = carObj?.name as string;
          let carColor = carObj?.color as string;
          const updateNameField = document.getElementById('update-name');
          const updateColorField = document.getElementById('update-color');
          
          if (carName) {
            
            (<HTMLInputElement>updateNameField).disabled = false;
            (<HTMLInputElement>updateNameField).value = carName;
          }
          if (carColor) {
            
            (<HTMLInputElement>updateColorField).disabled = false;
            (<HTMLInputElement>updateColorField).value = carColor;
          }

          const updateBtn = document.getElementById('update-submit');
          const garage = document.getElementById('garage');
          (<HTMLElement>updateBtn).addEventListener('click', () => {    
            let updatedCarName = (<HTMLInputElement>updateNameField).value;
            let updatedCarColor = (<HTMLInputElement>updateColorField).value;

            if(updatedCarName && carObj) {
              carObj.name = updatedCarName;
            }
            if (updatedCarColor && carObj) {
              carObj.color = updatedCarColor;
            }
            updateCarOnServer(id, {'name': updatedCarName, 'color': updatedCarColor});
            
            renderGarage(storedInfo.carsPage);
          })          
        })
      })      
    }
  })
}

function getRandomNumber(num: number) {
  return Math.floor(Math.random() * num);
}

function generateName() {
  let brand = carBrands[getRandomNumber(carBrands.length)];
  let model = carModels[getRandomNumber(carModels.length)];
  return `${brand} ${model}`;
}

function generateColor() {
  const symbols = '23456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 14)];
  }
  return color;
}

async function generateRandomCars(num: number) {
  let carArray: CarInterface[] = [];
  const countElement = document.getElementById('garage-count');
  let id = storedInfo.carsCount;
  let promisedCars: Promise<void>[] = [];
  
  for (let i = 0; i < num; i++) {
    let name = generateName();
    let color = generateColor();
    id++;
    storedInfo.carsCount++;
    let newCar: CarInterface = {name, color, id};
    carArray.push(newCar);
    promisedCars.push(pushNewCarToServer(newCar.name, newCar.color, newCar.id));
    (<HTMLElement>countElement).innerText = storedInfo.carsCount.toString();
  }
  await Promise.all(promisedCars);
  return carArray;
}

export function renderRandomCars() {
  const generateBtn = document.getElementById('generator');
  generateBtn?.addEventListener('click', async () => {
    await generateRandomCars(RANDOM_CAR_NUMBER);
    window.location.href = window.location.href;
  })
}