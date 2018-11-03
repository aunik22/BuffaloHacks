var inputVals = [];
function submitted(){
	var inputs = document.getElementsByClassName("w3-input");

	for(i = 0; i < inputs.length; i++){
		inputVals.push(inputs[i].value);
	}
	for(i = 0; i < inputVals.length; i++){
		document.write(inputVals[i])
	}

}


