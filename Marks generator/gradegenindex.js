function calculate(){//SUBJECT STUDENT'S MARKS
    let a=parseInt(document.getElementById('bookOne').value);
    let b=parseInt(document.getElementById('bookTwo').value);
    let c=parseInt(document.getElementById('bookThree').value);
    let d=parseInt(document.getElementById('bookFour').value);
    let e=parseInt(document.getElementById('bookFive').value);
    let f=parseInt(document.getElementById('bookSix').value);
    let g=parseInt(document.getElementById('bookSeven').value);
    if (a>100 || b>100 || c>100 || d>100 || e>100 || f>100 || g>100){
        alert("INVALID INPUT!");//SUBJECT MARKS LIMIT
    }
    else
    {
        let obtain = a+b+c+d+e+f+g;//SCORE TOTAL
        document.getElementById("scoreTotal").innerHTML=obtain;
        let per= obtain/700*100;
        document.getElementById("per").innerHTML=per;
        if (per>49) {//PASSMARK
         document.getElementById("remarks").innerHTML="<span style='color:Green'>PASS!</span>";
        }
        else
        {
            document.getElementById("remarks").innerHTML="<span style='color:Red'>FAIL!</span>";
        }
        //GRADE EVALUATOR THAT ASSIGHNS THE GRADE AS PER THE GRADE SHEET, DEPENDING ON THE STUDENTS PERCENTAGE
        if (per>=79) {
            document.getElementById("grade").textContent="A";
        }
        else if (per>=60) {
            document.getElementById("grade").textContent="B";
        }
        else if (per>=49) {
            document.getElementById("grade").textContent="C";
        }
        else if (per>=40) {
            document.getElementById("grade").textContent="D"
        }
        else
        {
            document.getElementById("grade").textContent="E"
        }
    }
}
