FROM node:16.13.0-alpine

WORKDIR /client

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
