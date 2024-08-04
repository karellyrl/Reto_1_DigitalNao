document.addEventListener('DOMContentLoaded', function() {
  // obteniendo el formulario
  var form = document.getElementById('contactForm');

  // se añade un evento al enviar el formulario
  form.addEventListener('submit', function(event) {
    // evitar el comportamiento por defecto
    event.preventDefault();
    event.stopPropagation();

    // verificar si el formulario es válido
    if (form.checkValidity() === true) {
      // ocultar el mensaje de error si está visible
      var errorMessage = document.getElementById('error-message');
      errorMessage.classList.add('d-none');

      // mostrar el mensaje de éxito
      var successMessage = document.getElementById('success-message');
      successMessage.classList.remove('d-none');
    } else {
      // mostrar los errores de validación de Bootstrap
      form.classList.add('was-validated');

      // ocultar el mensaje de éxito si está visible
      var successMessage = document.getElementById('success-message');
      successMessage.classList.add('d-none');

      // mostrar el mensaje de error
      var errorMessage = document.getElementById('error-message');
      errorMessage.classList.remove('d-none');
    }
  }, false);
});
