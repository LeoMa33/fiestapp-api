# Utilise une image officielle Node.js
FROM node:20-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie package.json et lock
COPY package*.json ./

# Installation des dépendances
RUN npm install

# :white_check_mark: Copie tout le reste (src, tsconfig.json, etc.)
COPY . .

# Expose le port NestJS
EXPOSE 3000

# Commande par défaut
CMD ["npm", "run", "start"]