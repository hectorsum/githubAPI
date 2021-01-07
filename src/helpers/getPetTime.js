const moment = require('moment-timezone');

// * In this file we convert UTF Timezone to PET Timezone, to get our actual hour (Peru)
export const getPetTime = (data) =>{
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const elements = data.map(({commit:{committer:{date}}}) => {
    let date_then = new Date(date);
    let parseDate = moment(date_then.toUTCString());
    let parsed = parseDate.tz('America/Lima').format();
    let parse_completed = new Date(parsed);
    const date_parsed = `${months[parse_completed.getMonth()]}, ${(parse_completed.getDate() < 10 ? '0' : '') + parse_completed.getDate()} ${parse_completed.getFullYear()}`
    const time = `${parse_completed.getHours()}:${(parse_completed.getMinutes() < 10 ? '0' : '') + parse_completed.getMinutes()}:${parse_completed.getSeconds()}`
    return [date_parsed,time];
  })
  return elements;
}