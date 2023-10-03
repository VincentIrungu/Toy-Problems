function checkSpeed() {
    // INPUT VALUE
    let a=parseInt(document.getElementById('speedInput1').value);
    //SETS THE VALUES THAT THE USER CAN TYPE IN.
    if (a<=1) {
        alert("Please try again")
    }
    else
    {
        let obtain= a
        document.getElementById("velocity").innerHTML=obtain;
        let points=Math.floor((obtain - 70) / 5)// DECREMENT POINT GENERATOR
        document.getElementById("Points").innerHTML=points;
        if (points>12) { // DECREMENT POINT LIMIT
            document.getElementById("Remarks").innerHTML="<span style='color:Red'>License suspended!</span>";
        } else {
            document.getElementById("Remarks").innerHTML="<span style='color:Green'>OK!</span>";
        }
        if (obtain>70) {// SPEED LIMIT
            document.getElementById("speedCheck").innerHTML="<span style='color:Red'>Slow down!</span>";
        } else {
            document.getElementById("speedCheck").innerHTML="<span style='color:Green'>OK!</span>";
        }
    }