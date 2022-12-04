// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else if (!isNaN(Number(testInput))) {
        return "Is a Number";
    } 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const launchStatus = document.getElementById('launchStatus');
    let redFlag = false; 

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert('Please complete all sections of this form before submitting.')
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert('Please submit a valid pilot names e.g. "Buzz Aldrin"');
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert('Please enter a number for Fuel Level and/or Cargo Mass');
    } else {
        list.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (fuelLevel < 9999) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            redFlag = true;
        }
        if (fuelLevel > 9999) {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.innerHTML = "Shuttle Ready for launch";
            launchStatus.style.color = 'rgb(65, 159, 106)';
        }
        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            redFlag = true;
        }
        if (cargoLevel <= 10000) {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle Ready for launch";
            launchStatus.style.color = 'rgb(65, 159, 106)';
        }
        if (redFlag) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = 'rgb(199, 37, 78)';
        }
    }


}

async function myFetch() {
    let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    let planetsReturned = await response.json();
    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
