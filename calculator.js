var val1 = false;
var val2 = false;
var operator = false;

var evaluate = function(val1, operator, val2) {

  switch (operator) {
    case "+":
      var result = Number(val1 + val2);
      document.getElementById("screen").value=result;
      break;

    case "-":
      var result = Number(val1 - val2);
      document.getElementById("screen").value=result;
      break;

    case "/":
      var result = Number(val1/val2);
      document.getElementById("screen").value=result;
      break;

    case "*":
      var result = val1*val2;
      document.getElementById("screen").value=result;
      break;
  }
};

function calc(event) {
  var val = event.target.value;
  
// isNumber function determines if event is a #. 
  var isNumber = function(event) { 
    return !isNaN(Number(event)); 
  };

// isOperator function determines if event is an operator. 
  var isOperator = function(val) {
    var math_symbols = ['+', '-', '/', '*']; 
    for (var i=0; i < math_symbols.length; i++) { 
      if (val === math_symbols[i]) {
        return true;
      }
    } 
    return false;
  };

/* 
- if val is a # and val is false, val1 = val 
- if val is a # and val is true and operator is false, val1 + val 
- if val is an operator and operator is val1 is not false 
-  if val is a number and val1 is not false and operator is not false, val2 = val
- if val is a number and val1 is not false and operator is not false and val2 is not false
*/ 

  if (isNumber(val)===true && val1===false) {
    val1= val;
    document.getElementById("screen").value=val1;
  } else if (isNumber(val)===true && val1!==false && operator===false) {
    val1 = Number(val1 + val);
    document.getElementById("screen").value=val1;
  } else if (isOperator(val)===true && val1!==false) {
    operator=val;
  } else if (isNumber(val)===true && val1!==false && operator!==false && val2===false) {
    val2=Number(val);
    document.getElementById("screen").value=val2;
  } else if (isNumber(val)===true && val1!==false && val2!==false && operator!==false) {
    val2 = Number(val2 + val);
    document.getElementById("screen").value=val2;
  } else if (val==="=" && val1!==false && val2!==false && operator!==false) {
    evaluate(val1, operator, val2);
  }

}
// clear value from screen
function clr(event) { 
  val1=false;
  val2=false;
  operator=false;
  document.getElementById("screen").value="0";
};


document.getElementById('button_1').addEventListener("click", calc );
document.getElementById('button_2').addEventListener("click", calc );
document.getElementById('button_3').addEventListener("click", calc );
document.getElementById('button_4').addEventListener("click", calc );
document.getElementById('button_5').addEventListener("click", calc );
document.getElementById('button_6').addEventListener("click", calc );
document.getElementById('button_7').addEventListener("click", calc );
document.getElementById('button_8').addEventListener("click", calc );
document.getElementById('button_9').addEventListener("click", calc );
document.getElementById('button_0').addEventListener("click", calc );


document.getElementById('button_fwdslash').addEventListener("click", calc );
document.getElementById('button_asterisk').addEventListener("click", calc );
document.getElementById('button_minus').addEventListener("click", calc );
document.getElementById('button_plus').addEventListener("click", calc );
document.getElementById('button_equal').addEventListener("click", calc );
document.getElementById('button_period').addEventListener("click", calc );

document.getElementById('button_clear').addEventListener("click", clr );

