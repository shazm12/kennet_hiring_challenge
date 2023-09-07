# Use an official Node.js runtime as the base image
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]