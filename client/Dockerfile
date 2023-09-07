FROM node:18
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
RUN npm cache clean --force
EXPOSE 5173
CMD ["npm", "run", "dev"]

