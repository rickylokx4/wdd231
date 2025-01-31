<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario con Timestamp</title>
    <script>
        // Función para asignar el timestamp al campo oculto
        function agregarTimestamp() {
            var timestamp = new Date().toISOString(); // Obtenemos la fecha y hora en formato ISO
            document.getElementById('timestamp').value = timestamp; // Asignamos el valor al input oculto
        }
    </script>
</head>
<body>

    <h2>Formulario de ejemplo</h2>
    <form action="procesar_formulario.php" method="POST" onsubmit="agregarTimestamp()">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <br><br>

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>
        <br><br>

        <!-- Campo oculto para el timestamp -->
        <input type="hidden" id="timestamp" name="timestamp">

        <button type="submit">Enviar</button>
    </form>

</body>
</html>
