import { startDriving, stopDriving } from './animation';
import { createCar, deleteCar, updateCar } from './garageManipulations';
import { updatePagination } from './pagination';
import './style.css';
import { renderApp } from "./view";

renderApp();

createCar();
deleteCar();
updateCar();
startDriving();
stopDriving();

var waiting = setInterval(() => {
  const viewBtns = document.querySelectorAll('.link-button');
  if (viewBtns.length > 0) {
    clearInterval(waiting);
    if (viewBtns.length > 0) {
      viewBtns.forEach((btn) => {
        btn.addEventListener('click', async() => {
          updatePagination();
        })
      })
    }
  }  
})
