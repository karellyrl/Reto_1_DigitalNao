// validacion.js

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el formulario
  var form = document.getElementById('contactForm');
  
  // Añade un evento al enviar el formulario
  form.addEventListener('submit', function(event) {
    // Selecciona el campo de correo electrónico
    var email = document.getElementById('email').value;
    
    // Expresión regular para validar el correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verifica si el correo electrónico es válido
    if (!emailRegex.test(email)) {
      // Evita el envío del formulario
      event.preventDefault();
      
      // Muestra un mensaje de error
      alert('Por favor, introduce una dirección de correo electrónico válida.');
    }
  });
});

