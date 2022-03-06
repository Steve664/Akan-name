function akanName() {
    let yearOf = Number(document.getElementById("yearOf").value);
    //let yy = Number(yearOf.slice(2,));
    //let cc = Number(yearOf.slice(0, 2));
    let genders = document.getElementsByName("gender");
    let dayOf = Number(document.getElementById("dayOfBirth").value);
    let monthOf = Number(document.getElementById("monthOf").value);
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    //This is to stop the form from reloading the page on submit.
    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

   // let day = Math.floor((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (monthOf + 1) / 10)) + dayOf) % 7);
    // function to get gender
    function getGender() {
        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
//formula to calculate day of the week
    function dayofweek(){
    
    let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    yearOf -= (monthOf < 3) ? 1 : 0;
  return (yearOf + yearOf/4 - yearOf/100 + yearOf/400 + t[monthOf-1] + dayOf)%7; 

}
    


//for debugging
    console.log(dayOf+" "+monthOf+" "+yearOf+"  "+ day);
    let genderValue = getGender();


    function validMonth() {
        if (monthOf < 1 || monthOf > 12) {
            return false;
        }
        else {
            return true;
        }
    }

    let leapYear = checkLeapYear();

    function validDay() {
        if (dayOf < 0 || dayOf > 31) {
            return false;
        }
        //to handle for leap year
        else if (leapYear && monthOf == 2 && dayOf > 29) {
            
            return false;
        }
        else if (monthOf == 2 && dayOf > 28 && !(leapYear)) {
            return false;
        }
        else {
            return true;
        }
    }
    // check if leap year
    function checkLeapYear() {

        //three conditions to find out the leap year
        if ((0 == yearOf % 4) && (0 != yearOf % 100) || (0 == yearOf % 400)) {
            return true;
        } else {
           return false;
        }
    }

    let dayVal = validDay();
    let monVal = validMonth();
    
    if (leapYear){
     var day = Math.round(dayofweek()-1);
     }
     else{
       var day = Math.round(dayofweek());  
     }

    if (genderValue == "male" && monVal && dayVal) {
        document.getElementById('result').innerHTML = "Your birthday was on a " + weekDay[day] + " , so your Akan name is " + maleNames[day];
        document.getElementById('output').innerHTML = "Your Akan name is: ";
        document.querySelector('h1').innerHTML = "Hi" + " " + maleNames[day]+"!!";
        return false;
    } else if (genderValue == "female" && monVal && dayVal) {
        document.getElementById('result').innerHTML = "Your birthday was on a " + weekDay[day] + " , your Akan name is " + femaleNames[day];
        document.getElementById('output').innerHTML = "Your Akan Name is: ";

        document.querySelector('h1').innerHTML = "Hi" + " "+ femaleNames[day]+"!!";
        return false;
    } else {
        document.getElementById('result').innerHTML = "You entered an invalid day or month. Press reset and try again";
    }



}

