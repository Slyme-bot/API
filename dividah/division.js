var number1_element = document.getElementById('num1');
var number2_element = document.getElementById('num2');

function divideThem(){

  var number1 = number1_element.value;
  var number2 = number2_element.value;

  if( number1 == ""){
    document.getElementById('num1Error').innerHTML = "Number one is empty";
    document.getElementById('num1Error').style.display = 'block';
    number1_element.focus();

  }else if( number2 == ""){


    document.getElementById('num2Error').innerHTML = "Number two is empty";
     document.getElementById('num2Error').style.display = 'block';
    number2_element.focus();


  }else{
    if( number2 != '0' ){
      result = number1 / number2;
    }else{
      document.getElementById('num2Error').innerHTML = "Error! Division by zero not allowed";

      document.getElementById('num2Error').style.display = 'block';
      number2_element.focus();
      number2_element.value = "";
      number2_element.focus();

    }
    var result_span = document.getElementById('results');
    result_span.innerHTML = result;
    }
      }

var divide_them = document.getElementById('divide-them');
number1_element.addEventListener('focusout',(event)=>{
  if(number1_element.value != ""){
    document.getElementById('num1Error').innerHTML = '';
    document.getElementById('num1Error').style.display = 'none';
  }
});
number2_element.addEventListener('focusout',(event)=>{
  
  if(number2_element.value != ""){
    document.getElementById('num2Error').innerHTML = '';
    document.getElementById('num2Error').style.display = 'none';
  }
});
