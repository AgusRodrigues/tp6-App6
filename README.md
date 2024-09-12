# tp6-app6


## Organización del repositorio

El repositorio está organizado de la siguiente manera:

```bash
backend/
   ├── app completa
   ├── db.sqlite
   ├── Dockerfile
   └── package.json

frontend/
   ├── app completa
   ├── Dockerfile
   └── package.json

images/
docker-compose.yaml
README.md

```


## Creación de imágenes y `docker-compose.yaml`

Para armar las imágenes y el archivo `docker-compose.yaml`, utilizamos los siguientes recursos:

- Consultamos el material de clase y el prompt para ChatGPT proporcionado en la presentación.
- Realizamos búsquedas en Google para resolver dudas específicas.
- Adaptamos y escribimos desde cero algunas partes según nuestras necesidades.

## Persistencia del servicio tras reinicio del servidor

Configuramos la política de reinicio en el `docker-compose.yaml` utilizando `restart: always`. Esto asegura que los contenedores se reinicien automáticamente si el servidor se reinicia, manteniendo el servicio en funcionamiento.

## Problemas interesantes encontrados

- **Backend:** Tuvimos problemas al construir la imagen porque no se encontraba el `package.json`. Esto se debía a errores en las rutas especificadas en el `Dockerfile` durante el paso de `COPY`. Después de varias pruebas, logramos corregir las rutas y solucionar el problema. También tuvimos problemas porque no se habían subido archivos necesarios para el backend y, si bien se buildeaban bien las imágenes, no corria a la hora de entrar al link. Nunca terminaba de buildear.
*Update: Pudo resolverse el problema principal al actualizar correctamente el build del package.json del back. Estaba intentando correr "&&" (literalmente nos quedó eso flotando en el medio) por lo que nunca llegaba a lanzar correctamente;* el nuevo script del **package.json** utilizado es el siguiente:
```json
{
   "pura": magia,

   "scripts": {
   "dev": "ts-node index.ts",
   "start": "ts-node index.ts",
   "build": "rimraf ./build && tsc"
   },
   "mas": magia
}
```

- **Memoria:** Surgió un problema de memoria que se resolvió reiniciando la sesión.
- **Frontend:** Actualmente enfrentamos un problema en el último paso al construir el frontend y estamos trabajando para resolverlo; 
- **ChatGPT:** Nos ayudó significativamente a entender la estructura de directorios y la ubicación adecuada de cada archivo.
- **Tiempo:** Tuvimos limitaciones de tiempo debido a otras materias y a la dificultad para solucionar el build del backend.
- **Grupos de Seguridad:** Fue necesario agregar grupos de seguridad para permitir el tránsito por el puerto 3000 y 5000 (los cuales usa nuestro sitio) y así poder ingresar mediante *Url:Port* . Para ello agregamos un nuevo grupo de seguridad al launch wizard que teníamos previamente configurado en nuestra instancia de AWS.
  
## Aprendizajes

Aprendimos bastante sobre el propósito y funcionamiento de Docker, y cómo crear y gestionar contenedores de manera efectiva.

