document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && fecha && hora && mensaje) {
        // Guardar la reserva en una base de datos simulada (local storage)
        const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        const nuevaReserva = { nombre, email, fecha, hora, mensaje };
        reservas.push(nuevaReserva);
        localStorage.setItem('reservas', JSON.stringify(reservas));

        document.getElementById('mensaje-confirmacion').textContent = '¡Gracias por tu reserva, ' + nombre + '! Nos pondremos en contacto contigo pronto.';
        document.getElementById('form-contacto').reset();
    } else {
        document.getElementById('mensaje-confirmacion').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('mensaje-confirmacion').style.color = 'red';
    }
});
