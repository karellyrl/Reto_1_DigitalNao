document.addEventListener('DOMContentLoaded', function() {
  // obteniendo el formulario
  var form = document.getElementById('contactForm');

  // se añade un evento al enviar el formulario
  form.addEventListener('submit', function(event) {
    // se selecciona el campo de correo electrónico
    var email = document.getElementById('email').value;

    // validar el correo electrónico
    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // verificar si el correo electrónico es valido
    if (!emailReg.test(email)) {
      // evitar el envio del formulario
      event.preventDefault();

      // muestra un mensaje de error
      alert('Por favor, introduce una dirección de correo electrónico válida.');
    } else {
      // evitar el comportamiento por defecto
      event.preventDefault();

      // envio del formulario
      setTimeout(function() {
        // mensaje de éxito
        var successMessage = document.getElementById('success-message');
        successMessage.classList.remove('d-none');
      }, 500);
    }
  });
});
