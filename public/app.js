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

const findTemp = function(temp) {
    let dateT = new Date();
    let curentTime = dateT.toString().match(/(?<=\s)\w{2}(?=:)/g)
    let searchTime = '';
    let searchTemp = '';
    temp.forEach((el) => {
        searchTime = el.dt_txt.match(/(?<=\s)\w{2}(?=:)/g)
        if(curentTime[0] == searchTime[0]) {
          searchTemp = +el.main.temp; 
            console.log(searchTemp)
        } 
    });
    return searchTemp
}

swapi.getWeather()
  .then((data) => {
    console.log(data)
  const {id, name} = data.city;
  const temp = data.list;
     console.log(findTemp(temp))
  const html = `
  <div class='title-city'>${ name }</div>
  <div class='temp-clock'>${ (findTemp(temp) - 32)/ 1.8 }</div>`;
  document.querySelector('.container').insertAdjacentHTML('beforeend', html);
  });

