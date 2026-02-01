function doChore(time, successMessage, failMessage, canFallAsleep = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (!canFallAsleep) {
                console.log(successMessage);
                resolve();
                return;
            }

            const fellAsleep = Math.random() < 0.3;
            if (fellAsleep) {
                reject(failMessage);
            } else {
                console.log(successMessage);
                resolve();
            }
        }, time);
    });
}

function mowYard(name) {
    return doChore(
        2000,
        `${name} mowed the yard.`,
        "",
        false
    );
}

function weedEat(name) {
    return doChore(
        1500,
        `${name} finished using the weed eater.`,
        `${name} fell asleep after mowing the yard.`
    );
}

function trimHedges(name) {
    return doChore(
        1000,
        `${name} finished trimming the hedges.`,
        `${name} fell asleep after weed eating the yard.`
    );
}

function collectWood(name) {
    return doChore(
        2500,
        `${name} finished collecting wood.`,
        `${name} fell asleep after trimming the hedges.`
    );
}

function waterGarden(name) {
    return doChore(
        500,
        `${name} finished watering the garden.`,
        `${name} fell asleep after collecting wood.`
    );
}

function doSummerChores(name) {
    if (typeof name !== "string") {
        console.error("Name must be a string literal.");
        return;
    }

    mowYard(name)
        .then(() => weedEat(name))
        .then(() => trimHedges(name))
        .then(() => collectWood(name))
        .then(() => waterGarden(name))
        .then(() => {
            console.log(`${name} finished all their chores!`);
        })
        .catch((error) => {
            console.log(error);
        });
}

doSummerChores("Mark");