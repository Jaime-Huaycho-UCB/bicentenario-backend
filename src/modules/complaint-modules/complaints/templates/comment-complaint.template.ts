export const getComplaintCommentTemplate = (username: string, commentDate: string, commentContent: string) => {
    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Comentario en Revisión</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9fafb;
            margin: 0;
            padding: 40px 20px;
            color: #374151;
        }

        .container {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 30px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .header h1 {
            color: #2563eb;
            font-size: 28px;
            margin: 0;
        }

        .info-block {
            margin-bottom: 20px;
        }

        .info-block strong {
            color: #2563eb;
            font-size: 16px;
        }

        .info-block p {
            margin: 5px 0 0 0;
            font-size: 16px;
        }

        .comment-content {
            background-color: #e0f2fe;
            border-left: 5px solid #2563eb;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .review-notice {
            background-color: #ecfdf5;
            border-left: 5px solid #16a34a;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }

        .review-notice p {
            font-size: 16px;
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Comentario Enviado a Revisión</h1>
        </div>

        <div class="info-block">
            <strong>Usuario:</strong>
            <p>${username}</p>
        </div>

        <div class="info-block">
            <strong>Fecha:</strong>
            <p>${commentDate}</p>
        </div>

        <div class="comment-content">
            <strong>Contenido del Comentario:</strong>
            <p>${commentContent}</p>
        </div>

        <div class="review-notice">
            <p>Tu comentario ha sido enviado a nuestro equipo para revisión.<br> Te notificaremos si hay alguna acción necesaria.</p>
        </div>
    </div>
</body>
</html>
    `;
};
