FROM node:11

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm install
CMD npm run start