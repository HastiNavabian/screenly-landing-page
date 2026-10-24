// Demo-only sign-up form: it validates the email format and shows a message.
// Nothing is sent or stored anywhere.
const form = document.getElementById("email-form");
const input = document.getElementById("email");
const note = document.getElementById("form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!input.value.trim() || !input.checkValidity()) {
    input.setAttribute("aria-invalid", "true");
    note.textContent = "Please enter a valid email address.";
    input.focus();
    return;
  }

  input.removeAttribute("aria-invalid");
  note.textContent = "This is a demo page, so nothing was sent. Thanks for trying it!";
  form.reset();
});

input.addEventListener("input", () => {
  input.removeAttribute("aria-invalid");
});
