function clearInput(inputId) {
  document.getElementById(inputId).value = "";
}

function focusInput(inputId) {
  document.getElementById(inputId).focus();
}

flatpickr("#from", {dateFormat: "d_m_Y"});
flatpickr("#to", {dateFormat: "d_m_Y"});
