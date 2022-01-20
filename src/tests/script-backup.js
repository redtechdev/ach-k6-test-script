import http from 'k6/http';
import { check, sleep } from 'k6';
import * as fs from 'fs-web';
// const fs = require('fs');

// import path from 'path';

// import { SomeService } from './services.service.js';

// const smple = new SomeService();
// const fs = require('fs');
// import path from 'path';
// import fetch from 'node-fetch';

const data = open('../inputs/ACH/AccountEnquiry/123/good/003372430X.json'); 
// const url = "https://account-enquiry.sw.redtechlimited.com:443/v1/account/enquiry";
const url = "https://account-enquiry.sw.redtechlimited.com:443/v1/account/enquiry";

export default function () {


    const payload = JSON.parse(JSON.stringify(data));
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
        },
    };
  
    const res = http.post(url, payload, params);

    console.log({res: res.body()});

    check(res, { 'status was 200': (r) => r.status == 200 });


    // http.post(endpoint, data);
    // http.get('https://test.k6.io');
    // http.get(endpoint);
    
    sleep(1);
} 