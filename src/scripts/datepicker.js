function clearInput(inputId) {
  document.getElementById(inputId).value = "";
  console.log("hi")
}

function focusInput(inputId) {
  document.getElementById(inputId).focus();
  console.log("focus")
}

flatpickr("#from", {});
flatpickr("#to", {});
