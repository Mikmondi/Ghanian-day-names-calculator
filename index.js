function getNameFromDate(dateBorn,gender){
    var dateOfBirth = new Date(dateString);
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
        "Error Check details entered!";
    }
}

function getDayBorn(){
    var dateString = prompt("Please enter your date of birth:mm/dd/yyyy");
    var gender = prompt("What is your Gender, female or male?");
    getNameFromDate(dateBorn,gender);
}