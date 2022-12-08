FROM node:current-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

COPY package-lock.json ./
COPY package.json ./
COPY ./src ./src
COPY ./public ./public
COPY index.html .
COPY vite.config.js .
COPY ./server ./server

RUN npm install

RUN npm run build

#2nd stage
FROM node:current-alpine

WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE /usr/src/app/dist ./dist
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /usr/src/app/server ./server

EXPOSE 9000

CMD ["node", "./server/index.cjs"]