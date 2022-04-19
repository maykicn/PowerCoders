let possibleGeographicLocations = [
    'Alabama',
    'Switzerland',
    'Turkey',
    'China',
    'Germany',
    'Austria',
    'Italy',
    'Spain'
];

let possiblePartnerNames = [
    'Jessie',
    'Marion',
    'Jackie',
    'Alva',
    'Ollie',
    'Jodie',
    'Cleo',
    'Kerry',
    'Frankie',
    'Guadalupe',
    'Carey',
    'Tommie',
    'Angel',
    'Hollis'
]

let possibleJobTitles = [
    'Penetration Tester',
    'Pilot',
    'Programmer',
    'Cabin Crew Member',
    'Captain Jack Sparrow',
    'Flight Instructor'
]


// Selected Variables

let selectedPartnerName;
let selectedGeographicLocation;
let selectedJobTitle;
let selectedNumberOfChildren;


function selectRandomPartnerName() {
    selectedPartnerName = possiblePartnerNames[
        Math.floor(Math.random() *
            possiblePartnerNames.length)
    ];
}

function selectRandomGeographicalLocation() {
    selectedGeographicLocation = possibleGeographicLocations[
        Math.floor(Math.random() *
            possibleGeographicLocations.length)
    ];
}
function selectRandomJobTitle() {
    selectedJobTitle = possibleJobTitles[
        Math.floor(Math.random() *
            possibleJobTitles.length)
    ];
}
function selectRandomNumberOfChildren() {
    selectedNumberOfChildren = Math.floor(Math.random() * 3)
}

selectRandomPartnerName();
selectRandomJobTitle();
selectRandomGeographicalLocation();
selectRandomNumberOfChildren();

console.log(`You will be a ${selectedJobTitle} in ${selectedGeographicLocation}, and married to ${selectedPartnerName} with ${selectedNumberOfChildren} ${selectedNumberOfChildren > 1 ? 'Kids' : 'Kid'}`);