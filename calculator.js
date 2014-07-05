var val1 = false;
var val2 = false;
var operator = false;

var evaluate = function(val1, operator, val2) {

  switch (operator) {
    case "+":
      var result = val1 + val2;
      document.getElementById("screen").value=result;
      break;

    case "-":
      var result = val1 - val2;
      document.getElementById("screen").value=result;
      break;

    case "/":
      var result = val1/val2;
      document.getElementById("screen").value=result;
      break;

    case "*":
      var result = val1*val2;
      document.getElementById("screen").value=result;
      break;
    default:
      console.log("No matches found!!");
      break;
  }
};

function calc(event) {
  var val = event.target.value;
  document.getElementById("screen").value=val;


// isNumber function determines if event is a #. 
  var isNumber = function(event) { 
    return !isNaN(Number(event)); 
  };

// isOperator function determines if event is an operator. 
  function isOperator(val) {
    var math_symbols = ['+', '-', '/', '*']; 
    for (var i=0; i < math_symbols.length; i++) { 
      if (val === math_symbols[i]) {
        return true;
      }
    } 
    return false;
  };


  if (isNumber(val)===true && val1===false) {
    val1= val;
  } else if (isOperator(val)===true && val1!==false) {
    operator=val;
  } else if (isNumber(val)===true && val1!==false && operator!==false) {
    val2=val;
  } else if (val==="=" && val1!==false && val2!==false && operator!==false) {
    evaluate(val1, operator, val2);
  }
};

// clear value from screen
function clr(event) { 
  val1=false;
  val2=false;
  operator=false;
  document.getElementById("screen").value="";
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

