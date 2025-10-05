// utils/nasaPower.js
const axios = require('axios');
async function getDailyTemp(lat, lon, start, end){
  const url = `https://power.larc.nasa.gov/api/temporal/daily/point?start=${start}&end=${end}&latitude=${lat}&longitude=${lon}&parameters=T2M&format=JSON`;
  const r = await axios.get(url);
  return r.data;
}
module.exports = { getDailyTemp };
