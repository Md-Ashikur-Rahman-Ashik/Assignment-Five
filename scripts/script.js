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
        

        function reduceSeat(){
            let seatAvailable = document.getElementById("availableSeat");
            let seatText = seatAvailable.innerText;
            let converted = parseInt(seatText);
            converted--;

            // Adding restriction to select seat above 4
            if(converted < 4){
                selectedButton.style.backgroundColor = "#F7F8F8";
                return "Error";
            }

            seatAvailable.innerText = converted;
        }
        reduceSeat();

        function addSeat(){
            let countSeat = document.getElementById("seatCount");
            let seatText = countSeat.innerText;
            let converted = parseInt(seatText);
            converted++;

            // Adding restriction to select seat above 4
            if(converted > 4){
                return "Error";
            }

            countSeat.innerText = converted;
        }
        addSeat();
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

function price(){
    let element = document.getElementById()
}