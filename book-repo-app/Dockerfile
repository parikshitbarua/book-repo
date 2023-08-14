FROM node:14

WORKDIR /book-repo-app
COPY package.json .
RUN npm install
COPY . .
CMD npm run start:dev