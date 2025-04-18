export const htmlRestorePassword = (codigo) => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Restauración de Contraseña</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #e9f4fe; /* Fondo azul suave */
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .container {
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 15px 40px rgba(0, 123, 255, 0.1);
                padding: 40px;
                width: 100%;
                max-width: 500px;
                text-align: center;
            }

            h2 {
                font-size: 28px;
                color: #007BFF; /* Azul principal */
                margin-bottom: 20px;
            }

            .message {
                font-size: 16px;
                color: #4a90e2; /* Azul oscuro */
                margin-bottom: 25px;
                line-height: 1.6;
            }

            .codigo {
                font-size: 36px;
                font-weight: 700;
                color: #ffffff; /* Blanco para el texto */
                background-color: #007BFF; /* Fondo azul fuerte */
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 30px;
                display: inline-block;
                min-width: 220px;
                letter-spacing: 5px;
            }

            .footer {
                font-size: 14px;
                color: #4a90e2;
                margin-top: 20px;
            }

            .footer a {
                color: #007BFF;
                text-decoration: none;
                font-weight: 600;
            }

            .footer a:hover {
                text-decoration: underline;
            }

            @media (max-width: 600px) {
                .container {
                    padding: 20px;
                    width: 90%;
                }

                .codigo {
                    font-size: 30px;
                    min-width: 200px;
                }
            }
        </style>
    </head>
    <body>

    <div class="container">
        <h2>Restauración de Contraseña</h2>
        <p class="message">Hemos recibido una solicitud para restaurar tu contraseña. Para continuar con el proceso, por favor ingresa el siguiente código de verificación:</p>

        <div class="codigo">
            ${codigo}  <!-- Código de verificación dinámico -->
        </div>

        <div class="footer">
            <p>¿No recibiste el código? <a href="#">Reenviar código</a></p>
        </div>
    </div>

    </body>
    </html>
    `;
}
