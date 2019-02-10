FROM node:11

COPY . .

RUN npm install
ENTRYPOINT npm
CMD run start