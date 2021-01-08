
// * In this file we convert UTF Timezone to PET Timezone, to get our actual hour (Peru)
export const getPetTime = (data) =>{
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const js_date = new Date(data);
  let year;
  let month;
  let day;
  let hour;
  let mins;
  let secs;
  
  day = `${(js_date.getDate() < 10 ? '0' : '') + js_date.getDate()}`
  month = (js_date.getMonth());
  year = js_date.getFullYear();
  hour = `${(js_date.getHours() < 10 ? '0' : '') + js_date.getHours()}`;
  mins = `${(js_date.getMinutes() < 10 ? '0' : '') + js_date.getMinutes()}`;
  secs = `${(js_date.getSeconds() < 10 ? '0' : '') + js_date.getSeconds()}`;
  
  const fullDate = `${months[month]}, ${day} ${year}`;
  const time = `${hour}:${mins}:${secs}`;

  return [fullDate,time];
}