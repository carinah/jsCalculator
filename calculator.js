// displays numbers on screen and performs math operations 
function calc(val) {
  document.getElementById("screen").value=val;

// create variables that store vals. 
  var val1 = false;
  var val2 = false;
  var operator = false;
  var math_symbols = ['+', '-', '/', '*']; 
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// evaluate if inputs are numbers or operators

  function doMath(val) {
      for (var count=0; count < numbers.length; count++) {
        if (val == numbers[count]) {
          val1 = val;
        } else { 
          count++; 
        }
        val1
      }

      for (var i=0; i < math_symbols.length; i++) { 
        if (val == math_symbols[i] && val1!=false) {
          operator = math_symbols[i];
        } else {
          i++
        }
        return operator;
      }

      for (var count=0; count < numbers.length; count++) {
        if (val1!=false && operator!=false && val == numbers[count]) {
          val2 = parseInt(val);
        } else {
          count++;
        }
        return val2;
        }
  }

// Evaluate operators to do math. 

switch (operator) {
  case operator === "+":
    var result = val1 + val2;
    document.getElementById("screen").value=result;
    break;

  case operator === "-":
    var result = val1 - val2;
    document.getElementById("screen").value=result;
    break;

    case operator === "/":
    var result = val1/val2;
    document.getElementById("screen").value=result;
    break;

    case operator === "*":
    var result = val1*val2;
    document.getElementById("screen").value=result;
    break;

    }
};


function e() {
  document.getElementById("screen").value="";  
};


// clear value from screen
function clr(val) { 
  document.getElementById("screen").value=val;
};

