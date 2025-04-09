    // calculate js event
    function calculate(){
        var weight = document.getElementById("weight").value;
        var height = document.getElementById("height").value;

        // If there are no values put
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            window.alert("Please enter valid numbers for height and weight.");
            return;
        }

        // BMI Formula: weight / height^2
        let bmi = weight / Math.pow(height, 2);
        let bmiround = Math.round(bmi* 10) / 10;
    
        // BMI Index
        if (bmiround < 18.5) {
            window.alert("Your BMI Index is " + bmiround + ", meaning you are on the underweight scale.");
        } 
        else if (bmiround >= 18.5 && bmiround <= 24.9) {
            window.alert("Your BMI Index is " + bmiround + ", meaning you are on the normal weight scale.");
        } 
        else if (bmiround >= 25 && bmiround <= 29.9) {
            window.alert("Your BMI Index is " + bmiround + ", meaning you are on the overweight scale.");
        } 
        else if (bmiround >= 30) {
            window.alert("Your BMI Index is " + bmiround + ", meaning you are on the obese scale.");
        }
    }

    // refresh js event
    function refresh(){
        window.location.reload();
    }
