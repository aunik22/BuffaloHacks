var inputVals = [];
var mean = [
  39.207025,
  0.505232,
  30.66339,
  1.094918,
  0.204783,
  1.515695,
  13270.422265
];
var maximum = [64.0, 1.0, 53.13, 5.0, 1.0, 3.0, 63770.42801];
var minimum = [18.0, 0.0, 15.96, 0.0, 0.0, 0.0, 1121.8739];

function submitted() {
  var inputs = document.getElementsByClassName("w3-input");

  for (i = 0; i < inputs.length; i++) {
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

  var orig = [inputVals[2], inputVals[3], calculateBmi(inputVals[4], inputVals[5]), inputVals[6], inputVals[7], inputVals[8]];

  var norms = [];

  for (i = 0; i < 6; i++){
      norms.push(encode(orig[i], mean[i], max[i], min[i]));
  }

  result = 0.00113973 + norms[0] * 0.18647177 + norms[1] * (-0.00100898) + norms[2] * 0.2049251 + norms[3] * 0.03886722 + norms[4] * 0.37976515 + norms[5] * (-0.01930108);

  window.location.href = "results.html";
  var div = document.getElementById("results-Box");
  var h2 = document.createElement("H2");
  h2.appendChild(document.createTextNode("$ " + str(result)));
  div.appendChild(h2);

  function calculateBmi(height, weight) {
      var newHeight = height / 39.37;
      var newWeight = weight / 2.205;
      var bmi = weight / (height * height);
      return bmi;
  }


  function encode(value, mean, max, min) {
       return (value - mean) / (max - min);
  }
  function encodeSex(sex) {
      var newSex = (sex - mean[1]) / (maximum[1] - minimum[1]);
      return newSex;
  }

  function encodeBmi(bmi) {
      var newBmi = (bmi - mean[2]) / (maximum[2] - minimum[2]);
      return newBmi;
  }

  function encodeChildren(children) {
      var newChildren = (children - mean[3]) / (maximum[3] - minimum[3]);
      return newChildren;
  }

  function encodeSmoker(smoker) {
      var newSmoker = (smoker - mean[4]) / (maximum[4] - minimum[4]);
      return newSmoker;
  }

  function encodeRegion(region) {
      var newRegion = (region - mean[5]) / (maximum[5] - minimum[5]);
      return newRegion;
  }

  function decodeCharge(charge) {
      var finalCharge = charge * (maximum[6] - minimum[6]) + mean[6];
      return finalCharge;
  }


}
