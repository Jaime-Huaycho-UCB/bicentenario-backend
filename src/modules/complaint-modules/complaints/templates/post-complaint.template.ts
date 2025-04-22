export const getPostComplaintTemplate = (post, complaint) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Notificación de Denuncia</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            display: flex;
            justify-content: center;
        }
        table {
            max-width: 600px;
            width: 100%;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-collapse: collapse;
        }
        h2 {
            color: #d9534f;
            margin: 0;
            text-align: center;
        }
        td {
            padding: 15px;
        }
        .report-container {
            background-color: #f8f9fa;
            padding: 15px;
            border-left: 5px solid #d9534f;
            margin: 10px 0;
        }
        .button {
            background-color: #d9534f;
            color: #ffffff;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
            text-align: center;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777;
            padding-top: 20px;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <td>
                <h2>⚠️ Tu contenido ha sido denunciado</h2>
            </td>
        </tr>
        <tr>
            <td>
                <p>Estimado <strong>${post.user.name}</strong>,</p>
                <p>Se ha recibido una denuncia sobre tu publicación:</p>
                <div class="report-container">
                    <p><strong>Título:</strong> ${post.name}</p>
                    <p><strong>Motivo de la denuncia:</strong> ${complaint.title}</p>
                    <p><strong>Detalles:</strong> ${complaint.report}</p>
                </div>
                <p>Esta denuncia ha sido enviada a revisión y se tomará una decisión sobre el caso.</p>
            </td>
        </tr>
        <tr>
            <td class="footer">
                <p>Si tienes alguna duda, por favor contáctanos.</p>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
}