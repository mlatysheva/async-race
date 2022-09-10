export function keepPageInSS() {
  sessionStorage.setItem('carsPage', '1');
  sessionStorage.setItem('winnersPage', '1');
  sessionStorage.setItem('view', 'garage');
}

export function updatePageInSS(page: number) {
  sessionStorage.setItem('carsPage', page.toString());
}

export function updateWinnersPageInSS(page: number) {
  sessionStorage.setItem('winnersPage', page.toString());
}

export function updateViewInSS(view: string) {
  sessionStorage.setItem('view', view);
}

export function getPageFromSS(): number {
  if (sessionStorage.getItem('carsPage') !== '' && sessionStorage.getItem('carsPage')) {
    let carsPage = JSON.parse(sessionStorage.getItem("carsPage") || '{}') as string;
    return parseInt(carsPage);
  } else {
    return 1;
  }
}

export function getWinnersPageFromSS(): number {
  if (sessionStorage.getItem('winnersPage') !== '' && sessionStorage.getItem('winnersPage')) {
    let winnersPage = JSON.parse(sessionStorage.getItem("winnersPage") || '{}') as string;
    return parseInt(winnersPage);
  } else {
    return 1;
  }
}

export function getViewFromSS(): string {
  if (sessionStorage.getItem('view') !== null) {
    return sessionStorage.getItem("view") as string;
  } else {
    return 'garage';
  }
}