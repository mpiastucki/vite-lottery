FROM node:latest

WORKDIR /usr/src/app

COPY package-lock.json ./
COPY package.json ./

COPY ./server .

COPY ./dist .

RUN npm install

EXPOSE 9000

CMD ["node", "./server/index.cjs"]