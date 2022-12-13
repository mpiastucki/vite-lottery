FROM node:latest

WORKDIR /usr/src/app

COPY package-lock.json ./
COPY package.json ./

COPY ./server ./server

RUN npm install
RUN npm run build

EXPOSE 9000

CMD ["node", "./server/index.cjs"]