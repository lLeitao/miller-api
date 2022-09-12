FROM node:16.17.0

WORKDIR /miller-api

COPY package.json /miller-api/package.json
COPY package-lock.json /miller-api/package-lock.json

RUN npm install
RUN npm i nodemon -g

COPY . /miller-api

EXPOSE 9000

ENV NODE_ENV=local

CMD ["npm", "run", "start"]