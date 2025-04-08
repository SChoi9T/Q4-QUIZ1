    // calculate js event
    function calculate(){
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;
        
        let bmi = weight / Math.pow(height, 2);
        let bmiround = Math.round(bmi);

        // Underweight
            if (bmiround < 18.5){
                window.alert('Your BMI Index is '+ bmiround +', meaning you are on the underweight scale.');
            }
            else {
                window.location.reload();
            }
        
        // Normal weight
            if (bmiround >= 18.5 && bmiround <= 24.9){
                window.alert('Your BMI Index is '+ bmiround +', meaning you are on the normal weight scale.');
            }
            else {
                window.location.reload();
            }

        // Overweight
            if (bmiround >= 25 && bmiround <= 29.9){
                window.alert('Your BMI Index is '+ bmiround +', meaning you are on the overweight scale.');
            }
            else {
                window.location.reload();
            }

        // Obese
            if (bmiround >= 30){
                window.alert('Your BMI Index is '+ bmiround +', meaning you are on the obese scale.');
            }
            else {
                window.location.reload();
            }
    }

    // refresh js event
    function refresh(){
        window.location.reload();
    }
