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
  const checkInputs = document.querySelectorAll('.check-input');

  submit.addEventListener('submit', () => {

    let count = 0;

    for (let i = 0; i < checkInputs.length; i++) {
        if (checkInputs[i].value != '') {
          count++;
        }
    }

    console.log("count = " + count);

    if (count == 6) {

      alert("Merci ! Votre réservation a été reçue.");
    }
  });
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }