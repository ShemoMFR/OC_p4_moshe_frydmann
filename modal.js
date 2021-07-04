function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submit = document.getElementById("form-container");
const inputs = document.querySelectorAll(".text-control");
const errorsMessages = document.querySelectorAll(".error-msg")
const locationCheck = document.querySelectorAll(".location-check");
const checkBox1 = document.getElementById('checkbox1');
const arrayErrorsMessages = [
  "Vous devez entrer au moins 2 caractères", 
  "Vous devez entrer au moins 2 caractères",
  "Veuillez entrer une adresse mail valide",
  "Veuillez entrer votre date de naissance",
  "Veuillez entrer un chiffre",
  "Veuillez Indiquer la ville",
  "Veuillez accepter les conditions générales"
];

function handleInputchange(e, i) {

  let lastChild = formData[i].lastChild;

  if (e.target.value.length > 1 && lastChild.className == "error-msg") {
    lastChild.remove();
  }
}

/* function checkboxChecked() {

}; */


submit.addEventListener('submit', (e) => {

  e.preventDefault();
  let count = 0;

  for (let i = 0; i < 5; i++) {

    const newDiv = document.createElement('div');
    newDiv.className = "error-msg";
    let lastChild = formData[i].lastChild;
          
      if (inputs[i].value.length > 1) {
        count++;
      } 

      else if (lastChild.className == "error-msg") {
        break;
      }

      else {
        newDiv.textContent = arrayErrorsMessages[i];
        formData[i].appendChild(newDiv);
      }

      for (let i = 0; i < locationCheck.length; i++) {
        if (locationCheck[i].checked == true) {
          count++;
        }

        else {
          newDiv.textContent = arrayErrorsMessages[5];
          formData[5].appendChild(newDiv);
        }

      }
       
  }

  if (checkBox1.checked == true) {
    count++;
  }
  else {
    const newDiv = document.createElement('div');
    newDiv.className = "error-msg";
    let lastChild = formData[6].lastChild;

    if (lastChild.className != "error-msg") {
      newDiv.textContent = arrayErrorsMessages[6];
      formData[6].appendChild(newDiv);
    }

  }

  if (count == 7) {
    alert("Merci ! Votre réservation a été reçue.");
  }

  console.log(count);
});

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", (e) => {handleInputchange(e, i)})
};

checkBox1.addEventListener("change", (e) => {
  let lastChild = formData[6].lastChild;

  if (e.target.value && lastChild.className == "error-msg") {
    lastChild.remove();
  }
});


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}