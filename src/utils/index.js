/**
 * Basic utils for testing
 */

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}  
  
//Convert inputed value into double values. E.g. 0 => 00
function toPadded(value, length = 2) {
    return value.toString().padStart(length, "0");
}
  
  
//Generate new request id for instructing bank
function generateRequestId(instructingInstitutionCode) {
    let date = new Date();
    let randomNumber = getRandomInteger(1000000000, 9999999999);

    let year  = date.getFullYear();
    let month = toPadded((date.getMonth() + 1));
    let day   = toPadded(date.getDate());  
    let hour   = toPadded(date.getHours());
    let minute   = toPadded(date.getMinutes());  
    let second   = toPadded(date.getSeconds());  

    let requestId = `${year}${month}${day}${hour}${minute}${second}${instructingInstitutionCode}${randomNumber}`;

    return requestId;
}
  
export function regeneratePayload(payload) {
    return Object.assign({}, payload, {requestId: generateRequestId(payload.instructingInstitutionCode)})
}
