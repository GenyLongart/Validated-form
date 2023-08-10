/* eslint-disable */
import "bootstrap";
import "./style.css";
const alertMessage = document.querySelector(".alert");
alertMessage.style.display = "none";
window.onload = function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // arr para guardar campos con errores
    const emptyInputs = [];

    const inp = form.querySelectorAll("input, select");
    inp.forEach(field => {
      if (field.value === "") {
        emptyInputs.push(field);
        field.classList.add("alert", "alert-danger");
      } else {
        field.classList.remove("alert", "alert-danger");
      }
    });

    // alerta
    if (emptyInputs.length > 0) {
      alertMessage.style.display = "block";
      alertMessage.textContent =
        "Por favor asegúrese de rellenar o corregir los siguientes campos resaltados ";
    } else {
      form.submit();
    }
  });
};
