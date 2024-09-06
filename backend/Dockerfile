# Utiliza la imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY backend/package.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto 5000
EXPOSE 5000

# Comando por defecto para iniciar el servidor de Express
CMD ["npm", "start"]
