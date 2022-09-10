import { drive, startEngine, stopEngine, storedInfo } from "./api";
import { FAILED_CAR_TIME } from "./constants";
import { CarAnimation, RaceParticipant } from "./types";
import { renderWinnerBanner } from "./view";


function determineElemPosition (element: HTMLElement) {
  const {top, left, width, height} = element.getBoundingClientRect();
  return left + width / 2;
}

function determineDistance(elem1: HTMLElement, elem2: HTMLElement) {

  const position1 = determineElemPosition(elem1);
  const position2 = determineElemPosition(elem2);

  return Math.abs(Math.round(position1 - position2));
}

export async function animation (car: HTMLDivElement, duration: number, distance: number, carID: number, carName: string): Promise <RaceParticipant> {
  const start = performance.now();
  const startTime = storedInfo.startTime;
  const startPosition = parseInt(car.style.left);
  const linear = (timeFraction: number) => timeFraction;
  storedInfo.animation.push({id: carID, animationFrame: null});
  const storeInfoAnimationObj = storedInfo.animation.find((obj: { id: number }) => obj.id === carID);
  
  const draw = (progress: number) => {
    (<HTMLDivElement>car).style.left = `${startPosition + progress * distance}px`;
  };  
  
  function animate(time: number) {
    let timeResult = 0;
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }
    const progress = linear(timeFraction);
    draw(progress);
    
    if (timeFraction < 1) {
      let animationId = window.requestAnimationFrame(animate);
      timeResult = time - start;
      (<CarAnimation>storeInfoAnimationObj).animationFrame = animationId;      
    }
  }

  let animationId = window.requestAnimationFrame(animate);

  const raceBtn = document.getElementById('race');
  
  const isDriving = await drive(carID);

  if (!isDriving) {
    window.cancelAnimationFrame(storeInfoAnimationObj!.animationFrame!);
    console.log(`Rusty busket ${carName} did not make it!`);
    car.classList.remove('active');
    return { id: carID, name: carName, raceTime: FAILED_CAR_TIME};
  }
  else {
    let end = performance.now();
    let result = parseFloat(((end - startTime)/1000).toFixed(2));
    if (result < storedInfo.currentBestTime && (<HTMLButtonElement>raceBtn).disabled === true) {      

      storedInfo.currentBestTime = result;      
      renderWinnerBanner(carID, carName, result);
    }

    console.log(`${carName} made it in ${result} seconds`);
    return { id: carID, name: carName, raceTime: result};
  }
}

export async function animateSingleCar(carID: number, carName: string): Promise<RaceParticipant> {
  
  const { velocity, distance } = await startEngine(carID);
  const time = Math.round(distance / velocity);
  const car = document.getElementById(`car-${carID}`);
  const flag = document.getElementById(`flag-${carID}`);
  const carFlagDistance = Math.floor(determineDistance(<HTMLElement>car, <HTMLElement>flag))+70;
  (<HTMLDivElement>car).classList.add('active');
  return animation(<HTMLDivElement>car, time, carFlagDistance, carID, carName);   
}

export function startDriving() {

  var waiting = setInterval(() => {

    const startEngineBtns = document.querySelectorAll('.start-engine-button');
    if (startEngineBtns.length > 0) {
      clearInterval(waiting);
      startEngineBtns.forEach((btn) => {
        btn.addEventListener('click', async () => {
          
          const carID = parseInt(btn.id.slice(17));
          const carName = (<HTMLDivElement>document.getElementById(`car-name-${carID}`)).innerText;

          (<HTMLButtonElement>btn).disabled = true;
          btn.classList.toggle('enabling', true);
          (<HTMLButtonElement>document.getElementById(`stop-engine-car-${carID}`)).disabled = false;
          await animateSingleCar(carID, carName);
          
        })
      })
    }
  })
}

export function stopDriving() {

  var waiting = setInterval(() => {

    const stopEngineBtns = document.querySelectorAll('.stop-engine-button');
    if (stopEngineBtns.length > 0) {
      clearInterval(waiting);
      stopEngineBtns.forEach((btn) => {
        btn.addEventListener('click', async () => {
          
          const carID = parseInt(btn.id.slice(16));
          const storeInfoAnimationObj = storedInfo.animation.find((obj: { id: number }) => obj.id === carID);

          (<HTMLButtonElement>btn).disabled = true;
          btn.classList.toggle('enabling', true);
          (<HTMLButtonElement>document.getElementById(`start-engine-car-${carID}`)).disabled = false;
          const car = document.getElementById(`car-${carID}`);
          window.cancelAnimationFrame(storeInfoAnimationObj!.animationFrame!);
          (<HTMLDivElement>car).style.transition = "0.7s linear";          
          (<HTMLDivElement>car).style.left = '120px';
          (<HTMLDivElement>car).classList.remove('active');
          await stopEngine(carID);
        })
      })
    }
  })
}

