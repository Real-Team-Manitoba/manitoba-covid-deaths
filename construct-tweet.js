import fs from 'fs';

const deathsJson = JSON.parse(fs.readFileSync('deaths.json'));
const [template, ...otherTemplates] = fs.readFileSync('tweet-templates.txt').toString().split("\n");

fs.writeFileSync('tweet-templates.txt', [...otherTemplates, template].join('\n'));

const tweet = template.replace('DEATHS', deathsJson.deaths).replace('DATE', deathsJson.deathString);

console.log(tweet);