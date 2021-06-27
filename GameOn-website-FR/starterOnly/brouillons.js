// Validate form test 1
document.getElementById("validation-form").addEventListener("submit", (e) => {

    let errorWhiteSpace;
    let errorMail;
    let textControl = document.querySelectorAll("text-control");

    console.log(textControl);

    for (let i = 0; i < textControl.length; i++) {

        if (textControl[i].value == "") {
        errorWhiteSpace = true;
        console.log("test1");
        } else if (!first.value || !last.value == /^[a-zA-Z-\s]+$/) {
        errorNameType = true;
        console.log("test2");
        } else if (!email.value == /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/) {
        errorMail = true;
        console.log("test3");
        }
    }

    if (errorWhiteSpace) {
      e.preventDefault();
      document.getElementById("errorWhiteSpace").innerHTML = "Veuillez renseigner tous les champs";
    }else if (errorNameType) {
      e.preventDefault();
      document.getElementById("errorNameType").innerHTML = "Veuillez renseigner un nom, ou un prénom correct";
      return false;
    }else if (errorMail) {
      e.preventDefault();
      document.getElementById("errorMail").innerHTML = "Veuillez une adresse email valide";
      return false;
    }else{
      alert("formulaire envoyé !");
    }
})

// Validate form test 2
document.getElementById("validation-form").addEventListener("submit", (e) => {

    let errorWhiteSpace;
    let errorMail;
    let regexName = /^[a-zA-Z-\s]+$/;
    let regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  
    for (let i = 0; i < textControl.length; i++) {
  
      if (textControl[i].value == "") {
        document.getElementById("errorWhiteSpace").innerHTML = "Veuillez renseigner tous les champs";
        e.preventDefault();
      }else if (regexName.test(first.value) == false) {
        document.getElementById("errorNameType").innerHTML = "Le prénom ne doit comporter que des lettres, ou des tirets";
        e.preventDefault();
      }else if (regexName.test(last.value) == false) {
        document.getElementById("errorNameType").innerHTML = "Le nom ne doit comporter que des lettres, ou des tirets";
        e.preventDefault();
      }else if (regexMail.test(email.value) == false) {
        document.getElementById("errorMail").innerHTML = "L'email n'est pas valide";
        e.preventDefault();
      }
    }
  })

