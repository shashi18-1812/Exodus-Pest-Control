console.log("Exodus Pest Control Website Loaded");
const pests = [

    "Bed Bugs",
    "Cockroaches",
    "Rodents",
    "Mosquitoes",
    "Termites"

];

let index = 0;

const changingText = document.getElementById("changing-text");

setInterval(() => {

    index++;

    if(index >= pests.length){

        index = 0;

    }

    changingText.textContent = pests[index];

},1000);
