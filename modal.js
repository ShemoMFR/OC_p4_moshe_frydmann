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

    if (e.target.value && lastChild.className == "error-msg") {
      lastChild.remove();
    }
  }

  submit.addEventListener('submit', (e) => {

    e.preventDefault();
    let count = 0;

    for (let i = 0; i < 5; i++) {

      const newDiv = document.createElement('div');
      newDiv.className = "error-msg";
      let lastChild = formData[i].lastChild;
            
        if (inputs[i].value) {
          count++;
        } 

        else if (newDiv.value) {
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

    if (count == 5) {
      alert("Merci ! Votre réservation a été reçue.");
    }

    console.log(count);
  });

  for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", (e) => {handleInputchange(e, i)})
  };

  
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }