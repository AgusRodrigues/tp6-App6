# tp6-app6

En el transcurso de este tp tuvimos problemas en detalles.
La parte de crear los Dockerfiles y el docker compose fue relativamente facil, entre la clase y el prompt para chatGPT que estaba en la ppt, este paso fue sencillo.
Luego de pushearlo a un repositorio nuevo lo subimos a una carpeta aparte dentro del servidor de AWS, sin borrar lo que teniamos del tp3 por las dudas.
Los problemas empezaron al buildear todo. Primero al buildear el backend no se encontraba el package.json por problemas de directorios y como estaba escrito el Dockerfile en el COPY.
Eso fue lo que mas tardamos en solucionar ya que fue prueba y error hasta que lo pudimos encontrar.
Al solucionar eso surgio un problema de memoria que se soluciono reinciando la sesion.
Ahora el problema que estamos encontrando es en el ultimo paso buildeando el frontend.

En general aprendimos bastante de para que y que hace Docker, y como esta generado.
ChatGPT nos ayudo mucho sobre todo para entender como van los directorios de carpetas y en donde va cada archivo.

Tuvimos problemas de tiempos mas que nada por otras materias y por no saber como solucionar el buildeo del backend.
