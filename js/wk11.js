function validAll() {
  return func1() && func2() && func3(); // return boolean
}

function getPhone() {
  // alert("abc");
  // (1)
  // var phoneDOM=document.getElementById("phone");
  var phoneDOM = document.querySelector("#phone");
  // (3) get field element: document.formName.fieldName
  var phoneDOM = document.validForm.phone;
  var phoneTxt = phoneDOM.value; // it's a string, user's input
  //   alert(phoneTxt);

  // if the user's input is 10 digits,
  // you alert("Yes");
  // otherwise, alert("no");
  if (phoneTxt.length == 10) {
    if (isNaN(phoneTxt)) {
      // alert("Number Only");
    } else {
      alert("Yes");
    }
  } else {
    alert("No");
  }
}

function validPhone() {
  // alert("abc");
  // (1)
  // var phoneDOM=document.getElementById("phone");
  var phoneDOM = document.querySelector("#phone");
  // (3) get field element: document.formName.fieldName
  var phoneDOM = document.validForm.phone;
  var phoneTxt = phoneDOM.value; // it's a string, user's input
  alert(phoneTxt);

  // if the user's input is 10 digits,
  // you alert("Yes");
  // otherwise, alert("no");
  document.getElementById("err_phone").style.color = "red";
  if (phoneTxt.length == 10) {
    if (isNaN(phoneTxt)) {
      // alert("Number Only");
      document.getElementById("err_phone").innerHTML = "Number Only";
      phoneDOM.style.border = "solid red 1px";
      phoneDOM.style.color = "red"
      phoneDOM.focus();
      phoneDOM.select();
      return false;
    } else {
      alert("Yes");
      document.getElementById("err_phone").innerHTML = " ";
      return true;
    }
  } else {
    document.getElementById("err_phone").innerHTML = "10 digits only";
    phoneDOM.focus();
    return false;
  }
}
