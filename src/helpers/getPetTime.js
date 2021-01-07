const moment = require('moment-timezone');

// * In this file we convert UTF Timezone to PET Timezone, to get our actual hour (Peru)
export const getPetTime = (data) =>{
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const format_timestamp = "MM/dd/yy HH:mm:ss";
  let date_then = new Date(data);
  let new_date = date_then.getDate() + '/' + (date_then.getMonth()+1) + '/' + date_then.getFullYear() + " " + date_then.getHours()+":"+date_then.getMinutes()+":"+date_then.getSeconds();
  let parseDate = moment(new_date,format_timestamp);
  let parsed = parseDate.tz('America/Lima').format();
  let parse_completed = new Date(parsed);
  const date_parsed = `${months[parse_completed.getMonth()]}, ${(parse_completed.getDate() < 10 ? '0' : '') + parse_completed.getDate()} ${parse_completed.getFullYear()}`
  const time = `${parse_completed.getHours()}:${(parse_completed.getMinutes() < 10 ? '0' : '') + parse_completed.getMinutes()}:${(parse_completed.getSeconds() < 10 ? '0' : '') + parse_completed.getSeconds()}`
  return [date_parsed,time];
}