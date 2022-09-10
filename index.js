(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),s=t(3),d=o()((function(e){return e[1]})),c=a()(s);d.push([e.id,"*, ::after, ::before {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: 'Roboto', sans-serif;\n  letter-spacing: 5px;\n  font-size: 16px;\n}\n\nbody {\n  background-color: black;\n  color: white;\n  margin: 0 auto;\n  padding: 2rem 2rem;\n  overflow-x: hidden;\n}\n\n.nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 2rem;\n  max-width: 400px;\n}\n\n.button {\n  width: 5rem;\n  height: 2rem;\n  border-radius: 10px;\n  font-size: 16px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  cursor: pointer;\n  border: none;\n  margin: 2px;\n  background-color: gainsboro;\n}\n.button:hover {\n  font-size: larger;\n  color:rgb(38, 4, 160);\n  animation: glow 1s ease-in-out infinite alternate;\n  box-shadow: 0 0 10px 0px rgb(158, 231, 197), 0 0 10px 3px rgb(72, 185, 132), 0px 0px 10px 0px rgb(158, 231, 197);\n}\n@keyframes glow {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #07ee8e, 0 0 40px #07ee8e, 0 0 50px #07ee8e, 0 0 60px #07ee8e, 0 0 70px #07ee8e;\n  }\n  to {\n    text-shadow: 0 0 20px #fff, 0 0 30px #173d2d, 0 0 40px #173d2d, 0 0 50px #173d2d, 0 0 60px #173d2d, 0 0 70px #173d2d, 0 0 80px #173d2d;\n  }\n}\n\n.link-button {\n  width: 10rem;\n  height: 3rem;\n  margin: 1rem 0;\n  font-weight: 400;\n  letter-spacing: 5px;\n}\n\n.garage-link-button {\n  margin-right: 1rem;\n}\n\n.form {\n  max-width: 400px;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\ninput[type=\"text\"] {\n  appearance: none;\n}\n.input {\n  width: 250px;\n  height: 2rem;\n  font-size: 16px;\n  padding-left: 1rem;\n  margin-right: 1rem;\n  border-radius: 5px;\n}\n\ninput[type=\"color\"] {\n  appearance: none;\n}\n.color {\n  width: 3rem;\n  height: 2rem;\n  margin-right: 1rem;\n  border-radius: 5px;\n}\n\n.race-controls {\n  max-width: 400px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.generate-car-button {\n  width: 9rem;\n}\n.race-button, .reset-button {\n  width: 7rem;\n}\n.race-button:hover {\n  font-size: larger;\n  color:rgb(138, 16, 16);\n  box-shadow: 0 0 30px 0px rgb(248, 7, 3), 0 0 30px 10px rgb(248, 7, 3), 0px 0px 30px 0px rgb(248, 7, 3);\n}\n\n.garage-section {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n\n.car-controls, .car-flag {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.delete-button {\n  z-index: 10;\n}\n.car-name {\n  padding-left: 1rem;\n}\n.car {\n  position: absolute;\n  left: 122px;\n  align-self: flex-end;\n}\n.car.active {\n  -webkit-box-shadow: 0 8px 6px -6px rgb(203, 248, 203);\n      -moz-box-shadow: 0 8px 6px -6px rgb(203, 248, 203);\n          box-shadow: 0 10px 7px -6px rgb(203, 248, 203);\n}\n\n.flag {\n  margin-left: auto;\n  margin-right: 100px;\n  align-self: flex-end;\n  width: 2rem;\n  height: 2rem;\n  background-image: url("+c+");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  filter: invert(12%) sepia(79%) saturate(7177%) hue-rotate(359deg) brightness(100%) contrast(108%);\n}\n\n.road {\n  width: 100%;\n  border-bottom: 2px dashed #ff0000;\n  margin-bottom: 1.5rem;\n}\n.engine-button {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n}\n.engine-button:hover {\n  animation: glow 1s ease-in-out infinite alternate;\n  box-shadow: 0 0 10px 0px rgb(158, 231, 197), 0 0 10px 3px rgb(72, 185, 132), 0px 0px 10px 0px rgb(158, 231, 197);\n}\n.stop-engine-button {\n  margin-right: 1.5rem;\n}\n.pagination {\n  margin-top: 1.5rem;\n}\n\n/* winners section */\n\ntable {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n  border: 2px solid red;\n  align-content: center;\n}\n\nthead th:nth-child(1) {\n  width: 20%;\n}\nthead th:nth-child(2) {\n  width: 20%;\n}\nthead th:nth-child(3) {\n  width: 20%;\n}\nthead th:nth-child(4) {\n  width: 20%;\n}\nthead th:nth-child(5) {\n  width: 20%;\n}\n\nth, td {\n  padding: 1rem;\n  border-bottom: 1px solid red;\n}\nth {\n  letter-spacing: 2px;\n}\n\ntd {\n  letter-spacing: 1px;\n}\n\ntbody td {\n  text-align: center;\n}\n.table-button {\n  cursor: pointer;\n}\n\n.winner-banner {\n  width: 60%;\n  font-size: larger;\n  background-color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n  color: #fff;\n  text-align: center;\n  animation: glow-red 1s ease-in-out infinite alternate;\n}\n\n@keyframes glow-red {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;\n  }\n  to {\n    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;\n  }\n}",""]);const l=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},654:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var r=t(379),o=t.n(r),i=t(426);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var s=e[o],d=n.base?s[0]+n.base:s[0],c=t[d]||0,l="".concat(d," ").concat(c);t[d]=c+1;var u=a(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:p(f,n),references:1}),r.push(l)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,l=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,m=0;function p(e,n){var t,r,o;if(n.singleton){var i=m++;t=g||(g=d(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=d(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=s(e,n),c=0;c<t.length;c++){var l=a(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}},917:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.stopDriving=n.startDriving=n.animateSingleCar=n.animation=void 0;const o=t(203),i=t(601),a=t(85);function s(e){const{top:n,left:t,width:r,height:o}=e.getBoundingClientRect();return t+r/2}function d(e,n,t,s,d){return r(this,void 0,void 0,(function*(){const r=performance.now(),c=o.storedInfo.startTime,l=parseInt(e.style.left);o.storedInfo.animation.push({id:s,animationFrame:null});const u=o.storedInfo.animation.find((e=>e.id===s));window.requestAnimationFrame((function o(i){let a=0,s=(i-r)/n;if(s>1&&(s=1),d=s,e.style.left=`${l+d*t}px`,s<1){let e=window.requestAnimationFrame(o);a=i-r,u.animationFrame=e}var d}));const f=document.getElementById("race");if(yield(0,o.drive)(s)){let e=performance.now(),n=parseFloat(((e-c)/1e3).toFixed(2));return n<o.storedInfo.currentBestTime&&!0===f.disabled&&(o.storedInfo.currentBestTime=n,(0,a.renderWinnerBanner)(s,d,n)),console.log(`${d} made it in ${n} seconds`),{id:s,name:d,raceTime:n}}return window.cancelAnimationFrame(u.animationFrame),console.log(`Rusty busket ${d} did not make it!`),e.classList.remove("active"),{id:s,name:d,raceTime:i.FAILED_CAR_TIME}}))}function c(e,n){return r(this,void 0,void 0,(function*(){const{velocity:t,distance:r}=yield(0,o.startEngine)(e),i=Math.round(r/t),a=document.getElementById(`car-${e}`),c=document.getElementById(`flag-${e}`),l=Math.floor(function(e,n){const t=s(e),r=s(n);return Math.abs(Math.round(t-r))}(a,c))+70;return a.classList.add("active"),d(a,i,l,e,n)}))}n.animation=d,n.animateSingleCar=c,n.startDriving=function(){var e=setInterval((()=>{const n=document.querySelectorAll(".start-engine-button");n.length>0&&(clearInterval(e),n.forEach((e=>{e.addEventListener("click",(()=>r(this,void 0,void 0,(function*(){const n=parseInt(e.id.slice(17)),t=document.getElementById(`car-name-${n}`).innerText;e.disabled=!0,e.classList.toggle("enabling",!0),document.getElementById(`stop-engine-car-${n}`).disabled=!1,yield c(n,t)}))))})))}))},n.stopDriving=function(){var e=setInterval((()=>{const n=document.querySelectorAll(".stop-engine-button");n.length>0&&(clearInterval(e),n.forEach((e=>{e.addEventListener("click",(()=>r(this,void 0,void 0,(function*(){const n=parseInt(e.id.slice(16)),t=o.storedInfo.animation.find((e=>e.id===n));e.disabled=!0,e.classList.toggle("enabling",!0),document.getElementById(`start-engine-car-${n}`).disabled=!1;const r=document.getElementById(`car-${n}`);window.cancelAnimationFrame(t.animationFrame),r.style.transition="0.7s linear",r.style.left="120px",r.classList.remove("active"),yield(0,o.stopEngine)(n)}))))})))}))}},203:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.storedInfo=n.drive=n.stopEngine=n.startEngine=n.updateWinnerOnServer=n.pushNewWinnerToServer=n.getWinners=n.getWinner=n.updateCarOnServer=n.deleteCarFromServer=n.pushNewCarToServer=n.getAllCars=n.getCars=n.getCar=void 0;const o=t(601),i=t(876),a="https://async-cars-backend.herokuapp.com",s=`${a}/garage`,d=`${a}/engine`,c=`${a}/winners`;let l={carsPage:(0,i.getPageFromSS)(),cars:[],allCars:[],carsCount:0,winnersPage:(0,i.getWinnersPageFromSS)(),winners:[],winnersCount:0,currentBestTime:o.FAILED_CAR_TIME,startTime:0,animation:[],view:(0,i.getViewFromSS)(),sortBy:"",sortOrder:""};n.storedInfo=l,n.getCar=function(e){return r(this,void 0,void 0,(function*(){return(yield fetch(`${s}/${e}`)).json()}))},n.getCars=function(e,n=o.CARS_PER_PAGE){return r(this,void 0,void 0,(function*(){const t=yield fetch(`${s}?_page=${e}&_limit=${n}`);let r={items:yield t.json(),count:t.headers.get("X-Total-Count")};return null!=r.count&&(l.carsCount=parseInt(r.count)),l.cars=r.items,r}))},n.getAllCars=function(){return r(this,void 0,void 0,(function*(){const e=yield fetch(`${s}`);let n={items:yield e.json(),count:e.headers.get("X-Total-Count")};return l.allCars=n.items,n}))},n.pushNewCarToServer=function(e,n,t){return r(this,void 0,void 0,(function*(){let t={name:e,color:n};(yield fetch(s,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json()}))},n.deleteCarFromServer=function(e){return r(this,void 0,void 0,(function*(){(yield fetch(`${s}/${e}`,{method:"DELETE"})).json(),(e=>l.winners.some((n=>n.id===e)))(e)&&(yield fetch(`${c}/${e}`,{method:"DELETE"})).json()}))},n.updateCarOnServer=function(e,n){return r(this,void 0,void 0,(function*(){(yield fetch(`${s}/${e}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json"}})).json()}))},n.getWinner=function(e){return r(this,void 0,void 0,(function*(){return(yield fetch(`${c}/${e}`)).json()}))},n.getWinners=function(e,n=o.WINNERS_PER_PAGE,t=l.sortBy,i=l.sortOrder){return r(this,void 0,void 0,(function*(){const r=yield fetch(`${c}?_page=${e}&_limit=${n}&_sort=${t}&_order=${i}`);let o={items:yield r.json(),count:r.headers.get("X-Total-Count")};return null!=o.count&&(l.winnersCount=parseInt(o.count)),l.winners=o.items,o}))},n.pushNewWinnerToServer=function(e,n,t){return r(this,void 0,void 0,(function*(){let r={wins:e,time:n,id:t};(yield fetch(c,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})).json()}))},n.updateWinnerOnServer=function(e,n){return r(this,void 0,void 0,(function*(){(yield fetch(`${c}/${n}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json"}})).json()}))},n.startEngine=function(e){return r(this,void 0,void 0,(function*(){return(yield fetch(`${d}?id=${e}&status=started`,{method:"PATCH"})).json()}))},n.stopEngine=function(e){return r(this,void 0,void 0,(function*(){(yield fetch(`${d}?id=${e}&status=stopped`,{method:"PATCH"})).json()}))},n.drive=function(e){return r(this,void 0,void 0,(function*(){try{const n=yield fetch(`${d}?id=${e}&status=drive`,{method:"PATCH"});return 200!==n.status?(function(e){switch(e){case 500:console.log("Car has stopped suddenly. Its engine broke down.");break;case 404:console.log('Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?');break;case 429:console.log("Drive already in progress. You can't run drive for the same car twice while it's not stopped.");break;default:console.log(`Error with status ${e} has occurred`)}}(n.status),!1):yield n.json()}catch(e){return console.log(`in catch the error is ${e}`),!1}}))}},43:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.carBrands=void 0,n.carBrands=["Audi","Alfa Romeo","Alpina","Aston Martin","Axon","Ford","Ferrari","Fiat","GAZ","GMC","Honda","Hummer","Hyundai","Infiniti","Isuzu","JAC","Jaguar","Jeep","Kamaz","Lada","Lexus","Lotus","MAN","Maybach","MAZ","Mazda","McLaren","Nissan","Opel","Paccar","Pagani","Pontiac","Porsche","Renault","Škoda","Smart","Subaru","Suzuki","Tesla","Toyota","UAZ","Volvo","ZAZ","XPeng","TVR","Saab","RAM","Chevrolet","Mazzanti","Daewoo"]},601:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.FAILED_CAR_TIME=n.RANDOM_CAR_NUMBER=n.WINNERS_PER_PAGE=n.CARS_PER_PAGE=void 0,n.CARS_PER_PAGE=7,n.WINNERS_PER_PAGE=10,n.RANDOM_CAR_NUMBER=20,n.FAILED_CAR_TIME=2e4},980:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.renderRandomCars=n.updateCar=n.deleteCar=n.createCar=n.updateWinnersCount=n.updateGarageCount=void 0;const o=t(203),i=t(601),a=t(85),s=t(43),d=t(621);function c(){document.getElementById("garage-count").innerText=o.storedInfo.carsCount.toString()}function l(){document.getElementById("winners-count").innerText=o.storedInfo.winnersCount.toString()}function u(e){return Math.floor(Math.random()*e)}function f(){let e="#";for(let n=0;n<6;n++)e+="23456789abcdef"[Math.floor(14*Math.random())];return e}n.updateGarageCount=c,n.updateWinnersCount=l,n.createCar=function(){var e=setInterval((()=>{const n=document.getElementById("create-submit");n&&(clearInterval(e),null==n||n.addEventListener("click",(()=>{const e=document.getElementById("create-name").value,n=document.getElementById("create-color").value;let t=(r=o.storedInfo,Math.max(...r.cars.map((e=>e.id)))+1);var r;let i=(0,a.renderCar)(t,e,n,!1);const s=document.getElementById("garage"),d=document.createElement("div");d.classList.add("car-section"),d.classList.add(`car-${t}`),d.innerHTML=i,s.appendChild(d),o.storedInfo.cars.push({name:e,color:n,id:t}),o.storedInfo.carsCount++,(0,o.pushNewCarToServer)(e,n,t)})))}))},n.deleteCar=function(){var e=setInterval((()=>{const n=document.querySelectorAll(".delete-button");n.length>0&&(clearInterval(e),[...n].forEach((e=>{e.addEventListener("click",(()=>r(this,void 0,void 0,(function*(){let n=parseInt(e.id.slice(14));const t=document.getElementById(`car-section-${n}`),r=document.getElementById(`winner-${n}`);t&&t.remove(),r&&(r.remove(),o.storedInfo.winnersCount--,l()),yield(0,o.deleteCarFromServer)(n),o.storedInfo.carsCount--,c()}))))})))}))},n.updateCar=function(){var e=setInterval((()=>{const n=document.querySelectorAll(".select-button");n.length>0&&(clearInterval(e),[...n].forEach((e=>{e.addEventListener("click",(()=>{const n=parseInt(e.id.slice(11));let t=o.storedInfo.cars.find((e=>e.id===n)),r=null==t?void 0:t.name,i=null==t?void 0:t.color;const s=document.getElementById("update-name"),d=document.getElementById("update-color");r&&(s.disabled=!1,s.value=r),i&&(d.disabled=!1,d.value=i);const c=document.getElementById("update-submit");document.getElementById("garage"),c.addEventListener("click",(()=>{let e=s.value,r=d.value;e&&t&&(t.name=e),r&&t&&(t.color=r),(0,o.updateCarOnServer)(n,{name:e,color:r}),(0,a.renderGarage)(o.storedInfo.carsPage)}))}))})))}))},n.renderRandomCars=function(){const e=document.getElementById("generator");null==e||e.addEventListener("click",(()=>r(this,void 0,void 0,(function*(){yield function(e){return r(this,void 0,void 0,(function*(){let n=[];const t=document.getElementById("garage-count");let r=o.storedInfo.carsCount,i=[];for(let a=0;a<e;a++){let e=`${s.carBrands[u(s.carBrands.length)]} ${d.carModels[u(d.carModels.length)]}`,a=f();r++,o.storedInfo.carsCount++;let c={name:e,color:a,id:r};n.push(c),i.push((0,o.pushNewCarToServer)(c.name,c.color,c.id)),t.innerText=o.storedInfo.carsCount.toString()}return yield Promise.all(i),n}))}(i.RANDOM_CAR_NUMBER),window.location.href=window.location.href}))))}},607:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const o=t(917),i=t(980),a=t(650);t(654),(0,t(85).renderApp)(),(0,i.createCar)(),(0,i.deleteCar)(),(0,i.updateCar)(),(0,o.startDriving)(),(0,o.stopDriving)();var s=setInterval((()=>{const e=document.querySelectorAll(".link-button");e.length>0&&(clearInterval(s),e.length>0&&e.forEach((e=>{e.addEventListener("click",(()=>r(void 0,void 0,void 0,(function*(){(0,a.updatePagination)()}))))})))}))},876:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getViewFromSS=n.getWinnersPageFromSS=n.getPageFromSS=n.updateViewInSS=n.updateWinnersPageInSS=n.updatePageInSS=n.keepPageInSS=void 0,n.keepPageInSS=function(){sessionStorage.setItem("carsPage","1"),sessionStorage.setItem("winnersPage","1"),sessionStorage.setItem("view","garage")},n.updatePageInSS=function(e){sessionStorage.setItem("carsPage",e.toString())},n.updateWinnersPageInSS=function(e){sessionStorage.setItem("winnersPage",e.toString())},n.updateViewInSS=function(e){sessionStorage.setItem("view",e)},n.getPageFromSS=function(){if(""!==sessionStorage.getItem("carsPage")&&sessionStorage.getItem("carsPage")){let e=JSON.parse(sessionStorage.getItem("carsPage")||"{}");return parseInt(e)}return 1},n.getWinnersPageFromSS=function(){if(""!==sessionStorage.getItem("winnersPage")&&sessionStorage.getItem("winnersPage")){let e=JSON.parse(sessionStorage.getItem("winnersPage")||"{}");return parseInt(e)}return 1},n.getViewFromSS=function(){return null!==sessionStorage.getItem("view")?sessionStorage.getItem("view"):"garage"}},621:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.carModels=void 0,n.carModels=["Roadster","S","X","3","Y","Cybertruck","X5","X7","X3","X6","GT4","FXX","599 GTO","Enzo","458 Italia","250 GTO","Priora","4x4","Rio","Focus","Kalina","Vesta","Spark","Lacetti","Nexia","Matiz","Cobalt","Captiva","A7","A5","A3","A8","TT","Corolla","Camry","RAV4","Impreza","WRX","ES","LS","RX","GX","LX","GS","LC500","Gallardo","Aventador","911","Cayenne","FX37"]},650:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.viewNextPage=n.viewPrevPage=n.updatePagination=void 0;const o=t(203),i=t(601),a=t(980),s=t(876),d=t(85),c=t(194);function l(){return r(this,void 0,void 0,(function*(){"garage"===o.storedInfo.view&&(yield function(){return r(this,void 0,void 0,(function*(){const{items:e,count:n}=yield(0,o.getCars)(o.storedInfo.carsPage);o.storedInfo.cars=e,null!=n&&(o.storedInfo.carsCount=parseInt(n)),o.storedInfo.carsPage*i.CARS_PER_PAGE<o.storedInfo.carsCount&&o.storedInfo.carsPage>0?document.getElementById("next").disabled=!1:document.getElementById("next").disabled=!0,o.storedInfo.carsPage>1?document.getElementById("prev").disabled=!1:document.getElementById("prev").disabled=!0}))}()),"winners"===o.storedInfo.view&&(yield function(){return r(this,void 0,void 0,(function*(){const{items:e,count:n}=yield(0,o.getWinners)(o.storedInfo.winnersPage,i.WINNERS_PER_PAGE,o.storedInfo.sortBy,o.storedInfo.sortOrder);o.storedInfo.winners=e,null!=n&&(o.storedInfo.winnersCount=parseInt(n),(0,d.renderWinnersCount)()),o.storedInfo.winnersPage*i.WINNERS_PER_PAGE<o.storedInfo.winnersCount&&o.storedInfo.winnersPage>0?document.getElementById("next").disabled=!1:document.getElementById("next").disabled=!0,o.storedInfo.winnersPage>1?document.getElementById("prev").disabled=!1:document.getElementById("prev").disabled=!0}))}())}))}n.updatePagination=l,n.viewPrevPage=function(){return r(this,void 0,void 0,(function*(){yield l(),document.getElementById("prev").addEventListener("click",(()=>r(this,void 0,void 0,(function*(){switch(o.storedInfo.view){case"garage":o.storedInfo.carsPage--,(0,s.updatePageInSS)(o.storedInfo.carsPage),yield l(),document.getElementById("garage").innerHTML=yield(0,d.renderGarage)(o.storedInfo.carsPage),(0,a.updateCar)(),(0,a.deleteCar)();break;case"winners":o.storedInfo.winnersPage--,(0,s.updateWinnersPageInSS)(o.storedInfo.winnersPage),yield l(),yield(0,c.renderSortedWinners)(o.storedInfo.winnersPage),yield(0,d.renderWinnersCount)(),(0,a.updateCar)(),(0,a.deleteCar)()}}))))}))},n.viewNextPage=function(){return r(this,void 0,void 0,(function*(){document.getElementById("next").addEventListener("click",(()=>r(this,void 0,void 0,(function*(){switch(o.storedInfo.view){case"garage":o.storedInfo.carsPage++,(0,s.updatePageInSS)(o.storedInfo.carsPage),yield l(),document.getElementById("garage").innerHTML=yield(0,d.renderGarage)(o.storedInfo.carsPage),(0,a.updateCar)(),(0,a.deleteCar)();break;case"winners":o.storedInfo.winnersPage++,(0,s.updateWinnersPageInSS)(o.storedInfo.winnersPage),yield l(),yield(0,c.renderSortedWinners)(o.storedInfo.winnersPage),yield(0,d.renderWinnersCount)(),(0,a.updateCar)(),(0,a.deleteCar)()}}))))}))}},194:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.race=n.resetCars=n.renderSortedWinners=n.toggleSortOptions=void 0;const o=t(203),i=t(917),a=t(601),s=t(85),d=t(650);function c(e){return r(this,void 0,void 0,(function*(){const{items:n,count:t}=yield(0,o.getWinners)(e,a.WINNERS_PER_PAGE,o.storedInfo.sortBy,o.storedInfo.sortOrder);o.storedInfo.winners=n,null!=t&&(o.storedInfo.winnersCount=parseInt(t)),yield(0,o.getAllCars)();let r="";const i=document.getElementById("winners-table"),d=null==i?void 0:i.lastChild;null!=d&&d.remove();const c=document.createElement("tbody");o.storedInfo.winners.forEach(((e,n)=>{let t=o.storedInfo.allCars.find((n=>n.id===e.id)),i=t.name,a=t.color;r+=`\n    <tr id="winner-${e.id}">\n      <td>${e.id}</td>\n      <td>${(0,s.renderCarImage)(a)}</td>\n      <td>${i}</td>\n      <td>${e.wins}</td>\n      <td>${e.time}</td>\n    </tr>\n    `})),c.innerHTML=r,null==i||i.appendChild(c)}))}n.toggleSortOptions=function(){return r(this,void 0,void 0,(function*(){var e=setInterval((()=>r(this,void 0,void 0,(function*(){const n=document.querySelectorAll(".table-button");n.length>0&&(clearInterval(e),n.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("table-wins")&&(o.storedInfo.sortBy="wins",o.storedInfo.sortOrder,"DESC"===o.storedInfo.sortOrder?o.storedInfo.sortOrder="ASC":o.storedInfo.sortOrder="DESC"),e.classList.contains("table-time")&&(o.storedInfo.sortBy="time",o.storedInfo.sortOrder,"DESC"===o.storedInfo.sortOrder?o.storedInfo.sortOrder="ASC":o.storedInfo.sortOrder="DESC"),c(o.storedInfo.winnersPage)}))})))}))))}))},n.renderSortedWinners=c,n.resetCars=function(){var e=setInterval((()=>{const n=document.getElementById("reset"),t=document.getElementById("race");n&&(clearInterval(e),n.addEventListener("click",(()=>r(this,void 0,void 0,(function*(){t.disabled=!1;const e=document.querySelectorAll(".car");let n=[];e.forEach((e=>{const t=parseInt(e.id.slice(4)),r=document.getElementById(`start-engine-car-${t}`),i=document.getElementById(`stop-engine-car-${t}`);e.style.left="120px",e.style.transition="0.7s linear",e.classList.remove("active"),i.disabled=!0,i.classList.toggle("enabling",!0),r.disabled=!1,r.classList.toggle("enabling",!1),n.push((0,o.stopEngine)(t))})),yield Promise.all(n)})))))}))},n.race=function(){return r(this,void 0,void 0,(function*(){var e=setInterval((()=>{const n=document.getElementById("race"),t=document.getElementById("reset");var l=new Audio("./assets/racing-sound.wav");l.volume=.1,n&&(clearInterval(e),n.addEventListener("click",(()=>r(this,void 0,void 0,(function*(){n.disabled=!0,t.disabled=!0;const e=document.querySelectorAll(".car");let u=[];o.storedInfo.startTime=performance.now(),l.play(),e.forEach((e=>{const n=parseInt(e.id.slice(4)),t=document.getElementById(`car-name-${n}`).innerText,r=document.getElementById(`start-engine-car-${n}`),o=document.getElementById(`stop-engine-car-${n}`);u.push((0,i.animateSingleCar)(n,t)),o.disabled=!1,o.classList.toggle("enabling",!1),r.disabled=!0,r.classList.toggle("enabling",!0)}));let f=yield Promise.all(u);t.disabled=!1,n.disabled=!1,l.pause(),function(e){r(this,void 0,void 0,(function*(){let n=e.reduce(((e,n)=>e.raceTime<n.raceTime?e:n)),t=n.id,r=(yield(0,o.getWinners)(o.storedInfo.winnersPage)).items.find((e=>e.id===t)),i=1,l=n.raceTime;null!=r?(i=r.wins,i++,r.time<l&&(l=r.time),(0,o.updateWinnerOnServer)({wins:i,time:l},t)):(0,o.pushNewWinnerToServer)(i,n.raceTime,t),o.storedInfo.currentBestTime=a.FAILED_CAR_TIME,o.storedInfo.winners.push({wins:i,time:l,id:t}),o.storedInfo.winnersCount=o.storedInfo.winners.length,console.log(`winnersCount is ${o.storedInfo.winnersCount}`),(0,d.updatePagination)(),c(o.storedInfo.winnersPage),(0,s.renderWinnersCount)()}))}(f)})))))}))}))}},85:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{d(r.next(e))}catch(e){i(e)}}function s(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.renderApp=n.renderWinnersCount=n.renderWinnerBanner=n.renderGarage=n.renderCar=n.renderCarImage=void 0;const o=t(194),i=t(203),a=t(980),s=t(650),d=t(876);function c(e,n,t,r){e.classList.contains(t)||(e.classList.add(t),e.classList.toggle(r),n.classList.toggle(t),n.classList.toggle(r))}function l(e){return`\n  <?xml version="1.0" encoding="iso-8859-1"?>\n    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n    <svg version="1.1" class="car-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \n    width="102" height="71"\n      >\n      <g transform="scale(0.2)" style="fill:${e}">\n      <path d="M160,307.5h133.538c14.182,0,27.524-7.554,34.82-19.715l14.501-24.169c2.273-3.789,1.045-8.703-2.744-10.976\n        c-3.788-2.273-8.702-1.045-10.976,2.744l-14.501,24.169c-4.421,7.369-12.507,11.947-21.101,11.947H160c-4.418,0-8,3.582-8,8\n        S155.582,307.5,160,307.5z"/>\n      <path d="M504,323.569V299.5c0-48.523-39.477-88-88-88h-44.209c-12.392-9.747-62.874-48-91.791-48h-54\n        c-11.001,0-21.904,1.664-32.403,4.945c-0.204,0.063-0.404,0.135-0.602,0.215l-73.691,29.675\n        c-11.071,3.427-22.56,5.165-34.152,5.165H58.687c-0.379-0.778-0.884-1.51-1.53-2.157l-7.772-7.772\n        C57.969,189.897,64,181.368,64,171.455V163.5c0-4.418-3.582-8-8-8H8c-4.418,0-8,3.582-8,8v7.955\n        C0,184.713,10.787,195.5,24.045,195.5h4.642l8,8h-6.685C17.87,203.5,8,213.37,8,225.502V291.5c0,18.508,13.298,34.094,33.88,39.714\n        C51.989,345.87,68.888,355.5,88,355.5c15.22,0,29.034-6.112,39.138-16h249.723c10.104,9.888,23.918,16,39.138,16\n        s29.034-6.112,39.138-16H503c4.418,0,8-3.582,8-8C511,327.421,507.945,324.062,504,323.569z M16,171.5h32\n        c-0.024,4.416-3.624,8-8.045,8h-15.91C19.624,179.5,16.024,175.916,16,171.5z M356.287,219.763\n        c-3.571,2.505-6.227,5.165-8.059,7.339l-150.98-14.465C204.31,199.968,218.975,179.5,240,179.5h40\n        C298.891,179.5,336.321,204.724,356.287,219.763z M24,291.5v-65.998c0-3.31,2.692-6.002,6.002-6.002h55.15\n        c13.317,0,26.514-2.014,39.225-5.986c0.204-0.063,0.404-0.135,0.602-0.215l73.433-29.571c-1.999,2.142-3.953,4.431-5.85,6.899\n        c-9.799,12.756-14.805,25.43-15.014,25.963c-0.913,2.336-0.677,4.965,0.638,7.102c1.314,2.136,3.554,3.533,6.051,3.772l167,16\n        c0.28,0.027,0.559,0.041,0.835,0.041c2.931,0,5.573-1.5,6.942-4.153c0.559-0.939,7.435-11.851,24.986-11.851h32\n        c39.701,0,72,32.299,72,72v24h-21.414c3.467-7.279,5.414-15.415,5.414-24c0-30.878-25.122-56-56-56s-56,25.122-56,56\n        c0,8.585,1.947,16.721,5.414,24H138.586c3.467-7.279,5.414-15.415,5.414-24c0-30.878-25.122-56-56-56s-56,25.122-56,56\n        c0,3.313,0.306,6.554,0.86,9.711C27.217,304.609,24,298.428,24,291.5z M48,299.5c0-22.056,17.944-40,40-40s40,17.944,40,40\n        s-17.944,40-40,40S48,321.556,48,299.5z M416,339.5c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40\n        S438.056,339.5,416,339.5z"/>\n      <path d="M112,291.5c-4.418,0-8,3.582-8,8c0,8.822-7.178,16-16,16s-16-7.178-16-16s7.178-16,16-16c4.418,0,8-3.582,8-8s-3.582-8-8-8\n        c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32C120,295.082,116.418,291.5,112,291.5z"/>\n      <path d="M440,291.5c-4.418,0-8,3.582-8,8c0,8.822-7.178,16-16,16s-16-7.178-16-16s7.178-16,16-16c4.418,0,8-3.582,8-8s-3.582-8-8-8\n        c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32C448,295.082,444.418,291.5,440,291.5z"/>\n    </g>\n  </svg>\n  `}function u(e,n,t,r){return`\n    <div class="car-controls" id="car-controls-${e}">\n      <button class="button select-button" id="select-car-${e}">Select</button>\n      <button class="button delete-button" id="delete-button-${e}">Delete</button>\n      <div class="car-name" id="car-name-${e}">${n}</div>   \n    </div>\n    <div class="car-flag">\n      <div class="control-panel">\n        <button class="engine-button start-engine-button" id="start-engine-car-${e}" ${r?"disabled":""}>A</button>\n        <button class="engine-button stop-engine-button" id="stop-engine-car-${e}" ${r?"":"disabled"}>B</button>\n      </div>\n      <div class="car" id="car-${e}" style="position: absolute; left: 120px;">\n        ${l(t)}\n      </div>\n      <div class="flag" id="flag-${e}"></div>\n    </div>\n    <div class="road"></div>\n  `}function f(e){return r(this,void 0,void 0,(function*(){const{items:n,count:t}=yield(0,i.getCars)(e);i.storedInfo.cars=n,null!=t&&(i.storedInfo.carsCount=parseInt(t));let r=`\n  <h1>Garage (<span id="garage-count">${i.storedInfo.carsCount}</span>)</h1>\n  <h2>Page #<span id="garage-page">${e}</span></h2>\n  `;return[...i.storedInfo.cars].forEach((e=>{r+=`\n      <div class="car-section" id="car-section-${e.id}">\n      ${u(e.id,e.name,e.color,!1)}\n      </div>`})),r}))}function g(){return r(this,void 0,void 0,(function*(){let{items:e,count:n}=yield(0,i.getWinners)(i.storedInfo.winnersPage);const t=document.getElementById("winners-count");null!=n&&(t.innerText=n),document.getElementById("winners-page").innerText=i.storedInfo.winnersPage.toString()}))}n.renderCarImage=l,n.renderCar=u,n.renderGarage=f,n.renderWinnerBanner=function(e,n,t){var r=setInterval((()=>{const o=document.getElementById(`car-controls-${e}`);if(o){clearInterval(r);const e=document.createElement("div");e.classList.add("winner-banner"),e.innerText=`${n} wins in ${t} sec!`,o.appendChild(e),window.addEventListener("click",(()=>{e.remove()}))}}))},n.renderWinnersCount=g,n.renderApp=function(){return r(this,void 0,void 0,(function*(){const e=document.createElement("main");i.storedInfo.winnersCount=i.storedInfo.winners.length;const n=`\n    <div class="nav">\n      <button class="button garage-link-button link-button" id="garage-link">Garage</button>\n      <button class="button winners-link-button link-button" id="winners-link">Winners</button>\n    </div>\n    <div class="view active" id="garage-view">\n      <div>\n        <form class="form" id="create">\n          <input class="input" id="create-name" name="name" type="text">\n          <input class="color" id="create-color" name="color" type="color" value="#66e1ea">\n          <button class="button" id="create-submit" >Create</button>\n        </form>\n        <form class="form" id="update">\n          <input class="input" id="update-name" name="name" type="text" disabled>\n          <input class="color" id="update-color" name="color" type="color" value="#c45bd2" disabled>\n          <button class="button" id="update-submit" >Update</button>\n        </form>\n      </div>\n      <div class="race-controls">\n        <button class="button race-button" id="race">Race</button>\n        <button class="button reset-button" id="reset">Reset</button>\n        <button class="button generate-car-button" id="generator">Generate cars</button>\n      </div>\n      <div class="garage-section" id="garage">\n        ${yield f(i.storedInfo.carsPage)}       \n        \n      </div>\n    </div>\n    <div class="view inactive winners-section" id="winners-view">\n      <h1>Winners (<span id="winners-count">${i.storedInfo.winnersCount}</span>)</h1>\n      <h2>Page #<span id="winners-page">${i.storedInfo.winnersPage}</span></h2>\n      \n      \n\n      <table class="table" id="winners-table" cellspacing="0" border="0" cellpadding="0">\n      <thead>\n        <th>Car ID</th>\n        <th>Car Image</th>\n        <th>Name</th>\n        <th class="table-button table-wins ${"wins"===i.storedInfo.sortBy?i.storedInfo.sortOrder:""}" id="sort-by-wins">Wins &uarr;&darr;</th>\n        <th class="table-button table-time ${"time"===i.storedInfo.sortBy?i.storedInfo.sortOrder:""}" id="sort-by-time">Best time (sec) &uarr;&darr;</th>\n      </thead>\n      <tbody>\n      ${yield(0,o.renderSortedWinners)(i.storedInfo.winnersPage)}\n      </tbody>\n    </table>\n\n     \n    </div>\n    <div class="pagination">\n      <button class="button prev-button" disabled id="prev">Prev</button>\n      <button class="button next-button" disabled id="next">Next</button>\n    </div>\n  `;e.innerHTML=n,document.body.appendChild(e),function(){const e=document.getElementById("garage-link"),n=document.getElementById("winners-link"),t=document.getElementById("garage-view"),r=document.getElementById("winners-view");null!=e&&e.addEventListener("click",(()=>{null!=t&&null!=r&&(c(t,r,"active","inactive"),i.storedInfo.view="garage",(0,d.updateViewInSS)("garage"))})),null!=n&&n.addEventListener("click",(()=>{null!=r&&null!=t&&(c(r,t,"active","inactive"),i.storedInfo.view="winners",(0,d.updateViewInSS)("winners"),(0,o.renderSortedWinners)(i.storedInfo.winnersPage))}))}(),(0,s.updatePagination)(),(0,s.viewNextPage)(),(0,s.viewPrevPage)(),(0,a.renderRandomCars)(),(0,o.resetCars)(),(0,o.race)(),(0,o.toggleSortOptions)(),g()}))}},3:(e,n,t)=>{e.exports=t.p+"assets/cf4dd5a56544637f6e6d.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t(607)})();