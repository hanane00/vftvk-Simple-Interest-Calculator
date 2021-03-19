function handleChange() {
    let rate = document.getElementById("rate").value;    
    document.getElementById("interest").innerHTML = rate + "%";
}

function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;    
    
    let date = new Date().getFullYear();
    let newDate = date + parseInt(years);
    
    if (principal <= 0 ) {
        alert('Enter a positive number')
    } else {

    document.getElementById("result").innerHTML = 
        "If you deposit" + ' ' + principal + "," + "</br>" 
        + "at an interest rate of" + ' ' + rate + "%." + "</br>"
        + "You will receive an amount of" + ' ' + interest + "," + "</br>"
        + "in the year" + ' ' + newDate
    }
}
