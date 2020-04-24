//const API =`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3b1ceba16bf4976a7316ae5db42cf48f`; 
const API ='/api'
//const list = {};
class SwapiService {
  async getResource(url) {
    const res = await fetch(url);
    return await res.json();
  }

  async getWeather() {
    const res = await this.getResource(API);
    return res;
  }
}
const swapi = new SwapiService();

const findTemp = function(temp, tz) {
    let curentTime = Math.round(new Date().getTime()/1000.0) + tz;
    const regexp = /\w{6}/g;
    let searchTime = '';
    let searchTemp = '';
    const num = curentTime.toString().match(regexp)
    temp.forEach((el) => {
        searchTime = el.dt;
      console.log(curentTime.toString().match(regexp)[0] , searchTime.toString().match(regexp)[0])
        if(curentTime.toString().match(regexp)[0] == searchTime.toString().match(regexp)[0]) {
          searchTemp = +el.main.temp; 
        } 
    });
    return searchTemp
}

swapi.getWeather()
  .then((data) => {
    console.log(data)
  const {id, name, timezone} = data.city;
  const temp = data.list[0].main.temp;
  const html = `
  <div class='title-city'>${ name }</div>
  <div class='temp-clock'>${ ~~(temp - 273.15) }</div>`;
  document.querySelector('.container').insertAdjacentHTML('beforeend', html);
  });

