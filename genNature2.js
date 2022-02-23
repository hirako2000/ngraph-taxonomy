const fs = require('fs');

const {chain}  = require('stream-chain');

const {parser} = require('stream-json');
const {ignore} = require('stream-json/filters/Ignore');
const {streamArray} = require('stream-json/streamers/StreamArray');

const createGraph = require('ngraph.graph');
global.g = createGraph();
const createLayout = require('ngraph.offline.layout');

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

const pipeline = chain([
  fs.createReadStream('taxa.json'),
  parser(),
  streamArray(),
  ignore({filter: /\b_meta\b/i}),
  //streamValues(),
  data => {
    const value = data.value;
    return value;
  }
]);

function isEmpty(str) {
    return (!str || 0 === str.length);
}

global.check = true;

function addLinkIfNotExist(from, to) {
  if(check && !g.hasLink(from, to)) {
    g.addLink(from, to);
  }
}

function addNodeIfNotExist(nodeName) {
  if(check && !g.getNode(nodeName)) {
    g.addNode(nodeName);
  }
}

let counter = 0;
const maxSpieces = 450000;
global.kingdoms = [];
global.classes = [];
global.orders = [];
global.families = [];
global.genuses = [];
global.species = [];

/**
 * Fires on streaming data, for each row this will create accordingly:
 * 1/ A Kingdom, Class, Order, Family, and Genus node if the top parent's kingdom respective node does not exist yet
 * 2/ This specie node
 * 3/ Links for the species hierarchy
 */
pipeline.on('data', (d) => {
  if (counter > maxSpieces) return;
  if(!isEmpty(d.kingdom) && !kingdoms.includes("Kingdom: " + d.kingdom)) {
    kingdoms.push("Kingdom: " + d.kingdom);
    console.log("Adding new kingdom: " + d.kingdom);
    addNodeIfNotExist("Kingdom: " + d.kingdom);
  }

  if(!isEmpty(d.class)) {
    if(check || !classes.includes("Class: " + d.class)) {
      console.log("Adding new class: " + d.class);
      //classes.push("Class: " + d.class);
    }
    
    addNodeIfNotExist("Class: " + d.class);
    if(!isEmpty(d.kingdom)) {
      // link class to kingdom
      addLinkIfNotExist("Class: " + d.class, "Kingdom: " + d.kingdom);
    } // if no kingdom, nothing to link to
  }

  if(!isEmpty(d.order)) {
    if(check || !orders.includes("Order: " + d.order)) {
      console.log("Adding new Order: " + d.order);
      //orders.push("Order: " + d.order);
    }
   
    addNodeIfNotExist("Order: " + d.order);
    if(!isEmpty(d.class)) {
      // link order to class
      addLinkIfNotExist("Order: " + d.order, "Class: " + d.class);
    } else {
      // if no class, perhaps there is a kingdom
      if(!isEmpty(d.kingdom)) {
        // link order to kingdom
        addLinkIfNotExist("Order: " + d.order, "Kingdom: " + d.kingdom);
      } // if no kingdom, nothing to link to
    }
  }

  if(!isEmpty(d.family)) {
    if(check || !families.includes("Family: " + d.family)) {
      console.log("Adding new Family: " + d.family + ", species total: " + counter);
      //families.push("Family: " + d.family);
    }
    addNodeIfNotExist("Family: " + d.family);
    if(!isEmpty(d.order)) {
      // link family to order
      addLinkIfNotExist("Family: " + d.family, "Order: " + d.order);
    } else {
      // if no order, perhaps there is a class
      if(!isEmpty(d.class)) {
        // link family to class
        addLinkIfNotExist("Family: " + d.family, "Class: " + d.class);
      } else if(!isEmpty(d.kingdom)) {
        // link family to kingdom
        addLinkIfNotExist("Family: " + d.family, "Kingdom: " + d.kingdom);
      } // if no kingdom, nothing to link to
    }
  }

  if(!isEmpty(d.genus)) {
    if(check || !genuses.includes("Genus: " + d.genus)) {
      //genuses.push("Genus: " + d.genus);
    }
    addNodeIfNotExist("Genus: " + d.genus);
    if(!isEmpty(d.family)) {
      // link genus to family
      addLinkIfNotExist("Genus: " + d.genus, "Family: " + d.family);
    } else {
      // if no family, perhaps there is an order
      if(!isEmpty(d.order)) {
        // link genus to order
        addLinkIfNotExist("Genus: " + d.genus, "Order: " + d.order);
      } else if(!isEmpty(d.class)) {
        // link genus to class
        addLinkIfNotExist("Genus: " + d.genus, "Class: " + d.class);
      } else if(!isEmpty(d.kingdom)) {
        // link genus to kingdom
        addLinkIfNotExist("Genus: " + d.genus, "Kingdom: " + d.kingdom);
      } // if no kingdom, nothing to link to
    }
  }

  if(!isEmpty(d.specificEpithet)) {
    if(check || !species.includes("Specie: " + d.genus + " " + d.specificEpithet)) {
      //species.push("Specie: " + d.genus + " " + d.specificEpithet);
    }
    // Luckily enough, all entries appear to have a genus 
    addNodeIfNotExist("Specie: " + d.genus + " " + d.specificEpithet);
    addLinkIfNotExist("Specie: " + d.genus + " " + d.specificEpithet, "Genus: " + d.genus);
  } else {
    // If no Epithet, let's replace the genus + ep with genus + ?
  }

  // genus + specificEpithet is the full name
  // But sometimes specific isn't there, maybe just genus
  // "genus":"Apiomorpha","subgenus":"","specificEpithet":"pomaphora"
  ++counter;
});

/**
 * Fires when finished building the nodes, this will call the graph generation
 */
pipeline.on('end', () => {
  graphStuff();
  console.log(`The data source had ${counter} entries.`)
});

/**
 * This generates the graph with  100 iterations for smooth result.
 * As ngraph binary
 * The data is generated in an output folder
 */
function graphStuff() {
  const layout = createLayout(g, {
    iterations: 250, // Run `100` iterations only
    saveEach: 3000, // Save each `nth` iteration
    outDir: './nature3', // Save results into a folder in `./`
    layout: require('ngraph.forcelayout3d'), // use custom layouter
  });
  layout.run();

  const save = require('ngraph.tobinary');
  save(g);
}
