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