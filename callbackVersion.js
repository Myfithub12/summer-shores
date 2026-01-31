const TIMES = {
  mow: 2000,
  weed: 1500,
  trim: 1000,
  wood: 2500,
  water: 500
};

function staysAwake() {
  return Math.random() > 0.3;
}

function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, TIMES.mow);
}

function weedEat(name, callback) {
  setTimeout(() => {
    if (staysAwake()) {
      console.log(`${name} finished using the weed eater.`);
      callback();
    } else {
      console.log(`${name} fell asleep after mowing the yard.`);
    }
  }, TIMES.weed);
}

function trimHedges(name, callback) {
  setTimeout(() => {
    if (staysAwake()) {
      console.log(`${name} finished trimming the hedges.`);
      callback();
    } else {
      console.log(`${name} fell asleep after weed eating the yard.`);
    }
  }, TIMES.trim);
}

function collectWood(name, callback) {
  setTimeout(() => {
    if (staysAwake()) {
      console.log(`${name} finished collecting wood.`);
      callback();
    } else {
      console.log(`${name} fell asleep after trimming the hedges.`);
    }
  }, TIMES.wood);
}

function waterGarden(name, callback) {
  setTimeout(() => {
    if (staysAwake()) {
      console.log(`${name} finished watering the garden.`);
      callback();
    } else {
      console.log(`${name} fell asleep after collecting wood.`);
    }
  }, TIMES.water);
}

function doSummerChores(name) {
  if (typeof name !== "string") {
    console.log("Name must be a string literal.");
    return;
  }

  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}


doSummerChores("Mark");