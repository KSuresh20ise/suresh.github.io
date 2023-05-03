
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "suresh@gmail.com" && password == "suresh123"){
        alert ("Login successfully");
        window.open("http://127.0.0.1:5500/homepage.html");
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
}
}