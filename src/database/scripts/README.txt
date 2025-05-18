Pasos para crear la base de datos:

Descripcion:
- Estos pasos eliminar y creara la base de datos de forma automatico con valores por default si esque ya habia creado anteriormente

Paso 1:
- Entrar a la terminal del pgAdmin (psql)

Paso 3:
- Entrar dentro del proyecto mediante la terminal o powershell
- Ejecutar el comando "pwd" 
- Copiar la ruta al ejecutar el comando

Paso 4:
- En la terminal de pgAdmin (psql) ejecutar los siguientes comandos

> \cd {La ruta copiada}/src/database/scripts
> \i init.sql

#La base de datos de debio crear o reemplazando si hubo una anterior con datos vacios