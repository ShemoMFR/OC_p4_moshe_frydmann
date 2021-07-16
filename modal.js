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
const content = document.getElementById("content");
const formData = document.querySelectorAll(".formData");
const submit = document.getElementById("form-container");
const inputs = document.querySelectorAll(".text-control");
const errorsMessages = document.querySelectorAll(".error-msg")
const locationCheck = document.querySelectorAll(".location-check");
const checkBox1 = document.getElementById('checkbox1');
const close = document.getElementById("closeModal");
const submitBtn = document.getElementById('submit-btn');
const arrayErrorsMessages = [
  "Vous devez entrer au moins 2 caractères", 
  "Vous devez entrer au moins 2 caractères",
  "Veuillez entrer une adresse mail valide",
  "Veuillez entrer votre date de naissance",
  "Veuillez entrer un chiffre",
  "Veuillez Indiquer la ville",
  "Veuillez accepter les conditions générales"
];

function deleteInputs() {

  for (let i = 0; i < formData.length; i++) {
    formData[i].style.display = "none";
  }

  submitBtn.textContent = "Fermer"
  submitBtn.style.marginTop = "250px";
  const newDiv = document.createElement('div');
  newDiv.className = "msgSubmit";
  newDiv.textContent = "Merci d'avoir envoyé vos informations d'enregistrement";
  content.style.height = "400px";
  content.appendChild(newDiv);

  submitBtn.addEventListener("click", closeModal);


};


function handleInputchange(e, i) {

  let lastChild = formData[i].lastChild;

  if (e.target.value.length > 1 && lastChild.className == "error-msg") {
    lastChild.remove();
  }
  else if(i == 4 && e.target.value && lastChild.className == "error-msg") {
    lastChild.remove();
  }
};

submit.addEventListener('submit', (e) => {

  let count = 0;

  for (let i = 0; i < inputs.length; i++) {

    const newDiv = document.createElement('div');
    newDiv.className = "error-msg";
    let lastChild = formData[i].lastChild;
          
      if (inputs[i].value.length > 1) {
        count++;
      } 

      else if (inputs[i].id == 'quantity' && inputs[i].value) {
        count++;
        break;
      }

      else if (lastChild.className == "error-msg") {
        break;
      }

      else {
        newDiv.textContent = arrayErrorsMessages[i];
        formData[i].appendChild(newDiv);
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

  if (count == inputs.length + 1) {
    //alert("Merci ! Votre réservation a été reçue.");
    e.preventDefault();

    deleteInputs();
  }

  else {
    e.preventDefault();
  }

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

function closeModal() {
  modalbg.style.display = "none";
}

close.addEventListener('click', closeModal);

