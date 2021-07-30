    document.querySelector("form").addEventListener("submit",evento => {
     return alert("Login efetuado com sucesso!!!")
    })



 const fields = document.querySelectorAll("[required]")
 
 function customValidation(event){
     const field = event.target;
     field.setCustomValidity("Esse campo é obrigatório!")
 }
  for ( field of fields){
      field.addEventListener("invalid", customValidation)
}