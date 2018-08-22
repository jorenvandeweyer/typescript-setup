FROM node:10-stretch

WORKDIR /usr/src/app

RUN npm install -g typescript

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]