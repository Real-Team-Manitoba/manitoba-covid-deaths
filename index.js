import fetch from 'node-fetch';
import fs from 'fs';
import luxon from 'luxon';

const updatesResponse = await fetch('https://services.arcgis.com/mMUesHYPkXjaFGfS/arcgis/rest/services/mb_covid_cases_summary_statistics/FeatureServer/0/query?f=json&cacheHint=true&resultOffset=0&resultRecordCount=50&where=(Area%20IN(%27All%27%2C%20%27Interlake-Eastern%27%2C%20%27Prairie%20Mountain%20Health%27%2C%20%27Northern%27%2C%20%27Southern%20Health-Sant%C3%A9%20Sud%27%2C%20%27Winnipeg%27))%20AND%20(Area%3D%27All%27)&orderByFields=&outFields=*');

if (!updatesResponse.ok) {
    console.log('failed fetch', updatesResponse);
    throw new Error('Failed to fetch updates page');
}

const updatesJson = await updatesResponse.json();
const data = updatesJson.features[0].attributes;

const deaths = data.Deaths;
const date = luxon.DateTime.fromMillis(data.Date);

fs.writeFileSync('deaths.json', JSON.stringify({
    date: date.toISODate(),
    dateString: date.toFormat('LLL d, yyyy'),
    deaths,
    stickerDate: date.toFormat('LLL d, yyyy').toUpperCase(),
}, null, 2));
