import fs from 'fs';

const deathsJson = JSON.parse(fs.readFileSync('deaths.json'));
const templates = fs.readFileSync('tweet-templates.txt').toString().split("\n");

const template = templates[Math.floor(Math.random() * templates.length)];

const tweet = template.replace('DEATHS', deathsJson.deaths).replace('DATE', deathsJson.deathString);

console.log(tweet);