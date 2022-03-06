FROM node:16-alpine 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm i -g typeorm ts-node

RUN npm install --only=development

COPY . .

RUN npm run start:dev

CMD ["node", "dist/main"]