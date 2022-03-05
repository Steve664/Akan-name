function akanName() {
    let yearOf = document.getElementById("yearOf").value;
    let yy = Number(yearOf.slice(2,));
    let cc = Number(yearOf.slice(0, 2));
    let genders = document.getElementsByName("gender");
    let dayOf = Number(document.getElementById("dayOfBirth").value);
    let monthOf = Number(document.getElementById("monthOf").value);
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    // function to get gender
    function getGender() {
        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
    let myGenderValue = getGender();
    console.log(myGenderValue);

    function validMonth() {
        if (monthOf < 1 || monthOf > 12) {
            return false;
        }
        else {
            return true;
        }

        function validDay() {
            if (dayOf < 0 || dayOf > 31) {
                return false;
            }
            //to handle for leap year
            else if (yearOf % 4 == 0 && monthOf == 2 && dayOf > 29) {
                return false;
            }
            else if (monthOf == 2 && dayOf > 28) {
                return false;
            }
            else {
                return true;
            }




        }



    }



}

