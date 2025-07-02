# Utilise une image officielle Node.js
FROM node:20-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie du package.json et install des deps
COPY package*.json ./
RUN npm install

# Copie du code
COPY src .

# Expose le port de l'app NestJS
EXPOSE 3000

# Commande de démarrage (écrasée par `docker-compose`)
CMD ["npm", "run", "start"]