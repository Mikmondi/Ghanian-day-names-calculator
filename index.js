function getNameFromDate(dateBorn,gender){
    var dateOfBirth = new Date(dateBorn);
    var dayOfTheWeek = dateOfBirth.getDay();
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    if(gender == "male"){
        document.getElementById(displayName).innerHTML = "Your Akan Name is " + maleNames[dayOfTheWeek];
    }
    else if(gender == "female"){
        document.getElementById(displayName).innerHTML = "Your Akan Name is " + femaleName[dayOfTheWeek];
    }
    else{
        document.getElementById(displayName).innerHTML = "Error check that you've entered your details correctly";
    }
}

function getDayBorn(){
    var dateBorn = prompt("Please enter your date of birth:mm/dd/yy");
    var gender = prompt("What is your Gender, female or male?");
    getNameFromDate(dateBorn,gender);
}