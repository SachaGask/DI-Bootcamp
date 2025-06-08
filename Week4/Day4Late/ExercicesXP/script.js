
function choixCafe(update) {
    setTimeout(() => {
        console.log("Choisissez votre café !");
        update();
    }, 2000)
}

function preparationCafe(update) {
    setTimeout(() => {
        console.log("Préparation du café en cours...");
        update();
    }, 3000)
}

function serviceCafe() {
    setTimeout(() => {
        console.log("Votre café est prêt !");
    }, 3000);
}

choixCafe(() => {
    preparationCafe(() => {
        serviceCafe();
    });
})

