let homeCount = 0;
let guestCount = 0;

let homeP = document.getElementById("homeP");
let guestP = document.getElementById("guestP");
let rest = document.getElementById("rest")

function plusOne(team) {
    if (team === "home") {
        homeCount += 1;
        homeP.textContent = homeCount;
    } else if (team === "guest") {
        guestCount += 1;
        guestP.textContent = guestCount;
    }
}

function plusTwo(team) {
    if (team === "home") {
        homeCount += 2;
        homeP.textContent = homeCount;
    } else if (team === "guest") {
        guestCount += 2;
        guestP.textContent = guestCount;
    }
}

function plusThree(team) {
    if (team === "home") {
        homeCount += 3;
        homeP.textContent = homeCount;
    } else if (team === "guest") {
        guestCount += 3;
        guestP.textContent = guestCount;
    }
}

function reset(){
    homeCount = 0;
    homeP.textContent = homeCount;
    
    let guestCount = 0;
    guestP.textContent = guestCount;
    
}
