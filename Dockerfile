FROM node:11

COPY . .

RUN npm install
CMD npm run start