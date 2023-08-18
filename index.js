const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

const utcDate = '2023-04-10 12:00:00Z';
const jstDate = '2023-04-10 12:00:00+09';

console.log('--------------------');
console.log(`UTC: ${utcDate}`);
console.log(dayjs(utcDate).tz());
console.log('--------------------');
console.log(`JST: ${jstDate}`);
console.log(dayjs(jstDate).tz());
console.log('--------------------');
