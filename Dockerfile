FROM node:16-alpine 
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node

COPY package*.json ./

RUN npm config set unsafe-perm true

RUN npm install

COPY . .

CMD ["node", "dist/main"]