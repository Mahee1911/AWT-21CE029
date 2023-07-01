
    function validation()
    {
        var opr1 = parseFloat(document.getElementById("num1").value);
      var opr2 = parseFloat(document.getElementById("num2").value);

      document.getElementById("num1error").innerHTML = "";
      document.getElementById("num2error").innerHTML = "";
 
    
      if (isNaN(opr1) || opr1 === "") {
        document.getElementById("num1error").style.color="red";
        document.getElementById("num1error").innerHTML = "* Please enter valid number";
        return;
      } 

    
      if(isNaN(opr2) || opr2 === ""){
        document.getElementById("num2error").style.color="red";
        document.getElementById("num2error").innerHTML = "* Please enter valid number";
        return;
      }
      


    }
    function sum() {
        var opr1 = parseFloat(document.getElementById("num1").value);
      var opr2 = parseFloat(document.getElementById("num2").value);
    
     validation();
      
      var result = opr1 + opr2;
        document.getElementById("msg").innerHTML = "Result: " + result;
    }

    function sub() {
        var opr1 = parseFloat(document.getElementById("num1").value);
      var opr2 = parseFloat(document.getElementById("num2").value);
      validation();

        var result = opr1 - opr2;
        document.getElementById("msg").innerHTML = "Result: " + result;
      
    }

function mul() {
    var opr1 = parseFloat(document.getElementById("num1").value);
      var opr2 = parseFloat(document.getElementById("num2").value);
      validation();
    var result = opr1 * opr2;
    document.getElementById("msg").innerHTML = "Result: " + result;
  
}

function div() {
    var opr1 = parseFloat(document.getElementById("num1").value);
      var opr2 = parseFloat(document.getElementById("num2").value);
      validation();
  
    var result = opr1 / opr2;
    document.getElementById("msg").innerHTML = "Result: " + result;
  }

