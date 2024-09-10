# Utiliza la imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY ./package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Construye la aplicación de Next.js
RUN npm run build

# Expone el puerto 3000 para el contenedor
EXPOSE 3000

# Comando por defecto para iniciar la aplicación Next.js
CMD ["npm", "start"]
