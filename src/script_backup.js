import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { regeneratePayload } from './utils/index.js';

const filePath = '../inputs/ACH/AccountEnquiry/somefile.json';
const url = "https://account-enquiry.sw.redtechlimited.com:443/v1/account/enquiry";

export const options = {
  vus: 10000,
  duration: '30s',  
};

const data = new SharedArray('good-data', function () {
  let f = JSON.parse(open(filePath));

  return f; // array
});


export default function () {

    let payload = regeneratePayload(data[Math.floor(Math.random() * data.length)]);
    
    const params = {
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
        },
    };
  
    const res = http.post(url, JSON.stringify(payload), params);

    check(res, { 'status was 200': (r) => r.status == 200 });
    check(res, { 'status was 400+': (r) => r.status >= 400 });
    check(res, { 'status was 500+': (r) => r.status >= 500 });

    sleep(1);
}


