const moment = require('moment-timezone');

// * In this file we convert UTF Timezone to PET Timezone, to get our actual hour (Peru)
export const getPetTime = (data) =>{
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const format_timestamp = "MM/dd/yy HH:mm:ss";
  const js_date = new Date(data);
  let year;
  let month;
  let day;
  let hour;
  let mins;
  let secs;
  
  day = js_date.getDate();
  month = (js_date.getMonth()+1);
  year = js_date.getFullYear();
  hour = js_date.getHours();
  mins = js_date.getMinutes();
  secs = js_date.getSeconds();

  const date = day + '/' + month + '/' + year + " " + hour+":"+mins+":"+secs;
  const parsedDate = moment(date,format_timestamp);
  const peruvianDate = parsedDate.tz('America/Lima').format();
  const dateComplete = new Date(peruvianDate);
  
  year = `${dateComplete.getFullYear()}`;
  month = `${months[dateComplete.getMonth()]}`
  day = `${(dateComplete.getDate() < 10 ? '0' : '') + dateComplete.getDate()}`
  hour = `${dateComplete.getHours()}`;
  mins = `${(dateComplete.getMinutes() < 10 ? '0' : '') + dateComplete.getMinutes()}`;
  secs = `${(dateComplete.getSeconds() < 10 ? '0' : '') + dateComplete.getSeconds()}`;
  
  const fullDate = `${month}, ${day} ${year}`;
  const time = `${hour}:${mins}:${secs}`;

  return [fullDate,time];
}