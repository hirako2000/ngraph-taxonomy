const axios = require('axios');
const fetch = require('node-fetch');
const createGraph = require('ngraph.graph');
global.g = createGraph();
const createLayout = require('ngraph.offline.layout');

const headers = {
  Accept: 'application/json',
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
};

// Get all kingdom
global.allKingdoms = [];

/**
 * Generates graph from remote db
 */
async function getKingdoms() {
  try {
     fetch('https://apps.des.qld.gov.au/species/?op=getkingdomnames', {
       timeout: 0,
       method: 'get',
       headers: headers,
       params: {
         op: 'getkingdomnames',
         f: 'json',
       },
     })
       .then((res) => res.json())
       .then((response) => {
         //console.log('Fetched ' + JSON.stringify(response));
         concatKingdom(response.Kingdom);
         console.log('Fetched ' + howManyKingdom() + ' kingdoms');
         getAllClasses(response.Kingdom);
       })
       .catch((error) => {
         console.log(error);
       });
  } catch (error) {
    console.error(error);
  }
}

function concatKingdom(value) {
  console.log("Kingdoms so far: " + allKingdoms.length);
  allKingdoms = allKingdoms.concat(value);
  console.log('Kingdoms now: ' + allKingdoms.length);
}

function howManyKingdom() {
  return allKingdoms.length;
}

global.allClasses = [];
async function getAllClasses(kingdoms) {
  // Each kingdom has a number of classes
  // it returns Class which has an array
  console.log("Fetching classes from  " + kingdoms.length +  " kingdoms");
  kingdoms.forEach(kingdom => {
    try {
      const thoseClasses = getClasses(kingdom.KingdomCommonName);
    } catch (error) {
      console.log(error);
    }
  });
}

async function getClasses(kingdomCommonName) {
  try {
    console.log('Fetching classes for kingdom: ' + kingdomCommonName);
    fetch(
      'https://apps.des.qld.gov.au/species/?op=getclassnames&kingdom=' +
        kingdomCommonName,
      {
        timeout: 0,
        method: 'get',
        headers: headers,
        params: {
          kingdom: kingdomCommonName,
          f: 'json',
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        //console.log('Fetched ' + JSON.stringify(response));
        console.log('Fetched ' + response.Class.length + ' classes');
        getAllFamilies(response.Class);
        concatClasses(response.Class);
        return response.Class;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function concatClasses(value) {
  console.log('Classes so far: ' + allClasses.length);
  allClasses = allClasses.concat(value);
  console.log('Classes now: ' + allClasses.length);
}

function howManyClasses() {
  return allClasses.length;
}

global.allFamilies = [];
async function getAllFamilies(classes) {
  console.log(
    'Fetching families from  ' + classes.length + ' classes'
  );
  classes.forEach((classe) => {
    try {
      const thoseFamilies = getFamilies(classe.ClassCommonName, classe.KingdomCommonName);
    } catch (error) {
      console.log(error);
    }
  });
}

async function getFamilies(classeCommonName, kingdomCommonName) {
  console.log('Fetching families from class: ' + classeCommonName);

  try {
    fetch(
      'https://apps.des.qld.gov.au/species/?op=getfamilynames&class=' +
        classeCommonName +
        '&kingdom=' +
        kingdomCommonName,
      {
        timeout: 0,
        method: 'get',
        headers: headers,
        params: {
          f: 'json',
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        //console.log('Fetched ' + JSON.stringify(response));
        console.log('Fetched ' + response.Family.length + ' families');
        getAllSpecies(response.Family);
        concatFamilies(response.Family);
        return response.Family;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function concatFamilies(value) {
  console.log('Families so far: ' + allFamilies.length);
  allFamilies = allFamilies.concat(value);
  console.log('Families now: ' + allFamilies.length);
}

function howManyFamilies() {
  return allFamilies.length;
}

global.allSpecies = [];
async function getAllSpecies(families) {
  console.log('Fetching specices from  ' + families.length + ' families');
  families.forEach((family) => {
    try {
      const thoseSpecies = getSpecies(
        family.FamilyCommonName,
        family.KingdomCommonName
      );
    } catch (error) {
      console.log(error);
    }
  });
}

async function getSpecies(familyCommonName, kingdom) {
  console.log('Fetching species from family: ' + familyCommonName);
  try {
    fetch(
      'https://apps.des.qld.gov.au/species/?op=getspecies&family=' +
        familyCommonName +
        '&kingdom=' +
        kingdom,
      {
        timeout: 0,
        method: 'get',
        headers: headers,
        params: {
          f: 'json',
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        ///console.log('Fetched ' + JSON.stringify(response));
        console.log('Fetched ' + response.Species.length + ' species');
        concatSpecies(response.Species);
        return response.Species;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function concatSpecies(value) {
  console.log('Species so far: ' + allSpecies.length);
  allSpecies = allSpecies.concat(value);
  console.log('Species now: ' + allSpecies.length);
}

function howManySpecies() {
  return allSpecies.length;
}

getKingdoms();

setTimeout((x) => {
  console.log('Found ' + allKingdoms.length + ' Kingdoms');
  console.log('Found ' + allClasses.length + ' Classes');
  console.log('Found ' + allFamilies.length + ' Families');
  console.log('Found ' + allSpecies.length + ' Species');
  generate();
}, 180000);

function buildKingdoms(kingdoms) {
  kingdoms.forEach(kingdom => {
      if (kingdom.KingdomCommonName && !g.getNode(kingdom.KingdomCommonName)) {
        g.addNode(kingdom.KingdomCommonName, {});
      }
  });
}

function buildClasses(classes) {
    classes.forEach((classe) => {
      if (classe.ClassCommonName && !g.getNode(classe.ClassCommonName)) {
        g.addNode(classe.ClassCommonName, {});
      }
      if (classe.ClassCommonName && !g.hasLink(classe.ClassCommonName, classe.KingdomCommonName)) {
        g.addLink(classe.ClassCommonName, classe.KingdomCommonName);
      }
    });
}

function buildFamilies(families) {
  families.forEach((family) => {
    if (family.FamilyCommonName && !g.getNode(family.FamilyCommonName)) {
      g.addNode(family.FamilyCommonName, {});
    }
    if (family.FamilyCommonName && !g.hasLink(family.FamilyCommonName, family.ClassCommonName)) {
      g.addLink(family.FamilyCommonName, family.ClassCommonName);
    }
  });
}

function buildSpecies(species) {
  species.forEach((specie) => {
    if (specie.AcceptedCommonName && !g.getNode(specie.AcceptedCommonName)) {
      g.addNode(specie.AcceptedCommonName, {});
    }
    if (specie.AcceptedCommonName && !g.hasLink(specie.AcceptedCommonName, specie.FamilyCommonName)) {
      g.addLink(specie.AcceptedCommonName, specie.FamilyCommonName);
    }
  });
}

// Create 3D Layout
function generate() {
  buildKingdoms(allKingdoms);
  buildClasses(allClasses);
  buildFamilies(allFamilies);
  buildSpecies(allSpecies)
  var layout = createLayout(g, {
    iterations: 250, // Run `100` iterations only
    saveEach: 3000, // Save each `nth` iteration
    outDir: './nature', // Save results into `./myFolder`
    layout: require('ngraph.forcelayout3d'), // use custom layouter
  });
  layout.run();

  var save = require('ngraph.tobinary');
  save(g);
}



