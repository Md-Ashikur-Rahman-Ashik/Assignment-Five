// Connecting "Buy Ticket" button with ticket section
function scrollDown(){
    // const source = document.getElementById("buyTicket");
    // source.addEventListener("click", function(){

    // })
    document.addEventListener("DOMContentLoaded", function(){
        const source = document.getElementById("buyTicket");
        source.addEventListener("click", function(){
            const target = document.getElementById("ticketSection");
            target.scrollIntoView({behavior: "smooth"});
        })
    })
}

scrollDown();

// Creating a function to change color onClick to a seat
// This function will also change the available seats
function changeColor(elementId){
    const selectedButton = document.getElementById(elementId);
    selectedButton.addEventListener("click", function(){
        selectedButton.style.backgroundColor = "#1DD100";

        const seatAvailable = document.getElementById("availableSeat");
        const seatText = seatAvailable.innerText;
    })
}

changeColor("A1");
changeColor("A2");
changeColor("A3");
changeColor("A4");
changeColor("B1");
changeColor("B2");
changeColor("B3");
changeColor("B4");