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
const close = document.querySelector(".close");
const first = document.getElementById("first")
const last = document.getElementById("last")
const email = document.getElementById("email")
const textControl = document.querySelectorAll(".text-control");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal formq
close.addEventListener("click", () => {
  modalbg.style.display = "none";
})

// Validate formData
document.getElementById("validation-form").addEventListener("submit", (e) => {

  let error;
  let regexName = /^[a-zA-Z-\s]+$/;
  let regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

  // On appel tous les formulaires en zone de texte
  for (let i = 0; i < textControl.length; i++) {

    // On vérifie que les formulaires ne soit pas vide
    if (textControl[i].value == "") {
      let errorWhiteSpace = document.getElementById("errorWhiteSpace");
      error = true;
      errorWhiteSpace.innerHTML = "Veuillez renseigner tous les champs";
      errorWhiteSpace.style.color = "red";
      errorWhiteSpace.style.fontSize = "16px";
      errorWhiteSpace.style.textAlign = "center";
      errorWhiteSpace.style.marginTop = "16px";
    } else{
      errorWhiteSpace.innerHTML = "";
    }
    
    // On vérifie que les données saisie soit correct
    if (regexName.test(first.value) == false) {
      let errorFirstName = document.getElementById("errorFirstName");
      error = true;
      errorFirstName.innerHTML = "Le prénom ne doit comporter que des lettres, ou des tirets";
      errorFirstName.style.color = "red";
      errorFirstName.style.fontSize = "14px";
    } else{
      errorFirstName.innerHTML = "";
    }

    if (regexName.test(last.value) == false) {
      let errorLastName = document.getElementById("errorLastName");
      error = true;
      errorLastName.innerHTML = "Le nom ne doit comporter que des lettres, ou des tirets";
      errorLastName.style.color = "red";
      errorLastName.style.fontSize = "14px";
    } else{
      errorLastName.innerHTML = "";
    }
    
    if (regexMail.test(email.value) == false) {
      let errorMail = document.getElementById("errorMail");
      error = true;
      errorMail.innerHTML = "Le mail n'est pas valide";
      errorMail.style.color = "red";
      errorMail.style.fontSize = "14px";
    } else{
      errorMail.innerHTML = "";
    }
  }

  if (error) {
    e.preventDefault();
    return false;
  } else {
    alert("Données envoyé !")
  }
})
