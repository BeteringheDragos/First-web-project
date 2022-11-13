const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const genderM = document.getElementById("male");
const genderF = document.getElementById("female");
const message = document.getElementById("textarea");

const hidden = document.getElementById("validated");
hidden.style.visibility = "hidden";

function boxVerify() {
  if (fname.value === "") {
    console.log("First neame is empty and you are not an empty person");
    fname.style.border = "solid red 1px";
  } else {
    console.log("First name is " + fname.value);
    fname.style.border = "solid black 1px";
  }

  if (lname.value === "") {
    console.log("Last neame is empty and you are not an empty person");
    lname.style.border = "solid red 1px";
  } else {
    console.log("Last name is " + lname.value);
    lname.style.border = "solid black 1px";
  }

  if (genderM.checked === true) {
    console.log("Your gender is " + genderM.value);
    document.getElementById("gen").style.color = "black";
  } else if (genderF.checked === true) {
    console.log("Your gender is " + genderF.value);
    document.getElementById("gen").style.color = "black";
  } else {
    console.log("Gender is not tagged");
    document.getElementById("gen").style.color = "red"; // #GGez
  }

  if (fname.value != "" && lname.value != "") {
    hidden.style.visibility = "visible";
  }
}

function main() {
  boxVerify();

  console.log("Your message is: " + message.value);

  console.log(
    "------------------------------------------------------------------------"
  );
}
