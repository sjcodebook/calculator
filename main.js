var str = "";
var finalResult = 0;
function calculate(val) {
  if (!validate(str, val)) {
    return false;
  }
  var elem = document.getElementById("display");
  if (val == "=") {
    finalResult = result(str);
    str = finalResult;
    elem.innerHTML = finalResult;
  } else if (val == "CLR") {
    str = "";
    elem.innerHTML = str;
  } else if (val == "DEL") {
    str = str.substring(0, str.length - 1);
    elem.innerHTML = str;
  } else {
    str += val;
    elem.innerHTML = str;
  }
}
function result(eq) {
  return eval(eq);
}
function validate(str, val) {
  let prevVal = str[str.length - 1];
  let currentVal = val;
  if (
    ["=", "-", "*", "/", "+"].includes(prevVal) &&
    ["=", "-", "*", "/", "+"].includes(currentVal)
  ) {
    return false;
  }
  return true;
}
