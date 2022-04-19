// console.log(Math.floor(Math.random() * 3))



let partner = ['Bellamy',
    'Charlie',
    'Dakota',
    'Emerson',
    'Finley',
    'Justice',
    'River',
    'Skyler',
    'Tatum',
    ];
let job = ['Aerospace Engineering and Operations Technicians',
   ' Aerospace Engineers',
    'Agricultural Engineers',
    'Architects, Except Landscape and Naval',
   ' Architectural and Civil Drafters',
    'Architectural Drafters',
    'Automotive Engineering Technicians',
   ' Automotive Engineers',
    ];
let loc = ['New York City','Los Angeles','Chicago'];
let children = [1,2,3];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log(`Your partner is ${partner[getRandomInt(partner.length)]}`)

console.log(`Your job is  ${job[getRandomInt(job.length)]}`)

console.log(`Your location is  ${loc[getRandomInt(loc.length)]}`)

console.log(`Your children is  ${children[getRandomInt(children.length)]}`)