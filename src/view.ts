import { resetCars, race, toggleSortOptions, renderSortedWinners } from "./race";
import { getCars, getWinners, storedInfo } from "./api";
import { renderRandomCars } from "./garageManipulations";
import { updatePagination, viewNextPage, viewPrevPage } from "./pagination";
import { updateViewInSS } from "./localStorage";

function toggleView (view1: HTMLElement, view2: HTMLElement, activeClass: string, inactiveClass: string) {
  if (!view1.classList.contains(activeClass)) {
    view1.classList.add(activeClass);
    view1.classList.toggle(inactiveClass);
    view2.classList.toggle(activeClass)
    view2.classList.toggle(inactiveClass);
  }
}

function router() {
  const garageBtn = document.getElementById('garage-link');
  const winnersBtn = document.getElementById('winners-link');
  const garageView = document.getElementById('garage-view');
  const winnersView = document.getElementById('winners-view');
  if (garageBtn != null) {
    garageBtn.addEventListener('click', () => {
      if (garageView != null && winnersView != null) {
        toggleView(garageView, winnersView, 'active', 'inactive');
        storedInfo.view = 'garage';
        updateViewInSS('garage');
      }
    })
  }
  if (winnersBtn != null) {
    winnersBtn.addEventListener('click', () => {
      if (winnersView != null && garageView != null) {
        toggleView(winnersView, garageView, 'active', 'inactive');
        storedInfo.view = 'winners';
        updateViewInSS('winners');
        renderSortedWinners(storedInfo.winnersPage);
      }
    })
  }
}

export function renderCarImage (color: string) {
  return `
  <?xml version="1.0" encoding="iso-8859-1"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" class="car-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    width="102" height="71"
      >
      <g transform="scale(0.2)" style="fill:${color}">
      <path d="M160,307.5h133.538c14.182,0,27.524-7.554,34.82-19.715l14.501-24.169c2.273-3.789,1.045-8.703-2.744-10.976
        c-3.788-2.273-8.702-1.045-10.976,2.744l-14.501,24.169c-4.421,7.369-12.507,11.947-21.101,11.947H160c-4.418,0-8,3.582-8,8
        S155.582,307.5,160,307.5z"/>
      <path d="M504,323.569V299.5c0-48.523-39.477-88-88-88h-44.209c-12.392-9.747-62.874-48-91.791-48h-54
        c-11.001,0-21.904,1.664-32.403,4.945c-0.204,0.063-0.404,0.135-0.602,0.215l-73.691,29.675
        c-11.071,3.427-22.56,5.165-34.152,5.165H58.687c-0.379-0.778-0.884-1.51-1.53-2.157l-7.772-7.772
        C57.969,189.897,64,181.368,64,171.455V163.5c0-4.418-3.582-8-8-8H8c-4.418,0-8,3.582-8,8v7.955
        C0,184.713,10.787,195.5,24.045,195.5h4.642l8,8h-6.685C17.87,203.5,8,213.37,8,225.502V291.5c0,18.508,13.298,34.094,33.88,39.714
        C51.989,345.87,68.888,355.5,88,355.5c15.22,0,29.034-6.112,39.138-16h249.723c10.104,9.888,23.918,16,39.138,16
        s29.034-6.112,39.138-16H503c4.418,0,8-3.582,8-8C511,327.421,507.945,324.062,504,323.569z M16,171.5h32
        c-0.024,4.416-3.624,8-8.045,8h-15.91C19.624,179.5,16.024,175.916,16,171.5z M356.287,219.763
        c-3.571,2.505-6.227,5.165-8.059,7.339l-150.98-14.465C204.31,199.968,218.975,179.5,240,179.5h40
        C298.891,179.5,336.321,204.724,356.287,219.763z M24,291.5v-65.998c0-3.31,2.692-6.002,6.002-6.002h55.15
        c13.317,0,26.514-2.014,39.225-5.986c0.204-0.063,0.404-0.135,0.602-0.215l73.433-29.571c-1.999,2.142-3.953,4.431-5.85,6.899
        c-9.799,12.756-14.805,25.43-15.014,25.963c-0.913,2.336-0.677,4.965,0.638,7.102c1.314,2.136,3.554,3.533,6.051,3.772l167,16
        c0.28,0.027,0.559,0.041,0.835,0.041c2.931,0,5.573-1.5,6.942-4.153c0.559-0.939,7.435-11.851,24.986-11.851h32
        c39.701,0,72,32.299,72,72v24h-21.414c3.467-7.279,5.414-15.415,5.414-24c0-30.878-25.122-56-56-56s-56,25.122-56,56
        c0,8.585,1.947,16.721,5.414,24H138.586c3.467-7.279,5.414-15.415,5.414-24c0-30.878-25.122-56-56-56s-56,25.122-56,56
        c0,3.313,0.306,6.554,0.86,9.711C27.217,304.609,24,298.428,24,291.5z M48,299.5c0-22.056,17.944-40,40-40s40,17.944,40,40
        s-17.944,40-40,40S48,321.556,48,299.5z M416,339.5c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40
        S438.056,339.5,416,339.5z"/>
      <path d="M112,291.5c-4.418,0-8,3.582-8,8c0,8.822-7.178,16-16,16s-16-7.178-16-16s7.178-16,16-16c4.418,0,8-3.582,8-8s-3.582-8-8-8
        c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32C120,295.082,116.418,291.5,112,291.5z"/>
      <path d="M440,291.5c-4.418,0-8,3.582-8,8c0,8.822-7.178,16-16,16s-16-7.178-16-16s7.178-16,16-16c4.418,0,8-3.582,8-8s-3.582-8-8-8
        c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32C448,295.082,444.418,291.5,440,291.5z"/>
    </g>
  </svg>
  `
}

export function renderCar (id: number, name: string, color: string, isEngineStarted: boolean) {
  return `
    <div class="car-controls" id="car-controls-${id}">
      <button class="button select-button" id="select-car-${id}">Select</button>
      <button class="button delete-button" id="delete-button-${id}">Delete</button>
      <div class="car-name" id="car-name-${id}">${name}</div>   
    </div>
    <div class="car-flag">
      <div class="control-panel">
        <button class="engine-button start-engine-button" id="start-engine-car-${id}" ${isEngineStarted ? 'disabled' : ''}>A</button>
        <button class="engine-button stop-engine-button" id="stop-engine-car-${id}" ${!isEngineStarted ? 'disabled' : ''}>B</button>
      </div>
      <div class="car" id="car-${id}" style="position: absolute; left: 120px;">
        ${renderCarImage(color)}
      </div>
      <div class="flag" id="flag-${id}"></div>
    </div>
    <div class="road"></div>
  `
}

export async function renderGarage(carPage: number) {
  const { items, count } = await getCars(carPage);
  storedInfo.cars = items;
  if (count != null) {
    storedInfo.carsCount = parseInt(count);
  }

  let html = `
  <h1>Garage (<span id="garage-count">${storedInfo.carsCount}</span>)</h1>
  <h2>Page #<span id="garage-page">${carPage}</span></h2>
  `;

  [...storedInfo.cars].forEach(item => {
    
    html += `
      <div class="car-section" id="car-section-${item.id}">
      ${renderCar(item.id, item.name, item.color, false)}
      </div>`; 
  })
  return html;
}

export function renderWinnerBanner(id: number, name: string, time: number) {
  
  var waiting = setInterval(() => {
    const winnerDiv = document.getElementById(`car-controls-${id}`);
    if (winnerDiv) {
      clearInterval(waiting);
      const winnerBanner = document.createElement('div');
      winnerBanner.classList.add('winner-banner');
      winnerBanner.innerText = `${name} wins in ${time} sec!`;
      winnerDiv.appendChild(winnerBanner);

      window.addEventListener('click', () => {
        winnerBanner.remove();
      })
    }
  })
}

export async function renderWinnersCount() {
  let { items, count } = await getWinners(storedInfo.winnersPage);

  const winnersCount = document.getElementById('winners-count');
  if (count != null) {
    (<HTMLElement>winnersCount).innerText = count;
  }
  const winnersPage = document.getElementById('winners-page');
  (<HTMLElement>winnersPage).innerText = storedInfo.winnersPage.toString();
  
}

export async function renderApp() {
  const main = document.createElement('main');
  main.innerHTML = `<div id="Loading">Loading...</div>`;

  const spinnerHTML = `
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
  main.innerHTML = spinnerHTML;
  document.body.appendChild(main);
  
  storedInfo.winnersCount = storedInfo.winners.length;
  const html = `
    <div class="nav">
      <button class="button garage-link-button link-button" id="garage-link">Garage</button>
      <button class="button winners-link-button link-button" id="winners-link">Winners</button>
    </div>
    <div class="view active" id="garage-view">
      <div>
        <form class="form" id="create">
          <input class="input" id="create-name" name="name" type="text">
          <input class="color" id="create-color" name="color" type="color" value="#66e1ea">
          <button class="button" id="create-submit" >Create</button>
        </form>
        <form class="form" id="update">
          <input class="input" id="update-name" name="name" type="text" disabled>
          <input class="color" id="update-color" name="color" type="color" value="#c45bd2" disabled>
          <button class="button" id="update-submit" >Update</button>
        </form>
      </div>
      <div class="race-controls">
        <button class="button race-button" id="race">Race</button>
        <button class="button reset-button" id="reset">Reset</button>
        <button class="button generate-car-button" id="generator">Generate cars</button>
      </div>
      <div class="garage-section" id="garage">
        ${await renderGarage(storedInfo.carsPage)}       
        
      </div>
    </div>
    <div class="view inactive winners-section" id="winners-view">
      <h1>Winners (<span id="winners-count">${storedInfo.winnersCount}</span>)</h1>
      <h2>Page #<span id="winners-page">${storedInfo.winnersPage}</span></h2>          

      <table class="table" id="winners-table" cellspacing="0" border="0" cellpadding="0">
      <thead>
        <th>Car ID</th>
        <th>Car Image</th>
        <th>Name</th>
        <th class="table-button table-wins ${storedInfo.sortBy === 'wins' ? storedInfo.sortOrder: ''}" id="sort-by-wins">Wins &uarr;&darr;</th>
        <th class="table-button table-time ${storedInfo.sortBy === 'time' ? storedInfo.sortOrder: ''}" id="sort-by-time">Best time (sec) &uarr;&darr;</th>
      </thead>
      <tbody>
      ${await renderSortedWinners(storedInfo.winnersPage)}
      </tbody>
    </table>

     
    </div>
    <div class="pagination">
      <button class="button prev-button" disabled id="prev">Prev</button>
      <button class="button next-button" disabled id="next">Next</button>
    </div>
  `
  main.innerHTML = html;
  document.body.appendChild(main);

  router();
  updatePagination();
  viewNextPage();
  viewPrevPage();
  renderRandomCars();
  resetCars();
  race();
  toggleSortOptions();
  renderWinnersCount();
}
