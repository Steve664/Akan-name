function akanName() {
    var yearOf = document.getElementById("yearOf").value;
    var yy = Number(yearOf.slice(2,));
    var cc = Number(yearOf.slice(0, 2));

    var dayOf = Number(document.getElementById("dayOfBirth").value);
    var monthOf = Number(document.getElementById("monthOf").value);

    function validMonth() {
        if (monthOf < 1 || monthOf > 12) {
            return false;
        }
        else {
            return true;
        }

        function validDay() {
            if (dayOf < 0 || dayOf > 31) { 
                return false; }
            else if (monthOf == 2 && dayOf > 29) {
                return false;
            }
        
        }



    }


}

