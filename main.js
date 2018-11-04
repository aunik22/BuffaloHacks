var inputVals = [];

function submitted() {
	var inputs = document.getElementsByClassName("w3-input");

	for(i = 0; i < inputs.length; i++){

        if (inputs[i].getAttribute("name") == "sex") {
            if (inputs[i].value == "Male") {
                inputVals.push(1);
            } else {
                inputVals.push(0);
            }
        } else if (inputs[i].getAttribute("name") == "smoker") {
            if (inputs[i].value == "Yes") {
                inputVals.push(1);
            } else {
                inputVals.push(0);
            }
        } else if (inputs[i].getAttribute("name") == "region") {

            switch (inputs[i].value) {
                case "Northeast":
                    inputVals.push(0);
                    break;
                case "Northwest":
                    inputVals.push(1);
                    break;
                case "Southeast":
                    inputVals.push(2);
                    break;
                case "Southwest":
                    inputVals.push(3);
                    break;
            }
        } else {
            inputVals.push(inputs[i].value);
        }

        
    }


    //function findBMI() {

    //}

    function getNorm(df, mean, max, min) {
        return (df - mean) / (max - min);
    }
}
