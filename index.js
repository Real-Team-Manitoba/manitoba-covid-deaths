import fetch from 'node-fetch';
import fs from 'fs';
import luxon from 'luxon';

const updatesResponse = await fetch('https://manitoba.ca/covid19/updates/');

if (!updatesResponse.ok) {
    console.log('failed fetch', updatesResponse);
    throw new Error('Failed to fetch updates page');
}

const updatesText = await updatesResponse.text();

const dateString = updatesText.match(/\<em\>Last updated: (.*)\<\/em\>/)[1];
const deaths = updatesText.match(/deaths due to COVID-19 is (\d+)/)[1];

const date = luxon.DateTime.fromFormat(dateString, 'LLLL dd, yyyy');

fs.writeFileSync('deaths.json', JSON.stringify({
    date: date.toISODate(),
    deaths,
}, null, 2));
