// Write your JavaScript code here!


window.addEventListener("load", function() {

    const form = document.querySelector('form');
    const list = document.getElementById('faultyItems');
    
    //These define variables to hold the user input on the form. They do not equal the submitted value, those are down below
    const pilotInput = document.getElementById('pilot-input');
    const copilotInput = document.getElementById('copilot-input');
    const fuelLevelInput = document.getElementById('fuelLevel-input');
    const cargoMassInput = document.getElementById('cargoMass-input');
    


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetSelection = pickPlanet(listedPlanets);
        console.log(planetSelection);
    })

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //These variables capture the input value when the form is submitted
        let pilot = pilotInput.value;
        let copilot = copilotInput.value;
        let fuelLevel = fuelLevelInput.value;
        let cargoMass = cargoMassInput.value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });

});

