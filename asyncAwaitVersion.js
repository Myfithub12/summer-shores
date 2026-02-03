function doChore(name, time, successMessage, failMessage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const staysAwake = Math.random() > 0.3;
            if (staysAwake) {
                console.log(`${name} ${successMessage}`);
                resolve();
            } else {
                reject(`${name} ${failMessage}`);
            }
        }, time);
    });
}

function mowYard(name) {
    return doChore(name, 2000, "mowed the yard.", "fell asleep after mowing the yard.");
}

function weedEat(name) {
    return doChore(name, 1500, "finished using the weed eater.", "fell asleep after mowing the yard.");
}

function trimHedges(name) {
    return doChore(name, 1000, "finished trimming the hedges.", "fell asleep after weed eating the yard.");
}

function collectWood(name) {
    return doChore(name, 2500, "finished collecting wood.", "fell asleep after trimming the hedges.");
}

function waterGarden(name) {
    return doChore(name, 500, "finished watering the garden.", "fell asleep after collecting wood.");
}

async function doSummerChores(name) {
    try {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        await collectWood(name);
        await waterGarden(name);

        console.log(`${name} finished all their chores!`);
    } catch (error) {
        console.log(error);
    }
}

doSummerChores("Mark");