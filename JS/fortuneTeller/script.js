// console.log(Math.floor(Math.random() * 3))



let partner = ['Bellamy','Charlie','Dakota','Emerson','Finley','Justice','River','Skyler','Tatum'];
let job = ['Aerospace Engineering and Operations Technicians',' Aerospace Engineers','Agricultural Engineers','Architect','Architectural Drafters','Automotive Engineering Technicians','Automotive Engineers'];
let loc = ['New York City','Los Angeles','Chicago'];
let children = [2,3,4];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function FortuneTeller (partner,job,loc,children){
    this.partner = partner;
    this.job = job;
    this.loc = loc;
    this.children = children;
    this.yourFortune = function(){
      return `You will be a ${this.job} in ${this.loc}, and married to ${this.partner} with ${this.children} kids.`;
    }
  };

let fortune = new FortuneTeller(partner[getRandomInt(partner.length)],job[getRandomInt(job.length)],loc[getRandomInt(loc.length)],children[getRandomInt(children.length)]);
console.log(fortune.yourFortune());





// console.log(`Your partner is ${partner[getRandomInt(partner.length)]}`)

// console.log(`Your job is  ${job[getRandomInt(job.length)]}`)

// console.log(`Your location is  ${loc[getRandomInt(loc.length)]}`)

// let futureChildren = children[getRandomInt(children.length)]

// console.log(`Your children is  ${futureChildren} ${futureChildren > 1 ? 'Kids': 'Kid'}`)