FROM node:12.8.0-alpine

EXPOSE 9000

WORKDIR /api

COPY ./api .

ENV PATH ./api/node_modules/.bin:$PATH

COPY ./api/package.json ./package.json

RUN npm install

RUN npx knex migrate:latest

CMD ["npm", "run", "server"]