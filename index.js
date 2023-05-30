export default function solution(content){
  // BEGIN
  const data = content
  .trim()
  .split('\r\n')
  .slice(1);
  const dataRows = data.length;
  console.log(`Count: ${dataRows}`);

const cityNames = data.map((city) => city.split(',')[7]);
const uniqCityNames = [];
for (let cities of cityNames) {
  if (!uniqCityNames.includes(cities)) {
    uniqCityNames.push(cities);
  }
}
console.log(`Cities: ${uniqCityNames.sort().join(', ')}`);

const ovHumidity = data.map((humidity) => humidity.split(',')[3]);
let minHumidity = 100;
let maxHumidity = 1;
for (let h of ovHumidity) {
  if (h >= maxHumidity) {
    maxHumidity = h;    
  } else if (h <= minHumidity) {
    minHumidity = h;
  }
}
console.log(`Humidity: Min: ${minHumidity} Max: ${maxHumidity}`);

const maxTemp = data.map((temp) => temp.split(',')[1]);
let maxTemperature = 0;
for (let temp of maxTemp) {
  if (temp > maxTemperature) {
    maxTemperature = temp;
  }
}
const maxTempData = [];
for (let rows of data) {
  if (rows.includes(maxTemperature)) {
    maxTempData.push(rows);
  }
}
const maxTempDataSplitted = maxTempData.toString().split(',');
console.log(`HottestDay: ${maxTempDataSplitted[0]} ${maxTempDataSplitted[7]}`);

let arrCityTemps = [];
for (let c of uniqCityNames) {
  if (!arrCityTemps.includes(c)) {
    arrCityTemps.push([c, []]);
  }
}
let curCity = '';
for (let row of data) {
  curCity = row.split(',')[7];
  for (let arr of arrCityTemps) {
    if (arr[0] === curCity) {
      arr[1] = arr[1] * 1 + Number(row.split(',')[1]);
    }
  }
}
let hottestCity = '';
let currTemp = 0;
for (let c of arrCityTemps) {
  if (c[1] > currTemp) {
    currTemp = c[1];
    hottestCity = c[0]
  }
}
console.log(`HottestCity: ${hottestCity}`);
  // END
}