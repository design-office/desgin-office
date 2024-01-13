function numeric(ch) {
  var i = 0;
  var ok = true;
  while (ok == true && i < ch.length) {
    if (ch.charAt(i) < "0" || ch.charAt(i) > "9") ok = false;
    i++;
  }
  return ok;
}
function alpha(ch) {
  var i = 0;
  var ok = true;
  while (ok == true && i < ch.length) {
    if (ch.charAt(i) < "A" || ch.charAt(i) > "Z") ok = false;
    i++;
  }
  return ok;
}
function verif() {
  var cin = document.getElementById("cin").value;
  var nom = document.getElementById("name").value.toUpperCase();
  var gmail = document.getElementById("gmail").value.toUpperCase();

  var message= document.getElementById("message").value.toUpperCase();
  if (
    cin.length != 8 ||
    numeric(cin) == false ||
    (cin.charAt(0) != "0" && cin.charAt(0) != "1")
  ) {
    alert("Verify your number CIN please");
    return false;
  }
  if (nom.length < 3 || nom.length > 30 || alpha(nom) == false) {
    alert("Verify your name please");
    return false;
  }
  if (gmail.length < 7 || gmail.length > 30 || alpha(gmail) == false) {
    alert("Verify your gmail please");
    return false;

  }
  if (message =="") {
    alert("you should enter your message");
    return false;
  }
  else{
    alert("your message just send , thank you for your attention , we will text you in your gmail , rest in touch :)")
  }

}
function registrer(){

  var nom = document.getElementById("name").value.toUpperCase();
  var pre = document.getElementById("lastname").value.toUpperCase();
  var pass = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;

  if (nom.length < 3 || nom.length > 30 || alpha(nom) == false) {
    alert("enter your name please!");
    return false;
  }
  if (pre.length < 3 || pre.length > 30 || alpha(pre) == false) {
    alert("enter your last name please!");
    return false;
  }
  if (pass.length == 0 || pass.length <= 5) {
    alert(" password invalid");
    return false;
  }
  if (phone.length == 0 || phone.length !== 8) {
    alert("phone number invalid");
    return false;
  }
  if (
    document.getElementById("pro").checked == false &&
    document.getElementById("ind").checked == false
    ) {
    alert("you should pick your type");
    return false;
}
  if (
    document.getElementById("masculin").checked == false &&
    document.getElementById("feminin").checked == false
  ) {
    alert("you should tick your gender");
    return false;
  }
else {
    alert("your message sent succesfully , we hope you can work with us :)");
  }
}